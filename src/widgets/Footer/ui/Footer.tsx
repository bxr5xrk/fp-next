import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { address, email, name, phones, social } from '../lib/contactsConfig';

export default function Footer() {
  return (
    <footer className="mx-auto w-full space-y-4 overflow-hidden border-t p-2">
      <div className="flex flex-col flex-wrap items-start justify-between gap-4 pt-2 sm:flex-row lg:gap-0">
        {/* logo + social */}
        <section className="flex flex-grow flex-col gap-4">
          <h3 className="font-semibold text-primary-600">
            #Ми знаємо напрямок
          </h3>

          <div className="ml-1 flex space-x-5">
            {social.map((item) => (
              <Link
                target="_blank"
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-700"
                rel="noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </section>

        <div className="flex w-full flex-col justify-between gap-5 whitespace-nowrap sm:flex-row sm:gap-20 lg:w-fit">
          <section className="space-y-3 text-sm leading-6">
            <div className="flex items-center gap-x-2 text-gray-600">
              <dt className="flex-none">
                <span className="sr-only">Address</span>
                <BuildingOffice2Icon className="h-5 w-5" aria-hidden="true" />
              </dt>
              <dd>
                <p className="whitespace-normal hover:text-gray-900">
                  {address}
                </p>
              </dd>
            </div>

            <div className="flex items-center gap-x-2 text-gray-600">
              <dt className="flex-none">
                <span className="sr-only">Name</span>
                <UserIcon className="h-5 w-5" aria-hidden="true" />
              </dt>
              <dd>
                <p className="hover:text-gray-900">{name}</p>
              </dd>
            </div>

            <Link
              className="flex items-center gap-2 text-sm leading-6 text-slate-700 transition hover:text-gray-900"
              href={`mailto:${String(email)}`}
            >
              <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
              <span>{email}</span>
            </Link>
          </section>

          <section className="space-y-3">
            {phones.map(({ tel }) => (
              <Link
                className="flex items-center gap-2 text-sm leading-6 text-slate-700 transition hover:text-gray-900"
                key={tel}
                href={`tel:${tel.replaceAll(' ', '')}`}
              >
                <PhoneIcon className="h-5 w-5" aria-hidden="true" />
                <span>{tel}</span>
              </Link>
            ))}
          </section>
        </div>
      </div>

      <p className="text-center text-xs leading-5 text-gray-500">
        &copy; 2023 Франківський паломник
      </p>
    </footer>
  );
}

//   /* <h3 className="text-sm font-semibold leading-6">Контакти</h3> */
