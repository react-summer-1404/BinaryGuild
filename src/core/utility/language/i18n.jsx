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
          "لطفا ایمیل را وارد کنید تا کد تایید برای شما ارسال شود",
        RegisterLabel: "ایمیل",
        RegisterPlaceholder: "ایمیل خود را وارد کنید",
        HaveAccount: "حساب کاربری دارید؟",
        GoToAccount: "ورود به حساب کاربری",
        GetUserPhoneLabel: "شماره همراه",
        GetUserPhonePlaceholder: "شماره تلفن خود را وارد کنید",
        RegisterNotifysuccessStepOne: "ثبت نام با موفقیت انجام شد",
        RegisterNotifyError: "ثبت نام انجام نشد، لطفا دوباره تلاش کنید",
        getCodNotifyError: "خطا در ارسال کد، لطفا دوباره تلاش کنید",

        //GetCode

        GetCodeHead: "تایید کد ارسال شده",
        GetCodeCaption: "لطفا کد ارسال شده به ایمیل را وارد کنید",
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
        LoginNotify: "ورود با موفقیت انجام شد",
        LoginNotifyError: "ورود شما ناموفق بود، لطفا دوباره تلاش کنید.",
        EmailOrPhoneError: "لطفا ایمیل یا شماره تلفن خود را وارد کنید",
        LoginNotifyErrorforPassword: "رمز عبور یا ایمیل شما اشتباه است!",

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
        ResetNotify: "رمز شما تغییر کرد",

        // LoginForm

        //Buttons
        SendLinkButton: "ارسال لینک",
        GoBackButton: "بازگشت",
        ConfirmPassButton: "تایید رمزعبور",
        SendConfirmedCode: "ارسال کد تایید",
        ConfirmButton: "تایید",

        //Errors
        EmailError: "لطفا ایمیل معتبر وارد کنید",
        PasswordError: "لطفا تکرار رمز عبور خود را وارد کنید ",
        RegisterNotifyErrorStepOne: "شما از قبل ثبت نام کرده اید",
        gmailError: "لطفا ایمیل خود را به درستی وارد کنید",

        //landing
        Home: "خانه",
        Courses: "دوره ها",
        Blogs: "بلاگ ها",
        AboutUs: "درباره ما",
        Registration: "ثبت نام / ورود",
        SeeMore: "مشاهده بیشتر",
        SeeLess: "مشاهده کمتر",
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
        reply: "جواب دادن",
        commentTitle: "عنوان نظر خود را بنویسید",
        commentDescribe: "متن نظر خود را بنویسید",
        close: "بستن",
        successCourseLike: "نظر شما با موفقیت ثبت شد",
        errorCourseLike: "نظر شما قبلا ثبت شده است",
        successCourseFavorite: "به علافه مندی شما افزوده شد",
        errorCourseFavorite: "علاقه مندی شما قبلا ثبت شده است",
        successCourseReserve: "به رزوی های شما افزوده شد",
        errorCourseReserve: "این دوره در رزروی های شما قرار دارد",
        copied: "لینک صفحه کپی شد",
        successCourseRating: "نظر شما با موفقیت ثبت شد",
        errorCourseRating: "نظر شما قبلا ثبت شده است",
        Favorited: "افزوده شد",
        reserveBoxHead: "دوره به لیست رزروی های شما اضافه شد!",
        reserveDescription:
          "بعد از تایید ادمین ، دوره مورد نظر به لیست دوره من شما اضافه خواهد شد ",
        MyReserve: "رزرو من",
        ok: "باشه",
        errorCourseReserveUserProfileNotComplete:
          "لطفا ابتدا پروفایل خود را کامل کنید",
        NoRelatedCourse: "دوره مرتبطی وجود ندارد",

        // blogs details
        CoursePublisher: "منتشرکننده",
        CourseViewers: "بازدیدکنندگان",
        comments: "نظرات",
        CourseStartPublish: "تاریخ انتشار",
        RealatedBlogs: "بلاگ های مرتبط",

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

        //student-panel
        Report: "گزارش",
        MenuText1: "داشبرد",
        MenuText2: "دوره من",
        MenuText3: "رزرو من",
        MenuText4: "مورد علاقه ها",
        MenuText5: "پروفایل",
        MenuText6: "پرداخت ها",
        DeleteUser: "خروج از حساب کاربری",
        Student: "دانشجو",

        //panel
        Hello: "سلام ",
        Welcome: "، روزت بخیر",
        Hope: "امیدوارم امروز روز خوبی رو داشته باشید",
        HourAndDate1: "ساعت",
        HourAndDate2: "تاریخ",
        TimeAndDay1: "۲۰:۲۰",
        TimeAndDay2: "۲۰ آبان ۱۴۰۴",
        TeachersName: "مدرس",
        StartEvent: "تاریخ برگزاری",
        Cost: "قیمت",
        SeeOther: "مشاهده بیشتر >",
        Status: "وضعیت",
        NoCourse: "دوره ای برای نمایش وجود ندارد.",
        YourInformation: "وضعیت اطلاعات حساب کاربری",
        IsNotComplete: "اطلاعات حساب کاربری شما کامل نیست",
        YourComment: "نظرات شما",
        CourseAndBlog: "دوره ها و بلاگ ها",
        NotConfirmed: "تایید نشده",
        Confirmed: "تایید شد",
        Toman: "تومان",
        Name: "نام",
        EndEvent: "تاریخ اتمام",
        Order: "ترتیب",
        NoRow: "آیتمی موجود نمی باشد!!",
        Payment: "پرداخت",
        PaymentDate:"تاریخ پرداخت",
        DateEntered:"تاریخ وارد شده",
        PaymentStatus:"وضعیت پرداخت",
        PaymentToman:"پرداختی (تومان)",
        Operation:"عملیات",
        CourseGroup:"گروه دوره",
        NotPaid:"پرداخت نشده",
        Paid:"پرداخت شده",

        //profile
        MyProfile: "پروفایل من",
        Information: "اطلاعات حساب کاربری",
        Images: "عکس ها",
        HomeAddress: "محل سکونت",
        Links: "لینک ها",

        //information
        LastName: "نام خانوادگی",
        YourName: "نام خود را وارد کنید",
        YourLastName: "نام خانوادگی خود را وارد کنید",
        AboutMe: "درباره من",
        AboutYourself: "متن درباره خود را وارد کنید",
        NationalCode: "کد ملی",
        YourNationalCode: "کد ملی خود را وارد کنید",
        MobileNumber: "شماره همراه",
        YourMobileNumber: "شماره همراه خود را وارد کنید",
        DateOfBirth: "تاریخ تولد",
        YourDateOfBirth: "تاریخ تولد خود را وارد کنید",
        Gender: "جنسیت",
        Man: "مرد",
        Woman: "زن",
        choose: "انتخاب کنید",
        Email: "ایمیل",
        YourEmail: "ایمیل خود را وارد کنید",
        Address: "آدرس سکونت",
        YourAddress: "آدرس محل سکونت خود را وارد کنید",
        ApplyChanges: "اعمال تغییرات",
        AddPhoto: "اضافه کردن عکس",
        SelectLocation: "داخل نقشه موقعیت مکانی محل سکونت خود را انتخاب کنید",
        Telegram: "تلگرام",
        LinkedIn: "لینکدین",
        TelegramLink: "لینک تلگرام خود را وارد کنید",
        LinkedInLink: "لینک لینکدین خود را وارد کنید",
        WriteLastName: "لطفا نام خانوادگی خود را بنویسید!!",
        WriteFirstName: "لطفا نام خود را بنویسید!!",
        WriteBirthDay: "لطفا تاریخ تولد خود را بنویسید!!",
        WriteMobileNumber: "لطفا شماره همراه خود را بنویسید!!",
        WriteEmail: "لطفا ایمیل خود را بنویسید!!",
        WriteNationalCode: "لطفا کدملی خود را وارد کنید!!",
        WriteTelegramLink: "لطفا لینک تلگرام خود را وارد کنید!!",
        WriteLinkdinProfile: "لطفا لینک لینکدین خود را وارد کنید!!",
        WriteUserAbout: "لطفا درباره خودتان بنویسید!!",
        WriteHomeAddress: "لطفا ادرس سکونت خودتان بنویسید!!",
        AddLink: "پروفایل شما با موفقیت اپدیت شد!!",
        DontAddLink:
          "در اپدیت کردن پروفایل شما به مشکل بر خوردیم .لطفا دوباره تلاش کنید",

        //courses & blogs
        TextCoursesHeader: "شروع ماجراجویی جدید",
        TextCourses:
          "یک شروع قوی برای یادگیری یک مسئله جدید میتونه تو پیشرفت کمکت کنه",
        Search: "جست‌جو",
        SearchCourses: "دوره مورد نظر را جست‌جو کنید...",
        Filter: "فیلتر",
        Category: "دسته بندی",
        SelectCategory: "دسته مورد نظر را انتخاب کنید",
        Level: "سطح آموزشی",
        SelectLevel: "سطح مورد نظر را انتخاب کنید",
        Teachers: "اساتید",
        SelectTeachers: "استاد مورد نظر را انتخاب کنید",
        Date: "تاریخ برگزاری - اتمام",
        ErrorCourses: "دوره مورد نظر موجود نمی باشد",
        ErrorBlogs: "بلاگ مورد نظر موجود نمی باشد",
        Time: "10 شهریور 1404 - 30 اذر 1404",
        To: "تا",
        From: "از",
        TextBlogsHeader: "اطلاعات بیشتر ، درک بهتر",
        TextBlogs:
          "ما در بلاگ ها اطلاعات شما رو نسبت به تکنولوژی ای که یاد میگیرید بیشتر میکنیم",
        New: "جدیدترین",
        Popular: "محبوب ترین",
        Expensive: "گران‌ترین",
        Cheapest: "ارزان‌ترین",
        FavBlogAndCourse: "دوره ها و اخبار های مورد علاقه",
        
        //delete
        CantDelete: "اخبار مورد نظر حذف نشد!!",
        DeleteBlog: "اخبار مورد نظر حذف شد!!",

        //not found
        Error: "صفحه مورد نظر شما یافت نشد . ",
      },
    },

    en: {
      translation: {
        GoHomePage: "Home Page",

        //Register
        RegisterStep1: "Enter your email",
        RegisterStep2: "Verify sent code",
        RegisterStep3: "Enter personal information",
        RegisterHead: "Welcome!",
        RegisterCaption: "Please enter your email to receive verification code",
        RegisterLabel: "email",
        RegisterPlaceholder: "Enter your email",
        HaveAccount: "Already have an account?",
        GoToAccount: "Login to account",
        GetUserPhoneLabel: "Phone Number",
        GetUserPhonePlaceholder: "Enter your phone number",
        RegisterNotifysuccessStepOne: "You registered successfully",
        RegisterNotifyError:
          "You couldn't registered successfully, Please try again",
        getCodNotifyError: "Error sending the code, pleae try again",

        //AuthCommon
        AuthTitle: "Start an adventure",
        AuthDescription: "Find and learn any course you want with ease",

        //GetCode
        GetCodeHead: "Verify sent code",
        GetCodeCaption: "Please enter the code sent to your email",
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
        LoginNotify: "You loggined successfully",
        LoginNotifyError: "You couldn't login successfully",
        EmailOrPhoneError: "Please enter your email or phone number",
        LoginNotifyErrorforPassword: "Your email or password is wrong!",

        // ForgetPassword
        ChangePasswordStep1: "Enter email",
        ConfirmCode: "Two-factor authentication code",
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
        ResetNotify: "Your password has changed",
        //Buttons
        SendLinkButton: "Send link",
        GoBackButton: "Back",
        ConfirmPassButton: "Confirm password",
        SendConfirmedCode: "Send verification code",
        ConfirmButton: "Confirm",

        //Errors
        EmailError: "Please enter a valid email",
        PasswordError: "Please enter your password confirmation",
        RegisterNotifyErrorStepOne: "؛You already registered",
        gmailError: "Please Enter your password correctly",

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
        CourseName: "name",
        people: "people",
        Price: "Toman",
        comment: "comment",
        CommentsHead: "Student Reviews",
        SeeMore: "See More",
        SeeLess: "See less",
        RealatedCourses: "Related Courses",
        Comments: "Your Comment",
        CommentDescription: "Click for review",
        ResetHead: "Password reset Email sent",
        ResetDes:
          "A password reset email has been sent to your Email address. Please click the link to continue.",
        ResetLink: "Get link",
        NoComment: "there is no comment yet",
        reply: "reply",
        commentTitle: "ٌWrite your comment's title",
        commentDescribe: "Write your comment",
        close: "close",
        successCourseLike: "Your comment has been submitted successfuly",
        errorCourseLike: "You have already submitted your comment",
        successCourseFavorite: "Added to your favorites",
        errorCourseFavorite: "This course is already in your favorites",
        successCourseReserve: "Added to ypur reserved courses",
        errorCourseReserve: "This course is already reserved ",
        copied: "Page link has been copied",
        successCourseRating: "You rate has been submitted successfuly",
        errorCourseRating: "You have already submitted your rating",
        Favorited: "favorit",
        reserveBoxHead: "This course is added to your reserve courses",
        reserveDescription: "After confirmation course will be added to your",
        MyReserve: "My Reserve",
        ok: "ok",
        errorCourseReserveUserProfileNotComplete:
          "Please complete your profile",
        NoRelatedCourse: "There is no related course yet",

        // blogs details
        CoursePublisher: "Publisher",
        CourseViewers: "Viewers",
        comments: "comment",
        CourseStartPublish: "publish date",
        RealatedBlogs: "Realated Blogs",

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

        //student-panel
        Report: "Report",
        MenuText1: "Dashboard",
        MenuText2: "My courses",
        MenuText3: "My reservation",
        MenuText4: "Favorite",
        MenuText5: "Profile",
        MenuText6: "Payments",
        DeleteUser: "Delete user",
        Student: "Student",

        //panel
        Hello: "Hello ",
        Welcome: ", good day.",
        Hope: "I hope you have a good day today.",
        HourAndDate1: "hour",
        HourAndDate2: "date",
        TimeAndDay1: "20:20",
        TimeAndDay2: "2025 November 11",
        TeachersName: "Teacher",
        StartEvent: "The date of the event",
        Cost: "Cost",
        SeeOther: "See more >",
        Status: "Status",
        NoCourse: "There is no course to display.",
        YourInformation: "Account Information Status",
        IsNotComplete: "Your account information is incomplete",
        YourComment: "Your comments",
        CourseAndBlog: "Courses and blogs",
        NotConfirmed: "not confirmed",
        Confirmed: "It was confirmed",
        Toman: "Toman",
        Name: "Name",
        EndEvent: "Completion date",
        Order: "Order",
        NoRow: "No item available!!",
        Payment: "Payment",
        PaymentDate:"Payment date",
        DateEntered:"Date entered",
        PaymentStatus:"Payment status",
        PaymentToman:"Payment (toman)",
        Operation:"Operation",
        CourseGroup:"Course group",
        NotPaid:"Not paid",
        Paid:"paid",

        //profile
        MyProfile: "My profile",
        Information: "User account information",
        Images: "Photos",
        HomeAddress: "Place of residence",
        Links: "Links",

        //information
        LastName: "last name",
        YourName: "Enter your name",
        YourLastName: "Enter your last name",
        AboutMe: "About me",
        AboutYourself: "Enter text about yourself",
        NationalCode: "National code",
        YourNationalCode: "Enter your national code.",
        MobileNumber: "Mobile number",
        YourMobileNumber: "Enter your mobile number.",
        DateOfBirth: "Date of birth",
        YourDateOfBirth: "Enter your date of birth.",
        Gender: "Gender",
        Man: "Man",
        Woman: "Woman",
        choose: "Choose",
        Email: "Email",
        YourEmail: "Enter your email.",
        Address: "Residential address",
        YourAddress: "Enter your residential address.",
        ApplyChanges: "Apply changes",
        AddPhoto: "Add photo",
        SelectLocation: "Select your location on the map.",
        Telegram: "Telegram",
        LinkedIn: "LinkedIn",
        TelegramLink: "Enter your Telegram link.",
        LinkedInLink: "Enter your LinkedIn link.",
        WriteLastName: "Please write your last name!!",
        WriteFirstName: "Please write your first name!!",
        WriteBirthDay: "Please write your date of birth!!",
        WriteMobileNumber: "Please write your mobile number!!",
        WriteEmail: "Please enter your email!!",
        WriteNationalCode: "Please enter your national code!!",
        WriteTelegramLink: "Please enter your Telegram link!!",
        WriteLinkdinProfile: "Please enter your LinkedIn link!!",
        WriteUserAbout: "Please write about yourself!!",
        WriteHomeAddress: "Please write your residential address!!",
        AddLink: "Your profile has been successfully updated!!",
        DontAddLink: "We had a problem updating your profile.Please try again.",

        //courses & blogs
        TextCoursesHeader: "Starting a new adventure",
        TextCourses:
          "A strong start to learning a new subject can help you progress.",
        Search: "Search",
        SearchCourses: "Search for the desired course...",
        Filter: "Filter",
        Category: "Category",
        SelectCategory: "Select the desired category.",
        Level: "Educational level",
        SelectLevel: "Select the desired level.",
        Teachers: "Teachers",
        SelectTeachers: "Select the desired teacher.",
        Date: "Date of holding - Completion",
        ErrorCourses: "The desired course is not available.",
        ErrorBlogs: "The desired blog does not exist.",
        Time: "10 September 1404 - 30 December 1404",
        FirstPrice: "First price",
        SecondPrice: "Second price",
        To: "to",
        From: "from",
        TextBlogsHeader: "More information, better understanding",
        TextBlogs:
          "We will increase your knowledge about the technology you are learning in our blogs.",
        New: "The newest",
        Popular: "most popular",
        Expensive: "the most expensive",
        Cheapest: "the cheapest",
        FavBlogAndCourse: "Favorite courses and news",

        //delete
        CantDelete: "The desired news was not deleted !!",
        DeleteBlog: "The news in question was deleted !!",

        //not found
        Error: "The page you requested was not found.",
      },
    },
  },
});
