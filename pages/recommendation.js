import Head from "next/head";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "../components/footer";

export default function Recommendation() {
    const [ recommendation, setRecommendation ] = useState([]);

    useEffect(() => {
        setRecommendation([
            {
                image: null,
                title: "Gunung Bromo",
                location: "Jawa Timur",
                rating: 4.5,
                link: "tour/1"
            },
            {
                image: null,
                title: "Gunung Bromo",
                location: "Jawa Timur",
                rating: 4.5,
                link: "tour/2"
            },
            {
                image: null,
                title: "Gunung Bromo",
                location: "Jawa Timur",
                rating: 4.5,
                link: "destination/1"
            },
            {
                image: null,
                title: "Gunung Bromo",
                location: "Jawa Timur",
                rating: 4.5,
                link: "destination/2"
            },
            {
                image: null,
                title: "Gunung Bromo",
                location: "Jawa Timur",
                rating: 4.5,
                link: "tour/1"
            },
            {
                image: null,
                title: "Gunung Bromo",
                location: "Jawa Timur",
                rating: 4.5,
                link: "tour/2"
            },
        ])
    }, [])

    return (
        <div>
            <Head>
                <title>Touring Guide</title>
            </Head>
            <Navbar userInfo={""} />
            <div className="h-[60vh] flex flex-col justify-center items-center gap-16 bg-gray-600">
                <h1 className="font-bold text-3xl text-center">Have a good day, firstname</h1>
                <input type="text" placeholder="Search destination..." className="rounded-full px-5 py-2 w-72 lg:w-[28rem] shadow-lg focus:outline-none focus:shadow-[#4293F3]/30" />
            </div>
            <div className="relative -top-8 bg-white rounded-t-3xl h-full py-8">
                <div className="flex flex-col gap-5 items-center">
                    <h1 className="font-bold text-3xl">Recommendation</h1>
                    <div className="flex flex-col lg:flex-row flex-wrap lg:justify-between gap-5 lg:gap-20 lg:w-[90vw]">
                        {
                            recommendation.map((e, i) => {
                                return (
                                    <div key={i}>
                                        <Link href={e.link} className="flex flex-col rounded-md gap-1 w-72 h-72 bg-gray-100 hover:shadow-lg">
                                            <img src={e.image} alt="" className="w-fit h-72" />
                                            <div className="flex justify-between px-3 pb-2">
                                                <div className="flex flex-col">
                                                    <b>{e.title}</b>
                                                    <span>{e.location}</span>
                                                </div>
                                                <div>
                                                    <span>{e.rating}/5</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}