import { useContext } from "react";
import Footer from "../../components/footer";
import Sidebar from "../../components/sidebar";
import { DataContext } from "../../context";

const Layout = (props) => {
  return (
    <div className="w-full min-h-screen max-h-screen flex bg-slate-100">
      {props.children}
    </div>
  );
};

const SidebarLayout = (props) => {
  const { sideBarCollapse } = useContext(DataContext);
  return (
    <div
      className={`${
        sideBarCollapse ? `w-20` : "w-1/5"
      } min-h-screen bg-white shadow-lg duration-500`}
    >
      {props.children}
    </div>
  );
};

const Content = (props) => {
  return <div className="min-h-screen w-full p-5">{props.children}</div>;
};

const DashboardLayout = (props) => {
  const { element } = props;
  return (
    <Layout>
      <SidebarLayout>
        <Sidebar />
      </SidebarLayout>
      <Content>
        {element}
        <Footer />
      </Content>
    </Layout>
  );
};

export default DashboardLayout;
