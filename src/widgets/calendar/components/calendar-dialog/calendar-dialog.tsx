"use client";

import { setScrollPermission } from "@/shared/setScrollPermission";
import { Container } from "./components/container";
import { Toggle } from "./components/toggle";
import { PropsWithChildren, useState } from "react";

interface CalendarDialogProps { }

export function CalendarDialog(props: PropsWithChildren<CalendarDialogProps>): JSX.Element {
  const [show, setShow] = useState(false);
  const { children } = props;

  function onToggle() {
    setShow(!show);
    setScrollPermission(show);
  }

  return (
    <Container
      show={show}
      icon={<Toggle
        show={show}
        onClick={onToggle}
      />}
      onHide={() => {
        setScrollPermission(true);
        setShow(false);
      }}
    >
      {children}
    </Container>
  );
};