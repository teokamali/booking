import Grid from "@mui/material/Grid";
import { Loader2 } from "components";
import { useGetPropertiesOccupation } from "hooks/useProperty";
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

	// Properties info
	const {
		data: propertiesOccupation,
		refetch: refetchPropertiesOccupation,
		isFetching: isPropertiesOccupationFetching,
	} = useGetPropertiesOccupation({
		pageParam: propertiesOccupationPage,
	});
	// Users Info
	const {
		data: userList,
		refetch: refetchUserList,
		isFetching: isUserListFetching,
	} = useGetUsersList({ pageParam: userListPage });

	console.log(userList);
	// Admin Dashboard
	if (!propertiesOccupation && !userList) return <Loader2 />;
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
								count='34k'
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
		</DashboardLayout>
	);
}

export default AdminDashboard;
