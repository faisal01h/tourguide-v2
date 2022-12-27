import Link from "next/link";
import { Open_Sans } from "@next/font/google";

const openSans = Open_Sans({ subsets: ['latin'] });

export default function Navbar({userInfo}) {
    

    const menus = [
        {
            text: "Home",
            link: "recommendation"
        },
        {
            text: "About",
            link: "about"
        }
    ];

    return (
        <div className="absolute w-screen">
            <nav className="flex justify-between lg:px-20 px-8 py-8">
                <div>
                    IMAGE
                </div>
                <div className="lg:flex lg:gap-16 hidden">
                    {
                        menus.map((e, i) => {
                            return (
                                <div key={i} className={`${openSans.classname} font-bold tracking-wide`}>
                                    <Link href={e.link}>{e.text}</Link>
                                </div>
                            )
                        })
                    }
                    <div>
                        userIcon
                    </div>
                </div>
            </nav>
        </div>
    )
}