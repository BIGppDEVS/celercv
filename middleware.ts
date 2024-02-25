import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req:any) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res }) // create a supabase client configured to use cookies
  await supabase.auth.getUser() // refresh session if expired - required for server components
  return res
}

export const config = {
  matcher: [
    /*
     * match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
    */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}