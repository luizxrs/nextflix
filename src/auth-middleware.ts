import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { useRouter } from "next/navigation";

// This function can be marked `async` if using `await` inside
export function authMiddleware(request: NextRequest) {
  const router = useRouter();

  return router.push("/authentication");
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
}