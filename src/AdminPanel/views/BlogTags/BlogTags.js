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

function BlogTags() {
  const { tags } = useContext(BlogContext);
  return (
    <CTable color="light" hover>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">ترتیب</CTableHeaderCell>
          <CTableHeaderCell scope="col">برچسب ها</CTableHeaderCell>
          <CTableHeaderCell scope="col">تعداد پست ها</CTableHeaderCell>
          <CTableHeaderCell scope="col">عملیات</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {tags.map((tag) => (
          <CTableRow key={tag.id}>
            <CTableHeaderCell scope="row">{tag.id}</CTableHeaderCell>
            <CTableDataCell>{tag.label}</CTableDataCell>
            <CTableDataCell>{tag.products}</CTableDataCell>
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

export default BlogTags;
