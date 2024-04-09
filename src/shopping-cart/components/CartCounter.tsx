"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, resetCount, substractOne } from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface props {
  value?: number;
}

// Generated by https://quicktype.io

export interface CounterResponsse {
  count: number;
}

const getApiCounter = async () => {
  const data = await fetch("/api/counter").then((res) => res.json());
  return data as CounterResponsse;
};

export const CartCounter = ({ value = 0 }: props) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, [dispatch, value]);

  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(initCounterState(count)));
  }, [dispatch]);

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => {
            dispatch(addOne());
          }}
        >
          +1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => {
            dispatch(substractOne());
          }}
        >
          -1
        </button>
      </div>
    </>
  );
};