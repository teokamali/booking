import AdminDashboard from "./components/AdminDashboard";

// Data
import Cookies from "js-cookie";
import { constans } from "values";
import OwnerDashboard from "./components/OwnerDashboard";
import PassengerDashboard from "./components/PassengerDashboard";

function Dashboard() {
	// passanger Dashboard
	if (JSON.parse(Cookies.get(constans.INFO)).types[0].pivot.user_type_id === 1) {
		return <PassengerDashboard />;
	}
	// ownerDashboard
	if (JSON.parse(Cookies.get(constans.INFO)).types[0].pivot.user_type_id === 2) {
		return <OwnerDashboard />;
	}
	// Admin Dashboard
	if (JSON.parse(Cookies.get(constans.INFO)).types[0].pivot.user_type_id === 4) {
		return <AdminDashboard />;
	}
}

export default Dashboard;
