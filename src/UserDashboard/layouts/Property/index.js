import { Loader, Table } from "../../../components";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";

import "./index.scss";
import { useGetProperties } from "hooks/useProperty";
import { Link } from "react-router-dom";
const Property = () => {
	const properties = useGetProperties();
	const editPropertyHandler = (id) => {
		// console.log(id);
	};
	const deletePropertyHandler = (id) => {
		// console.log(id);
	};
	const property = properties?.data?.data.map((property) => property);
	return (
		<DashboardLayout>
			<DashboardNavbar />
			<div className='PropertyPage'>
				<div className='PropertyPage__header'>
					<h2>List of Properties</h2>
					<Link to='add' className='btn-main'>
						Add
					</Link>
				</div>
				<div className='container'>
					{properties ? (
						properties.data.data.length === 0 ? (
							<h2>Empty</h2>
						) : (
							<div>
								<Table
									tableHead={["id", "Name", "Location", "Action"]}
									onEdit={(id) => editPropertyHandler(id)}
									onDelete={(id) => deletePropertyHandler(id)}
									data={property}
								/>
							</div>
						)
					) : (
						<div className='w-100'>
							<Loader />
						</div>
					)}
				</div>
			</div>
		</DashboardLayout>
	);
};

export default Property;
