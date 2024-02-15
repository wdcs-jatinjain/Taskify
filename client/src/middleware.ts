
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';


export const middleware = (request: NextRequest) => {
    const token = cookies().get('token') || ''
    // console.log("🚀 ~ middleware ~ token:", token)



};
