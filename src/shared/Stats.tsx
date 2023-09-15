'use client';

import { useTourById } from '@/entities/tour';
import { getStats } from '@/shared/lib/getStats';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Fragment } from 'react';
import { cl } from './lib';

export default function Stats() {
  const { id } = useParams();

  const tour = useTourById(id);

  const stats = getStats(tour);

  return (
    <>
      {/* header */}
      <div className="text-center">
        <h2 className="font-medium text-gray-500">{tour.title}</h2>
        <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {tour.extended_title}
        </p>
        <p className="mt-4 text-gray-500">{tour.attractions}</p>
      </div>

      {/* stats */}
      <dl className="mx-auto mt-5 flex flex-col justify-center gap-8 border-b border-t border-gray-200 px-6 py-7 text-center md:flex-row md:py-14 lg:px-8">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="mx-auto flex flex-row items-center gap-3 md:flex-col"
          >
            <dt className="text-base leading-7 text-gray-600">{stat.name}:</dt>
            <dd className="text-md font-semibold tracking-tight text-gray-900 sm:text-2xl">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>

      {/* images */}
      <div className="my-8 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
        {tour.images.map((image, index) => (
          <div
            key={index + 1}
            className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg"
          >
            <Image
              unoptimized={true}
              priority
              src={image}
              alt={String(index + 1) + ' image'}
              width="100"
              height={100}
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* description */}
      <div className="space-y-5">
        {renderSentence(tour.description)}
      </div>
    </>
  );
}

function renderSentence(sentence: string) {
  return (
    <>
      {sentence.split("/br2").map((root, idx1) => (
        <div className={cl("pt-4 text-gray-500")} key={idx1}>{root.split("/br1").map((block, idx2) => (
          <div className='pt-3' key={idx2}>{block.split("/br").map((sentence, index) => (
            <p className={`text-gray-500`} key={index}>{sentence.trim()}<br /></p>
          ))}</div>
        ))}</div>
      ))}

    </>
  )
}