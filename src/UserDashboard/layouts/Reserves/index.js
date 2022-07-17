import React, { useEffect, useState } from "react";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import { useGetHotelInvoices } from "hooks/useInvoices";
import { useAcceptReservation, useRejectReservation } from "hooks/useReservaion";
import { Pagination, Loader2, ReusableTable, FilterTable } from "components";
import { useGetProperties } from "hooks/useProperty";
import { useGetUserReservations } from "hooks/useInvoices";
import Select from "react-select";
import Cookies from "js-cookie";
import { constans } from "values";

function Reserves() {
	// pages for pagination
	const [page, setPage] = useState(1);
	// get hotels data with pagonation
	const {
		data: hotelData,
		refetch: refetchHotelReserves,
		isFetching: isHotelReservesFetching,
		isLoading,
	} = useGetHotelInvoices({
		pageParam: page,
	});
	// get Passanger Data
	const { data: passangerData } = useGetUserReservations();
	// refetch data on pagination change
	useEffect(() => {
		refetchHotelReserves();
	}, [page]);
	// Accept and rejection requests for owner
	const { mutate: acceptReserveMutate, isLoading: accpetIsLoading } = useAcceptReservation();
	const { mutate: rejectReserveMutate, isLoading: rejectIsloading } = useRejectReservation();
	// Accept and rejection functions for owner
	const AcceptReserveHandler = (id) => {
		acceptReserveMutate(id);
	};
	const RejectReserveHandler = (id) => {
		rejectReserveMutate(id);
	};
	// Status
	const status = [
		{
			label: "Waiting",
			value: "waiting",
		},
		{
			label: "Accepted",
			value: "accepted",
		},
		{
			label: "Rejected",
			value: "rejected",
		},
	];
	// payment status
	const paymentStatus = [
		{
			label: "Paid",
			value: "paid",
		},
		{
			label: "Not Paid",
			value: "not_paid",
		},
	];
	// user Properties
	const { data: properties, isLoading: propertyLoading } = useGetProperties();
	let propertyList = [];
	if (!propertyLoading) {
		properties.data.data.map((item) =>
			propertyList.push({
				label: item.name,
				value: item.id,
			})
		);
	}
	// passanger Table
	if (JSON.parse(Cookies.get(constans.INFO)).types[0].pivot.user_type_id === 1) {
		return (
			<DashboardLayout>
				<DashboardNavbar />
				{passangerData ? (
					<>
						<ReusableTable
							tableHead={[
								"id",
								"Requested at",
								"Property",
								"Unit Name",
								"Price",
								"Paid at",
								"status",
							]}
						>
							{passangerData?.data.map((item, i) => {
								return (
									<tr className='table_body_row' key={i}>
										<td className=' table_body_d'>
											<span>{i + 1}</span>
										</td>
										<td className=' table_body_d'>
											<span>{item.issued_at}</span>
										</td>
										<td className=' table_body_d'>
											<span>
												{item.reservable.model_reserved.parent_model.name}
											</span>
										</td>
										<td className='table_body_d'>
											<span>{item.reservable.model_reserved.name}</span>
										</td>
										<td className=' table_body_d'>
											<span>{item.price.toLocaleString()}</span>
										</td>
										<td className=' table_body_d'>
											<span>
												{item.paid_at === null ? "Not Paid" : item.paid_at}
											</span>
										</td>
										<td className='table_body_d'>
											<span>{item.reservable.status}</span>
										</td>
									</tr>
								);
							})}
						</ReusableTable>
					</>
				) : (
					<Loader2 />
				)}
			</DashboardLayout>
		);
	}
	// owner Table
	if (JSON.parse(Cookies.get(constans.INFO)).types[0].pivot.user_type_id === 2) {
		return (
			<DashboardLayout>
				<DashboardNavbar />

				{!isHotelReservesFetching ? (
					<>
						<FilterTable>
							<Select
								className='w-100 mb-3'
								options={status}
								onChange={(e) => console.log(e)}
							/>
							<Select
								className='w-100 mb-3'
								options={propertyList}
								onChange={(e) => console.log(e)}
							/>
						</FilterTable>
						<ReusableTable
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
						>
							{hotelData?.data.map((item, i) => (
								<tr className='table_body_row' key={i}>
									<td className=' table_body_d'>
										<span>{i + 1}</span>
									</td>
									<td className=' table_body_d'>
										<span>{item.issued_at}</span>
									</td>
									<td className=' table_body_d'>
										<span>
											{item.user_first_name} {item.user_last_name}
										</span>
										<br />
										<span>{item.user_email}</span>
									</td>
									<td className='table_body_d'>
										<span>{item.property_name}</span>
									</td>
									<td className=' table_body_d'>
										<span>{item.check_in_date}</span>
										<br />
										<span>{item.check_out_date}</span>
									</td>
									<td className=' table_body_d'>
										<span>Adults: {item.adults_count}</span>
										<br />
										<span>Children: {item.kids_count}</span>
									</td>
									<td className='table_body_d'>
										<span>{item.accept_status}</span>
									</td>
									<td className=' table_body_d  '>
										<div className='TbuttonsWrapper'>
											<button
												disabled={accpetIsLoading ? true : false}
												type='button'
												onClick={() => {
													AcceptReserveHandler(item.invoice_id);
												}}
												className='action-button accept'
											>
												<i className='fas fa-check'></i>
											</button>

											<button
												disabled={rejectIsloading ? true : false}
												type='button'
												onClick={() =>
													RejectReserveHandler(item.invoice_id)
												}
												className='action-button reject'
											>
												<i className='fas fa-close'></i>
											</button>
										</div>
									</td>
								</tr>
							))}
						</ReusableTable>
						<div className='d-flex justify-content-center'>
							<Pagination
								page={page}
								totalPages={hotelData.last_page}
								onPaginateClick={(page) => {
									setPage(page);
								}}
							/>
						</div>
					</>
				) : (
					<Loader2 />
				)}
			</DashboardLayout>
		);
	}
}

export default Reserves;
