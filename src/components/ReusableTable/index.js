import React from "react";
import "./index.scss";
function ReusableTable({ tableHead, children }) {
	return (
		<div className='table-responsive'>
			<div className='Table_wrapper'>
				<table className='cs-table'>
					<thead className='thead'>
						<tr className='thead_row'>
							{tableHead.map((item, ind) => (
								<th className='thead_cels' key={ind}>
									{item}
								</th>
							))}
						</tr>
					</thead>
					<tbody className='tbody'>{children}</tbody>
				</table>
			</div>
		</div>
	);
}

export default ReusableTable;
