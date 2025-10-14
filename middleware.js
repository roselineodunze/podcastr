import { NextResponse } from "next/server"

function protectRouteMiddleware(req){
    const token = req.cookies.get("authToken")
    if(!token){
        return NextResponse.redirect(new URL("/sign-in", req.url))
    }
    return NextResponse.next()
}

export function middleware(req){
    return protectRouteMiddleware(req)
}

export const config = {
    matcher: [
        "/",
        "/create-podcast",
        "/podcast/:path*",
        "/profile/:path*",
        "/discover"
    ]
}