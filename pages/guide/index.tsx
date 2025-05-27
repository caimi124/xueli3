import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

export default function GuidePage() {
  return (
    <Layout>
      <SEO
        title="领证指南 - 学历认证服务平台"
        description="详细介绍学历认证领证流程，帮助用户快速了解和完成认证。"
        keywords={["学历认证", "领证指南", "认证流程", "办理流程"]}
      />
      <div className="bg-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">领证指南</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            详细介绍学历认证领证流程，帮助您快速完成认证。
          </p>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose prose-blue lg:prose-xl mx-auto">
            <h2>办理流程</h2>
            <ol>
              <li>在线咨询，提交认证需求</li>
              <li>顾问一对一沟通，定制认证方案</li>
              <li>签署协议，支付费用</li>
              <li>提交所需材料，开始办理</li>
              <li>官方渠道认证，获取真实可查学历证书</li>
              <li>快递寄送证书，完成认证</li>
            </ol>
            <h2>所需材料</h2>
            <ul>
              <li>个人身份证明（身份证/护照）</li>
              <li>学历相关材料（毕业证、成绩单等）</li>
              <li>其他补充材料（如有特殊要求）</li>
            </ul>
            <h2>常见问题</h2>
            <details>
              <summary>办理周期多久？</summary>
              <p>一般7-14天内完成，具体视认证类型和院校而定。</p>
            </details>
            <details>
              <summary>证书是否真实可查？</summary>
              <p>所有证书均可通过官方渠道验证，100%真实可查。</p>
            </details>
            <details>
              <summary>可以加急办理吗？</summary>
              <p>支持加急服务，最快7天内交付。</p>
            </details>
            <details>
              <summary>如何保障隐私安全？</summary>
              <p>全程签署保密协议，严格保护客户隐私。</p>
            </details>
          </div>
        </div>
      </div>
    </Layout>
  );
} 