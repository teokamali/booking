import React from "react";
import { Link } from "react-router-dom";
import { Loader, Table } from "components";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import { useGetUserUnits } from "hooks/useUnits";
const Units = () => {
	const units = [
		{ id: 1, name: "3 room", beds: 3, bathroom: 1, propertyName: "mamad hotels" },
		{ id: 2, name: "2 room", beds: 2, bathroom: 1, propertyName: "mamad hotels" },
		{ id: 3, name: "5 room", beds: 5, bathroom: 1, propertyName: "mamad hotels" },
		{ id: 4, name: "1 room", beds: 1, bathroom: 1, propertyName: "mamad hotels" },
	];
	const { data, isLoading } = useGetUserUnits();
	console.log({ data, isLoading });
	return (
		<DashboardLayout>
			<DashboardNavbar />
			<div className='unitsPage'>
				<div className='PropertyPage__header'>
					<h2>List of Units</h2>
					<Link to='add' className='btn-main'>
						Add
					</Link>
				</div>
				<div className='container'>
					{units ? (
						units.length === 0 ? (
							<h2>Empty</h2>
						) : (
							<div>
								<Table
									tableHead={["Id", "Name", "Beds", "Bathrooms", "Actions"]}
									// onEdit={(id) => editPropertyHandler(id)}
									// onDelete={(id) => deletePropertyHandler(id)}
									data={units}
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

export default Units;
