import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { constans } from "../values";

const useRole = (acc) => {
	let [canAccess, setCanAccess] = useState(true);
	useEffect(() => {
		const uesrType = JSON.parse(Cookies.get(constans.INFO)).types;
		uesrType.map((type) => {
			acc.map((acc) => {
				const hasAccess = type.pivot.user_type_id === acc;
				if (hasAccess) {
					setCanAccess(true);
				} else {
					setCanAccess(false);
				}
			});
		});
	}, []);

	return { canAccess };
};

export default useRole;
