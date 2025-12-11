import { Button } from "@heroui/button";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChangePassword } from "../../../core/services/api/post-data";
import toast, { Toaster } from "react-hot-toast";
import { Field, Form, Formik } from "formik";
import { useMutation } from "@tanstack/react-query";
import instance from "../../../core/services/interceptor";

const SecuritySettings = () => {
  const { t } = useTranslation();
  const [getOldPassword, setGetOldPassword] = useState("");
  const [postNewPassword, setPostNewPassword] = useState("");

  const handleOldPassword = (e) => {
    const value = e.target.value;
    setGetOldPassword(value);
  };
  const handleNewPassword = (e) => {
    const value = e.target.value;
    setPostNewPassword(value);
  };

  const { mutate: allPassword } = useMutation({
    mutationFn: async () => {
      const response = await instance.post(
        "/SharePanel/ChangePassword",
        { oldPassword: getOldPassword, newPassword: postNewPassword },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("responseeeeeee", response);
      return response;
    },
    onSuccess: () => {
      toast.success(t("خوبههههه"));
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const handleAllPassword = (oldPassword, newPassword) => {
    allPassword({ oldPassword, newPassword });
  };
  console.log("getOldPassword", getOldPassword);
  console.log("postNewPassword", postNewPassword);

  return (
    <div className=" flex w-11/12 m-auto mt-5 gap-8 flex-wrap">
      <Toaster />
      <Formik
        onSubmit={handleAllPassword}
        initialValues={{
          oldPassword: getOldPassword,
          newPassword: postNewPassword,
        }}
      >
        <Form className="w-full flex flex-wrap gap-8">
          <div className="border-b-2 border-boarder h-4 w-full">
            <p className="text-muted p-1 text-center mb-2 w-42 m-auto bg-forgetpassbtn font-persian rounded-[14px] ">
              {t("ChangePassword")}
            </p>
          </div>
          <div className="flex w-11/12 m-auto justify-between flex-nowrap">
            <div className="w-[45%] flex flex-wrap">
              <label
                htmlFor="oldPassword"
                className="font-bold w-11/12 m-auto text-start"
              >
                {t("CurrentPassword")}
              </label>
              <Field
                className="border-1 border-boarder text-[12px] font-bold p-3 w-11/12 m-auto mt-2 rounded-3xl text-muted"
                type="password"
                name="oldPassword"
                id="oldPassword"
                value={getOldPassword}
                onChange={handleOldPassword}
                placeholder={t("PsswordUsing")}
              />
            </div>
            <div className="w-[45%] flex flex-wrap">
              <label
                htmlFor="newPassword"
                className="font-bold w-11/12 m-auto text-start"
              >
                {t("NewPassword")}
              </label>
              <Field
                className="border-1 border-boarder text-[12px] font-bold p-3 w-11/12 m-auto mt-2 rounded-3xl text-muted"
                type="password"
                name="newPassword"
                id="newPassword"
                value={postNewPassword}
                onChange={handleNewPassword}
                placeholder={t("Password")}
              />
            </div>
          </div>
          <Button
            color="primary"
            radius="full"
            type="submit"
            className="font-persian mr-15"
          >
            {" "}
            {t("SaveChanges")}{" "}
          </Button>
        </Form>
      </Formik>
      <div className="flex w-full m-auto gap-8 flex-wrap">
        <div className="border-b-2 border-boarder h-4 w-full">
          <p className="text-muted p-1 text-center mb-2 w-42 m-auto bg-forgetpassbtn font-persian rounded-[14px] ">
            {t("TwoStepVerification")}
          </p>
        </div>
        <div className="w-11/12 mr-16 flex gap-2 flex-wrap">
          <p className="font-persian">{t("TwoStepLogin")} </p>
          <input type="checkbox" className="w-4 " />
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
