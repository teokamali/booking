import { Loader2, Table } from "../../../components";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";

import "./index.scss";
import { useGetProperties, useDeleteProperty } from "hooks/useProperty";
import { Link } from "react-router-dom";
const Property = () => {
	const { data } = useGetProperties();
	console.log(data);
	const { mutate: deletePropertyMutate } = useDeleteProperty();
	const deletePropertyHandler = (id) => {
		deletePropertyMutate({ id });
	};
	const property = data?.data?.data.map((property) => property);
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
				{data ? (
					data.data.data.length === 0 ? (
						<h2>Empty</h2>
					) : (
						<div>
							<Table
								tableHead={["id", "Name", "Location", "Action"]}
								onDelete={(id) => deletePropertyHandler(id)}
								data={property}
							/>
						</div>
					)
				) : (
					<Loader2 />
				)}
			</div>
		</DashboardLayout>
	);
};

export default Property;
