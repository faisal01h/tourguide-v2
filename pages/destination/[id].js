import Head from "next/head";
import Navbar from "../../components/navbar";
import { useEffect, useState } from "react";
import { Open_Sans } from "@next/font/google";
import { useRouter } from "next/router";
import axios from "axios";
import { getUserInfo } from "../../utils/auth";

const openSans = Open_Sans({ subsets: ['latin'] });

export default function Destination() {

    const [ title, setTitle ] = useState();
    const [ culture, setCulture ] = useState([]);
    const [ rating, setRating ] = useState();
    const [ desc, setDesc ] = useState("");
    const [ loc, setLoc ] = useState("");
    const [ toggleReviewInput, setToggleReviewInput ] = useState(false);
    const [ input, setInput ] = useState();
    const [ reviews, setReviews ] = useState([]);

    let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const router = useRouter()
    const queryParams = router.query;

    useEffect(() => {
        setTitle("Touring Guide");
        if(queryParams.id) {
            console.log(queryParams.id)
            axios.get("//localhost:8080/api/destination/"+queryParams.id)
            .then((res) => {
                console.log(res.data)
                setTitle(res.data.name)
                setCulture([res.data.budaya_name, res.data.budaya_description])
                setRating(res.data.avg_rating)
                setDesc(res.data.description)
                setLoc(res.data.location)

                axios.get("//localhost:8080/api/review/"+res.data.id)
                .then((e) => {
                    console.log(e.data)
                    setReviews(e.data.reviews)
                })
            })
        }
    }, [queryParams])

    return (
        <div className={openSans.classname}>
            <Head>
                <title>{title}</title>
            </Head>
            <Navbar text="text-black" userInfo={getUserInfo()} />
            <div className="flex gap-3 lg:gap-5 flex-wrap pt-24 px-5 lg:px-20">
                <img src="" className="lg:w-[50vw] w-[80vw] bg-gray-600 rounded" />
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <h1 className="font-bold text-4xl">{title}</h1>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-lg font-medium">Location</h2>
                        <p>{loc}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-lg font-medium">Culture</h2>
                        <p>{culture[1]}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-lg font-medium">Rating</h2>
                        <p>{rating}/5</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col px-5 lg:px-20 my-8 gap-2">
                <h2 className="font-medium text-lg">About {title}</h2>
                <p>
                    {desc}
                </p>
            </div>
            <div className="flex flex-col px-5 lg:px-20 my-8 gap-2">
                <h2 className="font-medium text-lg">Review</h2>
                {
                    reviews.map((e, i) => {
                        let dt = new Date(e.created_at)
                        return (
                            <div className="flex flex-col gap-2" key={i}>
                                <div className="flex gap-3">
                                    <div className="bg-gray-900 rounded-full w-12 h-12 flex items-center justify-center text-white">
                                        {e.rating}/5
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex flex-col">
                                            <b>{e.firstname}</b>
                                            <span>{`${dt.getDate()} ${month[dt.getMonth()]} ${dt.getFullYear()}`}</span>
                                        </div>
                                    </div>
                                </div>
                                <p>{e.review}</p>
                            </div>
                        )
                    })
                }
                {
                    !toggleReviewInput ?
                    <button className="bg-color-primary py-1 px-3 w-fit rounded-full self-center text-white hover:bg-blue-600" onClick={()=>setToggleReviewInput(true)}>Add Review</button>
                    :
                    <div className="flex flex-col gap-1">
                        <textarea onChange={(e)=>setInput(e.currentTarget.value)} className="outline outline-1 focus:outline-blue-500 rounded-md px-3 py-1 w-full"></textarea>
                        <button className="bg-blue-500 rounded-md w-24 text-white py-1 px-3">Submit</button>
                    </div>
                }
            </div>
        </div>
    )
}