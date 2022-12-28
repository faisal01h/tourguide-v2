import Head from "next/head";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "../components/footer";
import { getUserInfo, loginCheck } from "../utils/auth";
import axios from "axios";

export default function Recommendation() {
    const [ recommendation, setRecommendation ] = useState([]);
    const [ user, setUser ] = useState();

    function getData() {
        axios.get("//localhost:8080/api/destination")
        .then((res) => {
            console.log(res.data)
            setRecommendation(res.data)
        })
    }

    useEffect(() => {
        if(loginCheck()) {
            setUser(getUserInfo())
        } else window.location.href = "/login"

        getData()

    
    }, [])

    function search(val) {
        val = val.toLowerCase()
        if(val=== "") {
            return getData()
        }
        let newRec = [];
        for(let i = 0; i < recommendation.length; ++i) {
            let name = recommendation[i].name.toLowerCase()
            if(name.includes(val)) {
                newRec.push(recommendation[i])
            }
        }
        setRecommendation(newRec)
    }

    return (
        <div>
            <Head>
                <title>Touring Guide</title>
            </Head>
            <Navbar userInfo={user} text="text-white" />
            <div className="h-[60vh] flex flex-col justify-center items-center gap-16" style={{backgroundImage: 'url("/login-register-img.jpg")', backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPositionY:"10%"}}>
                <h1 className="font-bold text-3xl text-center text-white">Have a good day, {user?user.name.split(" ")[0]:""}</h1>
                <input type="text" placeholder="Search destination..." className="rounded-full px-5 py-2 w-72 lg:w-[28rem] shadow-lg focus:outline-none focus:shadow-[#4293F3]/30" onChange={(e)=>search(e.currentTarget.value)} />
            </div>
            <div className="relative -top-8 bg-white rounded-t-3xl h-full py-8">
                <div className="flex flex-col gap-5 items-center">
                    <h1 className="font-bold text-3xl">Recommendation</h1>
                    <div className="flex flex-col lg:flex-row flex-wrap gap-5 lg:gap-20 lg:w-[90vw]">
                        {
                            recommendation.map((e, i) => {
                                return (
                                    <div key={i}>
                                        <Link href={`/destination/${e.id}`} className="flex flex-col rounded-md gap-1 w-72 h-72 bg-gray-100 hover:shadow-lg">
                                            <img src={"//localhost:8080/"+e.photo_path} alt="" className="w-fit h-72 rounded" />
                                            <div className="flex justify-between px-3 pb-2">
                                                <div className="flex flex-col">
                                                    <b>{e.name}</b>
                                                    <span>{e.location}</span>
                                                </div>
                                                <div>
                                                    <span>{e.avg_rating}/5</span>
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