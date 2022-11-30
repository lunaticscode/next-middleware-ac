import { NextRequest, NextResponse } from "next/server";

export default function commonMiddleware(req: NextRequest) {
  // 사용자 권한 체크 로직
  const token = req.cookies.get("access_token")?.value;
  if (!token) return NextResponse.redirect(new URL("/", req.url));
  // 사용자 권한 체크 로직

  console.log("this is valid user");
}

export const config = {
  matcher: ["/mypage", "/mypage2"],
};
