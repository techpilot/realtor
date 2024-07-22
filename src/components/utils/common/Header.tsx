const Header = () => {
  return (
    <div className="flex justify-between items-center gap-3 px-3 md:px-8">
      <p className="text-xs md:text-sm font-medium text-[#fff] cursor-pointer">
        Find an Agent
      </p>
      <p className="text-base md:text-2xl font-semibold text-[#fff]">
        Realtor.com
      </p>
      <p className="text-[#fff]">
        <span className="cursor-pointer text-xs md:text-sm font-medium min-w-max hover:text-[#492433]">
          Register
        </span>
        /
        <span className="cursor-pointer text-xs md:text-sm font-medium min-w-max hover:text-[#492433]">
          Sign in
        </span>
      </p>
    </div>
  );
};

export default Header;
