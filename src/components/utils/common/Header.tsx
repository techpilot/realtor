'use client';
import { logout } from '@/firebase/auth';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
  const [email, setEmail] = useState('');
  const [accessToken, setAccessToken] = useState('');

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem('access_token');
      localStorage.removeItem('email');

      setEmail('');
      setAccessToken('');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setEmail(localStorage.getItem('email')!);
    setAccessToken(localStorage.getItem('access_token')!);
  }, [email, accessToken]);

  return (
    <div className="flex justify-between items-center gap-3 px-3 md:px-8">
      <p className="text-xs md:text-sm font-medium text-[#fff] cursor-pointer">
        Find an Agent
      </p>
      <p className="text-base md:text-2xl font-semibold text-[#fff]">
        Realtor.com
      </p>
      {!accessToken && (
        <p className="text-[#fff]">
          <span className="cursor-pointer text-xs md:text-sm font-medium min-w-max hover:text-[#492433]">
            <Link href="?register-modal=true">Register</Link>
          </span>
          /
          <span className="cursor-pointer text-xs md:text-sm font-medium min-w-max hover:text-[#492433]">
            <Link href="?modal=true">Sign In</Link>
          </span>
        </p>
      )}

      {accessToken && (
        <p
          onClick={handleLogout}
          title="click to logout"
          className="cursor-pointer text-xs md:text-sm font-medium min-w-max hover:text-[#492433] text-white"
        >
          {email}
        </p>
      )}
    </div>
  );
};

export default Header;
