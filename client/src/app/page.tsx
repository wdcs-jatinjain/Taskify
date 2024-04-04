import Task from "./task/page";

import * as React from "react";

import {NextUIProvider} from "@nextui-org/system";
export default function Home() {
  return (
    <>
      <NextUIProvider>

      <Task />
      </NextUIProvider>
    </>
  );
}
