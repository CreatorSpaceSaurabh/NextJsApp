"use client";
import React, { useState } from "react";

const home = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    console.log(isChecked);
    setIsChecked(!isChecked);
  };

  return (
    <div
      class={`min-h-screen ${
        !isChecked ? "bg-gray-50" : "bg-black-50"
      }  flex flex-col justify-center relative overflow-hidden `}
    >
      <div class="max-w-7xl mx-auto">
        <div class="relative group cursor-pointer">
          <div class="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div
            class={`relative px-7 py-6 ${
              !isChecked ? "bg-white" : "bg-black"
            }  ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6`}
          >
            <div class="space-y-2">
              <p class={` ${!isChecked ? "text-slate-800" : "text-slate-200"}`}>
                Welcome to CreatorSpace
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
            <input
              type="checkbox"
              checked={isChecked}
              defaultChecked={isChecked}
              onClick={handleChange}
              className="sr-only"
            />
            <span
              className={`label flex items-center text-sm font-medium ${
                !isChecked ? "text-black" : "text-white"
              } `}
            >
              Light mode
            </span>
            <span
              className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
                isChecked ? "bg-[#3ef141]" : "bg-[#CCCCCE]"
              }`}
            >
              <span
                className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
                  isChecked ? "translate-x-[28px]" : ""
                }`}
              ></span>
            </span>
            <span
              className={`label flex items-center text-sm font-medium ${
                !isChecked ? "text-black" : "text-white"
              }`}
            >
              Dark mode
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default home;
