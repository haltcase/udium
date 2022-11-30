export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      AUTH_BEARER_TOKEN: string;
    }
  }
}
