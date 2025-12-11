import { Button } from "@heroui/button";
import { useMutation } from "@tanstack/react-query";
import { Formik } from "formik";
import toast from "react-hot-toast";
import { Form } from "react-router-dom";
import instance from "../../../../../core/services/interceptor";

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
      console.log("responseeeeeeeeeeeee", response);
      return response;
    },

    onSuccess: (success) => {
      toast("Select profile image");
      console.log(success, "success");
    },
  });
  const userImage = JSON.parse(localStorage.getItem("data"));

  console.log("userDataaaaaaaaaa", userImage);
  const handelSelect = (data) => {
    console.log(data);
    selectImage(data);
  };
  console.log("imaaaaaaaaaaaaageeeeeeeeeee", userImage.userImage);
  return (
    <>
      <Formik
        onSubmit={handelSelect}
        initialValues={{
          ImageId: "",
        }}
      >
        <Form>
          <div className="flex flex-wrap gap-4 mr-11 mt-4">
            {userImage.userImage?.map((value) => {
              return (
                <Button type="submit" className="bg-boarder size-46">
                  <img src={value.puctureAddress} />
                </Button>
              );
            })}
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default PhotoSection;
