import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// set up public route and public route (home) and a (posts)
// we need to give the matcher a for protected routes
// wee need to write regex
const isProtectedRoute = createRouteMatcher(["/posts(.*)"]);

// we are going to use clerk middleware to put them together
// if the protected route match it in the request, protect with authentication
export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  //the matcher will find matches for public and private routes
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
