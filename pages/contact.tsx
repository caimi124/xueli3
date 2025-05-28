import { NextPage } from 'next';
import Layout from '../components/Layout';
import { FiMessageCircle, FiPhone, FiMail, FiUsers, FiBook, FiCheckCircle } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import WhatsAppButton from '../components/WhatsAppButton';

const ContactPage: NextPage = () => {
  const contactInfo = [
    {
      icon: FiMessageCircle,
      title: 'WhatsApp',
      value: '点击添加',
      link: 'https://wa.me/你的号码'
    },
    {
      icon: FiPhone,
      title: '电话',
      value: '+86 123 4567 8901',
      link: 'tel:+8612345678901'
    },
    {
      icon: FiMail,
      title: '邮箱',
      value: 'support@acaboost.com',
      link: 'mailto:support@acaboost.com'
    }
  ];

  const features = [
    {
      icon: FiUsers,
      title: '已服务客户',
      description: '我们已服务超过千名客户，帮助他们成功获取真实有效的学历证书。您的信任，是我们不断前进的动力。'
    },
    {
      icon: FiBook,
      title: '学校合作',
      description: '我们与众多权威高校及教育机构建立了合作，确保为您提供的学历证书均来源正规渠道，真实有效。'
    },
    {
      icon: FiCheckCircle,
      title: '真实保障',
      description: '通过我们的服务，您可以轻松完成学历认证，获得权威认可的证书。合作流程简单高效，确保快速出证，省心省力。'
    }
  ];

  return (
    <Layout
      title="联系我们 - Acaboost学历认证"
      description="我们专注为您提供真实、权威的学历认证服务。欢迎随时咨询，专业团队为您保驾护航。"
    >
      <IconContext.Provider value={{ size: '24px', color: '#2563eb' }}>
        <div className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                联系我们
              </h1>
              <p className="text-xl text-center max-w-3xl mx-auto">
                我们专注为您提供真实、权威的学历认证服务。欢迎随时咨询，专业团队为您保驾护航。
              </p>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <info.icon />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                  <p className="text-gray-600">{info.value}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <feature.icon />
                      </div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-6">立即咨询</h2>
              <p className="text-xl mb-8">
                添加我们的WhatsApp，获取一对一专业学历认证咨询，快速解答您的所有疑问！
              </p>
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

export default ContactPage; 