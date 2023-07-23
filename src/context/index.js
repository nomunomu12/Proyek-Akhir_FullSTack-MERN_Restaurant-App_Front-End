import { createContext, useState } from "react";

export const DataContext = createContext();

const StateManagement = (props) => {
  const [sideBarCollapse, setSideBarCollapse] = useState(false);
  return (
    <DataContext.Provider value={{ sideBarCollapse, setSideBarCollapse }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default StateManagement;
