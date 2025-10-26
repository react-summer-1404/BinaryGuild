import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const getItem = (key) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

i18n.use(initReactI18next).init({
  fallbackLng: getItem("lang") || "fa",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    fa: {
      translation: {
        GoHomePage: "صفحه اصلی",

        //Register

        RegisterStep1: " واردکرن ایمیل",
        RegisterStep2: "تایید کد ارسال شده",
        RegisterStep3: "واردکردن اطلاعات شخصی",
        RegisterHead: "خوش اومدی! ",
        RegisterCaption:
          "لطفا ایمیل خود را وارد کنید تا کد تایید برای شما ارسال شود",
        RegisterLabel:"ایمیل",
        RegisterPlaceholder: "ایمیل خود را وارد کنید",
        HaveAccount: "حساب کاربری دارید؟",
        GoToAccount: "ورود به حساب کاربری",

        //GetCode

        GetCodeHead: "تایید کد ارسال شده",
        GetCodeCaption:
          "لطفا کد ارسال شده به ایمیل خود را وارد کنید",
        GetCodeLabel: "کد تایید",
        GetCodePlaceholder: "کد تایید خود را وارد کنید",
        GetCodeAgain: " ارسال مجدد کد",
        GetCodeAgainTimer: "ارسال مجدد کد تایید {{time}}",

        //GetUserInfo
        GetUserInfoHead: "وارد کردن اطلاعات شخصی",
        GetUserInfoCaption: "لطفا اطلاعات اولیه خواسته شده را وارد کنید",
        GetUserEmailLabel: "ایمیل",
        GetUserEmailPlaceholder: "ایمیل خود را وارد کنید",
        GetUserPassLabel: "رمزعبور",
        GetUserPassPlaceholder: "رمزعبور خود را وارد کنید",
        GetUserPhoneLabel: "شماره همراه",
        GetUserPhonePlaceholder:"شماره همراه خود را وارد کنید",


        //Login
        LoginStep1: "واردکردن شماره همراه",

        LoginHead: "خوش برگشتی! ",
        LoginCaption:
          "لطفا شماره همراه یا ایمیل و رمزعبور خود را برای ورود به حساب کاربری را وارد کنید",
        LoginEmailOrPhoneLabel: "شماره همراه یا ایمیل",
        LoginPlaceholder: "شماره همراه یا ایمیل خود را وارد کنید",
        LoginPassLabel: "رمزعبور",
        LoginPassCaption: "رمزعبور خود را وارد کنید",
        LoginRemember: "مرا به خاطر بسپار",
        NotHaveingAccount: "حساب کاربری ندارید؟",
        MakeAccount: "ایجاد حساب کاربری",
        ForgetPass: "رمزعبور را فراموش کردید؟",

        // ForgetPassword

        ChangePasswordStep1: "واردکردن ایمیل",
        ConfirmCode: "تایید کد ارسال شده دو مرحله‌ای",
        ForgetPassHead: "فراموشی رمزعبور!",
        ForgetPassCaption:
          "اگر رمزعبور خود را فراموش کرده‌اید ایمیل خود را وارد کنید تا لینک صفحه تغییر رمزعبور برای شما ارسال شود",
        ForgetPassLabelEmail: "ایمیل",
        ForgetPassLabelNewPassword: "رمزعبور جدید",
        ForgetPassLabelNewPasswordRepeat: "تکرار رمزعبور جدید",
        ChangePasswordPlaceholder: "ایمیل خود را وارد کنید",

        //SetNewPassword
        NewPasswordHead: "رمزعبور جدید! ",
        NewPasswordCaption: "رمزعبور جدید خود را وارد کنید",
        NewPasswordLabel: "رمزعبور جدید",
        NewPasswordRepeatLabel: "تکرار رمزعبور جدید",
        NewPasswordLabelPlaceholder: "رمزعبور خود را وارد کنید",
        NewPasswordRepeatLabelPlaceholder: "تکرار رمزعبور خود را وارد کنید",

        // LoginForm

        //Buttons
        SendLinkButton: "ارسال لینک",
        GoBackButton: "بازگشت",
        ConfirmPassButton: "تایید رمزعبور",
        SendConfirmedCode: "ارسال کد تایید",
        ConfirmButton: "تایید",

        //Errors
        EmailError: "لطفا ایمیل معتبر وارد کنید",
        PasswordError: "لطفا رمز عبور خود را وارد کنید ",
        EmailOrPhoneError: "ایمیل نمی تواند خالی باشد",

        //AuthCommon
        AuthHead: "شروع یک ماجراجویی",
        AuthDes: "هر دوره ای که بخوای رو به راحتی پیدا کن و یاد بگیر",
      },
    },

    en: {
      translation: {
        GoHomePage: "Home Page",

        //Register
        RegisterStep1: "Enter mobile number",
        RegisterStep2: "Verify sent code",
        RegisterStep3: "Enter personal information",
        RegisterHead: "Welcome!",
        RegisterCaption:
          "Please enter your mobile number to receive verification code",
        RegisterLabel: "Mobile Number",
        RegisterPlaceholder: "Enter your mobile number",
        HaveAccount: "Already have an account?",
        GoToAccount: "Login to account",

        //GetCode
        GetCodeHead: "Verify sent code",
        GetCodeCaption: "Please enter the code sent to {{phoneNumber}}",
        GetCodeLabel: "Verification Code",
        GetCodePlaceholder: "Enter your verification code",
        GetCodeAgain: "Resend code",
        GetCodeAgainTimer: "Resend verification code {{time}}",

        //GetUserInfo
        GetUserInfoHead: "Enter personal information",
        GetUserInfoCaption: "Please enter the required basic information",
        GetUserEmailLabel: "Email",
        GetUserEmailPlaceholder: "Enter your email",
        GetUserPassLabel: "Password",
        GetUserPassPlaceholder: "Enter your password",

        //Login
        LoginStep1: "Enter mobile number",
        LoginHead: "Welcome back!",
        LoginCaption:
          "Please enter your mobile number or email and password to login",
        LoginEmailOrPhoneLabel: "Mobile number or email",
        LoginPlaceholder: "Enter your mobile number or email",
        LoginPassLabel: "Password",
        LoginPassCaption: "Enter your password",
        LoginRemember: "Remember me",
        NotHaveingAccount: "Don't have an account?",
        MakeAccount: "Create account",
        ForgetPass: "Forgot password?",

        // ForgetPassword
        ChangePasswordStep1: "Enter email",
        ConfirmCode: "Two-factor authentication code verification",
        ForgetPassHead: "Forgot Password!",
        ForgetPassCaption:
          "If you forgot your password, enter your email to receive password reset link",
        ForgetPassLabelEmail: "Email",
        ForgetPassLabelNewPassword: "New password",
        ForgetPassLabelNewPasswordRepeat: "Repeat new password",
        ChangePasswordPlaceholder: "Enter your email",

        //SetNewPassword
        NewPasswordHead: "New password!",
        NewPasswordCaption: "Enter your new password",
        NewPasswordLabel: "New password",
        NewPasswordRepeatLabel: "Repeat new password",
        NewPasswordLabelPlaceholder: "Enter your password",
        NewPasswordRepeatLabelPlaceholder: "Repeat your password",

        //Buttons
        SendLinkButton: "Send link",
        GoBackButton: "Back",
        ConfirmPassButton: "Confirm password",
        SendConfirmedCode: "Send verification code",
        ConfirmButton: "Confirm",

        //Errors
        EmailError: "Please enter a valid email",
        PasswordError: "Please enter your password confirmation",
        EmailOrPhoneError: "Email cannot be empty",

        //AuthCommon
        AuthHead: "Start an adventure",
        AuthDes: "Find and learn any course you want with ease",
      },
    },
  },
});