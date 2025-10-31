import React from "react";

const UserPanel = ({ image, name, position }) => {
  return (
    <div className="flex flex-wrap">
      <img src={image} />
      <div className="flex flex-wrap">
        <p className="font-persian">{name}</p>
        <p className="font-persian text-[14px]">{position}</p>
      </div>
    </div>
  );
};

export default UserPanel;
