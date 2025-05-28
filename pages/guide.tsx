import { NextPage } from 'next';
import Layout from '../components/Layout';
import { FiCheckCircle, FiFileText, FiAward, FiBook, FiBriefcase } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import WhatsAppButton from '../components/WhatsAppButton';

const GuidePage: NextPage = () => {
  const certificates = [
    {
      type: '学历证明认证',
      description: '证明您的学历真实有效',
      usage: '求职、出国留学、移民等',
      icon: FiFileText
    },
    {
      type: '学位证书认证',
      description: '认证您获得的学位证书',
      usage: '海外学术交流、职称评定',
      icon: FiAward
    },
    {
      type: '成绩单认证',
      description: '认证学习成绩和课程信息',
      usage: '继续教育、学历提升',
      icon: FiBook
    },
    {
      type: '职业资格证书认证',
      description: '证明职业资格的真实性',
      usage: '求职、职业评估',
      icon: FiBriefcase
    }
  ];

  const steps = [
    {
      title: '准备材料',
      description: '准备您的学历证书、身份证明等相关资料。'
    },
    {
      title: '提交认证申请',
      description: '直接点击下方「添加 WhatsApp」按钮，联系专业认证顾问，无需填写复杂表格。'
    },
    {
      title: '材料审核',
      description: '顾问将协助您完成资料审核和认证流程。'
    },
    {
      title: '证书发放',
      description: '认证成功后，您将获得100%真实有效的学历认证证书。'
    },
    {
      title: '后续服务',
      description: '持续提供后续咨询与服务，保障您的学历认证权益。'
    }
  ];

  return (
    <Layout
      title="快速领证指南 - Acaboost学历认证"
      description="了解如何快速完成学历认证，查看证书速览，一键联系认证顾问，轻松拿证。"
    >
      <IconContext.Provider value={{ size: '24px', color: '#2563eb' }}>
        <div className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                快速领证指南
              </h1>
              <p className="text-xl text-center max-w-3xl mx-auto">
                欢迎来到 Acaboost 学历认证快速领证指南页，这里为您详细介绍学历认证的简单流程和常见证书展示，帮助您快速获取真实学历认证。
              </p>
            </div>
          </div>

          {/* Quick Guide Process */}
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">快速领证流程</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <FiCheckCircle />
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificate Overview */}
          <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">证书快速速览</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {certificates.map((cert, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="mr-3">
                        <cert.icon />
                      </div>
                      <h3 className="text-xl font-semibold">{cert.type}</h3>
                    </div>
                    <p className="text-gray-600 mb-2">{cert.description}</p>
                    <p className="text-sm text-gray-500">{cert.usage}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-6">获取专业认证顾问服务！</h2>
              <p className="text-xl mb-8">立即联系我们的专业顾问，开启您的认证之旅</p>
              <WhatsAppButton className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-semibold transition-colors" />
            </div>
          </div>

          {/* Footer Note */}
          <div className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 text-center">
              <p className="text-lg">Acaboost - 您可信赖的学历认证平台</p>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </Layout>
  );
};

export default GuidePage; 