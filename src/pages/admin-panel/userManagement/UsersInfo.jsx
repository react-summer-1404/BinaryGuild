import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setNumber, setQueryUsers } from "../../../store/filterSlice";
import { useQuery } from "@tanstack/react-query";
import TableUser from "../Table/TableUser";
import { usersList } from "../../../core/services/api/adminPanel/get-data";
import { useMemo, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic-light-dark.css";

import AddUser from "./AddUser";
const UsersInfo = ({ openDetailId, setOpenDetailId }) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const [currentPage, setCurrentPage] = useState(1);


  const dispatch = useDispatch();
  const { role, status, number, Query } = useSelector(
    (state) => state.UserFilter
  );
  const showOptions = [5, 20, 30, 50];

  const {
    data: users,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["users",currentPage, number],
    queryFn: () => usersList(currentPage, number),
  });

  const totalPage= users? Math.ceil(users.totalCount/number) : 1;
  console.log(totalPage);
    function handlePageChange(page) {
    setCurrentPage(page);
    // ... do something with `page`
  }

  const handleAddUser = () => {
    refetch();
    setOpen(false);
  };

  const queryUser = (e) => {
    if (e.target.value !== "") {
      console.log("value", e.target.value);
      dispatch(setQueryUsers(e.target.value));
    } else {
      dispatch(setQueryUsers(undefined));
    }
  };

  const filterUser = useMemo(() => {
    if (!users || !users.listUser) return [];
    return users.listUser.filter((user) => {
      const roleMatch =
        role === t("allUsers")
          ? true
          : user.roles.includes(role) || user.roles.includes([]);

      const statusMatch =
        status === t("active")
          ? user.active === true
          : status === t("deActive")
          ? user.active === false
          : true;
      const searchMatch = Query
        ? user.fname?.toLowerCase().includes(Query.toLowerCase()) ||
          user.lname?.toLowerCase().includes(Query.toLowerCase()) ||
          user.userName?.toLowerCase().includes(Query.toLowerCase()) ||
          user.gmail?.toLowerCase().includes(Query.toLowerCase()) ||
          user.phoneNumber?.toLowerCase().includes(Query.toLowerCase())
        : true;

      return roleMatch && statusMatch && searchMatch;
    });
  }, [users, status, t, role, Query]);
  console.log("filtered users", filterUser);

  if (isLoading) return <p>Loading... please wait</p>;
  if (isError) return <p>An Error accoured :( </p>;

  return (
    <div className="">
      <div className="border border-white  flex justify-between h-18 bg-[#222] rounded-xl">
        <div className="flex items-center pr-5 gap-2">
          <p>{t("show")}</p>
          <div>
            <select
              className="bg-black-600 mt-2 p-2 rounded-[5px] text-white cursor-pointer "
              value={number}
              onChange={(e) =>{dispatch(setNumber(e.target.value));setCurrentPage(currentPage)} }
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
            value={Query}
            onChange={(e) => queryUser(e)}
            type="text"
            placeholder={t("search")}
          />
          <button
            onClick={handleOpen}
            className="border border-boarder cursor-pointer rounded-[5px] flex items-center justify-center w-34 h-10 bg-blue"
          >
            {t("Adduser")}
          </button>
          {open && (
            <AddUser onSuccess={handleAddUser} onClose={() => setOpen(false)} />
          )}
        </div>
      </div>

      <div className="border border-boarder h-80 bg-[#222] mt-1 rounded-xl overflow-scroll">
        <TableUser
          openDetailId={openDetailId}
          setOpenDetailId={setOpenDetailId}
          users={{ listUser: filterUser }}
        />
      </div>
      <div className="mt-5">
        <ResponsivePagination
          current={currentPage}
          total={totalPage}
          onPageChange={(page) => handlePageChange(page)}
        />
      </div>
    </div>
  );
};

export default UsersInfo;
