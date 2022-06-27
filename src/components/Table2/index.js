import React from "react";
import image from "assets/image/avatars/7.jpg";
import "./index.scss";
import Modal from "../Modal";
import EditProperty from "UserDashboard/layouts/EditProperty";
import { Link } from "react-router-dom";

const TableButtons = ({ onEdit, onDelete, id }) => {
	return (
		<div className='TbuttonsWrapper'>
			<button type='button' onClick={onEdit} className='action-button accept'>
				<i className='fas fa-check'></i>
			</button>

			<button type='button' onClick={onDelete} className='action-button reject'>
				<i className='fas fa-close'></i>
			</button>
		</div>
	);
};
const Table2 = ({ onEdit, onDelete, data, tableHead, title }) => {
	console.log(data);
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
									<span>
										{item.user_first_name} {item.user_last_name}
									</span>
									<br />
									<span>{item.user_email}</span>
								</td>
								<td className='table_body_d'>
									<span>{item.property_name}</span>
								</td>
								<td className=' table_body_d'>
									<span>{item.check_in_date}</span>
									<br />
									<span>{item.check_out_date}</span>
								</td>
								<td className=' table_body_d'>
									<span>Adults: {item.adults_count}</span>
									<br />
									<span>Children: {item.kids_count}</span>
								</td>
								<td className='table_body_d'>
									<span>{item.accept_status}</span>
								</td>
								<td className=' table_body_d  '>
									<TableButtons
										onEdit={onEdit}
										onDelete={onDelete}
										id={item.id}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Table2;
// <TableItem
// 	key={i}
// 	id={item.id}
// 	name={item.name}
// 	address={item.address}
// 	adults_sleeps_count={item.adults_sleeps_count}
// 	bedrooms_count={item.bedrooms_count}
// 	beds={item.beds}
// 	bathrooms={item.bathroom}
// 	onEdit={() => onEdit(item)}
// 	onDelete={() => onDelete(item.id)}
// />
