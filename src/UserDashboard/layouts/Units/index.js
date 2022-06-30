import React from "react";
import { Loader2, Table } from "components";
import { Link } from "react-router-dom";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import { useGetUserUnits, useDeleteUnit } from "hooks/useUnits";

const Units = () => {
	const { data, isLoading } = useGetUserUnits();
	const { mutate: deleteUnitMutate } = useDeleteUnit();
	const deletePropertyHandler = (id) => {
		deleteUnitMutate({ id });
	};
	console.log(data?.data);
	const onEditUnit = (id) => {
		// console.log({ id });
	};
	return (
		<DashboardLayout>
			<DashboardNavbar />
			<div className='unitsPage'>
				<div className='PropertyPage__header'>
					<h2>List of Units</h2>
					<Link to='add-unit' className='btn-main'>
						Add
					</Link>
				</div>
				{data ? (
					data.data.length === 0 ? (
						<h2>Empty</h2>
					) : (
						<div>
							{data?.data.map((hotel) => (
								<Table
									key={hotel.id}
									title={hotel.name}
									tableHead={["Id", "Name", "Adults", "Bedrooms", "Actions"]}
									// onEdit={onEditUnit}
									onDelete={(id) => deletePropertyHandler(id)}
									data={hotel.units}
								/>
							))}
						</div>
					)
				) : (
					<div className='w-100'>
						<Loader2 />
					</div>
				)}
			</div>
		</DashboardLayout>
	);
};

export default Units;
