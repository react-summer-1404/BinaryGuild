import { Button } from "@heroui/button";
import React from "react";
import { useTranslation } from "react-i18next";
import Photos from "../../../../core/icons/Photos";
import PhotoSection from "./photo-section/PhotoSection";
import ApplyChanges from "../../../../components/common/button/ApplyChanges";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import instance from "../../../../core/services/interceptor";

const ImagesSection = () => {
  const { t } = useTranslation();

  const { mutate: addImage } = useMutation({
    mutationFn: async () => {
      const response = await instance.post(
        "/SharePanel/AddProfileImage",
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("responseeeeeeeeee",response)
    },
    onSuccess: (success) => {
      console.log("yeeeeeeeeeeeesssssssss",success)
    },
    onError:(error)=>{
      console.log("errorrrrrrrrrrr",error)
    }
  });

  const handelAdd = ()=>{
    addImage()
  }
  return (
    <div className="w-3/4 mr-2 flex flex-wrap gap-2 mt-16 border-r-1 border-boarder">
        <Button color="primary" radius="full" onPress={handelAdd} className="mr-11">
          <input type="file" placeholder={t("AddPhoto")}/>
          <Photos />
        </Button>
      <PhotoSection />
      <ApplyChanges />
    </div>
  );
};

export default ImagesSection;
