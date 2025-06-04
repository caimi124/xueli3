/**
 * 输入验证工具函数
 */

// 邮箱验证
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

// 电话号码验证
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

// 姓名验证
export function isValidName(name: string): boolean {
  return name.length >= 1 && name.length <= 100 && !/[<>\"'&]/.test(name);
}

// 消息内容验证
export function isValidMessage(message: string): boolean {
  return message.length >= 1 && message.length <= 1000 && !/[<>\"']/.test(message);
}

// 清理HTML标签
export function sanitizeHtml(input: string): string {
  return input.replace(/<[^>]*>/g, '').trim();
}

// 验证联系表单数据
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function validateContactForm(data: ContactFormData): string[] {
  const errors: string[] = [];
  
  if (!isValidName(data.name)) {
    errors.push('请输入有效的姓名（1-100字符，不含特殊符号）');
  }
  
  if (!isValidEmail(data.email)) {
    errors.push('请输入有效的邮箱地址');
  }
  
  if (!isValidPhone(data.phone)) {
    errors.push('请输入有效的电话号码');
  }
  
  if (!isValidMessage(data.message)) {
    errors.push('请输入有效的消息内容（1-1000字符，不含HTML标签）');
  }
  
  return errors;
}

// 清理表单数据
export function sanitizeContactForm(data: ContactFormData): ContactFormData {
  return {
    name: sanitizeHtml(data.name),
    email: sanitizeHtml(data.email),
    phone: sanitizeHtml(data.phone),
    message: sanitizeHtml(data.message)
  };
} 