"use client";
import Heading from "@/components/Heading";
import React, { Suspense, useEffect } from "react";
import { useState } from "react";
import { IoChevronForward, IoCall, IoLocationSharp } from "react-icons/io5";
import GreenChip from "@/components/GreenChip";
import EducationCard from "@/components/EducationCard";
import storesData from "@/app/stores-data.json";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { formatStoreName } from "./functions";

export default function Page() {
  const [activeRegion, setActiveRegion] = useState<string>("1");
  const [userIsBrowsingCA, setUserIsBrowsingCA] = useState<boolean>(false);
  const [activeRegionCA, setActiveRegionCA] = useState<string>("");
  const storesStates = storesData.map((store) => store.expState);
  const statesSet = [...new Set(storesStates)];

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const state = searchParams.get("state");

    if (state) {
      setActiveRegion(state);
    }
  }, [searchParams]);

  const filterStores = (val: string) => {
    setActiveRegionCA(val);
    setUserIsBrowsingCA(true);
  };

  const CaliforniaUI = () => {
    useEffect(() => {
      if (!activeRegionCA) {
        setUserIsBrowsingCA(false);
      }
    }, [activeRegionCA]);

    const router = useRouter();

    return (
      <section className="w-full flex flex-col col-start-1 col-end-3">
        <article>
          <div
            onClick={() => filterStores("Southern CA")}
            className={`_northCalifornia w-full group grow flex items-center text-center gap-4 justify-start py-2 px-4 bg-white my-2 rounded-xl text-gray-500 font-light text-md shadow-sm hover:cursor-pointer ${activeRegionCA === "Southern CA" ? "bg-white border-mk-green-700 border-2 text-mk-green-700" : "bg-white"}`}
          >
            <span className="flex items-center gap-2 mx-auto">
              <h5 className="font-semibold">Southern California</h5>
            </span>
          </div>
          <div
            onClick={() => filterStores("Northern CA")}
            className={`_southCalifornia w-full group grow flex items-center text-center gap-4 justify-start py-2 px-4 bg-white my-2 rounded-xl text-gray-500 font-light text-md shadow-sm hover:cursor-pointer ${activeRegionCA === "Northern CA" ? "bg-white border-mk-green-700 border-2 text-mk-green-700" : "bg-white"}`}
          >
            <span className="flex items-center gap-2 mx-auto">
              <h5 className="font-semibold">Northern California</h5>
            </span>
          </div>
          <div
            onClick={() => filterStores("Central Valley")}
            className={`_centralValley w-full group grow flex items-center text-center gap-4 justify-start py-2 px-4 bg-white my-2 rounded-xl text-gray-500 font-light text-md shadow-sm hover:cursor-pointer ${activeRegionCA === "Central Valley" ? "bg-white border-mk-green-700 border-2 text-mk-green-700" : "bg-white"}`}
          >
            <span className="flex items-center gap-2 mx-auto">
              <h5 className="font-semibold">Central California</h5>
            </span>
          </div>
        </article>
        <article className="mt-8 grid grid-cols-1 gap-4 w-full justify-start md:grid-cols-2">
          {userIsBrowsingCA &&
            storesData
              .filter((store) => store.stateMainRegion === activeRegionCA)
              .map((store, ix) => (
                <div
                  key={ix}
                  className="group flex items-center text-left gap-4 justify-start py-2 px-4 bg-white my-2 rounded-lg text-gray-500 font-light text-sm hover:cursor-pointer"
                  onClick={() => {
                    router.push(`/stores/${store.storeName.toLowerCase()}`);
                  }}
                >
                  <section className="space-y-2">
                    <span className="flex items-center gap-2">
                      <h5 className="font-semibold">{store.storeName}</h5>
                    </span>
                    <span className="flex items-center gap-2">
                      <IoCall className="w-4 h-4 text-mk-green-400" />
                      <p className="font-normal">{store.phone}</p>
                    </span>
                    <span className="flex items-start flex-row gap-2">
                      <div className="w-4 h-4">
                        <IoLocationSharp className="translate-y-1 text-mk-green-400" />
                      </div>
                      <p>{store.storeAddress}</p>
                    </span>
                  </section>
                  <IoChevronForward className="min-w-4 scale-[125%] text-mk-green-500 group-hover:scale-[150%] group-hover:translate-x-1 transition-all duration-300 group-hover:text-blue-400 ml-auto" />
                </div>
              ))}
        </article>
      </section>
    );
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className="_repairScreen grow py-6 px-4 text-gray-800 text-center bg-gray-100">
        <article className="pb-6  flex justify-center items-center max-w-[40rem] mx-auto flex-col">
          <Heading
            heading="Stores"
            subheading="We have over 30 stores across multiple states, so you can quickly find us. Our +20 years of experience in the device-repair field precedes us."
          />
          {/* <div className='relative search-input inline-flex'>
                        <input type="text" name="" id="search" className='bg-white rounded-full h-8 px-4 text-gray-500 w-auto focus:ring-mk-green-500 focus:ring-2 md:w-80 focus:outline-none'
                        
                        />
                        <IoSearch className='absolute top-1/2 -translate-y-1/2 right-2 text-gray-500' />
                        </div> */}
          <div className="list pt-2">
            <ul className="flex flex-wrap gap-2 justify-center">
              {statesSet.map((state, ix) => (
                <GreenChip
                  state={state}
                  key={ix}
                  setActiveRegion={setActiveRegion}
                  activeRegion={activeRegion}
                />
              ))}
            </ul>
            <article>
              <div>
                <h4></h4>
                <p></p>
              </div>
            </article>
          </div>
          <article className="mt-8 grid grid-cols-1 gap-4 w-full justify-center md:grid-cols-2">
            {activeRegion === "California" ? (
              <CaliforniaUI />
            ) : (
              storesData
                .filter((store) => store.expState === activeRegion)
                .map((store, ix) => (
                  <div
                    key={ix}
                    className="group flex items-center text-left gap-4 justify-start py-2 px-4 bg-white my-2 rounded-lg text-gray-500 font-light text-sm hover:cursor-pointer"
                    onClick={() => {
                      router.push(`/stores/${store.storeName.toLowerCase()}`);
                    }}
                  >
                    <section className="space-y-2">
                      <span className="flex items-center gap-2">
                        <h5 className="font-semibold">
                          {formatStoreName(store.storeName)}
                        </h5>
                      </span>
                      <span className="flex items-center gap-2">
                        <IoCall className="w-4 h-4 text-mk-green-400" />
                        <p className="font-normal">{store.phone}</p>
                      </span>
                      <span className="flex items-start flex-row gap-2">
                        <div className="w-4 h-4">
                          <IoLocationSharp className="translate-y-1 text-mk-green-400" />
                        </div>
                        <p>{store.storeAddress}</p>
                      </span>
                    </section>
                    <IoChevronForward className="min-w-4 scale-[125%] text-mk-green-500 group-hover:scale-[150%] group-hover:translate-x-1 transition-all duration-300 group-hover:text-blue-400 ml-auto" />
                  </div>
                ))
            )}
          </article>
        </article>
        <article>
          <Heading
            heading="Can't find your store?"
            subheading="We also offer pick up and delivery services, so you don't have to travel long distances or worry about logistics."
          />
          <article className="flex flex-col md:flex-row justify-center max-w-[40rem] mx-auto gap-4">
            <EducationCard
              title="Universal repairs"
              description="We can take in your device at every store and run a general diagnostic."
            />
            <EducationCard
              title="Pick-up and drop off"
              description="For your convenience, we provide free pickup and drop-off services, saving you time and effort."
            />
          </article>
        </article>
      </section>
    </Suspense>
  );
}
