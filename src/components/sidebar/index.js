import logo from "../../assets/img/nunas.jpg";
import { dataListMenuSidebar } from "../../helper/listMenuSidebar";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as ButtonSidebarIcon } from "../../assets/icons/leftIcon.svg";
import { useContext } from "react";
import { DataContext } from "../../context";

const Sidebar = (props) => {
  const { sideBarCollapse, setSideBarCollapse } = useContext(DataContext);
  const pathName = useLocation().pathname;

  const splitterPathname = pathName.split("/");

  const SidebarContainer = (props) => {
    return (
      <div className="pt-16 relative flex flex-col gap-12">
        {props.children}
      </div>
    );
  };

  const SidebarLogo = (props) => {
    return (
      <div className="flex gap-2 justify-center">
        <div className="flex items-stretch">
          <img className="w-16 h-16 self-end" src={props.logo} alt="logo" />
        </div>
        <div className="flex items-stretch">
          <h2
            className={`${
              sideBarCollapse ? "hidden" : ""
            } self-center text-2xl font-extrabold font-mono text-yellow-800`}
          >
            Nuna's Plan
          </h2>
        </div>
      </div>
    );
  };

  const SidebarMenu = (props) => {
    return (
      <div className={`${sideBarCollapse ? "pl-1" : "pl-10"}`}>
        {props.children}
      </div>
    );
  };

  const ItemSidebar = (props) => {
    const { className, label, link, icon } = props;

    return (
      <li
        className={` ${
          sideBarCollapse ? "pl-1" : "pl-6"
        } list-none p-1 hover:text-yellow-900 text-slate-400 px-2 mb-5 ${className}`}
      >
        <Link className="flex items-stretch gap-0" to={link}>
          <span className="flex self-center">{icon}&nbsp;&nbsp;</span>
          {!sideBarCollapse && <span>{label}</span>}
        </Link>
      </li>
    );
  };

  const SidebarListMenu = (props) => {
    const itemMenuSidebar = props.data.map((item, index) => {
      let locationStyle = "";

      if (splitterPathname[1] === item.link.split("/")[1])
        locationStyle = "text-black border-l-2 border-l-yellow-600";
      return (
        <ItemSidebar
          key={index}
          icon={item.icon}
          label={item.label}
          link={item.link}
          className={locationStyle}
        />
      );
    });

    return itemMenuSidebar;
  };

  const SidebarBtnCollapse = () => {
    return (
      <button
        className={`${
          sideBarCollapse ? "rotate-180" : ""
        } absolute bg-black duration-700 text-yellow-600 border-4 border-yellow-600 rounded-full p-2 -right-4 top-2/4`}
        onClick={() => {
          setSideBarCollapse(!sideBarCollapse);
        }}
      >
        <ButtonSidebarIcon width="12px" />
      </button>
    );
  };

  return (
    <SidebarContainer>
      <SidebarLogo logo={logo} />
      <SidebarMenu>
        <SidebarListMenu data={dataListMenuSidebar} />
      </SidebarMenu>
      <SidebarBtnCollapse />
    </SidebarContainer>
  );
};

export default Sidebar;
