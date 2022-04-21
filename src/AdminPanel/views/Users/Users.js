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
import { UsersContext } from "../../context/UserContextProvider";
function Users() {
  const { user } = useContext(UsersContext);
  console.log(user);
  return (
    <CTable color="light" hover>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">#</CTableHeaderCell>
          <CTableHeaderCell scope="col">نام</CTableHeaderCell>
          <CTableHeaderCell scope="col">ایمیل</CTableHeaderCell>
          <CTableHeaderCell scope="col">نام کاربری</CTableHeaderCell>
          <CTableHeaderCell scope="col">شماره تماس</CTableHeaderCell>
          <CTableHeaderCell scope="col">عملیات</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {user.map((user) => (
          <CTableRow key={user.id}>
            <CTableHeaderCell scope="row">{user.id}</CTableHeaderCell>
            <CTableDataCell>{`${user.name.firstname} ${user.name.lastname}`}</CTableDataCell>
            <CTableDataCell>{user.email}</CTableDataCell>
            <CTableDataCell>{user.username}</CTableDataCell>
            <CTableDataCell>{user.phone}</CTableDataCell>
            <CTableDataCell>
              <CButton color="warning" className="me-2">
                ویرایش
              </CButton>
              <CButton color="danger">پاک کردن</CButton>
            </CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
  );
}

export default Users;
