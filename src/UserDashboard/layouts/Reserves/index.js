import React from "react";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import { useGetHotelInvoices } from "hooks/useInvoices";
import { Table2 } from "components";
function Reserves() {
	const { data } = useGetHotelInvoices();
	return (
		<DashboardLayout>
			<DashboardNavbar />
			{data ? (
				<Table2
					data={data?.data}
					tableHead={[
						"id",
						"Requested at",
						"Passenger",
						"Property",
						"Date",
						"Passengers Count",
						"status",
						"Actions",
					]}
				/>
			) : null}
		</DashboardLayout>
	);
}

export default Reserves;
