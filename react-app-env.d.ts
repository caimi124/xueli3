/// <reference types="react" />
/// <reference types="react-dom" />
/// <reference types="node" />

declare namespace React {
  interface ReactNode {
    children?: ReactNode | undefined;
  }
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif'; 