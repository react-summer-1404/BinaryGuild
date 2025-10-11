import Button from "../../button/button";

const HeaderButtons = () => {
  return (
    <div className="rounded-3xl max-w-440px flex h-12 bg-black-900 text-center gap-4 pr-4 text-white pt-0.5">
      <div className="flex gap-4 pt-2">
        <p className="cursor-pointer hover:text-blue">خانه</p>
        <p className="cursor-pointer hover:text-blue">دوره ها</p>
        <p className="cursor-pointer hover:text-blue">بلاگ ها</p>
        <p className="cursor-pointer hover:text-blue">درباره ما</p>
      </div>
      <Button />
    </div>
  );
};

export default HeaderButtons;
