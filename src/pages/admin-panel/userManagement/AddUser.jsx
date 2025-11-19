import React from "react";
import { addUser } from "../../../core/services/api/adminPanel/post-data";
import { useTranslation } from "react-i18next";
import { Field, Formik, Form } from "formik";
import toast, { Toaster } from "react-hot-toast";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().min(2).required("name must be written"),
  lastName: Yup.string().min(2).required("lname must be written"),

  gmail: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("please enter pass"),
});

const AddUser = ({ onSuccess, onClose }) => {
  const { t } = useTranslation();

  const handleSend = async (values) => {
    console.log("form value", values);
    try {
      const response = await addUser(
        values.lastName,
        values.firstName,
        values.gmail,
        values.password,
        values.phoneNumber,
        values.isStudent,
        values.isTeacher
      );
      onSuccess();
      toast.success(t("UserAddedSuccessfully"));

      console.log("new user", response);
    } catch (error) {
      console.log("error", error);
      if (error.response.status === 400) {
        toast.error(t("User is already exists"));
      }
    }
  };

  return (
    <div className="p-3 w-[40%] overflow-scroll bg-black-900 shadow-[#676767] shadow-medium h-7/8  right-130 top-10 fixed z-20 ">
      <Toaster />
      <div className="border border-[#888] p-4">
        <div className="flex justify-between">
          <h3 className=" p-2 text-start ">{t("addUserTitle")}</h3>
          <div
            onClick={onClose}
            className=" p-1 rounded-small bg-[#5f0505] cursor-pointer w-6 h-6 "
          ><img src="../../../../src/assets/icons/close.png" alt="" /></div>
        </div>

        {/* form */}

        <Formik
          initialValues={{
            lastName: "",
            firstName: "",
            gmail: "",
            password: "",
            phoneNumber: "",
            isStudent: false,
            isTeacher: false,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSend}
          className="border border-white"
        >
          {({ errors, touched }) => (
            <Form>
              <div className=" flex flex-col flex-start mt-4">
                <label className=" text-start " htmlFor="firstName">
                  {t("nameOfUser")}
                </label>
                <Field
                  className="border border-[#888] hover:outline-0 h-7 rounded-small mt-3"
                  name="firstName"
                  type="text"
                />
                {errors.firstName && touched.firstName ? (
                  <div>{errors.firstName}</div>
                ) : null}
              </div>
              <div className=" flex flex-col flex-start mt-5">
                <label className=" text-start " htmlFor="lastName">
                  {t("lastNameOfUser")}
                </label>
                <Field
                  className="border border-[#888] h-7 hover:outline-0 rounded-small mt-3"
                  name="lastName"
                  type="text"
                />
                {errors.lastName && touched.lastName ? (
                  <div>{errors.lastName}</div>
                ) : null}
              </div>

              <div className=" flex flex-col flex-start mt-5">
                <label className=" text-start " htmlFor="gmail">
                  {t("gmail")}
                </label>
                <Field
                  className="border border-[#888] hover:outline-0 h-7 rounded-small mt-3"
                  name="gmail"
                  type="email"
                />
                {errors.gmail && touched.gmail ? (
                  <div>{errors.gmail}</div>
                ) : null}
              </div>

              <div className=" flex flex-col flex-start mt-5">
                <label className=" text-start " htmlFor="phoneNumber">
                  {t("phoneNumber")}
                </label>
                <Field
                  className="border border-[#888] hover:outline-0 h-7 rounded-small mt-3"
                  name="phoneNumber"
                  type="text"
                />
              </div>

              <div className=" flex flex-col flex-start mt-5">
                <label className=" text-start " htmlFor="password">
                  {t("password")}
                </label>
                <Field
                  className="border border-[#888] hover:outline-0 h-7 rounded-small mt-3"
                  name="password"
                  type="password"
                />
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
              </div>

              {/* <div className=" flex flex-col flex-start mt-5">
                <p className=" text-start ">{t("confirmRole")}</p>
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2">
                    <label htmlFor="isStudent"></label>{" "}
                    <Field
                      className="border border-[#888] h-7 rounded-small mt-3"
                      type="checkbox"
                      name="isStudent"
                    />
                    {t("student")}
                  </div>

                  <div className="flex items-center gap-2">
                    <label htmlFor="isTeacher"></label>
                    <Field
                      className="border border-[#888] h-7 rounded-small mt-3"
                      type="checkbox"
                      name="isTeacher"
                    />{" "}
                    {t("teacher")}
                  </div>
                </div>
              </div> */}

              <div className="flex justify-center mt-10 gap-4">
                <button
                  type="submit"
                  className=" w-18 p-2 bg-blue font-bold cursor-pointer rounded-small"
                >
                  {t("confirm")}
                </button>

                <button
                  onClick={onClose}
                  type="button"
                  className="border-2 border-[#c40101]  w-18 p-2 cursor-pointer rounded-small "
                >
                  {t("cancel")}
                </button>
              </div>
            </Form>
          )}
        </Formik>

      </div>
    </div>
  );
};

export default AddUser;
