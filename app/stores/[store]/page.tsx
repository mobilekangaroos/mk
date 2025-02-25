'use client'
import React from 'react'
import storesData from '@/app/stores-data.json'
import { useParams } from 'next/navigation'
import { useState, useRef } from 'react'
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import { TomTomMap } from '@/components/TomTomMap'
import { IoCalendar, IoCall, IoLocationSharp } from 'react-icons/io5'
import {formatStoreName} from '../functions'

const capitalizeWord = (word: string) => {
    const wordWithoutInitial = word.toLowerCase()
    return word.charAt(0).toUpperCase() + wordWithoutInitial.slice(1)
}

const getStoreName = (store:string) => {
   return store.split("%20")
}

export default function Store() {
    const { store:url } = useParams<{ store: string }>()
    
    const capitalizeStoreName = getStoreName(url).map(w => capitalizeWord(w)).join(" ")
    const [storeInfo, setStoreInfo] = useState(storesData.filter((store, _) => store.storeName === capitalizeStoreName)[0])
    const [latitude, longitude] = storeInfo.coordinates.split(", ")
    
  

    return (
        <section className="_repairScreen grow py-6 px-4 text-gray-800 text-center bg-gray-100">
            <article className="pb-6 flex justify-center items-center max-w-[40rem] mx-auto flex-col">
                <div className='text-gray-600 font-light flex flex-col md:grid grid-rows-[3fr,4fr] grid-cols-3'>
                    <span className='text-gray-600 md:w-full col-start-1 col-end-4 w-full h-min'>

                        <h4 className='text-2xl font-normal text-gray-800'>
                            {formatStoreName(storeInfo.storeName)}
                        </h4>
                        <h6 className='text-sm'>({storeInfo.expState})</h6>
                    </span>
                    <span className='_address text-gray-600 grid place-items-center self-center'>
                        <IoCalendar className='w-6 h-6 text-mk-green-400' />
                        <h5 className='font-normal text-gray-800'>Opening Hours</h5>
                        <h5 className='font-light text-sm'>{storeInfo.hours}</h5>
                    </span>
                    <a href={`tel:${storeInfo.phone}`} className='self-center'>
                        <span className='_address text-gray-600 grid place-items-center my-auto'>
                            <IoCall className='w-6 h-6 text-mk-green-400' />
                            <h5 className='font-normal text-gray-800'>Phone</h5>
                            <h5 className='font-light text-sm'>{storeInfo.phone}</h5>
                        </span>
                    </a>
                    <a href={`https://www.google.com/maps/place/${latitude}+${longitude}`} className='self-center'>
                        <span className='_address text-gray-600 grid place-items-center hover:cursor-pointer'>
                            <IoLocationSharp className='w-6 h-6 text-mk-green-400' />
                            <h5 className='font-normal text-gray-800'>Address</h5>
                            <h5 className='font-light text-sm'>{storeInfo.storeAddress}</h5>
                        </span>
                    </a>
                </div>
            </article>
            <article>
                <TomTomMap storeName={storeInfo.storeName} storeAddress={storeInfo.storeAddress} storeLongitude={Number(latitude)} storeLatitude={Number(longitude)} />
            </article>
        </section>
    )
}
