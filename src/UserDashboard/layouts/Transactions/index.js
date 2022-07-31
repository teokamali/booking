import { ReusableTable } from "components";
import { RadioButton } from "components";
import { Pagination } from "components";
import { FilterTable } from "components";
import React, { useState } from "react";
import DashboardLayout from "UserDashboard/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "UserDashboard/examples/Navbars/DashboardNavbar";
import moment from "moment";
import { Loader3, Loader2 } from "components";
import { useGetOwnerTransactions } from "hooks/useTransactions";

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

function Transactions() {
	const [transactionPage, setTransactionPage] = useState(1);
	const [isTransactionFilterOpen, setIsTransactionFilterOpen] = useState(false);
	const [transactionFilterForm, setTransactionFilterForm] = useState({
		type: "",
	});
	const resetTransactionFilterHandler = () => {
		setTransactionFilterForm({ type: "" });
	};
	// get transactions
	const {
		data: ownerTransactions,
		refetch: refetchOwnerTransactions,
		isFetching: isTransactionsFetching,
		isLoading: isTransactionsLoading,
	} = useGetOwnerTransactions({
		pageParam: transactionPage,
		type: transactionFilterForm.type,
	});

	return (
		<DashboardLayout>
			<DashboardNavbar />
			{ownerTransactions ? (
				<>
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
							"Passanger Info",
							"Property Info",
							"Status",
							"Price",
							"Tracking Code",
							"Type",
						]}
					>
						{isTransactionsFetching && <Loader3 />}
						{ownerTransactions.data.map((item, i) => {
							return (
								<tr className='table_body_row' key={i}>
									<td className=' table_body_d'>
										<span>{item.id}</span>
									</td>
									<td className=' table_body_d'>
										<span>{moment(item.created_at).format("LL")}</span>
									</td>
									<td className=' table_body_d'>
										<span>
											{item.user.first_name} {item.user.last_name}
										</span>
										<br />
										<span>{item.user.email}</span>
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
							totalPages={ownerTransactions.last_page}
							onPaginateClick={(page) => {
								setTransactionPage(page);
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

export default Transactions;
