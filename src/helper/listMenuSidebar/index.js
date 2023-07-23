import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboardIcon.svg";
import { ReactComponent as PemesananIcon } from "../../assets/icons/pemesananIcon.svg";

const dataListMenuSidebar = [
  {
    label: "Grocery",
    link: "/",
    icon: <DashboardIcon width="17px" />,
  },
  {
    label: "Add",
    link: "/tambah",
    icon: <PemesananIcon width="17px" />,
  },
];

export { dataListMenuSidebar };
