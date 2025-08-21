import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Публичные маршруты, которые не требуют аутентификации
  publicRoutes: [
    "/",
    "/sign-in",
    "/sign-up",
    "/api/webhook/clerk",
  ],
  // Маршруты, которые всегда требуют аутентификации
  ignoredRoutes: [
    "/api/webhook/clerk"
  ]
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
