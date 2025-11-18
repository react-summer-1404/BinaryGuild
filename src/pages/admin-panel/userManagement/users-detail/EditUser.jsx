import React from "react";
import { Formik, Form, Field } from "formik";
import { useTranslation } from "react-i18next";
import { editUser } from "../../../../core/services/api/adminPanel/update-data";

const EditUser = ({ onCloseEdit, usersDetails }) => {
  const { t } = useTranslation();

  const handleEdit = async (values) => {
    console.log("update", values);
    try {
      const response = await editUser({
        id: usersDetails.id,
        fName: values.fName,

      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex flex-col gap-5 bg-[#686363] shadow-2xl shadow-black border-white h-[70%] top-30 right-[30%] fixed w-[55%] z-101   ">
          <div
            onClick={onCloseEdit}
            className=" p-1 rounded-small bg-[#c40101] cursor-pointer w-6 h-6 "
          ><img src="../../../../src/assets/icons/close (2).png" alt="" /></div>
      <div className="border border-white w-full h-full">
        <h2>Edit Users info</h2>
        <Formik
          initialValues={{
            fName: usersDetails.fName,
            lName: usersDetails.lName,
            userName: usersDetails.userName,
            nationalCode: usersDetails.nationalCode,
            phoneNumber: usersDetails.phoneNumber,
            gmail: usersDetails.gmail,
          }}
          onSubmit={handleEdit}
        >
          <Form>
            <div className="border border-white w-[80%] m-auto flex gap-5 h-20">
              <div className="flex items-center gap-3">
                <label htmlFor="fName">{t("nameOfUser")}</label>
                <Field
                  type="text"
                  name="fName"
                  className="border border-black focus:outline-0"
                ></Field>
              </div>
              <div className="flex items-center gap-3">
                <label htmlFor="lName">{t("lastNameOfUser")}</label>
                <Field
                  type="text"
                  name="lName"
                  className="border border-black focus:outline-0"
                ></Field>
              </div>
            </div>

            <div className="border border-white w-[80%] m-auto flex gap-5 h-20">
              <div className="flex items-center gap-3">
                <label htmlFor="userName">{t("userName")}</label>
                <Field
                  type="text"
                  name="userName"
                  className="border border-black focus:outline-0"
                ></Field>
              </div>
            </div>

            <div className="border border-white w-[80%] m-auto flex gap-5 h-20">
              <div className="flex items-center gap-3">
                <label htmlFor="nationalCode">{t("national code")}</label>
                <Field
                  type="text"
                  name="nationalCode"
                  className="border border-black focus:outline-0"
                ></Field>
              </div>
              <div className="flex items-center gap-3">
                <label htmlFor="phoneNumber">{t("phoneNumber")}</label>
                <Field
                  type="text"
                  name="phoneNumber"
                  className="border border-black focus:outline-0"
                ></Field>
              </div>
            </div>

            <div className="border border-white w-[80%] m-auto flex gap-5 h-20">
              <div className="flex items-center gap-3">
                <label htmlFor="gmail">{t(" email")}</label>
                <Field
                  type="email"
                  name="gmail"
                  className="border border-black focus:outline-0"
                ></Field>
              </div>
              {/* <div className="flex items-center gap-3">
                <label htmlFor="gender">{t("gender")}</label>
                <Field type="text" name="gender" className="border border-black focus:outline-0"></Field>
              </div> */}
            </div>

            <div className="border border-white flex justify-center items-center gap-3">
              <button type="submit">confirm</button>
              <button type="button" onClick={onCloseEdit}>{t("cancel")}</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EditUser;
