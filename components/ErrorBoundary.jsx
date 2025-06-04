import React from 'react';

// Simple error boundary class component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    const { children, fallback, locale = 'zh' } = this.props;
    const { hasError, error } = this.state;
    
    if (hasError) {
      if (fallback) {
        return fallback;
      }
      
      // Default fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-6 bg-white rounded-lg shadow-md max-w-md">
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              {locale === 'zh' ? '出错了' : 'Error Occurred'}
            </h2>
            <p className="text-gray-600 mb-4">
              {locale === 'zh' 
                ? '抱歉，页面发生了错误。请尝试刷新页面或返回首页。'
                : 'Sorry, an error occurred. Please try refreshing the page or return to the homepage.'}
            </p>
            <div className="text-sm text-gray-500 mb-4 p-2 bg-gray-100 rounded overflow-auto">
              {error?.message}
            </div>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {locale === 'zh' ? '刷新页面' : 'Refresh Page'}
            </button>
            <a
              href={`/${locale}`}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              {locale === 'zh' ? '返回首页' : 'Back to Home'}
            </a>
          </div>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary; 