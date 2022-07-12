import React, { useEffect, useState } from "react";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import { useGetHotelInvoices } from "hooks/useInvoices";
import { useAcceptReservation, useRejectReservation } from "hooks/useReservaion";
import { OwnerTable, Loader2, PassangerTable } from "components";
import { useGetUserReservations } from "hooks/useInvoices";
import Cookies from "js-cookie";
import { constans } from "values";

function Reserves() {
	const { data } = useGetHotelInvoices();
	const { mutate: acceptReserveMutate, isLoading: accpetIsLoading } = useAcceptReservation();
	const { mutate: rejectReserveMutate, isLoading: rejectIsloading } = useRejectReservation();
	const AcceptReserveHandler = (id) => {
		acceptReserveMutate(id);
	};
	const RejectReserveHandler = (id) => {
		rejectReserveMutate(id);
	};
	const { data: passangerData } = useGetUserReservations();
	// console.log({ 1: });
	if (JSON.parse(Cookies.get(constans.INFO)).types[0].pivot.user_type_id === 1) {
		return (
			<DashboardLayout>
				<DashboardNavbar />

				{passangerData ? (
					<PassangerTable
						data={passangerData?.data}
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
	if (JSON.parse(Cookies.get(constans.INFO)).types[0].pivot.user_type_id === 2) {
		return (
			<DashboardLayout>
				<DashboardNavbar />

				{data ? (
					<OwnerTable
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
}

export default Reserves;
