import React from 'react';

export default function Schools() {
  const schools = [
    { name: '学校A', country: '美国', description: '提供多种学历认证服务' },
    { name: '学校B', country: '英国', description: '专注于国际学历认证' },
    { name: '学校C', country: '加拿大', description: '提供快速认证服务' },
  ];

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">学校资源库</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {schools.map((school) => (
          <div key={school.name} className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">{school.name}</h2>
            <p>国家: {school.country}</p>
            <p>{school.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 