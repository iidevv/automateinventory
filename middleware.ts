import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request: NextRequest) {
    const jwtSecret = process.env.JWT_SECRET;
    const token = request.cookies.get('token')?.value;

    if (!jwtSecret) {
        console.error('JWT_SECRET is not defined in the environment variables.');
        return NextResponse.redirect(new URL('/login', request.url));
    }

    if (!token) {
        console.log('No token found');
        return NextResponse.redirect(new URL('/login', request.url));
    }

    console.log(`Received token: ${token}`);

    try {
        // Verify the token using jose's jwtVerify function
        const { payload } = await jwtVerify(token, new TextEncoder().encode(jwtSecret));
        console.log('Decoded token:', payload);  // Debugging the decoded token
    } catch (err) {
        console.error('JWT verification failed:', err.message); // Provide specific error message
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/admin/:path*',
        '/inventory/:path*',
        '/catalog/:path*',
        '/dropshipping/:path*',
        '/dashboard/:path*',
    ],
};
