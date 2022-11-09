import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const tx = request.cookies.get('tx');
    const { pathname, origin } = request.nextUrl;

    if (pathname == "/favicon.ico") {
        return NextResponse.next();
    }
    if (
        pathname == "/api/logout" ||
        pathname == "/api/token"
    ) {
    }
    if (pathname === '/_next/:path*') {
        return NextResponse.next();
    }

    if (pathname === "/chat") {
        if (!tx) {
            return NextResponse.redirect(`${origin}/404`);
        }
    }

    try {
        if (pathname === "/login" || pathname === "/daftar") {
            if (tx) {
                return NextResponse.redirect(`${origin}/`);
            }
        }
        return NextResponse.next();
    } catch (error) {
        if (pathname !== '/login') {
            return NextResponse.redirect(`${origin}/login`);
        }
        return NextResponse.next();
    }
}