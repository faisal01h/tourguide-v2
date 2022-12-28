import Link from "next/link";
import { Open_Sans } from "@next/font/google";
import { useEffect, useState } from "react";
import { getUserInfo, loginCheck } from "../utils/auth";
import { AiOutlineUser } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'


const openSans = Open_Sans({ subsets: ['latin'] });

export default function Navbar({userInfo, text}) {

    const [ dropdown, setDropdown ] = useState(false);
    

    const menus = [
        {
            text: "Home",
            link: "/recommendation"
        },
        {
            text: "About",
            link: "/about"
        }
    ];

    function toggleDropdown() {
        setDropdown(!dropdown)
    }

    function logout() {
        localStorage.removeItem("tg_user");
        window.location.href = "/login"
    }

    return (
        <div className="absolute w-screen">
            <nav className="flex justify-between lg:px-20 px-8 py-8 items-center">
                <div>
                    <img src="/logo-navbar-removebg.png" alt="logo" className="w-24" />
                </div>
                <div className={"lg:flex lg:gap-16 hidden "+text}>
                    {
                        menus.map((e, i) => {
                            return (
                                <div key={i} className={`${openSans.classname} font-bold tracking-wide`}>
                                    <Link href={e.link}>{e.text}</Link>
                                </div>
                            )
                        })
                    }
                    <div onClick={toggleDropdown}>
                        <FaUser />
                    </div>
                    {
                        dropdown?
                        <div className={"absolute top-20 right-16 text-black"}>
                            <div className="flex flex-col bg-white rounded-md px-3 py-1 w-48 gap-1">
                                <b className="break-words">{userInfo?userInfo.name:"?"}</b>
                                <hr />
                                <span className="hover:bg-red-300 px-1 rounded hover:text-red-800 cursor-pointer" onClick={logout}>Logout</span>
                            </div>
                        </div>
                        : ""
                    }
                </div>
            </nav>
        </div>
    )
}