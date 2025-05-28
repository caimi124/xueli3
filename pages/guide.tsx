import { NextPage } from 'next';
import Layout from '../components/Layout';
import { FiCheckCircle, FiFileText, FiAward, FiBook, FiBriefcase, FiGlobe, FiClock, FiHelpCircle } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import WhatsAppButton from '../components/WhatsAppButton';

const GuidePage: NextPage = () => {
  const countries = [
    {
      name: '美国',
      description: '美国的学历认证体系主要通过WES(World Education Services)等机构进行评估。',
      duration: '标准认证周期：4-6周，加急服务：1-2周',
      icon: FiGlobe
    },
    {
      name: '英国',
      description: '英国的学历认证主要通过UK NARIC(现更名为ENIC)进行。',
      duration: '标准认证周期：3-4周，加急服务：7-10个工作日',
      icon: FiGlobe
    },
    {
      name: '澳大利亚',
      description: '澳大利亚的学历认证由AQF(澳大利亚学历资格框架)管理。',
      duration: '标准认证周期：3-5周',
      icon: FiGlobe
    },
    {
      name: '加拿大',
      description: '加拿大的学历认证由ICAS和WES等机构进行评估。',
      duration: '标准认证周期：4-6周',
      icon: FiGlobe
    }
  ];

  const faqs = [
    {
      question: '什么是学历认证？为什么需要它？',
      answer: '学历认证是指将一个国家的学历证书转换为另一个国家认可的等效学历的过程。当您需要在国外工作、学习或移民时，通常需要进行学历认证，以证明您的教育背景符合目标国家的标准。'
    },
    {
      question: '学历认证需要多长时间？',
      answer: '认证时间因国家和认证机构而异，通常标准认证需要4-8周，而加急服务可能需要1-3周。准备充分的材料和正确的申请流程可以帮助加快认证进程。'
    },
    {
      question: '认证文件的有效期是多久？',
      answer: '大多数认证文件没有明确的有效期限，但某些国家或机构可能要求认证文件在特定时间内（如6个月或1年内）有效。建议在使用前确认目标机构的具体要求。'
    },
    {
      question: '如果我的原始文件不是英文，需要翻译吗？',
      answer: '是的，大多数国家的认证机构要求非英文文件提供官方认证的英文翻译。翻译必须由认可的翻译机构完成，并且通常需要附有翻译机构的盖章或公证。'
    }
  ];

  return (
    <Layout
      title="国际学历认证指南 - Acaboost学历认证"
      description="全面解读各国学历认证流程、要求与注意事项，助您顺利完成认证。"
    >
      <IconContext.Provider value={{ size: '24px', color: '#2563eb' }}>
        <div className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                国际学历认证指南
              </h1>
              <p className="text-xl text-center max-w-3xl mx-auto">
                全面解读各国学历认证流程、要求与注意事项，助您顺利完成认证
              </p>
            </div>
          </div>

          {/* Countries Section */}
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-12">热门认证指南</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {countries.map((country, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="mr-3">
                      <country.icon />
                    </div>
                    <h3 className="text-xl font-semibold">{country.name}学历认证指南</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{country.description}</p>
                  <p className="text-sm text-gray-500">{country.duration}</p>
                  <button className="mt-4 text-blue-600 hover:text-blue-800 font-semibold">
                    查看完整指南 →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">常见问题解答</h2>
              <div className="max-w-4xl mx-auto">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <div className="flex items-start mb-4">
                      <div className="mr-3 mt-1">
                        <FiHelpCircle />
                      </div>
                      <h3 className="text-xl font-semibold">{faq.question}</h3>
                    </div>
                    <p className="text-gray-600 ml-8">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-6">需要专业的学历认证服务？</h2>
              <p className="text-xl mb-8">我们提供一站式学历认证解决方案，7天内完成，100%真实可查</p>
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