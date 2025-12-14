import { useMutation } from "@tanstack/react-query";
import { Field, Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import ApplyChanges from "../../../../components/common/button/ApplyChanges";
import Photos from "../../../../core/icons/Photos";
import instance from "../../../../core/services/interceptor";
import PhotoSection from "./photo-section/PhotoSection";
import { Button } from "@heroui/button";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const ImagesSection = () => {
  const { t } = useTranslation();
  const [image, setImage] = useState("");

  const handleNewImage = (e) => {
    const value = e.target.value;
    setImage(value);
  };
  const { mutate: selectImage } = useMutation({
    mutationFn: async (ImageId) => {
      const response = await instance.post(
        "/SharePanel/SelectProfileImage",{
        data : ImageId
      });
      return response;
    },

    onSuccess: () => {
      toast.success("Select profile image");
    },
    onError: () => {
      toast.error("noooooooooooo");
    },
  });
  const handelSelect = (ImageId) => {
    selectImage(ImageId);
  };

  const { mutate: addImage } = useMutation({
    mutationFn: async () => {
      const response = await instance.post(
        "/SharePanel/AddProfileImage",
        { formFile: image },
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("responseeeeeeeeeeee", response);
      return response;
    },
    onSuccess: () => {
      toast.success("yeeeeeeeees");
    },
    onError: () => {
      toast.error("noooooooooo");
    },
  });

  
  const handelAdd = (formFile) => {
    addImage({ formFile });
  };
  const userImage = JSON.parse(localStorage.getItem("data"));
  
  return (
    <div className="w-3/4 mr-2 flex flex-wrap gap-2 mt-16 border-r-1 border-boarder">
      <Toaster />
      <Formik onSubmit={handelAdd} initialValues={{ formFile: image }}>
        <Form>
          <Button
            type="submit"
            className="mr-11 w-5/12 rounded-3xl bg-blue flex p-3 gap-2"
          >
            <label htmlFor="formFile" className="w-full rounded-3xl flex gap-2">
              <Field
                type="file"
                id="formFile"
                name="formFile"
                className="hidden"
                value={image}
                onChange={handleNewImage}
              />
              <Photos />
              <p className="font-persian mt-1 text-white">{t("AddPhoto")}</p>
            </label>
          </Button>
        </Form>
      </Formik>
      <Formik
        onSubmit={handelSelect}
        initialValues={{
          ImageId: userImage.userImage?.id,
        }}
      >
        <Form>
          <div className="flex flex-wrap gap-4 mr-11 mt-4">
            {userImage.userImage?.map((value) => {
              return (
                <>
                  <Button className="bg-boarder size-46">
                  <label htmlFor="ImageId" className="hidden">
                    <Field
                      id="ImageId"
                      name="ImageId"
                      className="hidden"
                      value={value.id}
                    />
                  </label>
                    <img src={value.puctureAddress} />
                  </Button>
                </>
              );
            })}
          </div>
          <Button
            color="primary"
            radius="full"
            type="submit"
            className="mr-11 font-persian mt-4 ml-12"
          >
            {t("ApplyChanges")}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default ImagesSection;
