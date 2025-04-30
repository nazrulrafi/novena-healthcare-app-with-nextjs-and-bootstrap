import { NextResponse } from "next/server";
import { VerifyToken } from "./utility/JWTTokenHelper";

export async function middleware(req) {
    try {
        let token = req.cookies.get('token');
        if (!token) {
            return NextResponse.redirect(new URL("/user/login", req.url));
        }

        let payload = await VerifyToken(token['value']);

        if (!payload || !payload.email || !payload.id || !payload.role) {
            return NextResponse.redirect(new URL("/user/login", req.url));
        }

        // Add role to request headers
        const requestHeader = new Headers(req.headers);
        requestHeader.set('email', payload.email);
        requestHeader.set('id', payload.id);
        requestHeader.set('role', payload.role);

        // ** Role-based access control **
        if (req.nextUrl.pathname.startsWith("/dashboard/users") && payload.role !== "ADMIN") {
            return NextResponse.redirect(new URL("/dashboard", req.url));
        }

        return NextResponse.next({ request: { headers: requestHeader } });

    } catch (e) {
        if (req.nextUrl.pathname.startsWith("/api/")) {
            return NextResponse.json({ status: "fail", data: "unauthorized" }, { status: 401 });
        } else {
            return NextResponse.redirect(new URL("/user/login", req.url));
        }
    }
}

export const config = {
    matcher: [
        "/dashboard/:path*",
    ]
};