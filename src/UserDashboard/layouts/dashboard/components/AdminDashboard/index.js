import Grid from "@mui/material/Grid";
import { ReusableTable } from "components";
import { Loader2 } from "components";
import { useGetPropertiesOccupation } from "hooks/useProperty";
import { useGetAllTransactions } from "hooks/useTransactions";
import { useGetUsersList } from "hooks/useUser";
import { useState } from "react";

// Material Dashboard 2 React components
import MDBox from "UserDashboard/components/MDBox";

// Material Dashboard 2 React example components
import ComplexStatisticsCard from "UserDashboard/examples/Cards/StatisticsCards/ComplexStatisticsCard";
import ReportsBarChart from "UserDashboard/examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "UserDashboard/examples/Charts/LineCharts/ReportsLineChart";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";

// Data
import reportsBarChartData from "UserDashboard/layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "UserDashboard/layouts/dashboard/data/reportsLineChartData";
function AdminDashboard() {
	const { sales, tasks } = reportsLineChartData;
	// Paginations
	const [userListPage, setUserListPage] = useState(1);
	const [propertiesOccupationPage, setPropertiesOccupationPage] = useState(1);
	const [TransactionsPage, setTransactionsPage] = useState(1);

	// Properties info
	const {
		data: propertiesOccupation,
		refetch: refetchPropertiesOccupation,
		isFetching: isPropertiesOccupationFetching,
	} = useGetPropertiesOccupation({
		pageParam: propertiesOccupationPage,
	});
	// All Users Info
	const {
		data: userList,
		refetch: refetchUserList,
		isFetching: isUserListFetching,
	} = useGetUsersList({ pageParam: userListPage });
	// 10 Lateest passengers List
	const {
		data: latestPassengerList,
		refetch: refetchLatestPassenger,
		isFetching: isLatestPassengerFetching,
	} = useGetUsersList({ pageParam: 1, type: "passenger" });
	console.log(latestPassengerList);

	// 10 Lateest Owner List
	const {
		data: latestOwnerList,
		refetch: refetchLatestOwner,
		isFetching: isLatestOwnerFetching,
	} = useGetUsersList({ pageParam: 1, type: "property_owner" });

	// 10 Lateest middleman List
	const {
		data: latestMiddlemanList,
		refetch: refetchLatestMiddleman,
		isFetching: isLatestMiddlemanFetching,
	} = useGetUsersList({ pageParam: 1, type: "middleman" });

	// transaction info

	const {
		data: TrasnsactionsList,
		refetch: refetchTransactionsList,
		isFetching: isTransactionsListFetching,
	} = useGetAllTransactions({ pageParam: userListPage });

	// Admin Dashboard
	if (
		!propertiesOccupation ||
		!userList ||
		!TrasnsactionsList ||
		!latestPassengerList ||
		!latestOwnerList ||
		!latestMiddlemanList
	)
		return <Loader2 />;
	return (
		<DashboardLayout>
			<DashboardNavbar />
			<MDBox py={3}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={6} lg={4}>
						<MDBox mb={1.5}>
							<ComplexStatisticsCard
								color='dark'
								icon='weekend'
								title='Properties Registered'
								count={propertiesOccupation.total}
								percentage={{
									color: "success",
									amount: "+55%",
									label: "than lask week",
								}}
							/>
						</MDBox>
					</Grid>
					<Grid item xs={12} md={6} lg={4}>
						<MDBox mb={1.5}>
							<ComplexStatisticsCard
								icon='leaderboard'
								title='Total Users'
								count={userList.total}
								percentage={{
									color: "success",
									amount: "+3%",
									label: "than last month",
								}}
							/>
						</MDBox>
					</Grid>
					<Grid item xs={12} md={6} lg={4}>
						<MDBox mb={1.5}>
							<ComplexStatisticsCard
								color='success'
								icon='store'
								title='Total Reservations'
								count={TrasnsactionsList.total}
								percentage={{
									color: "success",
									amount: "+1%",
									label: "than yesterday",
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
			{/*lastest passengers */}
			<ReusableTable
				title='Latest Passengers'
				className=''
				tableHead={["Name", "Email", "Location"]}
			>
				{latestPassengerList.data.map((passengers, i) => (
					<tr className='table_body_row' key={i}>
						<td className='table_body_d text-start'>
							<span className='ps-3'>
								{passengers.first_name} {passengers.last_name}
							</span>
						</td>
						<td className='table_body_d'>
							<span>{passengers.email}</span>
						</td>
						<td className=' table_body_d'>
							<span>{passengers.country.name}</span>
						</td>
					</tr>
				))}
			</ReusableTable>
			{/*lastest owner */}
			<ReusableTable
				title='Latest Owners'
				className=''
				tableHead={["Name", "Email", "Location"]}
			>
				{latestOwnerList.data.map((owner, i) => (
					<tr className='table_body_row' key={i}>
						<td className='table_body_d text-start'>
							<span className='ps-3'>
								{owner.first_name} {owner.last_name}
							</span>
						</td>
						<td className='table_body_d'>
							<span>{owner.email}</span>
						</td>
						<td className=' table_body_d'>
							<span>{owner.country.name}</span>
						</td>
					</tr>
				))}
			</ReusableTable>
			{/*lastest Middleman */}
			<ReusableTable
				title='Latest Middle Man'
				className=''
				tableHead={["Name", "Email", "Location"]}
			>
				{latestMiddlemanList.data.map((middleman, i) => (
					<tr className='table_body_row' key={i}>
						<td className='table_body_d text-start'>
							<span className='ps-3'>
								{middleman.first_name} {middleman.last_name}
							</span>
						</td>
						<td className='table_body_d'>
							<span>{middleman.email}</span>
						</td>
						<td className=' table_body_d'>
							<span>{middleman.country.name}</span>
						</td>
					</tr>
				))}
			</ReusableTable>
		</DashboardLayout>
	);
}

export default AdminDashboard;
