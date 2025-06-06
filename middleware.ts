import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // 检查路径是否已经包含 locale
  const pathnameHasLocale = /^\/(?:zh|en)(?:\/.*)?$/.test(pathname)
  
  // 如果是根路径或者没有 locale 前缀的路径，重定向到中文版本
  if (pathname === '/' || (!pathnameHasLocale && !pathname.startsWith('/_') && !pathname.startsWith('/api'))) {
    const newPath = pathname === '/' ? '/zh' : `/zh${pathname}`
    return NextResponse.redirect(new URL(newPath, request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * 匹配所有路径除了：
     * - api (API 路由)
     * - _next/static (静态文件)
     * - _next/image (图片优化文件)
     * - favicon.ico (favicon 文件)
     * - robots.txt, sitemap.xml (SEO 文件)
     * - images, fonts (静态资源)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images|fonts).*)',
  ],
} 