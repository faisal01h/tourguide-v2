import Head from "next/head";
import Navbar from "../../components/navbar";
import { useEffect, useState } from "react";
import { Open_Sans } from "@next/font/google";

const openSans = Open_Sans({ subsets: ['latin'] });

export default function Destination() {

    const [ title, setTitle ] = useState();

    useEffect(() => {
        setTitle("Gunung Bromo");
    }, [])

    return (
        <div className={openSans.classname}>
            <Head>
                <title>destname</title>
            </Head>
            <Navbar text="text-black" />
            <div className="flex gap-3 lg:gap-5 flex-wrap pt-24 px-5 lg:px-20">
                <img src="" className="lg:w-[50vw] w-[80vw] bg-gray-600 rounded" />
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <h1 className="font-bold text-4xl">{title}</h1>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-lg font-medium">Location</h2>
                        <p>Pasuruan, Jawa Timur</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-lg font-medium">Culture</h2>
                        <ul>

                        </ul>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-lg font-medium">Rating</h2>
                        <p>4.5/5</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-5 lg:px-20 my-8 gap-2">
                <h2 className="font-medium text-lg">About {title}</h2>
                <p>
                    Lorem ipsum.
                </p>
            </div>
            <div className="flex flex-col px-5 lg:px-20 my-8 gap-2">
                <h2 className="font-medium text-lg">Review</h2>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-3">
                        <div className="bg-gray-600 rounded-full w-12 h-12"></div>
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-2">
                                <b>Faisal</b>
                                <span>created at</span>
                            </div>
                        </div>
                    </div>
                    <p>Content</p>
                </div>
                <button className="bg-color-primary py-1 px-3 w-fit rounded-full self-center text-white hover:bg-blue-600">Add Review</button>
            </div>
        </div>
    )
}