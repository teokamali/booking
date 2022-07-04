import React, { useState } from "react";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import { capitalizeFirstLetter } from "utils/functions";
import { Button } from "components";
import Select from "react-select";
import "./index.scss";
import { useGetFacilityCategories, useGetFacilityCategoriesItem } from "../../../hooks/useProperty";

function Facilities() {
	const data = [
		{
			label: "1",
			value: 1,
		},
		{
			label: "2",
			value: 2,
		},
		{
			label: "3",
			value: 3,
		},
		{
			label: "4",
			value: 4,
		},
		{
			label: "5",
			value: 5,
		},
		{
			label: "6",
			value: 6,
		},
	];
	// get Categories
	const { data: categories, isLoading: categoriesLoading } = useGetFacilityCategories();
	let categoryList = [];
	if (!categoriesLoading) {
		categories.data.data.map((item) =>
			categoryList.push({
				label: capitalizeFirstLetter(item.name),
				value: item.id,
			})
		);
	}
	// get Category Item
	const [selectedCategory, setSelectedCategory] = useState(null);
	const { data: categoryItem, isLoading: isCategoryItem } = useGetFacilityCategoriesItem({
		id: selectedCategory,
		options: {
			enabled: !!selectedCategory,
		},
	});
	return (
		<DashboardLayout>
			<DashboardNavbar />
			<div className='row'>
				<div className='col-12 col-md-6'>
					<label htmlFor=''>Categories</label>
					<Select
						options={categoryList}
						onChange={(e) => {
							setSelectedCategory(e.value);
						}}
						isSearchable
					/>
				</div>
				<div className='col-12 col-md-6'>
					<label htmlFor=''>Sub Categories</label>
					<Select
						options={categoryItem}
						className='basic-single'
						classNamePrefix='select'
						name='city_id'
						onChange={(e) => console.log(e)}
						isSearchable
						isLoading={isCategoryItem}
						isDisabled={!!!categoryItem}
					/>
				</div>
			</div>
			<div className='container'>
				<div className='categories-wrapper'>
					<div className='category'>
						<h5>Category</h5>
						<ul>
							<li>
								Item 1 <span>X</span>
							</li>
							<li>
								Item 2 <span>X</span>
							</li>
							<li>
								Item 3 <span>X</span>
							</li>
							<li>
								Item 4 <span>X</span>
							</li>
						</ul>
					</div>
					<div className='category'>
						<h5>Category</h5>
						<ul>
							<li>
								Item 1 <span>X</span>
							</li>
							<li>
								Item 2 <span>X</span>
							</li>
							<li>
								Item 3 <span>X</span>
							</li>
							<li>
								Item 4 <span>X</span>
							</li>
						</ul>
					</div>
					<div className='category'>
						<h5>Category</h5>
						<ul>
							<li>
								Item 1 <span>X</span>
							</li>
							<li>
								Item 2 <span>X</span>
							</li>
							<li>
								Item 3 <span>X</span>
							</li>
							<li>
								Item 4 <span>X</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<Button className='mt-3 '>Submit</Button>
		</DashboardLayout>
	);
}

export default Facilities;
