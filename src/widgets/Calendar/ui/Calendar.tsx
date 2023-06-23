'use client';

import { setScrollPermission } from '@/shared/setScrollPermission';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import List from './List';
import SideOverWrapper from './SideOverWrapper';
import SideWrapper from './SideWrapper';
import Toggle from './Toggle';

export default function Calendar() {
  const router = useRouter();

  const [showSideOver, setShowSideOver] = useState(false);

  const handleClickTour = (id: number) => {
    if (showSideOver) {
      setShowSideOver(false);
    }

    setScrollPermission(true);
    router.push(`/tours/${id}`);
  };

  return (
    <>
      <SideWrapper>
        <List handleClick={handleClickTour} />
      </SideWrapper>

      <SideOverWrapper
        show={showSideOver}
        icon={
          !showSideOver ? (
            <Toggle
              onClick={() => {
                setScrollPermission(false);
                setShowSideOver(true);
              }}
            />
          ) : null
        }
        onHide={() => {
          setScrollPermission(true);
          setShowSideOver(false);
        }}
      >
        <List handleClick={handleClickTour} />
      </SideOverWrapper>
    </>
  );
}
