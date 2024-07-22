'use client';
import { register, signIn } from '@/firebase/auth';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import btn_loader from '@/assets/svgs/btn-loader.svg';
import cancel_icon from '@/assets/svgs/cancel-icon.svg';

function RegisterModal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get('register-modal');
  const pathname = usePathname();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await register(email, password);
      console.log(response);
      localStorage.setItem('access_token', response.accessToken);
      localStorage.setItem('email', response.email!);

      setNotification('Successfully Signed up');
      setLoading(false);
      setTimeout(() => {
        window.location.reload();
      }, 4000);
    } catch (error) {
      console.log(error);
      setNotification('Error signing up');
      setLoading(false);
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      router.push(pathname);
    }
  });

  return (
    <>
      {modal && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur-0 flex justify-center items-center">
          <div className="relative bg-white m-auto p-8 h-[60vh] w-[85vw] md:w-[40vw] xl:w-[30vw] rounded-md">
            <form
              onSubmit={handleSignIn}
              className="h-full flex flex-col justify-between items-center"
            >
              <div className="flex-1 flex flex-col items-center gap-2 w-full">
                <p className="text-lg lg:text-xl font-medium text-[#492433]">
                  Register an account
                </p>

                <div className="w-full mt-[1rem] flex flex-col gap-3">
                  <div>
                    <label className="text-sm text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-[2.5rem] w-full px-2 rounded-md outline-none border border-gray-600 focus:border-[#492433]"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-gray-700">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-[2.5rem] w-full px-2 rounded-md outline-none border border-gray-600 focus:border-[#492433]"
                    />
                  </div>

                  {notification !== '' && (
                    <p
                      className={`${notification.includes('Successfully') ? 'bg-green-50 text-green-900' : 'bg-red-50 text-red-900'} text-xs font-medium p-2`}
                    >
                      {notification}
                    </p>
                  )}
                </div>
              </div>
              <br />

              <button
                type="submit"
                className="bg-[#492433] p-3 w-full text-white rounded-md text-sm h-[3rem] flex justify-center items-center"
              >
                {loading ? (
                  <Image src={btn_loader} alt="" className="" />
                ) : (
                  'Register'
                )}
              </button>
            </form>

            <Image
              src={cancel_icon}
              alt=""
              onClick={() => router.push(pathname)}
              className="absolute top-3 right-3 cursor-pointer"
            />
          </div>
        </dialog>
      )}
    </>
  );
}

export default RegisterModal;
