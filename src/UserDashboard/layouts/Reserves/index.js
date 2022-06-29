import React, { useEffect, useState } from "react";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import { useGetHotelInvoices } from "hooks/useInvoices";
import { useAcceptReservation, useRejectReservation } from "hooks/useReservaion";
import { Table2, Loader2 } from "components";
function Reserves() {
	const [isLoading, setIsLoading] = useState(false);
	const { data } = useGetHotelInvoices();
	const { mutate: acceptReserveMutate, isLoading: accpetIsLoading } = useAcceptReservation();
	const { mutate: rejectReserveMutate, isLoading: rejectIsloading } = useRejectReservation();
	const AcceptReserveHandler = (id) => {
		acceptReserveMutate(id);
	};
	const RejectReserveHandler = (id) => {
		rejectReserveMutate(id);
	};

	return (
		<DashboardLayout>
			<DashboardNavbar />

			{data ? (
				<Table2
					onAccept={(id) => AcceptReserveHandler(id)}
					onReject={(id) => RejectReserveHandler(id)}
					data={data?.data}
					acceptIsLoading={accpetIsLoading}
					rejectIsloading={rejectIsloading}
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
			) : (
				<Loader2 />
			)}
		</DashboardLayout>
	);
}

export default Reserves;
