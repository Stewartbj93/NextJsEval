'use client';

import Challenge1 from '../../app/Pages/Challenge1/page';
import Challenge2 from '../../app/Pages/Challenge2/page';
import Challenge3 from '../../app/Pages/Challenge3/page';
import Challenge4 from '../../app/Pages/Challenge4/page';
import Challenge5 from '../../app/Pages/Challenge5/page';
import Challenge6 from '../../app/Pages/Challenge6/page';
import Challenge7 from '../../app/Pages/Challenge7/page';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Home from '@/app/page';


const routes = [
  { name: 'Toggle', link: '/Challenge1' },
  { name: 'Disable Button', link: '/Challenge2' },
  { name: 'Update Parent State from Child', link: '/Challenge3' },
  { name: 'Layout', link: '/Challenge4' },
  { name: 'Fetch', link: '/Challenge5' },
  { name: 'useContext', link: '/Challenge6' },
  { name: 'Fizz Buzz', link: '/Challenge7' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col lg:flex-row min-w-[320px] lg:min-w-[25%] w-full h-screen">
      <div className="bg-gray-800 text-white w-full lg:w-1/5 p-4 min-w-[320px]">
        <Link className='text-2xl font-bold mb-4' href='/'>Level 3 Evaluation</Link>
        <hr className="border-gray-500 mb-4" />
        <div className="space-y-2 ">
          {routes.map((route, idx) => (
            <Link href={route.link} key={idx}>
              <div className="block hover:text-gray-300">
                <h5 className="text-lg">{route.name}</h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className='w-screen'>
        <div className='flex justify-center'>
        <h1 className='text-2xl p-4 underline font-semibold'>Welcome to Level 3 Evaluation</h1>
        </div>
        <div className="w-full min-w-[320px]">
          <div className="p-4">
            {pathname === '/Challenge1' && <Challenge1 />}
            {pathname === '/Challenge2' && <Challenge2 />}
            {pathname === '/Challenge3' && <Challenge3 />}
            {pathname === '/Challenge4' && <Challenge4 />}
            {pathname === '/Challenge5' && <Challenge5 />}
            {pathname === '/Challenge6' && <Challenge6 />}
            {pathname === '/Challenge7' && <Challenge7 />}
            {pathname === '/' && <Home />}
          </div>
        </div>
      </div>
    </div>
  );
}