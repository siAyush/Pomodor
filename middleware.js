import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  console.log(pathname);
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  // token exist
  if (pathname.includes("api/auth") || token) {
    return NextResponse.next();
  }
  // redirect to login page if dont have token
  if (!token && pathname !== "/login") {
    // return NextResponse.rewrite(new URL('/login', req.url))
  }
}
