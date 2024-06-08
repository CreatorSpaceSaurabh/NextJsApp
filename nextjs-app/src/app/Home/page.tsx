"use client";
import React, { useEffect, useState } from "react";
import { getPokemon, getAllPokemon } from "./apiService";
import Card from "../Card/card";
import Loader from "../Loader/loader";

const home = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, isLoading] = useState(true);
  const apiURL = "https://pokeapi.co/api/v2/pokemon";

  const handleChange = (event: any) => {
    event.preventDefault();
    console.log(isChecked);
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    fetchData();
    isLoading(false);
  }, []);

  const fetchData = async () => {
    let response: any = await getAllPokemon(apiURL);
    await loadPokemon(response?.results);
    isLoading(false);
    console.log(response);
  };

  const loadPokemon = async (data: any) => {
    let _pokemonData: any = await Promise.all(
      data.map(async (pokemon: any) => {
        let pokemonGet = await getPokemon(pokemon);
        return pokemonGet;
      })
    );
    setPokemonData(_pokemonData);
  };

  return (
    <div
      className={`min-h-screen ${
        !isChecked ? "bg-gray-50" : "bg-black-50"
      }  flex flex-col justify-center relative overflow-hidden pt-50`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div
            className={`relative px-7 py-6 ${
              !isChecked ? "bg-white" : "bg-black"
            }  ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6`}
          >
            <div className="space-y-2">
              <p
                className={` ${
                  !isChecked ? "text-slate-800" : "text-slate-200"
                }`}
              >
                Welcome to Pokedex
              </p>
            </div>
          </div>
        </div>
        {/* Toggle swicth */}
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
                isChecked ? "bg-[#212b36]" : "bg-[#CCCCCE]"
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
      {loading ? (
        <Loader />
      ) : (
        <div className="">
          {/* <div
            className={`relative px-7 py-6 ${
              !isChecked ? "bg-white" : "bg-black"
            }`}
          >
            <p
              className={` ${
                !isChecked ? "text-slate-800" : "text-slate-200"
              } justify-center text-center`}
            >
              Pokemon list
            </p>
          </div> */}
          <div className="mx-4 p-2  grid grid-cols-3 gap-3">
            {pokemonData?.length &&
              pokemonData?.map((item, i) => <Card key={i} details={item} />)}
          </div>
        </div>
      )}
    </div>
  );
};

export default home;
