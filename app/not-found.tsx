import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md">
        <div className="text-6xl mb-4">😵</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">页面未找到</h1>
        <p className="text-gray-600 mb-6">
          抱歉，您访问的页面不存在或已被移除。
        </p>
        <div className="space-y-3">
          <Link 
            href="/zh"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            返回首页
          </Link>
          <Link 
            href="/zh/schools"
            className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            浏览院校
          </Link>
        </div>
      </div>
    </div>
  );
} 