import instance from "../../interceptor";

// Add profile information
export const AddProfileInfo = () => {
  return instance.put("/SharePanel/UpdateProfileInfo");
};

// edit security
export const EditSecurity = ({
  twoStepAuth,
  recoveryEmail,
  telegramUsername,
}) => {
  return instance.put("/SharePanel/EditSecurity", {
    twoStepAuth,
    recoveryEmail,
    telegramUsername,
  });
};
