import React, { useState } from 'react';
import Link from 'next/link';

interface Question {
  id: string;
  text: string;
  options: {
    value: string;
    label: string;
  }[];
}

interface Result {
  title: string;
  description: string;
  recommendation: string;
  serviceId?: string;
  color: 'green' | 'yellow' | 'red';
}

const questions: Question[] = [
  {
    id: 'education_level',
    text: '您的最高学历是什么？',
    options: [
      { value: 'high_school', label: '高中' },
      { value: 'college', label: '大专' },
      { value: 'bachelor', label: '本科' },
      { value: 'master', label: '硕士' },
      { value: 'phd', label: '博士' },
    ]
  },
  {
    id: 'graduation_status',
    text: '您是否已经毕业？',
    options: [
      { value: 'yes', label: '是，已毕业' },
      { value: 'no', label: '否，在读中' },
      { value: 'incomplete', label: '未完成学业' },
    ]
  },
  {
    id: 'document_status',
    text: '您是否拥有完整的学历证明文件？',
    options: [
      { value: 'complete', label: '是，所有文件齐全' },
      { value: 'partial', label: '部分文件缺失' },
      { value: 'none', label: '没有任何文件' },
    ]
  },
  {
    id: 'purpose',
    text: '您进行学历认证的主要目的是什么？',
    options: [
      { value: 'employment', label: '就业' },
      { value: 'further_education', label: '继续深造' },
      { value: 'immigration', label: '移民' },
      { value: 'other', label: '其他目的' },
    ]
  },
];

const getResult = (answers: Record<string, string>): Result => {
  // 简单评估逻辑
  if (answers.document_status === 'none') {
    return {
      title: '认证挑战较大',
      description: '缺少必要的学历证明文件会使认证过程变得复杂。',
      recommendation: '建议您先寻找可能的替代文件，并咨询我们的专家获取个性化建议。',
      color: 'red'
    };
  }
  
  if (answers.graduation_status === 'incomplete') {
    return {
      title: '认证可能受限',
      description: '未完成学业可能会限制您获得的认证类型。',
      recommendation: '建议您咨询我们的专家，了解适合您情况的认证选项。',
      serviceId: 'application-consultation',
      color: 'yellow'
    };
  }
  
  if (answers.graduation_status === 'no') {
    return {
      title: '可进行在读证明',
      description: '作为在读学生，您可以获得在读证明认证。',
      recommendation: '建议您选择我们的基础认证服务，我们将为您提供在读证明认证。',
      serviceId: 'basic-certification',
      color: 'green'
    };
  }
  
  if (['bachelor', 'master', 'phd'].includes(answers.education_level) && answers.document_status === 'complete') {
    return {
      title: '高度适合认证',
      description: '您的学历和文件情况非常适合进行学历认证。',
      recommendation: '建议您选择我们的标准认证服务，确保获得全面的认证支持。',
      serviceId: 'standard-certification',
      color: 'green'
    };
  }
  
  if (answers.purpose === 'immigration') {
    return {
      title: '适合认证，需特别注意',
      description: '移民用途的学历认证有特殊要求，需确保符合目标国家的标准。',
      recommendation: '建议您选择我们的高级认证服务，获得更全面的支持。',
      serviceId: 'premium-certification',
      color: 'green'
    };
  }
  
  // 默认结果
  return {
    title: '基本符合认证条件',
    description: '根据您提供的信息，您的情况基本符合学历认证的条件。',
    recommendation: '建议您选择适合的认证服务，或与我们的专家进一步咨询。',
    serviceId: 'basic-certification',
    color: 'yellow'
  };
};

const EligibilityChecker: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<Result | null>(null);
  const [userInfo, setUserInfo] = useState({ name: '', email: '' });
  const [showContactForm, setShowContactForm] = useState(false);
  
  const handleAnswer = (value: string) => {
    const question = questions[currentQuestion];
    const newAnswers = { ...answers, [question.id]: value };
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // 完成所有问题，计算结果
      setResult(getResult(newAnswers));
    }
  };
  
  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
    setShowContactForm(false);
  };
  
  const handleContactInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };
  
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 在实际应用中，这里会发送数据到服务器
    // 显示成功消息
    alert("感谢您的提交！我们的专家将尽快与您联系。");
    handleRestart();
  };
  
  const question = questions[currentQuestion];
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">学历认证资格评估</h3>
      
      {!result ? (
        <>
          <div className="mb-6">
            <div className="flex justify-between text-xs text-gray-500 mb-2">
              <span>问题 {currentQuestion + 1}/{questions.length}</span>
              <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}% 完成</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <h4 className="text-lg font-medium text-gray-800 mb-4">{question.text}</h4>
          
          <div className="space-y-3">
            {question.options.map(option => (
              <button
                key={option.value}
                className="w-full py-3 px-4 border border-gray-300 rounded-md text-left hover:bg-gray-50 transition-colors"
                onClick={() => handleAnswer(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </>
      ) : showContactForm ? (
        <form onSubmit={handleContactSubmit} className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-800">留下您的联系方式</h4>
          <p className="text-gray-600 text-sm">
            填写以下信息，我们的专业顾问将尽快与您联系，提供个性化建议。
          </p>
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              您的姓名
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userInfo.name}
              onChange={handleContactInfoChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              电子邮箱
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userInfo.email}
              onChange={handleContactInfoChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          
          <div className="flex items-center pt-2">
            <input
              id="agreement"
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              required
            />
            <label htmlFor="agreement" className="ml-2 block text-sm text-gray-500">
              我同意接收关于学历认证服务的相关信息
            </label>
          </div>
          
          <div className="flex space-x-3 pt-2">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
            >
              提交
            </button>
            <button
              type="button"
              onClick={handleRestart}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md"
            >
              重新评估
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
            result.color === 'green' ? 'bg-green-100 text-green-600' :
            result.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
            'bg-red-100 text-red-600'
          }`}>
            {result.color === 'green' ? (
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            ) : result.color === 'yellow' ? (
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
              </svg>
            )}
          </div>
          
          <h4 className="text-xl font-semibold text-gray-900 mb-2">{result.title}</h4>
          <p className="text-gray-600 mb-4">{result.description}</p>
          <p className="text-gray-700 font-medium mb-6">{result.recommendation}</p>
          
          <div className="flex flex-col space-y-3">
            {result.serviceId && (
              <Link href={`/services#${result.serviceId}`}>
                <a className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md text-center">
                  查看推荐服务
                </a>
              </Link>
            )}
            <button
              onClick={() => setShowContactForm(true)}
              className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 px-4 rounded-md"
            >
              获取专家咨询
            </button>
            <button
              onClick={handleRestart}
              className="w-full bg-white text-gray-800 py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              重新评估
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EligibilityChecker; 