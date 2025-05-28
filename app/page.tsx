import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">学历认证加速器</h1>
        <p className="text-xl">全球学历认证，一站式搞定</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">认证流程</h2>
        <ul className="list-disc pl-5">
          <li>选择学校</li>
          <li>填写信息</li>
          <li>专员对接</li>
          <li>完成认证</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">可选学校</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {['学校A', '学校B', '学校C'].map((school) => (
            <div key={school} className="border p-4 rounded shadow">
              <h3 className="font-bold">{school}</h3>
              <p>国家: 示例国家</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">客户评价</h2>
        <div className="border p-4 rounded shadow">
          <p>"服务非常专业，认证过程顺利！"</p>
        </div>
      </section>

      <section className="text-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">WhatsApp 咨询</button>
      </section>
    </main>
  );
} 