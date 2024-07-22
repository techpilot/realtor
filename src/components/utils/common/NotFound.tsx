import notfound_bg from '@/assets/images/404_bg.png';
import notfound from '@/assets/images/notfound.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();
  return (
    <div
      style={{
        backgroundImage: `url(${notfound_bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
      className="h-[100vh] bg-[#f2f3f3] flex justify-center items-center overflow-hidden"
    >
      <div className="m-auto flex flex-col items-center overflow-hidden">
        <Image src={notfound} alt="" className="md:h-[32rem] object-contain" />

        <button
          onClick={() => {
            router.back();
          }}
          className="mt-[3rem] px-3 py-2 bg-white rounded-md w-[6rem] font-medium text-sm border border-[#492433] text-[#492433]"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
