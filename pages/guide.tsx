import { NextPage } from 'next';
import Layout from '../components/Layout';
import { FiCheckCircle, FiAward, FiGlobe, FiUsers, FiShield, FiMessageCircle } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import WhatsAppButton from '../components/WhatsAppButton';

const GuidePage: NextPage = () => {
  const steps = [
    {
      number: '01',
      title: '选择认证国家与学历类型',
      description: '根据您的需求，选择合适的国家和学历类型，我们的顾问将为您提供专业建议。'
    },
    {
      number: '02',
      title: '确认学校与专业可办',
      description: '我们与众多知名院校合作，确保您选择的学校和专业均可办理。'
    },
    {
      number: '03',
      title: '提交认证资料',
      description: '准备必要的认证材料，我们的顾问将协助您完成资料提交。'
    },
    {
      number: '04',
      title: '领取学历证书',
      description: '认证完成后，您将获得纸质证书和电子档，确保真实有效。'
    },
    {
      number: '05',
      title: '免费验证、可查可验',
      description: '所有证书均可通过官方渠道验证，确保真实可靠。'
    }
  ];

  const certificates = [
    {
      type: '本科学位证书',
      majors: ['工商管理', '计算机科学', '金融学'],
      countries: ['新加坡', '马来西亚', '英国']
    },
    {
      type: '硕士学位证书',
      majors: ['MBA', '教育学', '工程管理'],
      countries: ['澳洲', '加拿大', '香港']
    },
    {
      type: '博士学位证书',
      majors: ['管理学', '教育学', '计算机科学'],
      countries: ['英国', '美国', '新加坡']
    }
  ];

  const trustPoints = [
    {
      icon: FiUsers,
      title: '成功案例',
      description: '已成功帮助 1000+ 客户获取真实学历'
    },
    {
      icon: FiShield,
      title: '真实合作',
      description: '与真实学校合作，含验证渠道'
    },
    {
      icon: FiMessageCircle,
      title: '专业服务',
      description: '多语言客服支持 + 经验丰富顾问团队'
    }
  ];

  return (
    <Layout
      title="快速领证指南 - Acaboost学历认证"
      description="快速拿证，真实学历，全球认证，直接加WhatsApp获取方案。"
    >
      <IconContext.Provider value={{ size: '24px', color: '#2563eb' }}>
        <div className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                快速领证指南
              </h1>
              <p className="text-xl text-center max-w-3xl mx-auto mb-8">
                快速拿证，真实学历，全球认证，直接加WhatsApp获取方案
              </p>
              <div className="flex justify-center">
                <WhatsAppButton className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-semibold transition-colors" />
              </div>
            </div>
          </div>

          {/* Steps Section */}
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">快速领证流程</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-blue-600">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates Section */}
          <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">热门证书类型</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {certificates.map((cert, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <FiAward />
                      </div>
                      <h3 className="text-xl font-semibold">{cert.type}</h3>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">热门专业：</h4>
                      <p className="text-gray-600">{cert.majors.join('、')}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">可认证国家：</h4>
                      <p className="text-gray-600">{cert.countries.join('、')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Section */}
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">为什么选择我们</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {trustPoints.map((point, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <point.icon />
                    </div>
                    <h3 className="text-xl font-semibold">{point.title}</h3>
                  </div>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-6">立即免费咨询顾问，获取专属领证方案</h2>
              <p className="text-xl mb-8">加 WhatsApp 立刻获取方案</p>
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