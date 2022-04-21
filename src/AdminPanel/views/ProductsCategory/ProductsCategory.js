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
import { ProductsContext } from "../../context/ProductsContextProvider";

function ProductsCategory() {
  const { categories } = useContext(ProductsContext);

  return (
    <CTable color="light" hover>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">ترتیب</CTableHeaderCell>
          <CTableHeaderCell scope="col">دسته بندی</CTableHeaderCell>
          <CTableHeaderCell scope="col">تعداد پست ها</CTableHeaderCell>
          <CTableHeaderCell scope="col">عملیات</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        {categories.map((category) => (
          <CTableRow key={category.id}>
            <CTableHeaderCell scope="row">{category.id}</CTableHeaderCell>
            <CTableDataCell>{category.label}</CTableDataCell>
            <CTableDataCell>{category.products}</CTableDataCell>
            <CTableDataCell>
              <CButton color="warning" className="me-2">ویرایش</CButton>
              <CButton color="danger">پاک کردن</CButton>
            </CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
  );
}

export default ProductsCategory;
