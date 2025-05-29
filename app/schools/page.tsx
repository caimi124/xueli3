'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Schools() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('全部');
  const [selectedDegree, setSelectedDegree] = useState('全部');
  const [selectedMajor, setSelectedMajor] = useState('全部');
  const [qsRankRange, setQsRankRange] = useState('全部');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16; // 每页显示16所学校，支持4列布局

  const schools = [
    // 美国学校
    { id: 1, name: '麻省理工学院 (MIT)', country: '美国', location: '马萨诸塞-波士顿', qsRank: 1, worldRank: 2, countryRank: 2, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['计算机科学', '电子工程', '机械工程', '物理学', '数学', '生物工程'] },
    { id: 2, name: '哈佛大学', country: '美国', location: '马萨诸塞-波士顿', qsRank: 4, worldRank: 1, countryRank: 3, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['商业管理', '经济学', '医学', '法学', '心理学', '生物学'] },
    { id: 3, name: '斯坦福大学', country: '美国', location: '加利福尼亚-帕拉阿图', qsRank: 6, worldRank: 3, countryRank: 4, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['计算机科学', '工程学', '商业管理', '医学', '人文学科', '社会科学'] },
    { id: 4, name: '宾夕法尼亚大学', country: '美国', location: '宾夕法尼亚', qsRank: 11, worldRank: 14, countryRank: 10, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['商业管理', '工程学', '医学', '护理学', '社会工作', '教育学'] },
    { id: 5, name: '加州大学伯克利分校', country: '美国', location: '加利福尼亚', qsRank: 12, worldRank: 5, countryRank: 17, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['计算机科学', '工程学', '商业管理', '经济学', '心理学', '政治学'] },
    { id: 6, name: '康奈尔大学', country: '美国', location: '纽约-纽约市', qsRank: 16, worldRank: 19, countryRank: 11, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['工程学', '农业科学', '建筑学', '商业管理', '兽医学', '酒店管理'] },
    { id: 7, name: '芝加哥大学', country: '美国', location: '伊利诺斯-芝加哥', qsRank: 21, worldRank: 25, countryRank: 11, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['经济学', '商业管理', '法学', '医学', '社会科学', '人文学科'] },
    { id: 8, name: '普林斯顿大学', country: '美国', location: '新泽西-普林斯顿', qsRank: 22, worldRank: 18, countryRank: 1, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['工程学', '经济学', '计算机科学', '国际关系', '历史学', '物理学'] },
    { id: 9, name: '耶鲁大学', country: '美国', location: '康涅狄格-纽黑文', qsRank: 23, worldRank: 10, countryRank: 5, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['法学', '医学', '艺术学', '历史学', '政治学', '经济学'] },
    { id: 10, name: '约翰霍普金斯大学', country: '美国', location: '马里兰', qsRank: 32, worldRank: 13, countryRank: 6, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['医学', '公共卫生', '工程学', '国际关系', '生物医学', '护理学'] },
    { id: 11, name: '哥伦比亚大学', country: '美国', location: '纽约-纽约市', qsRank: 34, worldRank: 9, countryRank: 13, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['新闻学', '商业管理', '工程学', '医学', '法学', '国际关系'] },
    { id: 12, name: '加州大学洛杉矶分校 (UCLA)', country: '美国', location: '加利福尼亚-洛杉矶', qsRank: 42, worldRank: 11, countryRank: 15, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['电影学', '医学', '工程学', '商业管理', '心理学', '艺术学'] },
    { id: 13, name: '纽约大学 (NYU)', country: '美国', location: '纽约-纽约市', qsRank: 43, worldRank: 32, countryRank: 30, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['商业管理', '艺术学', '法学', '医学', '新闻学', '社会工作'] },
    { id: 14, name: '密歇根大学', country: '美国', location: '密歇根-安娜堡', qsRank: 44, worldRank: 19, countryRank: 21, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['工程学', '商业管理', '医学', '法学', '教育学', '音乐学'] },
    { id: 15, name: '美国西北大学', country: '美国', location: '伊利诺斯', qsRank: 50, worldRank: 24, countryRank: 6, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['新闻学', '工程学', '商业管理', '医学', '法学', '音乐学'] },
    { id: 16, name: '卡内基梅隆大学', country: '美国', location: '宾夕法尼亚-匹兹堡', qsRank: 58, worldRank: 134, countryRank: 21, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['计算机科学', '工程学', '艺术学', '商业管理', '戏剧学', '音乐学'] },
    { id: 17, name: '杜克大学', country: '美国', location: '北卡罗来纳-杜罕', qsRank: 61, worldRank: 26, countryRank: 6, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['医学', '法学', '工程学', '商业管理', '公共政策', '环境科学'] },
    { id: 18, name: '伊利诺伊大学香槟分校', country: '美国', location: '伊利诺斯-尼巴纳-香槟', qsRank: 69, worldRank: 100, countryRank: 33, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['工程学', '商业管理', '农业科学', '计算机科学', '新闻学', '教育学'] },
    { id: 19, name: '华盛顿大学', country: '美国', location: '华盛顿-西雅图', qsRank: 76, worldRank: 30, countryRank: 46, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['医学', '工程学', '商业管理', '计算机科学', '公共卫生', '社会工作'] },
    { id: 20, name: '布朗大学', country: '美国', location: '罗德岛-普罗维登斯', qsRank: 79, worldRank: 153, countryRank: 13, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['国际关系', '经济学', '计算机科学', '生物学', '历史学', '英语文学'] },
    { id: 21, name: '普渡大学西拉法叶分校', country: '美国', location: '印第安纳州', qsRank: 89, worldRank: 167, countryRank: 46, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['工程学', '航空航天', '农业科学', '商业管理', '计算机科学', '兽医学'] },
    { id: 22, name: '波士顿大学', country: '美国', location: '马萨诸塞-波士顿', qsRank: 108, worldRank: 73, countryRank: 41, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['商业管理', '工程学', '医学', '法学', '新闻学', '国际关系'] },
    { id: 23, name: '南加州大学 (USC)', country: '美国', location: '加利福尼亚-洛杉矶', qsRank: 125, worldRank: 79, countryRank: 27, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['电影学', '商业管理', '工程学', '新闻学', '音乐学', '建筑学'] },
    { id: 24, name: '莱斯大学', country: '美国', location: '德克萨斯-休斯敦', qsRank: 141, worldRank: 223, countryRank: 18, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['工程学', '自然科学', '音乐学', '建筑学', '商业管理', '人文学科'] },

    // 英国学校
    { id: 25, name: '帝国理工学院', country: '英国', location: '英格兰-伦敦', qsRank: 2, worldRank: 12, countryRank: 5, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['工程学', '自然科学', '医学', '商业管理', '计算机科学', '材料科学'] },
    { id: 26, name: '牛津大学', country: '英国', location: '英格兰-牛津', qsRank: 3, worldRank: 4, countryRank: 2, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['人文学科', '社会科学', '自然科学', '医学', '法学', '商业管理'] },
    { id: 27, name: '剑桥大学', country: '英国', location: '英格兰-剑桥', qsRank: 5, worldRank: 6, countryRank: 1, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['数学', '自然科学', '工程学', '医学', '法学', '经济学'] },
    { id: 28, name: '伦敦大学学院 (UCL)', country: '英国', location: '英格兰-伦敦', qsRank: 9, worldRank: 7, countryRank: 9, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['医学', '工程学', '建筑学', '法学', '教育学', '艺术学'] },
    { id: 29, name: '爱丁堡大学', country: '英国', location: '苏格兰-爱丁堡', qsRank: 27, worldRank: 38, countryRank: 15, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['医学', '兽医学', '工程学', '商业管理', '法学', '艺术学'] },
    { id: 30, name: '曼彻斯特大学', country: '英国', location: '英格兰-曼彻斯特', qsRank: 34, worldRank: 67, countryRank: 22, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['工程学', '商业管理', '计算机科学', '医学', '化学', '材料科学'] },
    { id: 31, name: '伦敦国王学院 (KCL)', country: '英国', location: '英格兰-伦敦', qsRank: 40, worldRank: 36, countryRank: 24, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['医学', '法学', '国际关系', '英语文学', '历史学', '心理学'] },
    { id: 32, name: '伦敦政治经济学院 (LSE)', country: '英国', location: '英格兰-伦敦', qsRank: 50, worldRank: 239, countryRank: 3, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['经济学', '政治学', '国际关系', '社会学', '法学', '管理学'] },
    { id: 33, name: '布里斯托大学', country: '英国', location: '英格兰-布里斯托尔', qsRank: 54, worldRank: 96, countryRank: 16, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['工程学', '医学', '法学', '兽医学', '社会科学', '艺术学'] },
    { id: 34, name: '华威大学', country: '英国', location: '英格兰-考文垂', qsRank: 69, worldRank: 172, countryRank: 10, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['商业管理', '工程学', '数学', '经济学', '计算机科学', '政治学'] },
    { id: 35, name: '格拉斯哥大学', country: '英国', location: '苏格兰-格拉斯哥', qsRank: 78, worldRank: 61, countryRank: 28, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['医学', '兽医学', '工程学', '法学', '商业管理', '艺术学'] },
    { id: 36, name: '南安普顿大学', country: '英国', location: '英格兰-南安普敦', qsRank: 80, worldRank: 123, countryRank: 20, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['工程学', '计算机科学', '医学', '海洋学', '心理学', '音乐学'] },
    { id: 37, name: '利兹大学', country: '英国', location: '英格兰-利兹', qsRank: 82, worldRank: 141, countryRank: 23, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['商业管理', '工程学', '医学', '法学', '艺术学', '社会科学'] },
    { id: 38, name: '伯明翰大学', country: '英国', location: '英格兰-伯明翰', qsRank: 94, worldRank: 94, countryRank: 13, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['医学', '工程学', '商业管理', '法学', '教育学', '心理学'] },
    { id: 39, name: '谢菲尔德大学', country: '英国', location: '英格兰-谢菲尔德', qsRank: 105, worldRank: 160, countryRank: 18, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['工程学', '医学', '建筑学', '新闻学', '法学', '商业管理'] },
    { id: 40, name: '诺丁汉大学', country: '英国', location: '英格兰-诺丁汉', qsRank: 108, worldRank: 142, countryRank: 30, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['工程学', '医学', '兽医学', '法学', '商业管理', '教育学'] },

    // 新加坡学校
    { id: 41, name: '新加坡国立大学 (NUS)', country: '新加坡', location: '新加坡', qsRank: 8, worldRank: 22, countryRank: 1, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['工程学', '商业管理', '计算机科学', '医学', '法学', '建筑学'] },
    { id: 42, name: '南洋理工大学 (NTU)', country: '新加坡', location: '新加坡', qsRank: 15, worldRank: 27, countryRank: 2, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['工程学', '商业管理', '计算机科学', '材料科学', '生物科学', '教育学'] },

    // 澳大利亚学校
    { id: 43, name: '墨尔本大学', country: '澳大利亚', location: '维多利亚-墨尔本', qsRank: 13, worldRank: 27, countryRank: 1, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['医学', '法学', '商业管理', '工程学', '建筑学', '教育学'] },
    { id: 44, name: '悉尼大学', country: '澳大利亚', location: '新南威尔士-悉尼', qsRank: 18, worldRank: 29, countryRank: 3, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['医学', '工程学', '商业管理', '法学', '建筑学', '艺术学'] },
    { id: 45, name: '新南威尔士大学', country: '澳大利亚', location: '新南威尔士-悉尼', qsRank: 19, worldRank: 36, countryRank: 2, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['工程学', '商业管理', '医学', '法学', '艺术设计', '建筑学'] },
    { id: 46, name: '澳大利亚国立大学', country: '澳大利亚', location: '堪培拉', qsRank: 30, worldRank: 85, countryRank: 4, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['政治学', '国际关系', '经济学', '计算机科学', '物理学', '法学'] },
    { id: 47, name: '莫纳什大学', country: '澳大利亚', location: '维多利亚-墨尔本', qsRank: 37, worldRank: 35, countryRank: 5, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['医学', '工程学', '商业管理', '法学', '教育学', '药学'] },

    // 加拿大学校  
    { id: 48, name: '多伦多大学', country: '加拿大', location: '多伦多', qsRank: 25, worldRank: 17, countryRank: 1, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['医学', '工程学', '商业管理', '法学', '计算机科学', '文理科学'] },
    { id: 49, name: '麦吉尔大学', country: '加拿大', location: '蒙特利尔', qsRank: 29, worldRank: 56, countryRank: 3, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['医学', '工程学', '法学', '商业管理', '艺术学', '农业科学'] },
    { id: 50, name: '英属哥伦比亚大学 (UBC)', country: '加拿大', location: '温哥华', qsRank: 38, worldRank: 39, countryRank: 2, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['商业管理', '工程学', '医学', '林业学', '教育学', '艺术学'] },
    { id: 51, name: '圣保罗大学', country: '加拿大', location: '渥太华', qsRank: 92, worldRank: 127, countryRank: 4, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['法学', '商业管理', '工程学', '医学', '社会科学', '艺术学'] },
    { id: 52, name: '阿尔伯塔大学', country: '加拿大', location: '埃德蒙顿', qsRank: 96, worldRank: 150, countryRank: 5, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['工程学', '商业管理', '医学', '法学', '农业科学', '教育学'] },

    // 日本学校
    { id: 53, name: '东京大学', country: '日本', location: '东京', qsRank: 32, worldRank: 84, countryRank: 2, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['法学', '医学', '工程学', '经济学', '文学', '理学'] },
    { id: 54, name: '东京工业大学', country: '日本', location: '东京', qsRank: 84, worldRank: 445, countryRank: 4, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['工程学', '理学', '生命科学', '环境学', '信息学', '社会理工学'] },
    { id: 55, name: '大阪大学', country: '日本', location: '大阪', qsRank: 86, worldRank: 315, countryRank: 3, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['医学', '工程学', '理学', '经济学', '法学', '文学'] },

    // 香港学校
    { id: 56, name: '香港大学 (HKU)', country: '香港', location: '香港-中西区', qsRank: 17, worldRank: 44, countryRank: 1, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['医学', '法学', '商业管理', '工程学', '建筑学', '社会科学'] },
    { id: 57, name: '香港中文大学 (CUHK)', country: '香港', location: '香港-沙田区', qsRank: 36, worldRank: 42, countryRank: 2, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['商业管理', '医学', '工程学', '社会科学', '文学', '教育学'] },
    { id: 58, name: '香港科技大学 (HKUST)', country: '香港', location: '香港-西贡区', qsRank: 47, worldRank: 105, countryRank: 3, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['工程学', '商业管理', '理学', '人文社会科学', '跨学科课程', '公共政策'] },
    { id: 59, name: '香港理工大学', country: '香港', location: '香港-九龙城区', qsRank: 57, worldRank: 67, countryRank: 4, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['工程学', '商业管理', '设计学', '建筑环境', '健康科学', '人文学科'] },
    { id: 60, name: '香港城市大学', country: '香港', location: '香港-九龙城区', qsRank: 62, worldRank: 79, countryRank: 5, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['商业管理', '工程学', '创意媒体', '法学', '社会科学', '兽医学'] },
    { id: 61, name: '香港浸会大学', country: '香港', location: '香港-九龙城区', qsRank: 252, worldRank: 471, countryRank: 6, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['传理学', '商业管理', '中医药学', '社会科学', '艺术学', '理学'] },

    // 新西兰学校
    { id: 62, name: '奥克兰大学', country: '新西兰', location: '奥克兰', qsRank: 65, worldRank: 132, countryRank: 1, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['商业管理', '工程学', '医学', '法学', '教育学', '艺术学'] },
    { id: 63, name: '林肯大学 (新西兰)', country: '新西兰', location: '坎特伯雷', qsRank: 368, worldRank: 1137, countryRank: 2, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['农业科学', '环境学', '商业管理', '土地规划', '景观建筑', '旅游管理'] },

    // 澳门学校
    { id: 64, name: '澳门大学', country: '澳门', location: '澳门-大堂区', qsRank: 245, worldRank: 262, countryRank: 1, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['商业管理', '工程学', '法学', '社会科学', '教育学', '健康科学'] },
    { id: 65, name: '澳门科技大学', country: '澳门', location: '澳门-大堂区', qsRank: 464, worldRank: 814, countryRank: 2, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['商业管理', '工程学', '法学', '中医药学', '国际学院', '人文艺术学'] },
    { id: 66, name: '澳门城市大学', country: '澳门', location: '澳门-大堂区', qsRank: null, worldRank: null, countryRank: 3, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['商业管理', '法学', '教育学', '人文社会科学', '创新设计学院', '金融学'] },

    // 荷兰学校
    { id: 67, name: '阿姆斯特丹大学', country: '荷兰', location: '阿姆斯特丹', qsRank: 55, worldRank: 33, countryRank: 1, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['社会科学', '人文学科', '经济学', '法学', '医学', '自然科学'] },
    { id: 68, name: '莱顿大学', country: '荷兰', location: '莱顿', qsRank: 141, worldRank: 56, countryRank: 2, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['人文学科', '社会科学', '法学', '医学', '自然科学', '考古学'] },

    // 西班牙学校
    { id: 69, name: '巴塞罗那大学', country: '西班牙', location: '巴塞罗那', qsRank: 165, worldRank: 79, countryRank: 1, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['医学', '法学', '经济学', '教育学', '心理学', '艺术学'] },
    { id: 70, name: '瓦伦西亚大学', country: '西班牙', location: '巴伦西亚', qsRank: 445, worldRank: 251, countryRank: 2, documents: ['毕业证', '学位证', '成绩单', '认证报告'], majors: ['医学', '法学', '教育学', '心理学', '经济学', '工程学'] }
  ];

  // 动态获取学历类型
  const getDegreeTypes = (): string[] => {
    const allDegrees = new Set<string>();
    schools.forEach(school => {
      // 从文档类型推断学历类型
      school.documents.forEach(doc => {
        if (doc.includes('毕业证')) allDegrees.add('本科/专科');
        if (doc.includes('学位证')) allDegrees.add('学士学位');
        if (doc.includes('成绩单')) allDegrees.add('硕士学位');
        if (doc.includes('认证报告')) allDegrees.add('博士学位');
      });
    });
    return Array.from(allDegrees);
  };

  // 动态获取专业类别
  const getMajorCategories = (): string[] => {
    const majorCategories = new Set<string>();
    schools.forEach(school => {
      school.majors.forEach(major => {
        // 根据专业名称归类
        if (major.includes('商业') || major.includes('管理') || major.includes('经济')) {
          majorCategories.add('商科管理');
        } else if (major.includes('工程') || major.includes('机械') || major.includes('电子') || major.includes('材料')) {
          majorCategories.add('工程技术');
        } else if (major.includes('计算机') || major.includes('信息') || major.includes('软件')) {
          majorCategories.add('计算机IT');
        } else if (major.includes('医学') || major.includes('生物') || major.includes('护理') || major.includes('健康')) {
          majorCategories.add('医学健康');
        } else if (major.includes('法学') || major.includes('法律')) {
          majorCategories.add('法学法律');
        } else if (major.includes('教育') || major.includes('师范')) {
          majorCategories.add('教育学科');
        } else if (major.includes('艺术') || major.includes('设计') || major.includes('音乐') || major.includes('美术')) {
          majorCategories.add('艺术设计');
        } else if (major.includes('文学') || major.includes('语言') || major.includes('历史') || major.includes('哲学')) {
          majorCategories.add('文史哲学');
        } else if (major.includes('理学') || major.includes('数学') || major.includes('物理') || major.includes('化学')) {
          majorCategories.add('理学数学');
        } else if (major.includes('社会') || major.includes('政治') || major.includes('国际关系') || major.includes('心理')) {
          majorCategories.add('社会科学');
        } else {
          majorCategories.add('其他专业');
        }
      });
    });
    return Array.from(majorCategories);
  };

  const countries = Array.from(new Set(schools.map(school => school.country)));
  const degreeTypes = getDegreeTypes();
  const majorCategories = getMajorCategories();

  const filteredSchools = schools.filter(school => {
    const matchesSearch = school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         school.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = selectedCountry === '全部' || school.country === selectedCountry;
    
    // 学历筛选逻辑
    const matchesDegree = selectedDegree === '全部' || 
      (selectedDegree === '本科/专科' && school.documents.includes('毕业证')) ||
      (selectedDegree === '学士学位' && school.documents.includes('学位证')) ||
      (selectedDegree === '硕士学位' && school.documents.includes('成绩单')) ||
      (selectedDegree === '博士学位' && school.documents.includes('认证报告'));

    // 专业筛选逻辑
    const matchesMajor = selectedMajor === '全部' || school.majors.some(major => {
      if (selectedMajor === '商科管理') return major.includes('商业') || major.includes('管理') || major.includes('经济');
      if (selectedMajor === '工程技术') return major.includes('工程') || major.includes('机械') || major.includes('电子') || major.includes('材料');
      if (selectedMajor === '计算机IT') return major.includes('计算机') || major.includes('信息') || major.includes('软件');
      if (selectedMajor === '医学健康') return major.includes('医学') || major.includes('生物') || major.includes('护理') || major.includes('健康');
      if (selectedMajor === '法学法律') return major.includes('法学') || major.includes('法律');
      if (selectedMajor === '教育学科') return major.includes('教育') || major.includes('师范');
      if (selectedMajor === '艺术设计') return major.includes('艺术') || major.includes('设计') || major.includes('音乐') || major.includes('美术');
      if (selectedMajor === '文史哲学') return major.includes('文学') || major.includes('语言') || major.includes('历史') || major.includes('哲学');
      if (selectedMajor === '理学数学') return major.includes('理学') || major.includes('数学') || major.includes('物理') || major.includes('化学');
      if (selectedMajor === '社会科学') return major.includes('社会') || major.includes('政治') || major.includes('国际关系') || major.includes('心理');
      return true;
    });

    // QS排名筛选逻辑
    const matchesQsRank = qsRankRange === '全部' || 
      (qsRankRange === 'top10' && school.qsRank && school.qsRank <= 10) ||
      (qsRankRange === 'top50' && school.qsRank && school.qsRank <= 50) ||
      (qsRankRange === 'top100' && school.qsRank && school.qsRank <= 100) ||
      (qsRankRange === 'top200' && school.qsRank && school.qsRank <= 200) ||
      (qsRankRange === 'other' && (!school.qsRank || school.qsRank > 200));
    
    return matchesSearch && matchesCountry && matchesDegree && matchesMajor && matchesQsRank;
  }).sort((a, b) => {
    // 默认按QS排名排序，没有排名的学校排在后面
    if (a.qsRank === null) return 1;
    if (b.qsRank === null) return -1;
    return a.qsRank - b.qsRank;
  });

  // 分页逻辑
  const totalPages = Math.ceil(filteredSchools.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSchools = filteredSchools.slice(startIndex, endIndex);

  // 当筛选条件改变时，重置到第一页
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCountry, selectedDegree, selectedMajor, qsRankRange]);

  const getCountryFlag = (country) => {
    const flags = {
      '美国': '🇺🇸',
      '英国': '🇬🇧',
      '澳大利亚': '🇦🇺',
      '加拿大': '🇨🇦',
      '新加坡': '🇸🇬',
      '日本': '🇯🇵',
      '香港': '🇭🇰',
      '新西兰': '🇳🇿',
      '澳门': '🇲🇴',
      '荷兰': '🇳🇱',
      '西班牙': '🇪🇸'
    };
    return flags[country] || '🌍';
  };

  // 获取国家特色Logo/图标
  const getSchoolLogo = (country: string, schoolName: string) => {
    // 根据学校国家和特色返回不同的图标
    if (country === '美国') {
      if (schoolName.includes('MIT') || schoolName.includes('麻省理工')) return '🔬';
      if (schoolName.includes('哈佛')) return '🏛️';
      if (schoolName.includes('斯坦福')) return '🌲';
      if (schoolName.includes('普林斯顿')) return '🦁';
      if (schoolName.includes('耶鲁')) return '🗝️';
      if (schoolName.includes('哥伦比亚')) return '👑';
      if (schoolName.includes('芝加哥')) return '🏢';
      if (schoolName.includes('宾夕法尼亚')) return '🔔';
      if (schoolName.includes('康奈尔')) return '🌿';
      if (schoolName.includes('加州大学')) return '🌞';
      if (schoolName.includes('UCLA')) return '🎬';
      if (schoolName.includes('USC')) return '⚔️';
      if (schoolName.includes('纽约大学') || schoolName.includes('NYU')) return '🗽';
      if (schoolName.includes('密歇根')) return '🏈';
      if (schoolName.includes('西北大学')) return '🎭';
      if (schoolName.includes('卡内基梅隆')) return '💻';
      if (schoolName.includes('杜克')) return '👑';
      if (schoolName.includes('波士顿')) return '🦞';
      if (schoolName.includes('华盛顿大学')) return '🌲';
      return '🗽';
    }
    if (country === '英国') {
      if (schoolName.includes('牛津')) return '📚';
      if (schoolName.includes('剑桥')) return '⚖️';
      if (schoolName.includes('帝国理工')) return '🔧';
      if (schoolName.includes('UCL') || schoolName.includes('伦敦大学学院')) return '🏛️';
      if (schoolName.includes('LSE') || schoolName.includes('伦敦政治经济')) return '💼';
      if (schoolName.includes('KCL') || schoolName.includes('伦敦国王')) return '👑';
      if (schoolName.includes('爱丁堡')) return '🏰';
      if (schoolName.includes('曼彻斯特')) return '⚽';
      if (schoolName.includes('华威')) return '⚔️';
      if (schoolName.includes('布里斯托')) return '🌉';
      return '👑';
    }
    if (country === '新加坡') {
      if (schoolName.includes('NUS') || schoolName.includes('国立大学')) return '🦁';
      if (schoolName.includes('NTU') || schoolName.includes('南洋理工')) return '🔬';
      return '🦁';
    }
    if (country === '澳大利亚') {
      if (schoolName.includes('墨尔本')) return '🦘';
      if (schoolName.includes('悉尼')) return '🏖️';
      if (schoolName.includes('新南威尔士')) return '⚡';
      if (schoolName.includes('澳大利亚国立')) return '🏛️';
      if (schoolName.includes('莫纳什')) return '🔬';
      return '🦘';
    }
    if (country === '加拿大') {
      if (schoolName.includes('多伦多')) return '🍁';
      if (schoolName.includes('麦吉尔')) return '🏔️';
      if (schoolName.includes('UBC') || schoolName.includes('英属哥伦比亚')) return '🌲';
      return '🍁';
    }
    if (country === '日本') {
      if (schoolName.includes('东京大学')) return '🗾';
      if (schoolName.includes('东京工业')) return '🔧';
      if (schoolName.includes('大阪')) return '🏯';
      return '🗾';
    }
    if (country === '香港') {
      if (schoolName.includes('HKU') || schoolName.includes('香港大学')) return '🏙️';
      if (schoolName.includes('CUHK') || schoolName.includes('中文大学')) return '📚';
      if (schoolName.includes('HKUST') || schoolName.includes('科技大学')) return '🔬';
      if (schoolName.includes('理工大学')) return '🔧';
      if (schoolName.includes('城市大学')) return '🏢';
      if (schoolName.includes('浸会大学')) return '⛪';
      return '🏙️';
    }
    if (country === '新西兰') {
      if (schoolName.includes('奥克兰')) return '🥝';
      if (schoolName.includes('林肯')) return '🌿';
      return '🥝';
    }
    if (country === '澳门') {
      if (schoolName.includes('澳门大学')) return '🎰';
      if (schoolName.includes('科技大学')) return '🔬';
      if (schoolName.includes('城市大学')) return '🏢';
      return '🎰';
    }
    if (country === '荷兰') {
      if (schoolName.includes('阿姆斯特丹')) return '🌷';
      if (schoolName.includes('莱顿')) return '🧪';
      return '🌷';
    }
    if (country === '西班牙') {
      if (schoolName.includes('巴塞罗那')) return '🌞';
      if (schoolName.includes('瓦伦西亚')) return '🍊';
      return '🌞';
    }
    return '🎓';
  };

  // 获取国家特色背景色
  const getCountryGradient = (country: string) => {
    const gradients = {
      '美国': 'from-red-50 to-blue-50',
      '英国': 'from-blue-50 to-red-50', 
      '新加坡': 'from-red-50 to-white',
      '澳大利亚': 'from-green-50 to-yellow-50',
      '加拿大': 'from-red-50 to-red-50',
      '日本': 'from-red-50 to-white',
      '香港': 'from-red-50 to-white',
      '新西兰': 'from-blue-50 to-red-50',
      '澳门': 'from-green-50 to-red-50',
      '荷兰': 'from-orange-50 to-blue-50',
      '西班牙': 'from-red-50 to-yellow-50'
    };
    return gradients[country] || 'from-blue-50 to-blue-100';
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Left: Logo */}
            <Link className="flex items-center" href="/">
              <span className="text-xl font-bold text-blue-600">Acaboost</span>
            </Link>
            
            {/* Center: Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href="/">
                首页
              </Link>
              <Link className="text-sm font-medium transition-colors text-blue-600" href="/schools">
                院校数据库
              </Link>
              <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href="/guide">
                领证指南
              </Link>
              <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href="/blog">
                博客
              </Link>
              <Link className="text-sm font-medium transition-colors text-gray-600 hover:text-blue-600" href="/contact">
                联系我们
              </Link>
            </div>
            
            {/* Right: CTA Button */}
            <Link 
              href="https://wa.me/1234567890?text=您好，我想咨询学历认证服务，希望了解适合我的学历方案" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden md:flex bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
            >
              WhatsApp咨询
            </Link>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-600 hover:text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        <main className="min-h-screen bg-white text-gray-800">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">全球认证高校资源库</h1>
              <p className="text-xl md:text-2xl mb-8">支持真实学历验证的全球院校，一键对接认证顾问，快速拿证</p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
                <p className="text-lg">📊 已收录 <span className="font-bold text-yellow-300">70</span> 所全球知名院校</p>
              </div>
            </div>
          </section>

          {/* Search and Filter Section */}
          <section className="py-8 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              {/* Search Bar */}
              <div className="mb-6">
                <input 
                  type="text" 
                  placeholder="搜索学校名称或地区..." 
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                <select 
                  className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  <option value="全部">选择国家/地区</option>
                  {countries.map(country => (
                    <option key={country} value={country}>{getCountryFlag(country)} {country}</option>
                  ))}
                </select>
                <select 
                  className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={selectedDegree}
                  onChange={(e) => setSelectedDegree(e.target.value)}
                >
                  <option value="全部">选择学历类型</option>
                  {degreeTypes.map(degree => (
                    <option key={degree} value={degree}>{degree}</option>
                  ))}
                </select>
                <select 
                  className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={selectedMajor}
                  onChange={(e) => setSelectedMajor(e.target.value)}
                >
                  <option value="全部">选择专业方向</option>
                  {majorCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <select 
                  className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={qsRankRange}
                  onChange={(e) => setQsRankRange(e.target.value)}
                >
                  <option value="全部">QS排名范围</option>
                  <option value="top10">🏆 Top 10 (1-10名)</option>
                  <option value="top50">🥇 Top 50 (11-50名)</option>
                  <option value="top100">🥈 Top 100 (51-100名)</option>
                  <option value="top200">🥉 Top 200 (101-200名)</option>
                  <option value="other">📚 其他 (200名以后)</option>
                </select>
                <select className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="qs_rank">QS排名排序</option>
                  <option value="world_rank">世界排名排序</option>
                </select>
              </div>
              <div className="text-center">
                <p className="text-gray-600">
                  找到 <span className="font-semibold text-blue-600">{filteredSchools.length}</span> 所符合条件的学校
                  {filteredSchools.length > 0 && (
                    <span className="ml-2 text-sm">
                      (第 {startIndex + 1} - {Math.min(endIndex, filteredSchools.length)} 所，共 {totalPages} 页)
                    </span>
                  )}
                </p>
              </div>
            </div>
          </section>

          {/* Schools Grid */}
          <section className="py-8 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentSchools.map((school) => (
                  <div key={school.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100">
                    {/* School Logo */}
                    <div className="relative h-16 mb-4 flex items-center justify-center">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${getCountryGradient(school.country)} flex items-center justify-center border border-gray-200 shadow-sm`}>
                        <span className="text-3xl">{getSchoolLogo(school.country, school.name)}</span>
                      </div>
                    </div>
                    
                    {/* School Info */}
                    <h3 className="text-xl font-semibold mb-2">{school.name}</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="mr-4">{getCountryFlag(school.country)} {school.country}</span>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">📍 {school.location}</span>
                    </div>
                    
                    {/* Rankings */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {school.qsRank && (
                        <div className="text-center bg-blue-50 rounded-lg p-2">
                          <div className="text-xs text-blue-600 font-medium">QS排名</div>
                          <div className="font-bold text-blue-700 text-lg">#{school.qsRank}</div>
                          <div className="text-xs">
                            {school.qsRank <= 10 && '🏆'}
                            {school.qsRank > 10 && school.qsRank <= 50 && '🥇'}
                            {school.qsRank > 50 && school.qsRank <= 100 && '🥈'}
                            {school.qsRank > 100 && school.qsRank <= 200 && '🥉'}
                          </div>
                        </div>
                      )}
                      {school.worldRank && (
                        <div className="text-center bg-green-50 rounded-lg p-2">
                          <div className="text-xs text-green-600 font-medium">世界排名</div>
                          <div className="font-bold text-green-700 text-lg">#{school.worldRank}</div>
                          <div className="text-xs">
                            {school.worldRank <= 20 && '🌟'}
                          </div>
                        </div>
                      )}
                      {school.countryRank && (
                        <div className="text-center bg-orange-50 rounded-lg p-2">
                          <div className="text-xs text-orange-600 font-medium">国内排名</div>
                          <div className="font-bold text-orange-700 text-lg">#{school.countryRank}</div>
                          <div className="text-xs">
                            {school.countryRank <= 5 && '⭐'}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Documents */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {school.documents.map((doc, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs">
                          {doc}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Link 
                        href="https://wa.me/1234567890?text=您好，我想咨询学历认证服务" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 bg-green-500 text-white text-center py-2 px-3 rounded-lg text-sm hover:bg-green-600 transition-colors"
                      >
                        立即咨询
                      </Link>
                      <Link 
                        href={`/schools/${school.id}`}
                        className="flex-1 bg-blue-500 text-white text-center py-2 px-3 rounded-lg text-sm hover:bg-blue-600 transition-colors"
                      >
                        查看详情
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {filteredSchools.length > 0 && totalPages > 1 && (
                <div className="flex justify-center items-center mt-12 gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      currentPage === 1 
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    上一页
                  </button>

                  <div className="flex gap-1">
                    {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }
                      
                      if (pageNum === currentPage - 3 && currentPage > 3) {
                        return <span key="ellipsis1" className="px-2 text-gray-400">...</span>;
                      }
                      if (pageNum === currentPage + 3 && currentPage < totalPages - 2) {
                        return <span key="ellipsis2" className="px-2 text-gray-400">...</span>;
                      }
                      
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`px-3 py-2 rounded-lg transition-colors ${
                            pageNum === currentPage
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      currentPage === totalPages 
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    下一页
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* FAQ and CTA Section */}
          <section className="py-12 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">常见问题</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white rounded-xl p-6">
                  <h3 className="font-semibold mb-2">认证周期多久？</h3>
                  <p className="text-gray-600">一般认证周期为7-15个工作日，加急服务可缩短至3-5个工作日。</p>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h3 className="font-semibold mb-2">是否100%真实？</h3>
                  <p className="text-gray-600">所有认证材料均真实可查，支持官方验证，确保100%真实有效。</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-xl mb-6">不知道怎么选学校？添加顾问获取1对1推荐方案</p>
                <Link 
                  href="https://wa.me/1234567890" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  <span className="mr-2">📱</span>
                  WhatsApp咨询
                </Link>
              </div>
            </div>
          </section>

          {/* Fixed Floating Button */}
          <Link 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-lg z-50 flex items-center"
          >
            <span className="mr-2">📱</span>
            立即咨询
          </Link>
        </main>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">关于我们</h3>
              <p className="text-gray-400">专业提供全球学历认证服务，7天快速交付，确保100%真实可查。</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">快速链接</h3>
              <ul className="space-y-2">
                <li><Link className="text-gray-400 hover:text-white transition-colors" href="/">首页</Link></li>
                <li><Link className="text-gray-400 hover:text-white transition-colors" href="/schools">学校资源</Link></li>
                <li><Link className="text-gray-400 hover:text-white transition-colors" href="/contact">联系我们</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">联系方式</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    WhatsApp: +1 (234) 567-890
                  </Link>
                </li>
                <li className="text-gray-400">
                  <Link href="mailto:contact@acaboost.com" className="hover:text-white transition-colors">
                    Email: contact@acaboost.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 Acaboost. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <Link 
        href="https://wa.me/1234567890?text=您好，我想咨询学历认证服务" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
        </svg>
      </Link>
    </div>
  );
}