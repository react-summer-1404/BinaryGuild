import { useTranslation } from "react-i18next";
import { Button } from "@heroui/button";
import TableCommon from "../../../components/common/Table/TableCommon";
import { useDispatch, useSelector } from "react-redux";
import { setNumber, setSearch } from "../../../store/filterSlice";
import { useQuery } from "@tanstack/react-query";
import { usersList } from "../../../core/services/api/adminPanel/get-data";
const UsersInfo = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { number, search } = useSelector((state) => state.UserFilter);
  const showOptions = [5, 10, 15];

  const {data,isLoading,isError}=useQuery({
    queryKey:["users",number],
    queryFn:()=>usersList(1,number)
  })

  if(isLoading){ <p>Loading... please wait</p> } if(isError){ <p>An Error accoured :( </p> }

  return (
    <div className=" w-full">
      <div className="border border-white  flex justify-between h-18 bg-[#222] rounded-xl">
        <div className="flex items-center pr-5 gap-2">
          <p>{t("show")}</p>
          <div>
            <select
              className="bg-black-600 mt-2 p-2 rounded-[5px] text-white cursor-pointer "
              value={number}
              onChange={(e) => dispatch(setNumber(e.target.value))}
            >
              {showOptions.map((item) => (
                <option key={item} value={item}>
                  {item}{" "}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="  flex gap-3 items-center ml-5 h-full">
          <input
            className="bg-black-900 border border-boarder focus:outline-none indent-2 rounded-[5px] w-75 h-10 placeholder:text-[12px] "
            value={search}
            onChange={(e) => dispatch(setSearch(e.target.value))}
            type="text"
            placeholder={t("search")}
          />
          <Button className="border border-boarder rounded-[5px] flex items-center justify-center w-34 h-10 bg-blue">
            {t("Adduser")}
          </Button>
        </div>
      </div>

      <div className="border border-boarder h-80 bg-[#222] mt-8 rounded-xl">
        <TableCommon users={data} />
      </div>
    </div>
  );
};

export default UsersInfo;
