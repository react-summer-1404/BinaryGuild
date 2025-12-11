import { Button } from "@heroui/button";
import { useMutation } from "@tanstack/react-query";
import { ErrorMessage, Field, Form, Formik } from "formik";
import moment from "moment-jalaali";
import toast, { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import Calender from "../../../../core/icons/Calender";
import instance from "../../../../core/services/interceptor";

const LinksSection = () => {
  const { t } = useTranslation();
  const errorMassage = Yup.object({
    TelegramLink: Yup.string().required(t("WriteTelegramLink")),
    LinkdinProfile: Yup.string().required(t("WriteLinkdinProfile")),
  });

  const getProfile = JSON.parse(localStorage.getItem("data"))
  const { mutate: editLink } = useMutation({
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
    onError: () => {
      toast.error(t("DontAddLink"));
    },
  });

  const handelLink = (data) => {
    console.log(data);

    let formData = new FormData();

    formData.append("TelegramLink", data.TelegramLink);
    formData.append("BirthDay", data.BirthDay);
    formData.append("LinkdinProfile", data.LinkdinProfile);
    editLink(formData);
  };
  const formatInsertDate = moment(getProfile?.birthDay).format("jYYYY/jMM/jDD");

  return (
    <>
      <Toaster />
      {getProfile && (
        <Formik
          onSubmit={handelLink}
          validationSchema={errorMassage}
          initialValues={{
            TelegramLink: getProfile?.telegramLink,
            LinkdinProfile: getProfile?.linkdinProfile,
            BirthDay: formatInsertDate,
          }}
        >
          <Form className="w-3/4 mr-2">
            <div className="w-3/4 mr-2 flex flex-wrap gap-2 mt-16 border-r-1 min-h-1/4 border-boarder">
              <div className="w-10/12 m-auto mr-9 ml-9 flex justify-start flex-nowrap gap-2">
                <div className="w-11/12 flex flex-wrap">
                  <label
                    htmlFor="TelegramLink"
                    className="font-bold w-11/12 m-auto mr-2 ml-2 text-right"
                  >
                    {t("Telegram")}
                  </label>
                  <Field
                    type="text"
                    name="TelegramLink"
                    id="TelegramLink"
                    className="border-1 mr-2 ml-2 border-boarder text-[12px] p-4 font-bold w-11/12 m-auto mt-2 rounded-3xl text-muted"
                    placeholder={t("TelegramLink")}
                  />
                  <ErrorMessage
                    name="TelegramLink"
                    component={"span"}
                    className="text-red-600 text-right font-bold text-[12px] pr-6 pt-2"
                  />
                </div>
              </div>
              <div className="w-10/12 m-auto mr-9 ml-9 flex justify-start flex-nowrap gap-2">
                <div className="w-11/12 flex flex-wrap">
                  <label
                    htmlFor="LinkdinProfile"
                    className="font-bold w-11/12 m-auto mr-2 ml-2 text-right"
                  >
                    {t("LinkedIn")}
                  </label>
                  <Field
                    type="text"
                    name="LinkdinProfile"
                    id="LinkdinProfile"
                    className="border-1 mr-2 ml-2 border-boarder text-[12px] p-4 font-bold w-11/12 m-auto mt-2 rounded-3xl text-muted"
                    placeholder={t("LinkedInLink")}
                  />
                  <ErrorMessage
                    name="LinkdinProfile"
                    component={"span"}
                    className="text-red-600 text-right font-bold text-[12px] pr-6 pt-2"
                  />
                </div>
                </div>
                <div className="w-10/12 m-auto mr-9 ml-9 flex justify-start flex-nowrap gap-2">
                  <div className="w-11/12 relative flex flex-wrap">
                    <label
                      htmlFor="BirthDay"
                      className="font-bold w-11/12 m-auto mr-2 ml-2 text-right"
                    >
                      {t("DateOfBirth")}
                    </label>
                    <Field
                      type="text"
                      name="BirthDay"
                      id="BirthDay"
                      className="border-1 mr-2 ml-2 border-boarder text-[12px] p-4 font-bold w-11/12 m-auto mt-2 rounded-3xl text-muted"
                      placeholder={t("YourDateOfBirth")}
                    />
                      <div className="absolute left-12 top-[45px] cursor-pointer">
                        <Calender />
                      </div>
                    <ErrorMessage
                      name="BirthDay"
                      component={"span"}
                      className="text-red-600 text-right font-bold text-[12px] pr-6 pt-2"
                    />
                  </div>
                </div>
              <Button
                color="primary"
                type="submit"
                radius="full"
                className="mr-11 font-persian mt-4"
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

export default LinksSection;
