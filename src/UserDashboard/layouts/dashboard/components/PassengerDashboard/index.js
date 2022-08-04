/**
 =========================================================
 * Material Dashboard 2 React - v2.1.0
 =========================================================
 
 * Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import { useEffect, useState } from "react";
import MDBox from "UserDashboard/components/MDBox";

// Material Dashboard 2 React example components
import ComplexStatisticsCard from "UserDashboard/examples/Cards/StatisticsCards/ComplexStatisticsCard";
import PageLayout from "UserDashboard/examples/LayoutContainers/PageLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";

// Data
import { FilterTable, Loader2, Loader3, Pagination, RadioButton, ReusableTable } from "components";
import { useGetUserReservations } from "hooks/useInvoices";
import { useGetUserTransactions } from "hooks/useTransactions";
import moment from "moment";
import Select from "react-select";
import { invoiceStatus } from "values";

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
// Transaction Type
const transactionType = [
	{
		label: "Purchase",
		value: "purchase",
	},
	{
		label: "Wallet Deposit",
		value: "wallet_deposit",
	},
	{
		label: "Wallet Withdraw",
		value: "wallet_withdraw",
	},
];

function PassengerDashboard() {
	const [page, setPage] = useState(1);
	const [transactionPage, setTransactionPage] = useState(1);
	// invoice filter
	const [isInvoiceFilterOpen, setIsInvoiceFilterOpen] = useState(false);
	const [invoiceFilterForm, setInvoiceFilterForm] = useState({
		accept_status: "",
		payment_status: "",
	});
	// transaction filter
	const [isTransactionFilterOpen, setIsTransactionFilterOpen] = useState(false);
	const [transactionFilterForm, setTransactionFilterForm] = useState({
		type: "",
	});
	// get passenger invoices
	const {
		data: passangerInvoices,
		refetch: refetchUserReserves,
		isFetching: isInvoiceFetching,
	} = useGetUserReservations({
		pageParam: page,
		accept_status: invoiceFilterForm.accept_status.value,
		payment_status: invoiceFilterForm.payment_status,
	});
	// get passenger transactions
	const {
		data: passangerTransactions,
		refetch: refetchUserTransactions,
		isFetching: isTransactionsFetching,
	} = useGetUserTransactions({
		pageParam: transactionPage,
		type: transactionFilterForm.type,
	});

	useEffect(() => {
		refetchUserReserves();
	}, [page]);

	useEffect(() => {
		refetchUserTransactions();
	}, [transactionPage]);

	const resetInvoiceFilterHandler = () => {
		setInvoiceFilterForm({ accept_status: "", payment_status: "" });
	};
	const resetTransactionFilterHandler = () => {
		setTransactionFilterForm({ type: "" });
	};
	if (passangerInvoices && passangerTransactions) {
		return (
			<PageLayout>
				<div className='px-5'>
					<DashboardNavbar />
					<MDBox py={3}>
						<Grid container spacing={3}>
							<Grid item xs={12} md={6} lg={3}>
								<MDBox mb={1.5}>
									<ComplexStatisticsCard
										color='dark'
										icon='weekend'
										title='Bookings'
										count={281}
										percentage={{
											color: "success",
											amount: "+55%",
											label: "than lask week",
										}}
									/>
								</MDBox>
							</Grid>
							<Grid item xs={12} md={6} lg={3}>
								<MDBox mb={1.5}>
									<ComplexStatisticsCard
										icon='leaderboard'
										title="Today's Users"
										count='2,300'
										percentage={{
											color: "success",
											amount: "+3%",
											label: "than last month",
										}}
									/>
								</MDBox>
							</Grid>
							<Grid item xs={12} md={6} lg={3}>
								<MDBox mb={1.5}>
									<ComplexStatisticsCard
										color='success'
										icon='store'
										title='Revenue'
										count='34k'
										percentage={{
											color: "success",
											amount: "+1%",
											label: "than yesterday",
										}}
									/>
								</MDBox>
							</Grid>
							<Grid item xs={12} md={6} lg={3}>
								<MDBox mb={1.5}>
									<ComplexStatisticsCard
										color='primary'
										icon='person_add'
										title='Followers'
										count='+91'
										percentage={{
											color: "success",
											amount: "",
											label: "Just updated",
										}}
									/>
								</MDBox>
							</Grid>
						</Grid>

						<FilterTable
							isOpen={isInvoiceFilterOpen}
							setIsOpen={setIsInvoiceFilterOpen}
						>
							<label className='font-size-1' htmlFor=''>
								Status
							</label>
							<Select
								className='w-100 mb-3'
								options={invoiceStatus}
								value={invoiceFilterForm.accept_status}
								activeItem={invoiceFilterForm.accept_status}
								onChange={(e) => {
									setInvoiceFilterForm((prev) => {
										return { ...prev, accept_status: e };
									});
									setIsInvoiceFilterOpen(false);
								}}
							/>
							<label className='font-size-1' htmlFor=''>
								Payment Status
							</label>
							<div className='d-flex align-items-center justify-content-between w-100 '>
								<RadioButton
									data={paymentStatus}
									groupName='paymentStatusRadio'
									activeItem={invoiceFilterForm.payment_status}
									onChangeValue={(val) => {
										setInvoiceFilterForm((prev) => {
											return { ...prev, payment_status: val };
										});
										setIsInvoiceFilterOpen(false);
									}}
								/>
								<button
									className='small-btn-main'
									onClick={resetInvoiceFilterHandler}
								>
									<i className='fas fa-arrow-rotate-left'></i>
								</button>
							</div>
						</FilterTable>
						{/* invoices */}
						<ReusableTable
							title='Reservations'
							className='psaangerInvoices'
							tableHead={[
								"id",
								"Requested at",
								"Property",
								"Unit Name",
								"Price",
								"Paid at",
								"Status",
							]}
						>
							{isInvoiceFetching && <Loader3 />}
							{passangerInvoices?.data.map((item, i) => {
								const currStatus = invoiceStatus.find(
									(st) => item.reservable.status === st.value
								).label;
								return (
									<tr className='table_body_row' key={i}>
										<td className=' table_body_d'>
											<span>{item.id}</span>
										</td>
										<td className=' table_body_d'>
											<span>{moment(item.issued_at).format("LL")}</span>
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
											<span>
												{currStatus === "Waiting for payment" ? (
													<a
														href=''
														className='d-flex align-items-center justify-content-between w-50'
													>
														<span>Pay Now</span>
														<i className='fas fa-arrow-right-to-line small-btn-main'></i>
													</a>
												) : (
													currStatus
												)}
											</span>
										</td>
									</tr>
								);
							})}
						</ReusableTable>
						<div className='d-flex justify-content-center pagination'>
							<Pagination
								page={page}
								totalPages={passangerInvoices.last_page}
								onPaginateClick={(page) => {
									setPage(page);
								}}
							/>
						</div>

						<FilterTable
							isOpen={isTransactionFilterOpen}
							setIsOpen={setIsTransactionFilterOpen}
						>
							<label className='font-size-1' htmlFor=''>
								Transaction Type
							</label>
							<div className='d-flex align-items-center justify-content-between w-100 '>
								<RadioButton
									data={transactionType}
									groupName='transactionTypeRadio'
									activeItem={transactionFilterForm.type}
									onChangeValue={(val) => {
										setTransactionFilterForm((prev) => {
											return { ...prev, type: val };
										});
										setIsTransactionFilterOpen(false);
									}}
								/>
								<button
									className='small-btn-main ms-3 mt-3'
									onClick={resetTransactionFilterHandler}
								>
									<i className='fas fa-arrow-rotate-left'></i>
								</button>
							</div>
						</FilterTable>
						{/* Transactions */}
						<ReusableTable
							title='Transactions'
							className='psaangerInvoices'
							tableHead={[
								"id",
								"Requested at",
								"Property Info",
								"Status",
								"Price",
								"Tracking Code",
								"Type",
							]}
						>
							{isTransactionsFetching && <Loader3 />}
							{passangerTransactions?.data.map((item, i) => {
								return (
									<tr className='table_body_row' key={i}>
										<td className=' table_body_d'>
											<span>{item.id}</span>
										</td>
										<td className=' table_body_d'>
											<span>{moment(item.created_at).format("LL")}</span>
										</td>
										<td className=' table_body_d'>
											{item.reservation_info.map((res, ind) => (
												<span key={ind}>
													{res.property.name} | {res.unit.name}
													<br />
												</span>
											))}
										</td>
										<td className='table_body_d'>
											<span>{item.status}</span>
										</td>
										<td className=' table_body_d'>
											<span>{item.amount.toLocaleString()}</span>
										</td>
										<td className=' table_body_d'>
											<span>{item.tracking_code}</span>
										</td>
										<td className='table_body_d'>
											<span>{item.type}</span>
										</td>
									</tr>
								);
							})}
						</ReusableTable>
						<div className='d-flex justify-content-center pagination'>
							<Pagination
								page={transactionPage}
								totalPages={passangerTransactions.last_page}
								onPaginateClick={(page) => {
									setTransactionPage(page);
								}}
							/>
						</div>
					</MDBox>
				</div>
			</PageLayout>
		);
	} else {
		return <Loader2 />;
	}
}

export default PassengerDashboard;
