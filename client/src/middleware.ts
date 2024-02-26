
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';


export const middleware = (request: NextRequest) => {
    const token = cookies().get('token') || ''
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url))
    } else {
        return NextResponse.rewrite(new URL('/', request.url))
    }

};
export const config = {
    matcher: ['/'],
}
