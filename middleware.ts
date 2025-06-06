import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // 检查路径是否已经包含 locale
  const pathnameHasLocale = /^\/(?:zh|en)(?:\/.*)?$/.test(pathname)
  
  // 如果路径已经有正确的 locale，直接通过
  if (pathnameHasLocale) {
    return NextResponse.next()
  }
  
  // 只对根路径和没有 locale 前缀的路径进行重定向
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/zh', request.url))
  }
  
  // 对于其他没有 locale 的路径，添加 /zh 前缀
  if (!pathname.startsWith('/_') && !pathname.startsWith('/api') && !pathname.startsWith('/images') && !pathname.startsWith('/fonts')) {
    return NextResponse.redirect(new URL(`/zh${pathname}`, request.url))
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