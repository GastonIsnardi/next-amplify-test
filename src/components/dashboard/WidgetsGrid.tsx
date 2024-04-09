"use client";

import React from "react";
import { SimpleWidget } from "..";
import { useAppSelector } from "@/store";
import { IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {
  const isCart = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget title={isCart.toString()} href={"/dashboard/counter"} subTitle="contador" icon={<IoCartOutline size={70} className="text-blue-500" />} label="label" />
    </div>
  );
};
