import { Button } from "@heroui/button";
import { useMutation } from "@tanstack/react-query";
import { Field, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { Form } from "react-router-dom";
import instance from "../../../../../core/services/interceptor";
import { useState } from "react";

const PhotoSection = () => {
  const [image] = useState();
  const { mutate: selectImage } = useMutation({
    mutationFn: async (formData) => {
      const response = await instance.post(
        "/SharePanel/SelectProfileImage",
        formData
      );
      return response;
    },

    onSuccess: () => {
      toast.success("Select profile image");
    },
    onError: () => {
      toast.error("noooooooooooo");
    },
  });
  const userImage = JSON.parse(localStorage.getItem("data"));

  const handelSelect = (data) => {
    let formData = new FormData();
    formData.append("ImageId", data.ImageId);

    selectImage(formData);
  };
  return (
    <div>
      <Toaster />
      <Formik
        onSubmit={handelSelect}
        // initialValues={{
        //   ImageId: image,
        // }}
      >
        <Form>
          <div className="flex flex-wrap gap-4 mr-11 mt-4">
            {/* {userImage.userImage?.map((value) => {
              return (
                <>
                  <Button className="bg-boarder size-46">
                    <img src={value.puctureAddress} />
                    <label
                      htmlFor="ImageId"
                      className="hidden"
                    >
                      <Field
                        id="ImageId"
                        name="ImageId"
                        className="hidden"
                        value={value.id}
                      />
                    </label>
                  </Button>
                </>
              );
            })} */}
            <Button>
              <img src={userImage.userImage?.puctureAddress}/>
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default PhotoSection;
