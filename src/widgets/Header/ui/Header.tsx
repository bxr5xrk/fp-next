import logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between border-b pb-2">
      {/* logo */}
      <Link href="/" className="flex items-center gap-3">
        <Image src={logo} alt="logo" className="w-10 sm:w-12" priority />

        <div className="flex flex-col">
          <h1 className="text-base font-bold md:text-xl">
            Франківський Паломник
          </h1>
          <h3 className="font-medium text-primary-700 md:font-semibold">
            #Ми знаємо напрямок
          </h3>
        </div>
      </Link>

      {/* <NavBar /> */}

      <div></div>
    </header>
  );
}
