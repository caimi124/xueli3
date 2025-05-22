import React, { Component, ErrorInfo, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useTranslations } from '../utils/i18n';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * 错误边界组件，捕获子组件中的 JavaScript 错误
 */
class ErrorBoundaryClass extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // 更新状态，下次渲染时显示降级UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // 错误日志或上报服务
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // 自定义降级UI或使用传入的fallback
      if (this.props.fallback) {
        return this.props.fallback;
      }
      
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-6 bg-white rounded-lg shadow-md max-w-md">
            <h2 className="text-2xl font-bold text-red-600 mb-4">出错了</h2>
            <p className="text-gray-600 mb-4">
              抱歉，页面发生了错误。请尝试刷新页面或返回首页。
            </p>
            <div className="text-sm text-gray-500 mb-4 p-2 bg-gray-100 rounded overflow-auto">
              {this.state.error?.message}
            </div>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              刷新页面
            </button>
            <a
              href="/"
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              返回首页
            </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * 错误边界组件的包装器，添加国际化支持
 */
export default function ErrorBoundary({ children, fallback }: Props): JSX.Element {
  const router = useRouter();
  const { locale = 'zh' } = router || {};
  const { t } = useTranslations(locale);
  
  // 预设的错误UI
  const defaultFallback = (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-6 bg-white rounded-lg shadow-md max-w-md">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          {t('common', 'errorOccurred')}
        </h2>
        <p className="text-gray-600 mb-4">
          {locale === 'zh' 
            ? '抱歉，页面发生了错误。请尝试刷新页面或返回首页。'
            : 'Sorry, an error occurred. Please try refreshing the page or return to the homepage.'}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {locale === 'zh' ? '刷新页面' : 'Refresh Page'}
        </button>
        <a
          href="/"
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
        >
          {locale === 'zh' ? '返回首页' : 'Back to Home'}
        </a>
      </div>
    </div>
  );
  
  return (
    <ErrorBoundaryClass fallback={fallback || defaultFallback}>
      {children}
    </ErrorBoundaryClass>
  );
} 