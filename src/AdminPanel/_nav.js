import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilPlus,
  cilCart,
  cilNotes,
  cilPuzzle,
  cilTags,
  cilBook,
  cilCommentSquare,
  cilSpeedometer,
  cilStar,
  cilPen,
  cilUser,
  cilSettings,
} from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "داشبورد",
    to: "/administrator/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: "محصولات",
    icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "همه محصولات",
        to: "/administrator/products",
        icon: <CIcon icon={cilCart} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "افزودن محصول",
        to: "/administrator/products/add",
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "دسته بندی ها",
        to: "/administrator/products/categories",
        icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "تگ ها",
        to: "/administrator/products/tags",
        icon: <CIcon icon={cilTags} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: "وبلاگ",
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "همه نوشته ها",
        to: "/administrator/blog",
        icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "افزودن نوشته",
        to: "/administrator/blog/add",
        icon: <CIcon icon={cilPen} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "دسته بندی ها",
        to: "/administrator/blog/categories",
        icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "تگ ها",
        to: "/administrator/blog/tags",
        icon: <CIcon icon={cilTags} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavItem,
    name: "دیدگاه ها",
    to: "/administrator/comments",
    icon: <CIcon icon={cilCommentSquare} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "جدید",
    },
  },
  {
    component: CNavGroup,
    name: "کاربران",
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "همه کاربران",
        to: "/administrator/users",
        icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "افزودن کاربر",
        to: "/administrator/users/add",
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavItem,
    name: "تنظیمات",
    to: "/administrator/settings",
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: "Components",
  },
  {
    component: CNavGroup,
    name: "Base",
    to: "/administrator/base",
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Accordion",
        to: "/administrator/base/accordion",
      },
      {
        component: CNavItem,
        name: "Breadcrumb",
        to: "/administrator/base/breadcrumbs",
      },
      {
        component: CNavItem,
        name: "Cards",
        to: "/administrator/base/cards",
      },
      {
        component: CNavItem,
        name: "Carousel",
        to: "/administrator/base/carousels",
      },
      {
        component: CNavItem,
        name: "Collapse",
        to: "/administrator/base/collapses",
      },
      {
        component: CNavItem,
        name: "List group",
        to: "/administrator/base/list-groups",
      },
      {
        component: CNavItem,
        name: "Navs & Tabs",
        to: "/administrator/base/navs",
      },
      {
        component: CNavItem,
        name: "Pagination",
        to: "/administrator/base/paginations",
      },
      {
        component: CNavItem,
        name: "Placeholders",
        to: "/administrator/base/placeholders",
      },
      {
        component: CNavItem,
        name: "Popovers",
        to: "/administrator/base/popovers",
      },
      {
        component: CNavItem,
        name: "Progress",
        to: "/administrator/base/progress",
      },
      {
        component: CNavItem,
        name: "Spinners",
        to: "/administrator/base/spinners",
      },
      {
        component: CNavItem,
        name: "Tables",
        to: "/administrator/base/tables",
      },
      {
        component: CNavItem,
        name: "Tooltips",
        to: "/administrator/base/tooltips",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Buttons",
    to: "/administrator/buttons",
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Buttons",
        to: "/administrator/buttons/buttons",
      },
      {
        component: CNavItem,
        name: "Buttons groups",
        to: "/administrator/buttons/button-groups",
      },
      {
        component: CNavItem,
        name: "Dropdowns",
        to: "/administrator/buttons/dropdowns",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Forms",
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Form Control",
        to: "/administrator/forms/form-control",
      },
      {
        component: CNavItem,
        name: "Select",
        to: "/administrator/forms/select",
      },
      {
        component: CNavItem,
        name: "Checks & Radios",
        to: "/administrator/forms/checks-radios",
      },
      {
        component: CNavItem,
        name: "Range",
        to: "/administrator/forms/range",
      },
      {
        component: CNavItem,
        name: "Input Group",
        to: "/administrator/forms/input-group",
      },
      {
        component: CNavItem,
        name: "Floating Labels",
        to: "/administrator/forms/floating-labels",
      },
      {
        component: CNavItem,
        name: "Layout",
        to: "/administrator/forms/layout",
      },
      {
        component: CNavItem,
        name: "Validation",
        to: "/administrator/forms/validation",
      },
    ],
  },
  {
    component: CNavItem,
    name: "Charts",
    to: "/administrator/charts",
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: "Icons",
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "CoreUI Free",
        to: "/administrator/icons/coreui-icons",
        badge: {
          color: "success",
          text: "NEW",
        },
      },
      {
        component: CNavItem,
        name: "CoreUI Flags",
        to: "/administrator/icons/flags",
      },
      {
        component: CNavItem,
        name: "CoreUI Brands",
        to: "/administrator/icons/brands",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Notifications",
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Alerts",
        to: "/administrator/notifications/alerts",
      },
      {
        component: CNavItem,
        name: "Badges",
        to: "/administrator/notifications/badges",
      },
      {
        component: CNavItem,
        name: "Modal",
        to: "/administrator/notifications/modals",
      },
      {
        component: CNavItem,
        name: "Toasts",
        to: "/administrator/notifications/toasts",
      },
    ],
  },
  {
    component: CNavItem,
    name: "Widgets",
    to: "/administrator/widgets",
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    component: CNavTitle,
    name: "Extras",
  },
  {
    component: CNavGroup,
    name: "Pages",
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Login",
        to: "/administrator/login",
      },
      {
        component: CNavItem,
        name: "Register",
        to: "/administrator/register",
      },
      {
        component: CNavItem,
        name: "Error 404",
        to: "/administrator/404",
      },
      {
        component: CNavItem,
        name: "Error 500",
        to: "/administrator/500",
      },
    ],
  },
];

export default _nav;
