import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import InputSet from '../components/inputSet'
import { Open_Sans } from '@next/font/google'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Router } from 'next/router'
import { loginCheck } from '../utils/auth'

const openSans = Open_Sans({ subsets: ['latin'] });

export default function Login() {

  const [ email, setEmail ] = useState();
  const [ password, setPassword ] = useState();

  useEffect(() => {
    if(loginCheck()) window.location.href="/recommendation"
  }, []);

  function onLogin() {
    axios.post(`//localhost:8080/api/login`, {
      email,
      password
    })
    .then((res) => {
      
        localStorage.setItem("tg_user", JSON.stringify({
          token: res.data.token,
          email
        }))
        window.location.href = "/recommendation"
    })
    .catch((err) => {
        console.error(err);
        // toast
    })
  }

  return (
    <>
      <Head>
        <title>Login - Touring Guide</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={openSans.className}>
        <div className="flex">
            <div className="bg-white lg:w-[50vw] lg:h-screen flex flex-col items-center justify-center py-10 gap-12 w-screen">
                <div className="flex flex-col gap-2">
                    <div>

                    </div>
                    <div className="flex flex-col gap-1 items-center">
                        <h1 className="text-xl font-semibold tracking-wider">Welcome!</h1>
                        <p className="text-secondary">Sign in by entering the information below</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 items-center">
                    <div className="outline outline-1 focus-within:outline-[#4293F3] outline-[#8E8E8E] flex flex-col w-80 lg:w-96 rounded-sm px-2 py-1">
                        <label htmlFor="email" className="text-xs w-full text-secondary">Email Address</label>
                        <input type={"email"} className="focus:outline-none" id="email" onChange={(e)=>setEmail(e.currentTarget.value)} />
                    </div>
                    <div className="outline outline-1 focus-within:outline-[#4293F3] outline-[#8E8E8E] flex flex-col w-80 lg:w-96 rounded-sm px-2 py-1">
                        <label htmlFor="password" className="text-xs w-full text-secondary">Password</label>
                        <input type={"password"} className="focus:outline-none" id="password" onChange={(e)=>setPassword(e.currentTarget.value)} />
                    </div>
                    <div className='flex justify-between w-full'>
                        <div className="flex gap-2 text-secondary text-sm">
                            <input type="checkbox" />
                            <label>Remember Me</label>
                        </div>
                        <div className="text-secondary text-sm">
                            Forgot Password
                        </div>
                    </div>
                    <div className="mt-5 w-full flex flex-col items-center gap-2">
                        <button className="px-3 py-2 bg-color-primary text-white rounded-sm w-full" onClick={onLogin}>Login</button>
                        <p className="text-xs text-secondary font-medium">Don&apos;t have an account? <Link href={"register"} className="hover:text-[#4293F3]">Create one here</Link>.</p>
                    </div>
                </div>
            </div>
            <div className='lg:w-[50vw] lg:h-screen' style={{backgroundImage: 'url("/login-register-img.jpg")', backgroundSize:"cover"}}>

            </div>
        </div>
      </main>
    </>
  )
}
