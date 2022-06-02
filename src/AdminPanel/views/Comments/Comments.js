import {
	CButton,
	CTable,
	CTableBody,
	CTableDataCell,
	CTableHead,
	CTableHeaderCell,
	CTableRow,
} from "@coreui/react";
import React, { useContext } from "react";
import { BlogContext } from "../../context/BlogContextProvider";

function Comments() {
	const { comments } = useContext(BlogContext);
	// console.log(comments);
	return (
		<CTable color='light' hover>
			<CTableHead>
				<CTableRow>
					<CTableHeaderCell scope='col'>ترتیب</CTableHeaderCell>
					<CTableHeaderCell scope='col'>کامنت</CTableHeaderCell>
					<CTableHeaderCell scope='col'>کاربر</CTableHeaderCell>
					<CTableHeaderCell scope='col'>عملیات</CTableHeaderCell>
				</CTableRow>
			</CTableHead>
			<CTableBody>
				{comments.map((category, index) => (
					<CTableRow key={category._id}>
						<CTableHeaderCell scope='row'>{index + 1}</CTableHeaderCell>
						<CTableDataCell>{category.text}</CTableDataCell>
						<CTableDataCell>{category.user.email}</CTableDataCell>
						<CTableDataCell>
							<CButton color='success' className='me-2'>
								تایید
							</CButton>
							<CButton color='danger'>رد کردن</CButton>
						</CTableDataCell>
					</CTableRow>
				))}
			</CTableBody>
		</CTable>
	);
}

export default Comments;
