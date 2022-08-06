// context
import ThemeContextProvider from "./context/ThemeContextProvider";
import UserContextProvider from "./context/UsersContextProvider";

import { QueryClient, QueryClientProvider } from "react-query";
import { MaterialUIControllerProvider } from "UserDashboard/context";

import { ToastContainer } from "react-toastify";
import Navigation from "./Routes/";
const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeContextProvider>
				<UserContextProvider>
					<MaterialUIControllerProvider>
						<Navigation />
					</MaterialUIControllerProvider>
				</UserContextProvider>
				<ToastContainer
					position='top-right'
					autoClose={1500}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</ThemeContextProvider>
		</QueryClientProvider>
	);
}

export default App;
