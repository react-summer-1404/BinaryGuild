import { Button } from "@heroui/button";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Photos from "../../../../core/icons/Photos";
import PhotoSection from "./photo-section/PhotoSection";
import ApplyChanges from "../../../../components/common/button/ApplyChanges";
import { Link, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import instance from "../../../../core/services/interceptor";
import { Field, Form, Formik } from "formik";
import { AddProfileImage } from "../../../../core/services/api/post-data";

const ImagesSection = () => {
  const { t } = useTranslation();

  const { mutate: addImage } = useMutation({
    mutationFn: async (formFile) => {
      const response = await instance.post("/SharePanel/AddProfileImage",formFile );
      console.log("responseeeeeeeeee", response);
    },
    onSuccess: (success) => {
      console.log("yeeeeeeeeeeeesssssssss", success);
    },
    onError: (error) => {
      console.log("errorrrrrrrrrrr", error);
    },
  });

  const handelAdd = (data) => {
    addImage(data);
  };

  return (
    <div className="w-3/4 mr-2 flex flex-wrap gap-2 mt-16 border-r-1 border-boarder">
      <Formik onSubmit={handelAdd} initialValues={{ formFile: "" }}>
        <Form>
          <label
            htmlFor="images"
            className="mr-11 w- rounded-3xl bg-blue flex p-3 gap-2"
          >
            <Field
              type="file"
              id="images"
              name="images"
              onClick={handelAdd}
              className="hidden"
            />
            <Photos />
            <p className="text-white">{t("AddPhoto")}</p>
          </label>
          <PhotoSection />
          <ApplyChanges />
        </Form>
      </Formik>
    </div>
  );
};

export default ImagesSection;
