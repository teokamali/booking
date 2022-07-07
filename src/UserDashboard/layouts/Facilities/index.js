import { Button, Toastify } from "components";
import {
	useGetFacilityCategories,
	useGetFacilityCategoriesItem,
	useGetProperties,
	usePostFacilities,
} from "hooks/useProperty";
import _, { initial } from "lodash";
import { useEffect, useState } from "react";
import Select from "react-select";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import { capitalizeFirstLetter } from "utils/functions";
import "./index.scss";

function Facilities() {
	const [selectedFacilities, setSelectedFacilities] = useState([]);
	const [selectedCategoryTitle, setSelectedCategoryTitle] = useState();
	const [selectedSubCategories, setSelectedSubCategories] = useState([]);
	const [propertyId, setPropertyId] = useState(null);

	// get Categories
	const { data: properties, isLoading: propertyLoading } = useGetProperties();
	const { data: categories, isLoading: categoriesLoading } = useGetFacilityCategories();
	const { mutate: postFacilitiesMutate, isLoading: isPostFacilitiesLoading } =
		usePostFacilities();
	let propertyList = [];
	if (!propertyLoading) {
		properties.data.data.map((item) =>
			propertyList.push({
				label: item.name,
				value: item.id,
			})
		);
	}

	let categoryList = [];
	if (!categoriesLoading) {
		categories.data.data.map((item) => {
			//TODD: set
			return categoryList.push({
				label: capitalizeFirstLetter(item.name),
				value: item.id,
			});
		});
	}

	// get Category Item
	const [selectedCategory, setSelectedCategory] = useState(null);
	const { data: categoryItem, isLoading: isCategoryItem } = useGetFacilityCategoriesItem({
		id: selectedCategory,
		options: {
			enabled: !!selectedCategory,
		},
	});

	const handleSetCategory = (e) => {
		const facilityId = e.value;
		setSelectedCategoryTitle(e.label);
		setSelectedCategory(facilityId);
	};

	const handleSetSubCategory = (val) => {
		if (val.length > selectedSubCategories.length) {
			setSelectedFacilities((prev) => {
				if (!_.isEmpty(_.xor(selectedSubCategories, val))) setSelectedSubCategories(val);
				if (prev.map((e) => e.cat).indexOf(selectedCategoryTitle) === -1) {
					return [...prev, { cat: selectedCategoryTitle, sub: [_.last(val)] }];
				} else {
					let newFacilities = [...prev];
					const requiedIndex = prev.map((e) => e.cat).indexOf(selectedCategoryTitle);
					newFacilities[requiedIndex] = {
						cat: selectedCategoryTitle,
						sub: [...newFacilities[requiedIndex].sub, _.last(val)],
					};
					setSelectedFacilities(newFacilities);
				}
			});
		} else {
			let newFacilites = [...selectedFacilities];
			newFacilites.forEach(function (o) {
				o.sub = o.sub.filter((s) => _.includes(val, s));
			});
			setSelectedFacilities(newFacilites);
			setSelectedSubCategories(val);
		}
		setSelectedFacilities((prev) => {
			return prev.filter((p) => p.sub.length > 0);
		});
	};

	const onFormSubmit = (e) => {
		e.preventDefault();
		let mapData;
		if (!propertyId) {
			Toastify("error", "Please Select A Property");
			return null;
		}
		if (!selectedFacilities.length) {
			Toastify("error", "Please Select At Least One Facility ");
			return null;
		}
		mapData = selectedFacilities.reduce((acc, curr) => {
			if (!acc.propertyId) {
				acc.property_id = propertyId;
			}

			return {
				...acc,
				facilities: [
					...(acc.facilities || []),
					...curr.sub.map((item) => ({
						facility_id: item.value,
						is_additional_charge: false,
					})),
				],
			};
		}, []);
		postFacilitiesMutate(mapData);
		// console.log(mapData);
	};
	return (
		<DashboardLayout>
			<DashboardNavbar />
			<form onSubmit={onFormSubmit}>
				<div className='mb-3'>
					<label htmlFor=''>Select Your Property</label>
					<Select
						className='basic-single'
						classNamePrefix='select'
						options={propertyList}
						name='property_id'
						onChange={(e) => setPropertyId(e.value)}
					/>
				</div>
				<div className='row'>
					<div className='col-12 col-md-6'>
						<label htmlFor=''>Categories</label>
						<Select options={categoryList} onChange={handleSetCategory} isSearchable />
					</div>
					<div className='col-12 col-md-6'>
						<label htmlFor=''>SubCategories</label>
						<Select
							options={categoryItem}
							className='basic-single'
							classNamePrefix='select'
							name='subitems'
							value={selectedSubCategories}
							isMulti
							onChange={handleSetSubCategory}
							isSearchable
							isLoading={isCategoryItem}
							isDisabled={!!!categoryItem}
						/>
					</div>
				</div>

				<div className='container'>
					<div className='categories-wrapper'>
						{selectedFacilities.length >= 1 ? (
							selectedFacilities.map((fac, i) => (
								<div className='category' key={i}>
									<h5>{fac.cat}</h5>
									<ul>
										{fac.sub.map((item, index) => (
											<li key={index}>
												<span>{item.label}</span>
											</li>
										))}
									</ul>
								</div>
							))
						) : (
							<h4>Empty</h4>
						)}
					</div>
				</div>
				<Button
					className='mt-3 '
					type='submit'
					disabled={isPostFacilitiesLoading}
					isLoading={isPostFacilitiesLoading}
				>
					Submit
				</Button>
			</form>
		</DashboardLayout>
	);
}

export default Facilities;
