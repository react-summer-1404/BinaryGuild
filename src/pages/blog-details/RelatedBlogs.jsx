import { Button } from "@heroui/button";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useEffect } from "react";
import { GetRelatedBlogs } from "../../core/services/api/get-data";
import moment from "moment-jalaali";


const RelatedBlogs = ({ newsCatregoryId}) => {
  const { t } = useTranslation();
  const [relatedBlogs, setRelatedBlogs] = useState([]);
      const formatInsertDate = moment(newsCatregoryId.insertDate).format("jYYYY/jMM/jDD");


  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      try {
        const response = await GetRelatedBlogs(newsCatregoryId)
        console.log(response)
        setRelatedBlogs(response)
      } catch (error) {
        console.log(error)
      }
    };
    if(newsCatregoryId) fetchRelatedBlogs();
  }, [newsCatregoryId]);

  return (
    <div className="  h-[400px] w-full mt-30 mb-14  max-[768px]:mt-60 max-[500px]:mt-100 ">
      <h2 className="text-[#707070] font-[700] text-[20px] flex justify-start">
        {t("RealatedBlogs")}
      </h2>

      <div className=" w-full h-[366px] grid grid-cols-4 gap-4 mt-6 max-[768px]:flex max-[768px]:overflow-scroll ">
        {relatedBlogs.length > 0 ? (
          relatedBlogs.map((items) => (
            <div
              key={items.id}
              className="h-full flex flex-col justify-between "
            >
              <div className="relative gap-2 flex ">
                <img
                  className="h-[293px] rounded-[24px] "
                  src={items.currentImageAddressTumb} onError={(e)=>{e.target.src="../../../src/assets/icons/default-fallback-image.png" }}
                />

                {/* <div className=" w-[89px] h-6 rounded-[32px] bg-blue ">{} </div> */}
              </div>

              <div className=" h-[61px] ">
                <h2 className="text-text  text-start font-bold text-[24px] ">
                  {items.title}{" "}
                </h2>
                <div className="flex justify-between mt-3">
                  <div className="flex">
                    <p className="text-[#707070] font-medium text-[14px] ">
                      {formatInsertDate}
                    </p>{" "}
                    <img src="../../../src/assets/icons/calendar-03.png" alt="" />
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="relative right-50 flex items-center max-[768px]:mt-10 justify-center "> {t("NoRelatedCourse")}</p>
        )   }
      </div>
    </div>
  );
};

export default RelatedBlogs;
