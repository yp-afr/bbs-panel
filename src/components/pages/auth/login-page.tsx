"use client"

import {Suspense, useState} from "react";

import {redirect, useSearchParams} from "next/navigation";
import {signIn, useSession} from "next-auth/react";
import Image from "next/image";
import AuthError from "@/components/pages/auth/auth-error";

export default function LoginPage() {

    const [isLoading,setIsLoading] = useState(false)

    const [loginData, setLoginData] = useState({
        phone: "",
        password: ""
    });

    const session = useSession();




    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    }

    const handleLogin = () => {
        setIsLoading(true)
        signIn("credentials",
            {...loginData}
        )
        setIsLoading(false)
    }

    // if logged in redirect to dashboard


    if (session.data?.accessToken) {
        redirect('/')
    }


    return (
        <>


            <div className="min-h-full flex">
                <div className="py-12 mx-auto">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <div className="">
                            <img
                                className="h-12 w-auto"
                                src="https://i0.wp.com/bbs.ua/wp-content/uploads/2023/11/white-bbs-insurance.png?fit=640%2C234&ssl=1"
                                alt="Workflow"
                            />
                            <h2 className="mt-6 text-2xl font-extrabold text-gray-900">Адністративна панель</h2>
                        </div>

                        <div className="mt-8">

                            <div className="mt-6">
                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Номер телефону
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="phone"
                                                name="phone"
                                                type="phone"
                                                autoComplete="phone"
                                                required
                                                placeholder="+380XXXXXXXXX"
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                onChange={changeHandler}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                            Пароль
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                placeholder="********"
                                                autoComplete="current-password"
                                                required
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                onChange={changeHandler}
                                            />
                                        </div>
                                    </div>

                                    {/*<div className="flex items-center justify-between">*/}
                                    {/*    <div className="flex items-center">*/}
                                    {/*        <input*/}
                                    {/*            [id]="remember-me"*/}
                                    {/*            name="remember-me"*/}
                                    {/*            type="checkbox"*/}
                                    {/*            className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"*/}
                                    {/*        />*/}
                                    {/*        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">*/}
                                    {/*            Remember me*/}
                                    {/*        </label>*/}
                                    {/*    </div>*/}

                                    {/*    <div className="text-sm">*/}
                                    {/*        <a href="#" className="font-medium text-red-600 hover:text-red-500">*/}
                                    {/*            Forgot your password?*/}
                                    {/*        </a>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}

                                    <div>
                                        <span

                                            onClick={handleLogin}
                                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                        >
                                            Вхід

                                        </span>
                                    </div>
                                </div>
                               <Suspense>
                                   <AuthError />
                               </Suspense>

                                {isLoading && <div className="mt-5 bg-blue-100 text-blue-500 p-5 rounded-xl">asd</div>}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
