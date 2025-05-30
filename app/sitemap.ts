import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://acaboost.com'
  const locales = ['zh', 'en']
  const routes = ['', '/schools', '/guide', '/blog', '/contact']
  
  const sitemapEntries: MetadataRoute.Sitemap = []
  
  // Add entries for each locale and route combination
  locales.forEach(locale => {
    routes.forEach(route => {
      const url = `${baseUrl}/${locale}${route}`
      let priority = 0.8
      let changeFrequency: 'daily' | 'weekly' | 'monthly' = 'weekly'
      
      // Set specific priorities and frequencies
      if (route === '') {
        priority = 1.0
        changeFrequency = 'daily'
      } else if (route === '/schools') {
        priority = 0.9
        changeFrequency = 'weekly'
      } else if (route === '/blog') {
        priority = 0.7
        changeFrequency = 'daily'
      } else if (route === '/guide') {
        priority = 0.8
        changeFrequency = 'weekly'
      } else if (route === '/contact') {
        priority = 0.6
        changeFrequency = 'monthly'
      }
      
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency,
        priority,
        // Add alternates for different languages
        alternates: {
          languages: {
            'zh-CN': `${baseUrl}/zh${route}`,
            'en-US': `${baseUrl}/en${route}`,
          }
        }
      })
    })
  })
  
  return sitemapEntries
} 