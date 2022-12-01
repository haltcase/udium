export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      AUTH_BEARER_TOKEN: string;

      IS_PULL_REQUEST: string;
      RENDER_EXTERNAL_HOSTNAME: string;
      RENDER_EXTERNAL_URL: string;
      RENDER_GIT_BRANCH: string;
      RENDER_GIT_COMMIT: string;
      RENDER_GIT_REPO_SLUG: string;
      RENDER_INSTANCE_ID: string;
      RENDER_SERVICE_ID: string;
      RENDER_SERVICE_NAME: string;
      RENDER_SERVICE_TYPE: "web" | "pserv" | "cron" | "worker" | "static";
      RENDER: true;
    }
  }
}
