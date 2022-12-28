import { Open_Sans } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
// import InputSet from '../components/inputSet'
// import styles from '../styles/Home.module.css'

const openSans = Open_Sans({ subsets: ["latin"] });

export default function Create() {
  const [name, setDestinationName] = useState();
  const [location, setDestinationLocation] = useState();
  const [description, setDestinationDescription] = useState();
  const [culturalName, setCulturalName] = useState();
  const [culturalDescription, setCulturalDescription] = useState();

  useEffect(() => {}, []);

  function onSubmit() {
    axios.post(`//localhost:8080/api/destination`, {
      name,
      location,
      description,
      budaya_name: culturalName,
      budaya_description: culturalDescription,
      // photo_path : "media/destination/kemiren.png"
    }, {
      headers: {
        Authorization: "Bearer "+JSON.parse(localStorage.tg_user).token
      }
    })
    .then((res) => {
      window.location.href = "/recommendation"
    })
  }

  return (
    <>
      <Head>
        <title>Create New Destination</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={openSans.className}>
        <div className="flex">
          <div className="bg-white lg:w-[50vw] lg:h-screen flex flex-col items-center justify-center py-10 gap-12 w-screen">
            <div className="flex flex-col gap-3 items-center">
              <div className="outline outline-1 focus-within:outline-[#4293F3] outline-[#8E8E8E] flex flex-col w-80 lg:w-96 rounded-sm px-2 py-1">
                <input type={"text"} className="focus:outline-none" placeholder="Destination Name" id="destinationName" onChange={(e) => setDestinationName(e.currentTarget.value)} />
              </div>
              <div className="outline outline-1 focus-within:outline-[#4293F3] outline-[#8E8E8E] flex flex-col w-80 lg:w-96 rounded-sm px-2 py-1">
                <input type={"text"} className="focus:outline-none" placeholder="Location" id="location" onChange={(e) => setDestinationLocation(e.currentTarget.value)} />
              </div>
              <div className="outline outline-1 focus-within:outline-[#4293F3] outline-[#8E8E8E] flex flex-col w-80 h-80 lg:w-96 rounded-sm px-2 py-1">
                <input type={"text"} className="focus:outline-none" placeholder="Description" id="destinationDescription" onChange={(e) => setDestinationDescription(e.currentTarget.value)} />
              </div>
              <div className="mt-5 w-full flex flex-col items-center gap-2">
                <button className="px-3 py-2 bg-[#1045CD] text-white rounded-full w-24" onClick={onSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white lg:w-[50vw] lg:h-screen flex flex-col items-center justify-center py-10 gap-12 w-screen">
            <div className="outline outline-1 focus-within:outline-[#4293F3] outline-[#8E8E8E] flex flex-col w-80 lg:w-96 rounded-sm px-2 py-1">
              <input type={"text"} className="focus:outline-none" placeholder="Cultural Name" id="culturalName" onChange={(e) => setCulturalName(e.currentTarget.value)} />
            </div>
            <div className="outline outline-1 focus-within:outline-[#4293F3] outline-[#8E8E8E] flex flex-col w-80 h-80 lg:w-96 rounded-sm px-2 py-1">
              <input type={"text"} className="focus:outline-none" placeholder="Cultural Description" id="culturalDescription" onChange={(e) => setCulturalDescription(e.currentTarget.value)} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
