"use client"

import React from "react";
import {SessionProvider} from "next-auth/react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {NextUIProvider} from "@nextui-org/react";

const queryClient = new QueryClient()

export const Providers = ({children}: { children: React.ReactNode }) => {
    return <SessionProvider>
        <QueryClientProvider client={queryClient}>
            <NextUIProvider>
                {children}
            </NextUIProvider>
        </QueryClientProvider>
    </SessionProvider>
}