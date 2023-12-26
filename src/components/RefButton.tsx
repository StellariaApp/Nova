"use client";
import { useRef } from "react";
import { Button } from "@stellaria/nova";

type Props = {};

export const RefButton = (props: Props) => {
  const ref = useRef<HTMLButtonElement>(null);
  return (
    <Button ref={ref} {...props}>
      Ref Button
    </Button>
  );
};
