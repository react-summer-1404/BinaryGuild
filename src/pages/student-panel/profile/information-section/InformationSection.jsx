import { Button, Radio, RadioGroup } from "@heroui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ErrorMessage, Field, Form, Formik } from "formik";
import moment from "moment-jalaali";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import Calender from "../../../../core/icons/Calender";
import { UserData } from "../../../../core/services/api/get-data";
import instance from "../../../../core/services/interceptor";


const InformationSection = () => {
  const { t } = useTranslation();
  const [setChangeGender] = React.useState("Man");
  
  const gender = [t("Man"), t("Woman")];
  
  const errorMassage = Yup.object({
    LName: Yup.string().required(t("WriteLastName")),
    FName: Yup.string().required(t("WriteFirstName")),
    UserAbout: Yup.string().required(t("WriteUserAbout")),
    HomeAdderess: Yup.string().required(t("WriteHomeAdderess")),
    BirthDay: Yup.string().required(t("WriteBirthDay")),
    phoneNumber: Yup.string().required(t("WriteMobileNumber")),
    email: Yup.string().required(t("WriteEmail")),
    nationalCode: Yup.string().required(t("WriteNationalCode")),
  });
  
  const { data: getProfile } = useQuery({
    queryKey: ["PROFILE"],
    queryFn: UserData,
    refetchOnWindowFocus: false,
    refetchOnmount: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchInterval: false,
    refetchIntervalInBackground: false,
    retry: false,
  });

  // const getProfile = localStorage.getItem("profileData")

  console.log("getProfile", getProfile);
  const { mutate: editProfile } = useMutation({
    mutationFn: async (data) => {
      const response = await instance.put(
        "/SharePanel/UpdateProfileInfo",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("response", response);
      return response;
    },

    onSuccess: () => {
      toast.success(t("AddLink"));
    },
  });

  const handelEdit = (data) => {
    console.log(data);

    let formData = new FormData();

    formData.append("LName", data.LName);
    formData.append("FName", data.FName);
    formData.append("UserAbout", data.UserAbout);
    formData.append("ReceiveMessageEvent", data.ReceiveMessageEvent);
    formData.append("HomeAdderess", data.HomeAdderess);
    formData.append("Gender", data.Gender);
    formData.append("BirthDay", data.BirthDay);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("nationalCode", data.nationalCode);
    formData.append("email", data.email);
    editProfile(formData);
  };
  const formatInsertDate = moment(getProfile?.birthDay).format("jYYYY/jMM/jDD");

  return (
    <>
      <Toaster />
      {getProfile && (
        <Formik
          onSubmit={handelEdit}
          validationSchema={errorMassage}
          initialValues={{
            LName: getProfile?.lName,
            FName: getProfile?.fName,
            UserAbout: getProfile?.userAbout,
            ReceiveMessageEvent: getProfile?.ReceiveMessageEvent,
            HomeAdderess: getProfile?.homeAdderess,
            Gender: getProfile?.Gender,
            BirthDay: formatInsertDate,
            phoneNumber: getProfile?.phoneNumber,
            nationalCode: getProfile?.nationalCode,
            email: getProfile?.email,
          }}
        >
          <Form className="w-3/4 mr-2">
            <div className="w-full flex flex-wrap gap-2 mb-16 mt-16 border-r-1 border-boarder">
              <div className="w-11/12 m-auto flex justify-start flex-nowrap gap-2">
                <div className="w-2/5 flex flex-wrap">
                  <label
                    htmlFor="FName"
                    className="font-bold w-11/12 m-auto text-start"
                  >
                    {t("Name")}
                  </label>
                  <Field
                    className="border-1 border-boarder text-[12px] font-bold p-3 w-11/12 m-auto mt-2 rounded-3xl text-muted"
                    name="FName"
                    id="FName"
                    placeholder={t("YourName")}
                  />
                  <ErrorMessage
                    name="FName"
                    component={"span"}
                    className="text-red-600 text-start font-bold text-[12px] pr-6 pt-2"
                  />
                </div>
                <div className="w-2/5 flex flex-wrap">
                  <label
                    htmlFor="LName"
                    className="font-bold w-11/12 m-auto text-start"
                  >
                    {t("LastName")}
                  </label>
                  <Field
                    className="border-1 border-boarder text-[12px] font-bold p-3 w-11/12 m-auto mt-2 rounded-3xl text-muted"
                    name="LName"
                    id="LName"
                    placeholder={t("YourLastName")}
                  />
                  <ErrorMessage
                    name="LName"
                    component={"span"}
                    className="text-red-600 text-start font-bold text-[12px] pr-6 pt-2"
                  />
                </div>
              </div>
              <div className="w-10/12 m-auto mr-9 ml-9 gap-2">
                <div className="w-11/12 flex flex-wrap">
                  <label
                    htmlFor="UserAbout"
                    className="font-bold w-11/12 m-auto mr-2 ml-2 text-start"
                  >
                    {t("AboutMe")}
                  </label>
                  <Field
                    id="UserAbout"
                    name="UserAbout"
                    className="border-1 mr-2 ml-2 border-boarder text-[12px] p-2 font-bold h-[124px] w-11/12 m-auto mt-2 rounded-3xl text-muted"
                    placeholder={t("AboutYourself")}
                    type="text"
                  />
                  <ErrorMessage
                    name="UserAbout"
                    component={"span"}
                    className="text-red-600 text-start font-bold text-[12px] pr-6 pt-2"
                  />
                </div>
              </div>
              <div className="w-11/12 m-auto flex justify-start flex-nowrap gap-2">
                <div className="w-2/5 flex flex-wrap">
                  <label
                    htmlFor="phoneNumber"
                    className="font-bold w-11/12 m-auto text-start"
                  >
                    {t("MobileNumber")}
                  </label>
                  <Field
                    name="phoneNumber"
                    id="phoneNumber"
                    className="border-1 border-boarder text-[12px] font-bold p-3 w-11/12 m-auto mt-2 rounded-3xl text-muted"
                    placeholder={t("YourMobileNumber")}
                    type="number"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component={"span"}
                    className="text-red-600 text-start font-bold text-[12px] pr-6 pt-2"
                  />
                </div>
                <div className="w-2/5 flex flex-wrap">
                  <label
                    htmlFor="nationalCode"
                    className="font-bold w-11/12 m-auto text-start"
                  >
                    {t("NationalCode")}
                  </label>
                  <Field
                    name="nationalCode"
                    id="nationalCode"
                    className="border-1 border-boarder text-[12px] font-bold p-3 w-11/12 m-auto mt-2 rounded-3xl text-muted"
                    placeholder={t("YourNationalCode")}
                    type="number"
                  />
                  <ErrorMessage
                    name="nationalCode"
                    component={"span"}
                    className="text-red-600 text-start font-bold text-[12px] pr-6 pt-2"
                  />
                </div>
              </div>
              <div className="w-11/12 m-auto flex justify-start flex-nowrap gap-2">
                <div className="w-2/5 flex flex-wrap">
                  <label
                    htmlFor="BirthDay"
                    className="font-bold w-11/12 m-auto text-start"
                  >
                    {t("DateOfBirth")}
                  </label>
                  <div className="w-full">
                    <div className="w-full relative ">
                      <Field
                        type="text"
                        className="border-1 border-boarder text-[12px] font-bold p-3 w-11/12 m-auto mt-2 rounded-3xl text-muted"
                        placeholder={t("YourDateOfBirth")}
                        id="BirthDay"
                        name="BirthDay"
                        format={formatInsertDate}
                      />
                      <div className="absolute left-6 top-[17px] cursor-pointer">
                        <Calender />
                        {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />; */}
                      </div>
                    </div>
                    <ErrorMessage
                      name="BirthDay"
                      component={"span"}
                      className="text-red-600 text-start font-bold text-[12px] pl-18 pt-2"
                    />
                  </div>
                </div>
                <div className="w-2/5 flex flex-wrap">
                  <label
                    htmlFor="Gender"
                    className="font-bold w-11/12 m-auto text-start"
                  >
                    {t("Gender")}
                  </label>
                  <div className="w-full flex flex-nowrap justify-between">
                    <RadioGroup
                      defaultValue="مرد"
                      orientation="horizontal"
                      onValueChange={setChangeGender}
                      classNames={{ wrapper: "flex m-auto flex-nowrap" }}
                    >
                      {gender.map((genders) => (
                        <Radio
                          key={genders}
                          className="capitalize text-text"
                          value={genders}
                          classNames={{ label: "text-text" }}
                        >
                          {genders}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              </div>
              <div className="w-10/12 m-auto mr-9 ml-9 flex justify-start flex-nowrap gap-2">
                <div className="w-11/12 flex flex-wrap">
                  <label
                    htmlFor="email"
                    className="font-bold w-11/12 m-auto mr-2 ml-2 text-start"
                  >
                    {t("Email")}
                  </label>
                  <Field
                    type="text"
                    className="border-1 mr-2 ml-2 border-boarder text-[12px] p-2 font-bold w-11/12 m-auto mt-2 rounded-3xl text-muted"
                    placeholder={t("YourEmail")}
                    id="email"
                    name="email"
                  />
                  <ErrorMessage
                    name="email"
                    component={"span"}
                    className="text-red-600 text-start font-bold text-[12px] pr-4 pt-2"
                  />
                </div>
              </div>
              <div className="w-10/12 m-auto mr-9 ml-9 flex justify-start flex-nowrap gap-2">
                <div className="w-11/12 flex flex-wrap">
                  <label
                    htmlFor="HomeAdderess"
                    className="font-bold w-11/12 m-auto mr-2 ml-2 text-start"
                  >
                    {t("Address")}
                  </label>
                  <Field
                    type="text"
                    className="border-1 mr-2 ml-2 border-boarder text-[12px] p-2 font-bold w-11/12 m-auto mt-2 rounded-3xl text-muted"
                    placeholder={t("YourAddress")}
                    id="HomeAdderess"
                    name="HomeAdderess"
                  />
                  <ErrorMessage
                    name="HomeAdderess"
                    component={"span"}
                    className="text-red-600 text-start font-bold text-[12px] pr-6 pt-2"
                  />
                </div>
              </div>
              <Button
                color="primary"
                radius="full"
                type="submit"
                className="mr-11 font-persian mt-4 ml-12"
                // disabled={editProfile.isPending}
              >
                {t("ApplyChanges")}
              </Button>
            </div>
          </Form>
        </Formik>
      )}
    </>
  );
};

export default InformationSection;
