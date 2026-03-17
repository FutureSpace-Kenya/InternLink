import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

// If the user isn't already going to /waitlist and not at root '/'
if (url.pathname !== "/waitlist" && url.pathname !== "/") {
  // Redirect them to /waitlist
  url.pathname = "/waitlist";
  return NextResponse.redirect(url);
}

  return NextResponse.next();
}

export const config = {
  // Match all paths EXCEPT:
  // - /api (our OTP / waitlist verification routes)
  // - /_next (Next.js internals, chunks, build assets)
  // - static assets (favicon, svg, png, jpg, etc.)
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
