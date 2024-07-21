const Header = () => {
  return (
    <div className="flex justify-between items-center gap-3 px-8">
      <p className="text-sm font-medium text-[#fff] cursor-pointer">
        Find an Agent
      </p>
      <p className="text-3xl font-semibold text-[#fff]">Realtor.com</p>
      <p className="text-[#fff]">
        <span className="cursor-pointer text-sm font-medium hover:text-[#492433]">
          Register
        </span>
        /
        <span className="cursor-pointer text-sm font-medium hover:text-[#492433]">
          Sign in
        </span>
      </p>
    </div>
  );
};

export default Header;
