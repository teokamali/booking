import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import React from "react";

function ModalNotification({
  isVisible,
  setIsVisible,
  title,
  desc,
  closeBtnText,
  submitBtnText,
  onSubmitFunc,
}) {
  return (
    <>
      <CModal
        alignment="center"
        visible={isVisible}
        onClose={() => setIsVisible(false)}
      >
        <CModalHeader>
          <CModalTitle>{title}</CModalTitle>
        </CModalHeader>
        <CModalBody>{desc}</CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setIsVisible(false)}>
            {closeBtnText}
          </CButton>
          <CButton color="primary" onClick={onSubmitFunc}>
            {submitBtnText}
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
}

export default ModalNotification;
