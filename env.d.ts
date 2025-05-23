/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    NOTION_TOKEN: string;
    NOTION_DATABASE_ID: string;
    NEXT_PUBLIC_SITE_URL: string;
  }
} 