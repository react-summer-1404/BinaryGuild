import React from "react";
import { Link } from "react-router-dom";

const PanelMenu = ({ image, name, link }) => {
  return (
    <Link to={link} className="flex w-full flex-wrap p-2">
      <img src={image} className="pr-1 pl-1" />
      <p className="font-persian text-[18px] pr-1 pl-1 text-white-200 hover:text-blue cursor-pointer">
        {name}
      </p>
    </Link>
  );
};

export default PanelMenu;
