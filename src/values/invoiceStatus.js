const status = [
	{
		label: "Waiting for accept",
		value: "waiting_for_accept",
	},
	{
		label: "Waiting for payment",
		value: "waiting_for_payment",
	},

	{
		label: "Accepted",
		value: "reserve_accepted",
	},
	{
		label: "Canceled by owner",
		value: "reserve_canceled_by_owner",
	},
	{
		label: "Canceled by passanger",
		value: "reserve_canceled_by_passenger",
	},
	{
		label: "Not paid",
		value: "reserve_canceled_by_not_paid",
	},
	{
		label: "Canceled after payment",
		value: "reserve_canceled_by_passenger_after_payment",
	},
	{
		label: "Finnished",
		value: "reserve_finished",
	},
];
export default status;
