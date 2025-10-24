import { Button } from "@heroui/button";
import React from "react";

const ProfessorsTextsWrapper = () => {
  return (
    <div className="flex w-[40%] m-auto gap-6 flex-wrap text-white">
      <h2 className="font-persian text-[24px] font-bold">
        اساتید برتر هفته آکادمی
      </h2>
      <p className="font-persian text-[20px] font-medium">
        در هفته جاری، اکادمی برنامه‌نویسی ما مفتخر است که از اساتید برتر خود
        تقدیر کند. این اساتید با دانش عمیق و تجربه گسترده خود در زمینه‌های مختلف
        برنامه‌نویسی، نه تنها به ارتقاء مهارت‌های دانشجویان کمک کرده‌اند، بلکه
        با برگزاری کارگاه‌ها و جلسات مشاوره، فضایی پویا و انگیزشی را برای
        یادگیری فراهم آورده‌اند.
      </p>
      <Button color="primary" radius="full" className="font-persian">
        <p className="font-persian">صفحه اساتید</p>
      </Button>
    </div>
  );
};

export default ProfessorsTextsWrapper;
