import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useTranslation } from "react-i18next";
import { AddProfileInfo } from "../../../../core/services/api/put-data/index";
import "react-leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
// import Map from "./map/Map";

const HomeAddressSection = () => {
  const { t } = useTranslation();
  return (
    <div className="w-3/4 mr-2 flex flex-wrap gap-2 mt-16 border-r-1 border-boarder">
      <p className="text-blue w-full text-right mr-11 ">
        {t("SelectLocation")}
      </p>
      {/* <Map/> */}
    </div>
  );
};

export default HomeAddressSection;
