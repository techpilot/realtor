import { useRouter } from 'next/navigation';

const DetailsHeader = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center gap-3 px-3 md:px-8 py-3 bg-white border-b-4 border-[#492433]">
      <p className="text-xs md:text-sm font-medium text-[#000] cursor-pointer">
        Find an Agent
      </p>
      <p
        className="text-base md:text-2xl font-semibold text-[#000] cursor-pointer"
        onClick={() => router.push('/')}
      >
        Realtor.com
      </p>
      <p className="text-[#000]">
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

export default DetailsHeader;
