import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
  
    const path = request.nextUrl.pathname

    const isPublickPath = path === '/signin' || path === '/signup'

    const token = request.cookies.get('token')?.value || ''

    if(isPublickPath && token){
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    if(!isPublickPath && !token){
        return NextResponse.redirect(new URL('/signin', request.nextUrl))
    }
}
 

export const config = {
  matcher: [
    '/profile',
    '/signin',
    '/signup',
    '/buildSection/restaurant'
  ]
}