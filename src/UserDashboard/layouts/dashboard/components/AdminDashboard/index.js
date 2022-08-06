import Grid from "@mui/material/Grid";
import { ReusableTable } from "components";
import { Loader2 } from "components";
import { useGetAllProperties } from "hooks/useProperty";
import { useGetPropertiesOccupation } from "hooks/useProperty";
import { useGetAllTransactions } from "hooks/useTransactions";
import { useGetUsersList } from "hooks/useUser";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";
import moment from "moment";
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
import { getDaysInMonthArray } from "utils/functions";
function AdminDashboard() {
	const { sales, tasks } = reportsLineChartData;
	// Paginations
	const daysInMonth = getDaysInMonthArray(moment().format("YYYY"), moment().format("M"));
	console.log(daysInMonth);
	const [userListPage, setUserListPage] = useState(1);
	const [propertiesOccupationPage, setPropertiesOccupationPage] = useState(1);
	const [TransactionsPage, setTransactionsPage] = useState(1);
	const [userChartData, setUserChartData] = useState({
		series: [
			{
				name: "Passenger",
				data: [
					11, 12, 13, 14, 15, 16, 17, 18, 19, 110, 111, 112, 113, 114, 115, 116, 117, 118,
					119, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 310, 311,
				],
			},
			{
				name: "Owner",
				data: [
					12, 22, 23, 24, 25, 26, 27, 28, 29, 210, 311, 232, 243, 254, 265, 216, 217, 218,
					219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 320, 231,
				],
			},
			{
				name: "Middle Man",
				data: [
					13, 23, 33, 43, 53, 63, 73, 83, 93, 130, 131, 132, 133, 314, 15, 163, 17, 183,
					19, 230, 21, 22, 23, 234, 253, 26, 27, 28, 293, 30, 31,
				],
			},
		],

		options: {
			colors: ["#ff3f3f", "#008ffb", "#00e396"],
			chart: {
				height: 350,
				type: "area",
				zoom: {
					enabled: false,
				},
				toolbar: {
					show: false,
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: "smooth",
			},
			xaxis: {
				type: "datetime",
				categories: daysInMonth,
			},
			tooltip: {
				enabled: true,
				x: {
					format: "dd/MM",
				},
			},
		},
	});
	// Properties info
	const {
		data: propertiesOccupation,
		refetch: refetchPropertiesOccupation,
		isFetching: isPropertiesOccupationFetching,
	} = useGetPropertiesOccupation({
		pageParam: propertiesOccupationPage,
	});
	// All Properties

	const { data: latestProperties, isLoading: isLatestPropetiesLoading } = useGetAllProperties({
		pageParam: 1,
		perPage: 10,
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
		!latestProperties ||
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
				<ReactApexChart
					options={userChartData.options}
					series={userChartData.series}
					type='area'
					height={350}
				/>
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
			{/*lastest transactions */}
			<ReusableTable
				title='Latest Transactions'
				className=''
				tableHead={["#", "Sender Name", "Amount", "Gateway", "Tracking Code", "Status"]}
			>
				{TrasnsactionsList.data.map((transaction, i) => (
					<tr className='table_body_row' key={i}>
						<td className='table_body_d text-start'>
							<span className='ps-3'>{i + 1}</span>
						</td>
						<td className='table_body_d text-start'>
							<span className='ps-3'>
								{transaction.user.first_name} {transaction.user.last_name}
							</span>
							<p className='ps-3'>{transaction.user.email}</p>
						</td>
						<td className='table_body_d'>
							<span>{transaction.amount}</span>
						</td>
						<td className=' table_body_d'>
							<span>{transaction.gateway}</span>
						</td>
						<td className=' table_body_d'>
							<span>{transaction.tracking_code}</span>
						</td>
						<td className=' table_body_d'>
							<span>{transaction.status}</span>
						</td>
					</tr>
				))}
			</ReusableTable>
			{/*lastest Properties */}
			<ReusableTable
				title='Latest Properties'
				className=''
				tableHead={["#", "Owner Name", "Name", "Location", "Type"]}
			>
				{latestProperties.data.map((property, i) => (
					<tr className='table_body_row' key={i}>
						<td className='table_body_d text-start'>
							<span className='ps-3'>{i + 1}</span>
						</td>
						<td className='table_body_d text-start'>
							<span className='ps-3'>
								{property.user.first_name} {property.user.last_name}
							</span>
							<p className='ps-3'>{property.user.email}</p>
						</td>
						<td className='table_body_d'>
							<span>{property.name}</span>
						</td>
						<td className=' table_body_d'>
							<span>{property.city.name}</span>
						</td>
						<td className=' table_body_d'>
							<span>{property.type.type}</span>
						</td>
					</tr>
				))}
			</ReusableTable>
		</DashboardLayout>
	);
}

export default AdminDashboard;
