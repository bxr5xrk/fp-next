import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import sanity from '@/shared/lib/sanity';
import Image from 'next/image';

const CURRENT_YEAR = new Date().getFullYear();

export default async function Footer(): Promise<JSX.Element> {
  const data = await getData();
  const { socialMedia, name, email, phones, address } = data;

  return (
    <footer className="mx-auto w-full space-y-4 overflow-hidden border-t p-2">
      <div className="flex flex-col flex-wrap items-start justify-between gap-4 pt-2 sm:flex-row lg:gap-0 w-full">
        <section className="items-center flex flex-grow justify-center xxs:justify-between flex-wrap gap-4 w-full">
          <h3 className="font-semibold text-primary-600">
            #Ми знаємо напрямок
          </h3>

          <div className="ml-1 flex space-x-5">
            {socialMedia.map((item, index) => (
              <Link
                target="_blank"
                key={index}
                href={item.url}
                className="text-gray-600 hover:text-gray-700"
                rel="noreferrer"
              >
                {/* <span className="sr-only">{item.name}</span> */}
                <Image
                  src={item.icon}
                  alt='social media icon'
                  // alt={item.name}
                  width={24}
                  height={24}
                />
              </Link>
            ))}
          </div>
        </section>

        <div className="flex w-full flex-col justify-between gap-5 whitespace-nowrap sm:flex-row sm:gap-20 lg:w-fit">
          <section className="space-y-3 text-sm leading-6 mx-auto xxs:mx-0">
            <Link href="https://maps.app.goo.gl/cuVNmNbtHu8rEnDg6" className="flex items-center gap-x-2 text-gray-600 mx-auto xxs:mx-0">
              <div className="flex-none">
                <span className="sr-only">Address</span>
                <BuildingOffice2Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="whitespace-normal hover:text-gray-900">
                  {address}
                </p>
              </div>
            </Link>

            <div className="flex items-center gap-x-2 text-gray-600 mx-auto w-fit xxs:mx-0">
              <div className="flex-none">
                <span className="sr-only">Name</span>
                <UserIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="hover:text-gray-900">{name}</p>
              </div>
            </div>

            <Link
              className="flex items-center gap-2 text-sm leading-6 text-slate-700 transition hover:text-gray-900 w-fit mx-auto xxs:mx-0"
              href={`mailto:${email}`}
            >
              <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
              <span>{email}</span>
            </Link>
          </section>

          <section className="space-y-3 mx-auto w-fit xxs:mx-0">
            {phones.map((phone, index) => (
              <Link
                className="flex items-center gap-2 text-sm leading-6 text-slate-700 transition hover:text-gray-900"
                key={index}
                href={`tel:${phone.replaceAll(' ', '')}`}
              >
                <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                <span>{phone}</span>
              </Link>
            ))}
          </section>
        </div>
      </div>

      <p className="text-center text-xs leading-5 text-gray-500">
        &copy; {CURRENT_YEAR} Франківський паломник
      </p>
    </footer>
  );
}

interface FooterData {
  socialMedia: {
    url: string;
    icon: string;
  }[];
  email: string;
  phones: string[];
  name: string;
  address: string;
}

async function getData(): Promise<FooterData> {
  const data = await sanity.fetch<FooterData>(`*[_type == "elements"][0].footer {
    ...,
    "socialMedia": socialMedia[] {
      url,
  "icon": icon.asset->{url}.url
    }
  }`);

  return data;
}