const HeaderIcons = () => {
  return (
    <div className="flex gap-3">
      <div className="rounded-4xl w-10 h-10 border-solid border-[#DCDCDC] border-1 relative cursor-pointer">
        <img
          src="/src/assets/icons/notification-02.svg"
          className="absolute left-1.5 top-1.5"
        />
        <div className="absolute top-6.5 left-6">
          <img src="/src/assets/icons/Group 3.svg" />
        </div>
      </div>
      <div className="bg-black-900 w-10 h-10 rounded-3xl border-solid border-black-900 border-1 relative cursor-pointer">
        <img
          src="/src/assets/icons/moon-02.svg"
          className="absolute top-1.5 left-2"
        />
      </div>
    </div>
  );
};

export default HeaderIcons;
