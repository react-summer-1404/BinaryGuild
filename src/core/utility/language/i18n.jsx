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

        RegisterStep1: "واردکردن شماره همراه",
        RegisterStep2: "تایید کد ارسال شده",
        RegisterStep3: "واردکردن اطلاعات شخصی",
        RegisterHead: "خوش اومدی! ",
        RegisterCaption:
          "لطفا شماره همراه خود را وارد کنید تا کد تایید برای شما ارسال شود",
        RegisterLabel: "شماره همراه",
        RegisterPlaceholder: "شماره همراه خود را وارد کنید",
        HaveAccount: "حساب کاربری دارید؟",
        GoToAccount: "ورود به حساب کاربری",
        GetUserPhoneLabel: "شماره همراه",
        GetUserPhonePlaceholder: "شماره همراه خود را وارد کنید",

        //GetCode

        GetCodeHead: "تایید کد ارسال شده",
        GetCodeCaption:
          "لطفا کد ارسال شده به شماره همراه {{phoneNumber}} را وارد کنید",
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
        resetLink: "لینک تغییر رمز عبور",

        //SetNewPassword
        NewPasswordHead: "رمزعبور جدید! ",
        NewPasswordCaption: "رمزعبور جدید خود را وارد کنید",
        NewPasswordLabel: "رمزعبور جدید",
        NewPasswordRepeatLabel: "تکرار رمزعبور جدید",
        NewPasswordLabelPlaceholder: "رمزعبور خود را وارد کنید",
        NewPasswordRepeatLabelPlaceholder: "تکرار رمزعبور خود را وارد کنید",

        //Buttons
        SendLinkButton: "ارسال لینک",
        GoBackButton: "بازگشت",
        ConfirmPassButton: "تایید رمزعبور",
        SendConfirmedCode: "ارسال کد تایید",
        ConfirmButton: "تایید",

        //Errors
        EmailError: "لطفا ایمیل معتبر وارد کنید",
        PasswordError: "لطفا تکرار رمز عبور خود را وارد کنید ",

        //landing
        Home: "خانه",
        Courses: "دوره ها",
        Blogs: "بلاگ ها",
        AboutUs: "درباره ما",
        Registration: "ثبت نام / ورود",
        SeeMore: "مشاهده بیشتر",
        Professors: "اساتید",
        ContactUs: "ارتباط با ما",
        Services: "خدمات ما",

        //AuthCommon
        AuthTitle: "شروع یک ماجراجویی",
        AuthDescription: "هر دوره ای که بخوای رو به راحتی پیدا کن و یاد بگیر",

        //Course Details
        CourseDesHead: "توضیحات دوره",
        CourseRate: "امتیاز بدید",
        PageLink: "کپی کردن لینک صفحه",
        CourseStatus: "وضعیت",
        CourseType: "دسته‌بندی",
        CourseLevel: "سطح آموزشی",
        CourseTeacher: "استاد دوره",
        CourseStart: "تاریخ برگزاری",
        CourseEnd: "تاریخ اتمام",
        CourseLike: "تعداد لایک",
        CourseDislike: "تعداد دیس‌لایک",
        ReserveCourse: "رزرو دوره",
        AddToFavorite: "اضافه به لیست موردعلاقه",
        CourseName: "دوره",
        People: "نفر",
        Price: "تومان",
        comment: "نظر",
        CommentsHead: "نظرات دانشجو ها و اساتید",
        RealatedCourses: "دوره های مرتبط ",
        Comments: "نظر شما",
        CommentDescription: "برای نظر دادن کلیک کنید",
        ResetHead: "ایمیل تنظیم مجدد رمز عبور ارسال شد.",
        ResetDes:
          "یک ایمیل برای تنظیم مجدد رمز عبور به آدرس ایمیل وارد شده شما ارسال شد. برای دریافت آن روی لینک زیر کلیک کنید.",
        ResetLink: "دریافت لینک",
        NoComment: "هنوز نظری ثبت نشده است.",

        //goals
        OurGoals: "اهداف ما در اکادمی",
        GoalsName1: "استعدادیابی",
        GoalsName2: "راهنمایی و ایجاد انگیزه",
        GoalsName3: "آموزش‌های تخصصی",
        GoalsName4: "آماده سازی برای بازار کار",
        GoalsDescription1:
          "یافتن رگه های علاقه و استعداد در دوره های پایلوت استعدادیابی صرف نظر از سن ، رشته تحصیلی ، جغرافیا و جنسیت و ...",
        GoalsDescription2:
          "آشنایی با پشته ای تکنولوژیک از زبان های کدنویسی با نگاهی عمل محور برای تحریک ذهنیت خلاق در طول فرآیند آموزش",
        GoalsDescription3:
          "کارگاه های تخصصی و تکمیلی برای کار با پلتفرم های بازاری مورد اقبال و برگزاری تورنمت های تیمی رقابتی برای تقویت روحیه کار تیمی و ...",
        GoalsDescription4:
          "جلسات تنظیم cv برای ساخت‌واشتراک رزومه فنی دربسترهای داخلی و بین المللی کاریابی و آماده سازی برای شرکت ها",

        //services
        OurServices: "خدماتی که ما در طی دوره‌ها به شما ارائه میدیم",
        ServicesName1: "مدرک معتبر",
        ServicesName2: "آزمون ها",
        ServicesName3: "مشاوره 24 ساعته",
        ServicesName4: "فرصت‌های شغلی",
        ServicesDescription1:
          "با مدرک ما میتوانید به راحتی در همه جا استخدام بشید",
        ServicesDescription2:
          "با آزمون های تعیین سطح شما میتوانید سطح دانش خودتون رو بسنجید",
        ServicesDescription3: "مشاورین ما 24 ساعته جوابگو سوال های شما هستند",
        ServicesDescription4:
          "با توجه به سطح توانایی شما فرصت های شغلی به شما پیشنهاد داده میشه",

        //introduction
        ModernEducation: "آموزش مدرن",
        RapidProgress: "پیشرفت سریع",
        Description: "آکادمی آموزش تخصصی برنامه نویسی بحر از کودکان تا بزرگسال",
        OurProfessors: "+50 اساتید برتر جهان",
        OurStudents: "+100 دانشجوی فعال در دوره",
        Now: "همین حالا",
        Start: "شروع کن به یادگیری!",
        NewCourses: "جدیدترین دوره‌ها",
        GoodsCourses: "دوره های برتر هفته",
        GoodsBlogs: "بلاگ های برتر هفته",

        //professors
        AcademiesProfessors: "اساتید برتر هفته آکادمی",
        DescriptionAboutProfessors:
          " در هفته جاری، اکادمی برنامه‌نویسی ما مفتخر است که از اساتید برتر خود تقدیر کند. این اساتید با دانش عمیق و تجربه گسترده خود در زمینه‌های مختلف برنامه‌نویسی، نه تنها به ارتقاء مهارت‌های دانشجویان کمک کرده‌اند، بلکه با برگزاری کارگاه‌ها و جلسات مشاوره، فضایی پویا و انگیزشی را برای یادگیری فراهم آورده‌اند.",
        TeachersPage: "صفحه اساتید",
        ProfessorsName1: "محمدحسین بحرالعلومی",
        ProfessorsName2: "محسن اسفندیاری",
        ProfessorsName3: "محمدحسین خلیل‌پور",
        ProfessorsScore1: "۴.۸",
        ProfessorsScore2: "۴.۲",
        ProfessorsScore3: "۴.۱",
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
        RegisterLabel: "Phone Number",
        RegisterPlaceholder: "Enter your phone number",
        HaveAccount: "Already have an account?",
        GoToAccount: "Login to account",
        GetUserPhoneLabel: "Phone Number",
        GetUserPhonePlaceholder: "Enter your phone number",

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
        resetLink: "reset link",

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

        //AuthCommon
        AuthTitle: "Start an adventure",
        AuthDescription: "Find and learn any course you want with ease",

        //Course Details
        CourseDesHead: "course title",
        CourseRate: "Rate us",
        PageLink: "Copy Page Link",
        CourseStatus: "Course Status",
        CourseType: "Course Type",
        CourseLevel: "Course Level",
        CourseTeacher: "Course Teacher",
        CourseStart: " Course start date",
        CourseEnd: "course end date",
        CourseLike: "Likes",
        CourseDislike: "Dislikes",
        ReserveCourse: "Reserve Course",
        AddToFavorite: "Status",
        CourseName: "Course",
        people: "people",
        Price: "Toman",
        comment: "comment",
        CommentsHead: "Student Reviews",
        SeeMore: "See More",
        RealatedCourses: "Related Courses",
        Comments: "Your Comment",
        CommentDescription: "Click for review",
        ResetHead: "",
        ResetDes: "",
        ResetLink: "",
        NoComment: "",

        //landing
        //header and footer
        Home: "Home",
        Courses: "Courses",
        Blogs: "Blogs",
        AboutUs: "About us",
        Registration: "Registration/login",
        Professors: "Professors",
        ContactUs: "Contact us",
        Services: "Our services",

        //goals
        OurGoals: "Our goals at the academy",
        GoalsName1: "Talent search",
        GoalsName2: "Guidance and motivation",
        GoalsName3: "Specialized training",
        GoalsName4: "Preparation for the job market",
        GoalsDescription1:
          "Finding strands of interest and talent in talent pilot courses regardless of age, field of study, geography, gender, etc...",
        GoalsDescription2:
          "Introduction to a technological stack of coding languages ​​with a practical perspective to stimulate creative thinking throughout the learning process",
        GoalsDescription3:
          "Specialized and complementary workshops for working with popular market platforms and holding competitive team tournaments to strengthen teamwork spirit and...",
        GoalsDescription4:
          "CV preparation sessions for creating and sharing technical resumes in domestic and international job boards and preparing for companies",

        //services
        OurServices: "Services we provide to you during the courses",
        ServicesName1: "Valid certificate",
        ServicesName2: "Tests",
        ServicesName3: "24-hour consultation",
        ServicesName4: "Job Opportunities",
        ServicesDescription1:
          "With our degree, you can easily get hired anywhere",
        ServicesDescription2:
          "With placement tests you can measure your level of knowledge",
        ServicesDescription3:
          "Our consultants are available 24 hours a day to answer your questions.",
        ServicesDescription4:
          "You will be offered job opportunities based on your ability level.",

        //introduction
        ModernEducation: "Modern education",
        RapidProgress: "Rapid progress",
        Description:
          "Bahr Specialized Programming Training Academy for Children to Adults",
        OurProfessors: "+50 top professors in the world",
        OurStudents: "+100 active students in the course",
        Now: "Right now",
        Start: "Start learning!",
        NewCourses: "The latest courses",
        GoodsCourses: "Top courses of the week",
        GoodsBlogs: "Top blogs of the week",

        //professors
        AcademiesProfessors: "Top Professors of the Academy Week",
        DescriptionAboutProfessors:
          "This week, our Programming Academy is proud to recognize our top instructors. With their deep knowledge and extensive experience in various programming fields, these instructors have not only helped students improve their skills, but also provided a dynamic and motivating learning environment by organizing workshops and consulting sessions.",
        TeachersPage: "Teachers page",
        ProfessorsName1: "Mohammad Hossein Bahrul Oloomi",
        ProfessorsName2: "Mohsen Esfandiari",
        ProfessorsName3: "Mohammad Hossein Khalilpour",
        ProfessorsScore1: "4.8",
        ProfessorsScore2: "4.2",
        ProfessorsScore3: "4.1",
      },
    },
  },
});
