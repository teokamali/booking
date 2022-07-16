import React from "react";
import "./index.scss";
function ReusableTable({ tableHead, children, title }) {
	return (
		<div className='table-responsive'>
			<h3>{title}</h3>
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
