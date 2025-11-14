import { Button } from "@heroui/button";
import { Checkbox } from "@heroui/react";
import { Field, Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import Calender from "../../../../core/icons/Calender";
import { useQuery } from "@tanstack/react-query";
import { AddProfileInfo } from "../../../../core/services/api/put-data";
import { useEffect, useState } from "react";

const InformationSection = () => {
  const { t } = useTranslation();
  const [profile, setProfile] = useState({});

  const { data: updateProfile, refetch: refetchProfileInfo } = useQuery({
    queryKey: ["UPDATE_PROFILE_INFORMATION"],
    queryFn: () => AddProfileInfo({ params: profile }),
  });


  useEffect(() => {
    refetchProfileInfo;
  }, []);
  return (
    <Formik
      initialValues={{
        fName: "",
        lName: "",
        aboutMe: "",
        phoneNumber: "",
        nationalCode: undefined,
        dateOfBirth: "",
        gender: "",
        email: "",
        homeAddress: "",
      }}
    >
      <Form className="w-3/4 mr-2">
        <div className="w-full flex flex-wrap gap-2 mb-16 mt-16 border-r-1 border-boarder">
          <div className="w-11/12 m-auto flex justify-start flex-nowrap gap-2">
            <div className="w-2/5 flex flex-wrap">
              <label
                htmlFor="fName"
                className="font-bold w-11/12 m-auto text-right"
              >
                {t("Name")}
              </label>
              <Field
                className="border-1 border-boarder text-[12px] font-bold p-3 w-11/12 m-auto mt-2 rounded-3xl text-muted"
                name="fName"
                id="fName"
                placeholder={t("YourName")}
              />
            </div>
            <div className="w-2/5 flex flex-wrap">
              <label
                htmlFor="lName"
                className="font-bold w-11/12 m-auto text-right"
              >
                {t("LastName")}
              </label>
              <Field
                className="border-1 border-boarder text-[12px] font-bold p-3 w-11/12 m-auto mt-2 rounded-3xl text-muted"
                name="lName"
                id="lName"
                placeholder={t("YourLastName")}
              />
            </div>
          </div>
          <div className="w-10/12 m-auto mr-9 ml-9 gap-2">
            <div className="w-11/12 flex flex-wrap">
              <label className="font-bold w-11/12 m-auto mr-2 ml-2 text-right">
                {t("AboutMe")}
              </label>
              <Field
                id="aboutMe"
                name="aboutMe"
                className="border-1 mr-2 ml-2 border-boarder text-[12px] p-2 font-bold h-[124px] w-11/12 m-auto mt-2 rounded-3xl text-muted"
                placeholder={t("AboutYourself")}
                type="text"
              />
            </div>
          </div>
          <div className="w-11/12 m-auto flex justify-start flex-nowrap gap-2">
            <div className="w-2/5 flex flex-wrap">
              <label className="font-bold w-11/12 m-auto text-right">
                {t("MobileNumber")}
              </label>
              <Field
                name="phoneNumber"
                id="phoneNumber"
                className="border-1 border-boarder text-[12px] font-bold p-3 w-11/12 m-auto mt-2 rounded-3xl text-muted"
                placeholder={t("YourMobileNumber")}
                type="text"
              />
            </div>
            <div className="w-2/5 flex flex-wrap">
              <label className="font-bold w-11/12 m-auto text-right">
                {t("NationalCode")}
              </label>
              <Field
                name="nationalCode"
                id="nationalCode"
                className="border-1 border-boarder text-[12px] font-bold p-3 w-11/12 m-auto mt-2 rounded-3xl text-muted"
                placeholder={t("YourNationalCode")}
                type="text"
              />
            </div>
          </div>
          <div className="w-11/12 m-auto flex justify-start flex-nowrap gap-2">
            <div className="w-2/5 flex flex-wrap">
              <label className="font-bold w-11/12 m-auto text-right">
                {t("DateOfBirth")}
              </label>
              <div className="w-full relative ">
                <Field
                  type="text"
                  className="border-1 border-boarder text-[12px] font-bold p-3 w-11/12 m-auto mt-2 rounded-3xl text-muted"
                  placeholder={t("YourDateOfBirth")}
                  id="dateOfBirth"
                  name="dateOfBirth"
                  format="YYYY/MM/DD"
                />
                <div className="absolute left-6 top-[17px] ">
                  <Calender />
                </div>
              </div>
            </div>
            <div className="w-2/5 flex flex-wrap">
              <label className="font-bold w-11/12 m-auto text-right">
                {t("Gender")}
              </label>
              <div className="w-full flex gap-2">
                <div className="w-1/5 flex flex-nowrap gap-1 ">
                  <label className="m-auto text-right">{t("Man")}</label>
                  <Checkbox
                    defaultSelected
                    classNames={{ wrapper: "rounded-[12px]" }}
                    className="mt-0.5"
                  ></Checkbox>
                </div>
                <div className="w-1/5 flex flex-nowrap gap-1">
                  <label className="m-auto text-right">{t("Woman")}</label>
                  <Checkbox
                    defaultSelected
                    classNames={{ wrapper: "rounded-[12px]" }}
                    className="mt-0.5"
                  ></Checkbox>
                </div>
                <p className="text-blue m-auto mt-3 cursor-pointer">
                  {t("choose")}
                </p>
              </div>
            </div>
          </div>
          <div className="w-10/12 m-auto mr-9 ml-9 flex justify-start flex-nowrap gap-2">
            <div className="w-11/12 flex flex-wrap">
              <label className="font-bold w-11/12 m-auto mr-2 ml-2 text-right">
                {t("Email")}
              </label>
              <Field
                type="text"
                className="border-1 mr-2 ml-2 border-boarder text-[12px] p-2 font-bold w-11/12 m-auto mt-2 rounded-3xl text-muted"
                placeholder={t("YourEmail")}
              />
            </div>
          </div>
          <div className="w-10/12 m-auto mr-9 ml-9 flex justify-start flex-nowrap gap-2">
            <div className="w-11/12 flex flex-wrap">
              <label className="font-bold w-11/12 m-auto mr-2 ml-2 text-right">
                {t("Address")}
              </label>
              <Field
                type="text"
                className="border-1 mr-2 ml-2 border-boarder text-[12px] p-2 font-bold w-11/12 m-auto mt-2 rounded-3xl text-muted"
                placeholder={t("YourAddress")}
                id="homeAddress"
                name="homeAddress"
              />
            </div>
          </div>
          <Button
            color="primary"
            radius="full"
            className="mr-11 font-persian mt-4"
          >
            {t("ApplyChanges")}
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default InformationSection;
