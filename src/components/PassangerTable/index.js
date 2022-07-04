import React from "react";

function PassangerTable({ title, data, tableHead }) {
	return (
		<div className='table-responsive'>
			<div className='Table_wrapper'>
				<h3>{title}</h3>
				<table className='cs-table'>
					<thead className='thead'>
						<tr className='thead_row'>
							{tableHead.map((item, i) => (
								<th className='thead_cels' key={i}>
									{item}
								</th>
							))}
						</tr>
					</thead>
					<tbody className='tbody'>
						{data.map((item, i) => (
							<tr className='table_body_row'>
								<td className=' table_body_d'>
									<span>{i + 1}</span>
								</td>
								<td className=' table_body_d'>
									<span>{item.issued_at}</span>
								</td>
								<td className=' table_body_d'>
									<span>propertyName</span>
								</td>
								<td className='table_body_d'>
									<span>UnitName</span>
								</td>
								<td className=' table_body_d'>
									<span>{item.price}</span>
								</td>
								<td className=' table_body_d'>
									<span>{item.paid_at}</span>
								</td>
								<td className='table_body_d'>
									<span>{item.reservable.status}</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default PassangerTable;
