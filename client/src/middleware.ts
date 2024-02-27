
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';


export const middleware = (request: NextRequest) => {
    const token = cookies().get('token') || ''
    if (!token) {
        if (request.url !== '/login' && request.url !== '/register') {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    } else {
        if (request.url === '/login' || request.url === '/register') {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }


};
export const config = {
    matcher: ['/'],
}
