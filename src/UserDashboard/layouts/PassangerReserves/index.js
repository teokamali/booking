import React, { useState } from "react";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import { useGetUserReservations } from "hooks/useInvoices";
import { useAcceptReservation, useRejectReservation } from "hooks/useReservaion";
import { PassangerTable, Loader2 } from "components";
function PassangerReserves() {
	const [isLoading, setIsLoading] = useState(false);
	const { data } = useGetUserReservations();
	console.log(data);

	return (
		<DashboardLayout>
			<DashboardNavbar />

			{data ? (
				<PassangerTable
					data={data?.data}
					tableHead={[
						"id",
						"Requested at",
						"Property",
						"Unit Name",
						"Price",
						"Paid at",
						"status",
					]}
				/>
			) : (
				<Loader2 />
			)}
		</DashboardLayout>
	);
}

export default PassangerReserves;
