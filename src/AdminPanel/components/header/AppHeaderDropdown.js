import React from "react";
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItemPlain,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import {
  cilBell,
  cilCommentSquare,
  cilLockLocked,
  cilSettings,
  cilUser,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import constans from "../../values/constans";
import avatar8 from "./../../../assets/image/avatars/8.jpg";
import { Link } from "react-router-dom";
import jsCookie from "js-cookie";

const AppHeaderDropdown = () => {
  const logOutHandler = () => {
    jsCookie.remove(constans.TOKEN);
  };
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">
          Settings
        </CDropdownHeader>{" "}
        <Link to="comments">
          <CDropdownItemPlain>
            <CIcon icon={cilCommentSquare} className="me-2" />
            کامنت ها
            <CBadge color="warning" className="ms-2">
              42
            </CBadge>
          </CDropdownItemPlain>
        </Link>
        <Link to="dashboard">
          <CDropdownItemPlain>
            <CIcon icon={cilUser} className="me-2" />
            پروفایل
          </CDropdownItemPlain>
        </Link>
        <Link to="settings">
          <CDropdownItemPlain>
            <CIcon icon={cilSettings} className="me-2" />
            تنظیمات
          </CDropdownItemPlain>
        </Link>
        <CDropdownDivider />
        <CDropdownItemPlain>
          <CIcon icon={cilLockLocked} className="me-2" />
          <Link to="/administrator/login" onClick={logOutHandler}>
            خروج
          </Link>
        </CDropdownItemPlain>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default AppHeaderDropdown;
