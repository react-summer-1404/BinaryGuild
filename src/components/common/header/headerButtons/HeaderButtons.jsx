import Button from "../../button/button";

const HeaderButtons = () => {
  return (
    <div className="rounded-3xl max-w-440px flex h-12 bg-[#2F2F2F] text-center gap-4 pr-4 text-white pt-0.5 cursor-pointer">
      <div className="flex gap-4 pt-2">
        <p>خانه</p>
        <p>دوره ها</p>
        <p>بلاگ ها</p>
        <p>درباره ما</p>
      </div>
      <Button />
    </div>
  );
};

export default HeaderButtons;
