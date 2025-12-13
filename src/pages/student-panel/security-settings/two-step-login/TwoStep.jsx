import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import instance from "../../../../core/services/interceptor";
import { Field, Form, Formik } from "formik";
import { Button } from "@heroui/button";

const TwoStep = () => {
  const { t } = useTranslation();
  const [getTelegramUsername, setGetTelegramUsername] = useState("");
  const [getEmail, setGetEmail] = useState("");
  const [value, setValue] = useState(false);
  const [block, setBlock] = useState("hidden");
  const [copy, setCopy] = useState("");

  const handleUserName = (e) => {
    const value = e.target.value;
    setGetTelegramUsername(value);
  };
  const handleEmail = (e) => {
    const value = e.target.value;
    setGetEmail(value);
  };
  const handleBlock = () => {
    setValue(!value);
    if (!value) {
      setBlock("block");
    } else {
      setBlock("hidden");
    }
  };
  const handleCopy = async () => {
    const url = "https://t.me/ReactRHBot";
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
      }
      console.log(url);
      setCopy(url);
      toast.success(t("copied"));
      setTimeout(() => {
        setCopy(false);
      }, 10);
    } catch (error) {
      console.log(error);
    }
  };

  const { mutate: editSecurity } = useMutation({
    mutationFn: async () => {
      const response = await instance.put("/SharePanel/EditSecurity", {
        twoStepAuth: value,
        recoveryEmail: getEmail,
        telegramUsername: getTelegramUsername,
      });
      return response;
    },
    onSuccess: () => {
      toast.success(t("SuccessfullySaved2"));
    },
    onError: () => {
      toast.error(t("ProblemSaving2"));
    },
  });
  const handleEditSecurity = ({
    twoStepAuth,
    recoveryEmail,
    telegramUsername,
  }) => {
    editSecurity({
      twoStepAuth,
      recoveryEmail,
      telegramUsername,
    });
    console.log(
      "twoStepAuth recoveryEmail telegramUsername",
      twoStepAuth,
      recoveryEmail,
      telegramUsername
    );
  };
  return (
    <>
      <div className="flex w-full m-auto gap-8 flex-wrap">
        <div className="border-b-2 ml-3 border-boarder h-4 w-full">
          <p className="text-muted p-1 text-center mb-2 w-42 m-auto bg-forgetpassbtn font-persian rounded-[14px] ">
            {t("TwoStepVerification")}
          </p>
        </div>
        <div className="w-full">
          <Formik
            onSubmit={handleEditSecurity}
            initialValues={{
              twoStepAuth: value,
              recoveryEmail: getEmail,
              telegramUsername: getTelegramUsername,
            }}
          >
            <Form className="w-full flex flex-wrap gap-8">
              <div className="w-11/12 mr-16 flex gap-3 flex-wrap">
                <label htmlFor="twoStepAuth" className="font-persian">
                  {t("TwoStepLogin")}{" "}
                </label>
                <div className="w-3/4 flex">
                <input
                  type="checkbox"
                  name="twoStepAuth"
                  id="twoStepAuth"
                  className="w-4"
                  value={value}
                  onClick={handleBlock}
                /></div>
                <div className=" flex flex-wrap gap-3 w-3/5">
                  <p className="text-text font-persian text-[14px] ">
                    {t("GetRobotLink")}
                  </p>
                  <Button
                    variant="bordered"
                    color="default"
                    onPress={handleCopy}
                    className="font-persian"
                  >
                    {t("OnClick")} {copy}
                  </Button>
                </div>
              </div>
              <div className={`w-full flex flex-wrap gap-4 ${block}`}>
                <div className="flex w-11/12 m-auto justify-between flex-nowrap">
                  <div className="w-[45%] flex flex-wrap">
                    <label
                      htmlFor="recoveryEmail"
                      className="font-bold w-11/12 m-auto text-start"
                    >
                      {t("WriteEmail2")}
                    </label>
                    <Field
                      className="border-1 border-boarder text-[12px] font-bold p-3 w-11/12 m-auto mt-2 rounded-3xl text-muted"
                      type="text"
                      name="recoveryEmail"
                      id="recoveryEmail"
                      value={getEmail}
                      onChange={handleEmail}
                      placeholder={t("WriteYourEmail")}
                    />
                  </div>
                  <div className="w-[45%] flex flex-wrap">
                    <label
                      htmlFor="telegramUsername"
                      className="font-bold w-11/12 m-auto text-start"
                    >
                      {t("WriteUserName")}
                    </label>
                    <Field
                      className="border-1 border-boarder text-[12px] font-bold p-3 w-11/12 m-auto mt-2 rounded-3xl text-muted"
                      type="text"
                      name="telegramUsername"
                      id="telegramUsername"
                      value={getTelegramUsername}
                      onChange={handleUserName}
                      placeholder={t("WriteYourUserNAme")}
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
                  {t("Save")}{" "}
                </Button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      {/* //       <Formik>
//         <Form>
//           <div className="w-[45%] flex flex-wrap">
//             <label */}
      {/* //               htmlFor="newPassword"
//               className="font-bold w-11/12 m-auto text-start"
//             >
//               {t("")}
//             </label> */}
      {/* //             <Field
//               className="border-1 border-boarder text-[12px] font-bold p-3 w-11/12 m-auto mt-2 rounded-3xl text-muted"
//               type="password"
//               name=""
//               id=""
//             //   value={}
//             //   onChange={}
//             //   placeholder={t("")}
//             />
//           </div>
//         </Form>
//       </Formik> */}
    </>
  );
};

export default TwoStep;
