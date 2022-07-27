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
import MDBox from "UserDashboard/components/MDBox";
import { useEffect, useState } from "react";

// Material Dashboard 2 React example components
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import PageLayout from "UserDashboard/examples/LayoutContainers/PageLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import ReportsBarChart from "UserDashboard/examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "UserDashboard/examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "UserDashboard/examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "UserDashboard/layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "UserDashboard/layouts/dashboard/data/reportsLineChartData";
import Cookies from "js-cookie";
import { constans } from "values";
import { useGetUserReservations } from "hooks/useInvoices";
import { useGetUserTransactions } from "hooks/useTransactions";
import { ReusableTable, Loader2, Pagination, Loader3 } from "components";
import { invoiceStatus } from "values";
import moment from "moment";

function Dashboard() {
	const { sales, tasks } = reportsLineChartData;
	const [page, setPage] = useState(1);
	const [transactionPage, setTransactionPage] = useState(1);

	// get invoices
	const {
		data: passangerInvoices,
		refetch: refetchUserReserves,
		isFetching: isInvoiceFetching,
	} = useGetUserReservations({
		pageParam: page,
	});
	// get transactions
	const {
		data: passangerTransactions,
		refetch: refetchUserTransactions,
		isFetching: isTransactionsFetching,
	} = useGetUserTransactions({
		pageParam: transactionPage,
	});

	useEffect(() => {
		refetchUserReserves();
	}, [page]);

	useEffect(() => {
		refetchUserTransactions();
	}, [transactionPage]);
	// passanger Dashboard
	if (JSON.parse(Cookies.get(constans.INFO)).types[0].pivot.user_type_id === 1) {
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
						{passangerInvoices && passangerTransactions ? (
							<>
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
													<span>
														{moment(item.issued_at).format("LL")}
													</span>
												</td>
												<td className=' table_body_d'>
													<span>
														{
															item.reservable.model_reserved
																.parent_model.name
														}
													</span>
												</td>
												<td className='table_body_d'>
													<span>
														{item.reservable.model_reserved.name}
													</span>
												</td>
												<td className=' table_body_d'>
													<span>{item.price.toLocaleString()}</span>
												</td>
												<td className=' table_body_d'>
													<span>
														{item.paid_at === null
															? "Not Paid"
															: item.paid_at}
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
								{/* Transactions */}
								<ReusableTable
									title='Transactions'
									className='psaangerInvoices'
									tableHead={[
										"id",
										"Requested at",
										"Unit Name",
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
													<span>
														{moment(item.created_at).format("LL")}
													</span>
												</td>
												<td className=' table_body_d'>
													{item.reservation_info.map((res, ind) => (
														<span key={ind}>
															{res.property.name} {res.unit.name}
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
							</>
						) : (
							<Loader2 />
						)}
					</MDBox>
				</div>
			</PageLayout>
		);
	}
	// ownerDashboard
	if (JSON.parse(Cookies.get(constans.INFO)).types[0].pivot.user_type_id === 2) {
		return (
			<DashboardLayout>
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
					<MDBox mt={4.5}>
						<Grid container spacing={3}>
							<Grid item xs={12} md={6} lg={4}>
								<MDBox mb={3}>
									<ReportsBarChart
										color='info'
										title='website views'
										description='Last Campaign Performance'
										date='campaign sent 2 days ago'
										chart={reportsBarChartData}
									/>
								</MDBox>
							</Grid>
							<Grid item xs={12} md={6} lg={4}>
								<MDBox mb={3}>
									<ReportsLineChart
										color='success'
										title='daily sales'
										description={
											<>
												(<strong>+15%</strong>) increase in today sales.
											</>
										}
										date='updated 4 min ago'
										chart={sales}
									/>
								</MDBox>
							</Grid>
							<Grid item xs={12} md={6} lg={4}>
								<MDBox mb={3}>
									<ReportsLineChart
										color='dark'
										title='completed tasks'
										description='Last Campaign Performance'
										date='just updated'
										chart={tasks}
									/>
								</MDBox>
							</Grid>
						</Grid>
					</MDBox>
				</MDBox>
			</DashboardLayout>
		);
	}
}

export default Dashboard;
