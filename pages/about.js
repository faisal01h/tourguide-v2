import Head from "next/head";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "../components/footer";
import { getUserInfo, loginCheck } from "../utils/auth";
import axios from "axios";

export default function About() {
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
            <div className="h-[40vh] flex flex-col justify-center items-center gap-16" style={{backgroundImage: 'url("/login-register-img.jpg")', backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPositionY:"10%"}}>
                <h1 className="font-bold text-3xl text-center text-white">About</h1>
            </div>
            <div className="relative -top-8 bg-white rounded-t-3xl h-full py-10 px-16">
                <p>
                    Touring Guide is a website to find a new and unique destination. We provide you key information such as location, what the place looks like, and more importantly, see what local culture your next destination has.
                </p>
            </div>
            <Footer />
        </div>
    )
}