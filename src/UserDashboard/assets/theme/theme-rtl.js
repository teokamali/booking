/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { createTheme } from "@mui/material/styles";
// import Fade from "@mui/material/Fade";

// Material Dashboard 2 React base styles
import colors from "UserDashboard/assets/theme/base/colors";
import breakpoints from "UserDashboard/assets/theme/base/breakpoints";
import typography from "UserDashboard/assets/theme/base/typography";
import boxShadows from "UserDashboard/assets/theme/base/boxShadows";
import borders from "UserDashboard/assets/theme/base/borders";
import globals from "UserDashboard/assets/theme/base/globals";

// Material Dashboard 2 React helper functions
import boxShadow from "UserDashboard/assets/theme/functions/boxShadow";
import hexToRgb from "UserDashboard/assets/theme/functions/hexToRgb";
import linearGradient from "UserDashboard/assets/theme/functions/linearGradient";
import pxToRem from "UserDashboard/assets/theme/functions/pxToRem";
import rgba from "UserDashboard/assets/theme/functions/rgba";

// Material Dashboard 2 React components base styles for @mui material components
import sidenav from "UserDashboard/assets/theme/components/sidenav";
import list from "UserDashboard/assets/theme/components/list";
import listItem from "UserDashboard/assets/theme/components/list/listItem";
import listItemText from "UserDashboard/assets/theme/components/list/listItemText";
import card from "UserDashboard/assets/theme/components/card";
import cardMedia from "UserDashboard/assets/theme/components/card/cardMedia";
import cardContent from "UserDashboard/assets/theme/components/card/cardContent";
import button from "UserDashboard/assets/theme/components/button";
import iconButton from "UserDashboard/assets/theme/components/iconButton";
import input from "UserDashboard/assets/theme/components/form/input";
import inputLabel from "UserDashboard/assets/theme/components/form/inputLabel";
import inputOutlined from "UserDashboard/assets/theme/components/form/inputOutlined";
import textField from "UserDashboard/assets/theme/components/form/textField";
import menu from "UserDashboard/assets/theme/components/menu";
import menuItem from "UserDashboard/assets/theme/components/menu/menuItem";
import switchButton from "UserDashboard/assets/theme/components/form/switchButton";
import divider from "UserDashboard/assets/theme/components/divider";
import tableContainer from "UserDashboard/assets/theme/components/table/tableContainer";
import tableHead from "UserDashboard/assets/theme/components/table/tableHead";
import tableCell from "UserDashboard/assets/theme/components/table/tableCell";
import linearProgress from "UserDashboard/assets/theme/components/linearProgress";
import breadcrumbs from "UserDashboard/assets/theme/components/breadcrumbs";
import slider from "UserDashboard/assets/theme/components/slider";
import avatar from "UserDashboard/assets/theme/components/avatar";
import tooltip from "UserDashboard/assets/theme/components/tooltip";
import appBar from "UserDashboard/assets/theme/components/appBar";
import tabs from "UserDashboard/assets/theme/components/tabs";
import tab from "UserDashboard/assets/theme/components/tabs/tab";
import stepper from "UserDashboard/assets/theme/components/stepper";
import step from "UserDashboard/assets/theme/components/stepper/step";
import stepConnector from "UserDashboard/assets/theme/components/stepper/stepConnector";
import stepLabel from "UserDashboard/assets/theme/components/stepper/stepLabel";
import stepIcon from "UserDashboard/assets/theme/components/stepper/stepIcon";
import select from "UserDashboard/assets/theme/components/form/select";
import formControlLabel from "UserDashboard/assets/theme/components/form/formControlLabel";
import formLabel from "UserDashboard/assets/theme/components/form/formLabel";
import checkbox from "UserDashboard/assets/theme/components/form/checkbox";
import radio from "UserDashboard/assets/theme/components/form/radio";
import autocomplete from "UserDashboard/assets/theme/components/form/autocomplete";
import container from "UserDashboard/assets/theme/components/container";
import popover from "UserDashboard/assets/theme/components/popover";
import buttonBase from "UserDashboard/assets/theme/components/buttonBase";
import icon from "UserDashboard/assets/theme/components/icon";
import svgIcon from "UserDashboard/assets/theme/components/svgIcon";
import link from "UserDashboard/assets/theme/components/link";
import dialog from "UserDashboard/assets/theme/components/dialog";
import dialogTitle from "UserDashboard/assets/theme/components/dialog/dialogTitle";
import dialogContent from "UserDashboard/assets/theme/components/dialog/dialogContent";
import dialogContentText from "UserDashboard/assets/theme/components/dialog/dialogContentText";
import dialogActions from "UserDashboard/assets/theme/components/dialog/dialogActions";

export default createTheme({
  direction: "rtl",
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...container,
      },
    },
    MuiDrawer: { ...sidenav },
    MuiList: { ...list },
    MuiListItem: { ...listItem },
    MuiListItemText: { ...listItemText },
    MuiCard: { ...card },
    MuiCardMedia: { ...cardMedia },
    MuiCardContent: { ...cardContent },
    MuiButton: { ...button },
    MuiIconButton: { ...iconButton },
    MuiInput: { ...input },
    MuiInputLabel: { ...inputLabel },
    MuiOutlinedInput: { ...inputOutlined },
    MuiTextField: { ...textField },
    MuiMenu: { ...menu },
    MuiMenuItem: { ...menuItem },
    MuiSwitch: { ...switchButton },
    MuiDivider: { ...divider },
    MuiTableContainer: { ...tableContainer },
    MuiTableHead: { ...tableHead },
    MuiTableCell: { ...tableCell },
    MuiLinearProgress: { ...linearProgress },
    MuiBreadcrumbs: { ...breadcrumbs },
    MuiSlider: { ...slider },
    MuiAvatar: { ...avatar },
    MuiTooltip: { ...tooltip },
    MuiAppBar: { ...appBar },
    MuiTabs: { ...tabs },
    MuiTab: { ...tab },
    MuiStepper: { ...stepper },
    MuiStep: { ...step },
    MuiStepConnector: { ...stepConnector },
    MuiStepLabel: { ...stepLabel },
    MuiStepIcon: { ...stepIcon },
    MuiSelect: { ...select },
    MuiFormControlLabel: { ...formControlLabel },
    MuiFormLabel: { ...formLabel },
    MuiCheckbox: { ...checkbox },
    MuiRadio: { ...radio },
    MuiAutocomplete: { ...autocomplete },
    MuiPopover: { ...popover },
    MuiButtonBase: { ...buttonBase },
    MuiIcon: { ...icon },
    MuiSvgIcon: { ...svgIcon },
    MuiLink: { ...link },
    MuiDialog: { ...dialog },
    MuiDialogTitle: { ...dialogTitle },
    MuiDialogContent: { ...dialogContent },
    MuiDialogContentText: { ...dialogContentText },
    MuiDialogActions: { ...dialogActions },
  },
});
