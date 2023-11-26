import Image from 'next/image';
import Link from 'next/link';

export default function Header(): JSX.Element {
  return (
    <header className="flex w-full items-center justify-between border-b pb-2">
      <Link href="/" className="flex items-center gap-3">
        <span className="relative h-10 w-10 sm:h-12 sm:w-12">
          <Image fill src="/logo.png" alt="logo" priority />
        </span>

        <div className="flex flex-col">
          <h1 className="text-base font-bold md:text-xl">
            Франківський Паломник
          </h1>
          <h2 className="font-medium text-primary-700 md:font-semibold">
            #Ми знаємо напрямок
          </h2>
        </div>
      </Link>

      {/* <NavBar /> */}

      <div></div>
    </header>
  );
}
