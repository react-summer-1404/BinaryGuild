import React from "react";
import ThreePoints from "../../../../../core/icons/ThreePoints";
import { Button } from "@heroui/button";
import { useMutation } from "@tanstack/react-query";
import instance from "../../../../../core/services/interceptor";
import { SelectProfileImage } from "../../../../../core/services/api/post-data";
import toast from "react-hot-toast";
import { Formik } from "formik";

const PhotoSection = () => {
  const { mutate: selectImage } = useMutation({
    mutationFn: async (ImageId) => {
      const response = await instance.post(
        "/SharePanel/SelectProfileImage",
        {
          params: { ImageId: ImageId },
        },
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("responseeeeeeeeeeeee",response)
      return response
    },

    onSuccess:(success)=>{
      toast("Select profile image");
      console.log(success, "success");
    }
  });

  const handelSelect = ()=>{
    console.log(data)
  }
  return (
    <>
    <Formik onSubmit={handelSelect}>
    <div className="flex flex-wrap gap-4 mr-11 mt-4">
      <Button type="submit" className="size-46">
        <img src="/src/assets/icons/Peppe – 07 (1).svg" className="size-46" />
      </Button>
      <Button className="size-46" >
        <div className="relative">
          <img src="/src/assets/icons/Hand.svg" className="size-46" />
          <div className="absolute top-5 right-1.5">
            <ThreePoints />
          </div>
        </div>
      </Button>
      <Button className="size-46">
        <img src="/src/assets/icons/Lady.svg" className="size-46" />
      </Button>
      <Button className="size-46">
        <img src="/src/assets/icons/Froge – 3.svg" className="size-46" />
      </Button>
      <Button className="size-46">
        <img src="/src/assets/icons/Smeed – 02.svg" className="size-46" />
      </Button>
    </div>
    </Formik>
    </>
  );
};

export default PhotoSection;
