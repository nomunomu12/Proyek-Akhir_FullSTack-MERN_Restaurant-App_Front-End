import React from "react";

const Header = (props) => {
  const { value } = props;
  return (
    <div className="pl-16 pt-2">
      <h2 className="text-3xl font-bold text-slate-400">{value}</h2>
    </div>
  );
};

export default Header;
