import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';

class SDK {
  spec: Oas;
  core: APICore;

  constructor() {
    this.spec = Oas.init(definition);
    this.core = new APICore(this.spec, 'render-api/1.0.0 (api/5.0.3)');
  }

  /**
   * Optionally configure various options that the SDK allows.
   *
   * @param config Object of supported SDK options and toggles.
   * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
   * should be represented in milliseconds.
   */
  config(config: ConfigOptions) {
    this.core.setConfig(config);
  }

  /**
   * If the API you're using requires authentication you can supply the required credentials
   * through this method and the library will magically determine how they should be used
   * within your API request.
   *
   * With the exception of OpenID and MutualTLS, it supports all forms of authentication
   * supported by the OpenAPI specification.
   *
   * @example <caption>HTTP Basic auth</caption>
   * sdk.auth('username', 'password');
   *
   * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
   * sdk.auth('myBearerToken');
   *
   * @example <caption>API Keys</caption>
   * sdk.auth('myApiKey');
   *
   * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
   * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
   * @param values Your auth credentials for the API; can specify up to two strings or numbers.
   */
  auth(...values: string[] | number[]) {
    this.core.setAuth(...values);
    return this;
  }

  /**
   * If the API you're using offers alternate server URLs, and server variables, you can tell
   * the SDK which one to use with this method. To use it you can supply either one of the
   * server URLs that are contained within the OpenAPI definition (along with any server
   * variables), or you can pass it a fully qualified URL to use (that may or may not exist
   * within the OpenAPI definition).
   *
   * @example <caption>Server URL with server variables</caption>
   * sdk.server('https://{region}.api.example.com/{basePath}', {
   *   name: 'eu',
   *   basePath: 'v14',
   * });
   *
   * @example <caption>Fully qualified server URL</caption>
   * sdk.server('https://eu.api.example.com/v14');
   *
   * @param url Server URL
   * @param variables An object of variables to replace into the server URL.
   */
  server(url: string, variables = {}) {
    this.core.setServer(url, variables);
  }

  /**
   * List authorized users and teams
   *
   */
  getOwners(
    metadata?: types.GetOwnersMetadataParam
  ): Promise<
    | FetchResponse<200, types.GetOwnersResponse200>
    | FetchResponse<401, types.GetOwnersResponse401>
    | FetchResponse<406, types.GetOwnersResponse406>
    | FetchResponse<429, types.GetOwnersResponse429>
    | FetchResponse<500, types.GetOwnersResponse500>
    | FetchResponse<503, types.GetOwnersResponse503>
  > {
    return this.core.fetch('/owners', 'get', metadata);
  }

  /**
   * Retrieve user or team
   *
   */
  getOwner(
    metadata: types.GetOwnerMetadataParam
  ): Promise<
    | FetchResponse<200, types.GetOwnerResponse200>
    | FetchResponse<401, types.GetOwnerResponse401>
    | FetchResponse<404, types.GetOwnerResponse404>
    | FetchResponse<406, types.GetOwnerResponse406>
    | FetchResponse<410, types.GetOwnerResponse410>
    | FetchResponse<429, types.GetOwnerResponse429>
    | FetchResponse<500, types.GetOwnerResponse500>
    | FetchResponse<503, types.GetOwnerResponse503>
  > {
    return this.core.fetch('/owners/{ownerId}', 'get', metadata);
  }

  /**
   * List services
   *
   */
  getServices(
    metadata?: types.GetServicesMetadataParam
  ): Promise<
    | FetchResponse<200, types.GetServicesResponse200>
    | FetchResponse<401, types.GetServicesResponse401>
    | FetchResponse<406, types.GetServicesResponse406>
    | FetchResponse<429, types.GetServicesResponse429>
    | FetchResponse<500, types.GetServicesResponse500>
    | FetchResponse<503, types.GetServicesResponse503>
  > {
    return this.core.fetch('/services', 'get', metadata);
  }

  /**
   * Create service
   *
   */
  createService(
    body: types.CreateServiceBodyParam
  ): Promise<
    | FetchResponse<201, types.CreateServiceResponse201>
    | FetchResponse<400, types.CreateServiceResponse400>
    | FetchResponse<401, types.CreateServiceResponse401>
    | FetchResponse<402, types.CreateServiceResponse402>
    | FetchResponse<406, types.CreateServiceResponse406>
    | FetchResponse<409, types.CreateServiceResponse409>
    | FetchResponse<429, types.CreateServiceResponse429>
    | FetchResponse<500, types.CreateServiceResponse500>
    | FetchResponse<503, types.CreateServiceResponse503>
  > {
    return this.core.fetch('/services', 'post', body);
  }

  /**
   * Retrieve service
   *
   */
  getService(
    metadata: types.GetServiceMetadataParam
  ): Promise<
    | FetchResponse<200, types.GetServiceResponse200>
    | FetchResponse<401, types.GetServiceResponse401>
    | FetchResponse<403, types.GetServiceResponse403>
    | FetchResponse<404, types.GetServiceResponse404>
    | FetchResponse<406, types.GetServiceResponse406>
    | FetchResponse<410, types.GetServiceResponse410>
    | FetchResponse<429, types.GetServiceResponse429>
    | FetchResponse<500, types.GetServiceResponse500>
    | FetchResponse<503, types.GetServiceResponse503>
  > {
    return this.core.fetch('/services/{serviceId}', 'get', metadata);
  }

  /**
   * Update service
   *
   */
  updateService(
    body: types.UpdateServiceBodyParam,
    metadata: types.UpdateServiceMetadataParam
  ): Promise<
    | FetchResponse<200, types.UpdateServiceResponse200>
    | FetchResponse<400, types.UpdateServiceResponse400>
    | FetchResponse<401, types.UpdateServiceResponse401>
    | FetchResponse<402, types.UpdateServiceResponse402>
    | FetchResponse<403, types.UpdateServiceResponse403>
    | FetchResponse<404, types.UpdateServiceResponse404>
    | FetchResponse<406, types.UpdateServiceResponse406>
    | FetchResponse<409, types.UpdateServiceResponse409>
    | FetchResponse<410, types.UpdateServiceResponse410>
    | FetchResponse<429, types.UpdateServiceResponse429>
    | FetchResponse<500, types.UpdateServiceResponse500>
    | FetchResponse<503, types.UpdateServiceResponse503>
  > {
    return this.core.fetch('/services/{serviceId}', 'patch', body, metadata);
  }

  /**
   * Delete service
   *
   */
  deleteService(
    metadata: types.DeleteServiceMetadataParam
  ): Promise<
    | FetchResponse<401, types.DeleteServiceResponse401>
    | FetchResponse<403, types.DeleteServiceResponse403>
    | FetchResponse<404, types.DeleteServiceResponse404>
    | FetchResponse<406, types.DeleteServiceResponse406>
    | FetchResponse<410, types.DeleteServiceResponse410>
    | FetchResponse<429, types.DeleteServiceResponse429>
    | FetchResponse<500, types.DeleteServiceResponse500>
    | FetchResponse<503, types.DeleteServiceResponse503>
  > {
    return this.core.fetch('/services/{serviceId}', 'delete', metadata);
  }

  /**
   * List deploys
   *
   */
  getDeploys(
    metadata: types.GetDeploysMetadataParam
  ): Promise<
    | FetchResponse<200, types.GetDeploysResponse200>
    | FetchResponse<401, types.GetDeploysResponse401>
    | FetchResponse<403, types.GetDeploysResponse403>
    | FetchResponse<404, types.GetDeploysResponse404>
    | FetchResponse<406, types.GetDeploysResponse406>
    | FetchResponse<410, types.GetDeploysResponse410>
    | FetchResponse<429, types.GetDeploysResponse429>
    | FetchResponse<500, types.GetDeploysResponse500>
    | FetchResponse<503, types.GetDeploysResponse503>
  > {
    return this.core.fetch('/services/{serviceId}/deploys', 'get', metadata);
  }

  /**
   * Trigger a deploy
   *
   */
  createDeploy(
    body: types.CreateDeployBodyParam,
    metadata: types.CreateDeployMetadataParam
  ): Promise<
    | FetchResponse<201, types.CreateDeployResponse201>
    | FetchResponse<400, types.CreateDeployResponse400>
    | FetchResponse<401, types.CreateDeployResponse401>
    | FetchResponse<404, types.CreateDeployResponse404>
    | FetchResponse<406, types.CreateDeployResponse406>
    | FetchResponse<409, types.CreateDeployResponse409>
    | FetchResponse<410, types.CreateDeployResponse410>
    | FetchResponse<429, types.CreateDeployResponse429>
    | FetchResponse<500, types.CreateDeployResponse500>
    | FetchResponse<503, types.CreateDeployResponse503>
  > {
    return this.core.fetch('/services/{serviceId}/deploys', 'post', body, metadata);
  }

  /**
   * Retrieve deploy
   *
   */
  getDeploy(
    metadata: types.GetDeployMetadataParam
  ): Promise<
    | FetchResponse<200, types.GetDeployResponse200>
    | FetchResponse<401, types.GetDeployResponse401>
    | FetchResponse<403, types.GetDeployResponse403>
    | FetchResponse<404, types.GetDeployResponse404>
    | FetchResponse<406, types.GetDeployResponse406>
    | FetchResponse<410, types.GetDeployResponse410>
    | FetchResponse<429, types.GetDeployResponse429>
    | FetchResponse<500, types.GetDeployResponse500>
    | FetchResponse<503, types.GetDeployResponse503>
  > {
    return this.core.fetch('/services/{serviceId}/deploys/{deployId}', 'get', metadata);
  }

  /**
   * Retrieve environment variables
   *
   */
  getEnvVarsForService(
    metadata: types.GetEnvVarsForServiceMetadataParam
  ): Promise<
    | FetchResponse<200, types.GetEnvVarsForServiceResponse200>
    | FetchResponse<401, types.GetEnvVarsForServiceResponse401>
    | FetchResponse<403, types.GetEnvVarsForServiceResponse403>
    | FetchResponse<404, types.GetEnvVarsForServiceResponse404>
    | FetchResponse<406, types.GetEnvVarsForServiceResponse406>
    | FetchResponse<410, types.GetEnvVarsForServiceResponse410>
    | FetchResponse<429, types.GetEnvVarsForServiceResponse429>
    | FetchResponse<500, types.GetEnvVarsForServiceResponse500>
    | FetchResponse<503, types.GetEnvVarsForServiceResponse503>
  > {
    return this.core.fetch('/services/{serviceId}/env-vars', 'get', metadata);
  }

  /**
   * Update environment variables
   *
   */
  updateEnvVarsForService(
    body: types.UpdateEnvVarsForServiceBodyParam,
    metadata: types.UpdateEnvVarsForServiceMetadataParam
  ): Promise<
    | FetchResponse<200, types.UpdateEnvVarsForServiceResponse200>
    | FetchResponse<400, types.UpdateEnvVarsForServiceResponse400>
    | FetchResponse<401, types.UpdateEnvVarsForServiceResponse401>
    | FetchResponse<403, types.UpdateEnvVarsForServiceResponse403>
    | FetchResponse<404, types.UpdateEnvVarsForServiceResponse404>
    | FetchResponse<406, types.UpdateEnvVarsForServiceResponse406>
    | FetchResponse<410, types.UpdateEnvVarsForServiceResponse410>
    | FetchResponse<429, types.UpdateEnvVarsForServiceResponse429>
    | FetchResponse<500, types.UpdateEnvVarsForServiceResponse500>
    | FetchResponse<503, types.UpdateEnvVarsForServiceResponse503>
  > {
    return this.core.fetch('/services/{serviceId}/env-vars', 'put', body, metadata);
  }

  /**
   * Retrieve headers
   *
   */
  getHeaders(
    metadata: types.GetHeadersMetadataParam
  ): Promise<
    | FetchResponse<200, types.GetHeadersResponse200>
    | FetchResponse<401, types.GetHeadersResponse401>
    | FetchResponse<403, types.GetHeadersResponse403>
    | FetchResponse<404, types.GetHeadersResponse404>
    | FetchResponse<406, types.GetHeadersResponse406>
    | FetchResponse<410, types.GetHeadersResponse410>
    | FetchResponse<429, types.GetHeadersResponse429>
    | FetchResponse<500, types.GetHeadersResponse500>
    | FetchResponse<503, types.GetHeadersResponse503>
  > {
    return this.core.fetch('/services/{serviceId}/headers', 'get', metadata);
  }

  /**
   * Retrieve redirect and rewrite rules
   *
   */
  getRoutes(
    metadata: types.GetRoutesMetadataParam
  ): Promise<
    | FetchResponse<200, types.GetRoutesResponse200>
    | FetchResponse<401, types.GetRoutesResponse401>
    | FetchResponse<403, types.GetRoutesResponse403>
    | FetchResponse<404, types.GetRoutesResponse404>
    | FetchResponse<406, types.GetRoutesResponse406>
    | FetchResponse<410, types.GetRoutesResponse410>
    | FetchResponse<429, types.GetRoutesResponse429>
    | FetchResponse<500, types.GetRoutesResponse500>
    | FetchResponse<503, types.GetRoutesResponse503>
  > {
    return this.core.fetch('/services/{serviceId}/routes', 'get', metadata);
  }

  /**
   * List custom domains
   *
   */
  getCustomDomains(
    metadata: types.GetCustomDomainsMetadataParam
  ): Promise<
    | FetchResponse<200, types.GetCustomDomainsResponse200>
    | FetchResponse<400, types.GetCustomDomainsResponse400>
    | FetchResponse<401, types.GetCustomDomainsResponse401>
    | FetchResponse<403, types.GetCustomDomainsResponse403>
    | FetchResponse<404, types.GetCustomDomainsResponse404>
    | FetchResponse<406, types.GetCustomDomainsResponse406>
    | FetchResponse<410, types.GetCustomDomainsResponse410>
    | FetchResponse<429, types.GetCustomDomainsResponse429>
    | FetchResponse<500, types.GetCustomDomainsResponse500>
    | FetchResponse<503, types.GetCustomDomainsResponse503>
  > {
    return this.core.fetch('/services/{serviceId}/custom-domains', 'get', metadata);
  }

  /**
   * Add custom domain
   *
   */
  createCustomDomain(
    body: types.CreateCustomDomainBodyParam,
    metadata: types.CreateCustomDomainMetadataParam
  ): Promise<
    | FetchResponse<201, types.CreateCustomDomainResponse201>
    | FetchResponse<400, types.CreateCustomDomainResponse400>
    | FetchResponse<401, types.CreateCustomDomainResponse401>
    | FetchResponse<402, types.CreateCustomDomainResponse402>
    | FetchResponse<403, types.CreateCustomDomainResponse403>
    | FetchResponse<404, types.CreateCustomDomainResponse404>
    | FetchResponse<406, types.CreateCustomDomainResponse406>
    | FetchResponse<409, types.CreateCustomDomainResponse409>
    | FetchResponse<410, types.CreateCustomDomainResponse410>
    | FetchResponse<429, types.CreateCustomDomainResponse429>
    | FetchResponse<500, types.CreateCustomDomainResponse500>
    | FetchResponse<503, types.CreateCustomDomainResponse503>
  > {
    return this.core.fetch('/services/{serviceId}/custom-domains', 'post', body, metadata);
  }

  /**
   * Retrieve custom domain
   *
   */
  getCustomDomain(
    metadata: types.GetCustomDomainMetadataParam
  ): Promise<
    | FetchResponse<200, types.GetCustomDomainResponse200>
    | FetchResponse<400, types.GetCustomDomainResponse400>
    | FetchResponse<401, types.GetCustomDomainResponse401>
    | FetchResponse<403, types.GetCustomDomainResponse403>
    | FetchResponse<404, types.GetCustomDomainResponse404>
    | FetchResponse<406, types.GetCustomDomainResponse406>
    | FetchResponse<410, types.GetCustomDomainResponse410>
    | FetchResponse<429, types.GetCustomDomainResponse429>
    | FetchResponse<500, types.GetCustomDomainResponse500>
    | FetchResponse<503, types.GetCustomDomainResponse503>
  > {
    return this.core.fetch(
      '/services/{serviceId}/custom-domains/{customDomainIdOrName}',
      'get',
      metadata
    );
  }

  /**
   * Delete custom domain
   *
   */
  deleteCustomDomain(
    metadata: types.DeleteCustomDomainMetadataParam
  ): Promise<
    | FetchResponse<400, types.DeleteCustomDomainResponse400>
    | FetchResponse<401, types.DeleteCustomDomainResponse401>
    | FetchResponse<403, types.DeleteCustomDomainResponse403>
    | FetchResponse<404, types.DeleteCustomDomainResponse404>
    | FetchResponse<406, types.DeleteCustomDomainResponse406>
    | FetchResponse<410, types.DeleteCustomDomainResponse410>
    | FetchResponse<429, types.DeleteCustomDomainResponse429>
    | FetchResponse<500, types.DeleteCustomDomainResponse500>
    | FetchResponse<503, types.DeleteCustomDomainResponse503>
  > {
    return this.core.fetch(
      '/services/{serviceId}/custom-domains/{customDomainIdOrName}',
      'delete',
      metadata
    );
  }

  /**
   * Verify DNS configuration
   *
   */
  refreshCustomDomain(
    metadata: types.RefreshCustomDomainMetadataParam
  ): Promise<
    | FetchResponse<400, types.RefreshCustomDomainResponse400>
    | FetchResponse<401, types.RefreshCustomDomainResponse401>
    | FetchResponse<403, types.RefreshCustomDomainResponse403>
    | FetchResponse<404, types.RefreshCustomDomainResponse404>
    | FetchResponse<406, types.RefreshCustomDomainResponse406>
    | FetchResponse<410, types.RefreshCustomDomainResponse410>
    | FetchResponse<429, types.RefreshCustomDomainResponse429>
    | FetchResponse<500, types.RefreshCustomDomainResponse500>
    | FetchResponse<503, types.RefreshCustomDomainResponse503>
  > {
    return this.core.fetch(
      '/services/{serviceId}/custom-domains/{customDomainIdOrName}/verify',
      'post',
      metadata
    );
  }

  /**
   * Suspend service
   *
   */
  suspendService(
    metadata: types.SuspendServiceMetadataParam
  ): Promise<
    | FetchResponse<400, types.SuspendServiceResponse400>
    | FetchResponse<401, types.SuspendServiceResponse401>
    | FetchResponse<403, types.SuspendServiceResponse403>
    | FetchResponse<404, types.SuspendServiceResponse404>
    | FetchResponse<406, types.SuspendServiceResponse406>
    | FetchResponse<410, types.SuspendServiceResponse410>
    | FetchResponse<429, types.SuspendServiceResponse429>
    | FetchResponse<500, types.SuspendServiceResponse500>
    | FetchResponse<503, types.SuspendServiceResponse503>
  > {
    return this.core.fetch('/services/{serviceId}/suspend', 'post', metadata);
  }

  /**
   * Resume service
   *
   */
  resumeService(
    metadata: types.ResumeServiceMetadataParam
  ): Promise<
    | FetchResponse<400, types.ResumeServiceResponse400>
    | FetchResponse<401, types.ResumeServiceResponse401>
    | FetchResponse<403, types.ResumeServiceResponse403>
    | FetchResponse<404, types.ResumeServiceResponse404>
    | FetchResponse<406, types.ResumeServiceResponse406>
    | FetchResponse<410, types.ResumeServiceResponse410>
    | FetchResponse<429, types.ResumeServiceResponse429>
    | FetchResponse<500, types.ResumeServiceResponse500>
    | FetchResponse<503, types.ResumeServiceResponse503>
  > {
    return this.core.fetch('/services/{serviceId}/resume', 'post', metadata);
  }

  /**
   * Scale service to desired number of instances
   *
   */
  scaleService(
    body: types.ScaleServiceBodyParam,
    metadata: types.ScaleServiceMetadataParam
  ): Promise<
    | FetchResponse<400, types.ScaleServiceResponse400>
    | FetchResponse<401, types.ScaleServiceResponse401>
    | FetchResponse<403, types.ScaleServiceResponse403>
    | FetchResponse<404, types.ScaleServiceResponse404>
    | FetchResponse<406, types.ScaleServiceResponse406>
    | FetchResponse<410, types.ScaleServiceResponse410>
    | FetchResponse<429, types.ScaleServiceResponse429>
    | FetchResponse<500, types.ScaleServiceResponse500>
    | FetchResponse<503, types.ScaleServiceResponse503>
  > {
    return this.core.fetch('/services/{serviceId}/scale', 'post', body, metadata);
  }

  /**
   * List jobs
   *
   */
  listJob(
    metadata: types.ListJobMetadataParam
  ): Promise<
    | FetchResponse<200, types.ListJobResponse200>
    | FetchResponse<400, types.ListJobResponse400>
    | FetchResponse<401, types.ListJobResponse401>
    | FetchResponse<404, types.ListJobResponse404>
    | FetchResponse<429, types.ListJobResponse429>
    | FetchResponse<500, types.ListJobResponse500>
    | FetchResponse<503, types.ListJobResponse503>
  > {
    return this.core.fetch('/services/{serviceId}/jobs', 'get', metadata);
  }

  /**
   * Create job
   *
   */
  postJob(
    body: types.PostJobBodyParam,
    metadata: types.PostJobMetadataParam
  ): Promise<
    | FetchResponse<200, types.PostJobResponse200>
    | FetchResponse<400, types.PostJobResponse400>
    | FetchResponse<401, types.PostJobResponse401>
    | FetchResponse<404, types.PostJobResponse404>
    | FetchResponse<429, types.PostJobResponse429>
    | FetchResponse<500, types.PostJobResponse500>
    | FetchResponse<503, types.PostJobResponse503>
  > {
    return this.core.fetch('/services/{serviceId}/jobs', 'post', body, metadata);
  }

  /**
   * Retrieve job
   *
   */
  getJob(
    metadata: types.GetJobMetadataParam
  ): Promise<
    | FetchResponse<200, types.GetJobResponse200>
    | FetchResponse<400, types.GetJobResponse400>
    | FetchResponse<401, types.GetJobResponse401>
    | FetchResponse<404, types.GetJobResponse404>
    | FetchResponse<429, types.GetJobResponse429>
    | FetchResponse<500, types.GetJobResponse500>
    | FetchResponse<503, types.GetJobResponse503>
  > {
    return this.core.fetch('/services/{serviceId}/jobs/{jobId}', 'get', metadata);
  }

  /**
   * Cancel running job
   *
   */
  cancelJob(
    metadata: types.CancelJobMetadataParam
  ): Promise<
    | FetchResponse<200, types.CancelJobResponse200>
    | FetchResponse<400, types.CancelJobResponse400>
    | FetchResponse<401, types.CancelJobResponse401>
    | FetchResponse<404, types.CancelJobResponse404>
    | FetchResponse<429, types.CancelJobResponse429>
    | FetchResponse<500, types.CancelJobResponse500>
    | FetchResponse<503, types.CancelJobResponse503>
  > {
    return this.core.fetch('/services/{serviceId}/jobs/{jobId}/cancel', 'post', metadata);
  }
}

const createSDK = (() => {
  return new SDK();
})();
export default createSDK;

export type {
  CancelJobMetadataParam,
  CancelJobResponse200,
  CancelJobResponse400,
  CancelJobResponse401,
  CancelJobResponse404,
  CancelJobResponse429,
  CancelJobResponse500,
  CancelJobResponse503,
  CreateCustomDomainBodyParam,
  CreateCustomDomainMetadataParam,
  CreateCustomDomainResponse201,
  CreateCustomDomainResponse400,
  CreateCustomDomainResponse401,
  CreateCustomDomainResponse402,
  CreateCustomDomainResponse403,
  CreateCustomDomainResponse404,
  CreateCustomDomainResponse406,
  CreateCustomDomainResponse409,
  CreateCustomDomainResponse410,
  CreateCustomDomainResponse429,
  CreateCustomDomainResponse500,
  CreateCustomDomainResponse503,
  CreateDeployBodyParam,
  CreateDeployMetadataParam,
  CreateDeployResponse201,
  CreateDeployResponse400,
  CreateDeployResponse401,
  CreateDeployResponse404,
  CreateDeployResponse406,
  CreateDeployResponse409,
  CreateDeployResponse410,
  CreateDeployResponse429,
  CreateDeployResponse500,
  CreateDeployResponse503,
  CreateServiceBodyParam,
  CreateServiceResponse201,
  CreateServiceResponse400,
  CreateServiceResponse401,
  CreateServiceResponse402,
  CreateServiceResponse406,
  CreateServiceResponse409,
  CreateServiceResponse429,
  CreateServiceResponse500,
  CreateServiceResponse503,
  DeleteCustomDomainMetadataParam,
  DeleteCustomDomainResponse400,
  DeleteCustomDomainResponse401,
  DeleteCustomDomainResponse403,
  DeleteCustomDomainResponse404,
  DeleteCustomDomainResponse406,
  DeleteCustomDomainResponse410,
  DeleteCustomDomainResponse429,
  DeleteCustomDomainResponse500,
  DeleteCustomDomainResponse503,
  DeleteServiceMetadataParam,
  DeleteServiceResponse401,
  DeleteServiceResponse403,
  DeleteServiceResponse404,
  DeleteServiceResponse406,
  DeleteServiceResponse410,
  DeleteServiceResponse429,
  DeleteServiceResponse500,
  DeleteServiceResponse503,
  GetCustomDomainMetadataParam,
  GetCustomDomainResponse200,
  GetCustomDomainResponse400,
  GetCustomDomainResponse401,
  GetCustomDomainResponse403,
  GetCustomDomainResponse404,
  GetCustomDomainResponse406,
  GetCustomDomainResponse410,
  GetCustomDomainResponse429,
  GetCustomDomainResponse500,
  GetCustomDomainResponse503,
  GetCustomDomainsMetadataParam,
  GetCustomDomainsResponse200,
  GetCustomDomainsResponse400,
  GetCustomDomainsResponse401,
  GetCustomDomainsResponse403,
  GetCustomDomainsResponse404,
  GetCustomDomainsResponse406,
  GetCustomDomainsResponse410,
  GetCustomDomainsResponse429,
  GetCustomDomainsResponse500,
  GetCustomDomainsResponse503,
  GetDeployMetadataParam,
  GetDeployResponse200,
  GetDeployResponse401,
  GetDeployResponse403,
  GetDeployResponse404,
  GetDeployResponse406,
  GetDeployResponse410,
  GetDeployResponse429,
  GetDeployResponse500,
  GetDeployResponse503,
  GetDeploysMetadataParam,
  GetDeploysResponse200,
  GetDeploysResponse401,
  GetDeploysResponse403,
  GetDeploysResponse404,
  GetDeploysResponse406,
  GetDeploysResponse410,
  GetDeploysResponse429,
  GetDeploysResponse500,
  GetDeploysResponse503,
  GetEnvVarsForServiceMetadataParam,
  GetEnvVarsForServiceResponse200,
  GetEnvVarsForServiceResponse401,
  GetEnvVarsForServiceResponse403,
  GetEnvVarsForServiceResponse404,
  GetEnvVarsForServiceResponse406,
  GetEnvVarsForServiceResponse410,
  GetEnvVarsForServiceResponse429,
  GetEnvVarsForServiceResponse500,
  GetEnvVarsForServiceResponse503,
  GetHeadersMetadataParam,
  GetHeadersResponse200,
  GetHeadersResponse401,
  GetHeadersResponse403,
  GetHeadersResponse404,
  GetHeadersResponse406,
  GetHeadersResponse410,
  GetHeadersResponse429,
  GetHeadersResponse500,
  GetHeadersResponse503,
  GetJobMetadataParam,
  GetJobResponse200,
  GetJobResponse400,
  GetJobResponse401,
  GetJobResponse404,
  GetJobResponse429,
  GetJobResponse500,
  GetJobResponse503,
  GetOwnerMetadataParam,
  GetOwnerResponse200,
  GetOwnerResponse401,
  GetOwnerResponse404,
  GetOwnerResponse406,
  GetOwnerResponse410,
  GetOwnerResponse429,
  GetOwnerResponse500,
  GetOwnerResponse503,
  GetOwnersMetadataParam,
  GetOwnersResponse200,
  GetOwnersResponse401,
  GetOwnersResponse406,
  GetOwnersResponse429,
  GetOwnersResponse500,
  GetOwnersResponse503,
  GetRoutesMetadataParam,
  GetRoutesResponse200,
  GetRoutesResponse401,
  GetRoutesResponse403,
  GetRoutesResponse404,
  GetRoutesResponse406,
  GetRoutesResponse410,
  GetRoutesResponse429,
  GetRoutesResponse500,
  GetRoutesResponse503,
  GetServiceMetadataParam,
  GetServiceResponse200,
  GetServiceResponse401,
  GetServiceResponse403,
  GetServiceResponse404,
  GetServiceResponse406,
  GetServiceResponse410,
  GetServiceResponse429,
  GetServiceResponse500,
  GetServiceResponse503,
  GetServicesMetadataParam,
  GetServicesResponse200,
  GetServicesResponse401,
  GetServicesResponse406,
  GetServicesResponse429,
  GetServicesResponse500,
  GetServicesResponse503,
  ListJobMetadataParam,
  ListJobResponse200,
  ListJobResponse400,
  ListJobResponse401,
  ListJobResponse404,
  ListJobResponse429,
  ListJobResponse500,
  ListJobResponse503,
  PostJobBodyParam,
  PostJobMetadataParam,
  PostJobResponse200,
  PostJobResponse400,
  PostJobResponse401,
  PostJobResponse404,
  PostJobResponse429,
  PostJobResponse500,
  PostJobResponse503,
  RefreshCustomDomainMetadataParam,
  RefreshCustomDomainResponse400,
  RefreshCustomDomainResponse401,
  RefreshCustomDomainResponse403,
  RefreshCustomDomainResponse404,
  RefreshCustomDomainResponse406,
  RefreshCustomDomainResponse410,
  RefreshCustomDomainResponse429,
  RefreshCustomDomainResponse500,
  RefreshCustomDomainResponse503,
  ResumeServiceMetadataParam,
  ResumeServiceResponse400,
  ResumeServiceResponse401,
  ResumeServiceResponse403,
  ResumeServiceResponse404,
  ResumeServiceResponse406,
  ResumeServiceResponse410,
  ResumeServiceResponse429,
  ResumeServiceResponse500,
  ResumeServiceResponse503,
  ScaleServiceBodyParam,
  ScaleServiceMetadataParam,
  ScaleServiceResponse400,
  ScaleServiceResponse401,
  ScaleServiceResponse403,
  ScaleServiceResponse404,
  ScaleServiceResponse406,
  ScaleServiceResponse410,
  ScaleServiceResponse429,
  ScaleServiceResponse500,
  ScaleServiceResponse503,
  SuspendServiceMetadataParam,
  SuspendServiceResponse400,
  SuspendServiceResponse401,
  SuspendServiceResponse403,
  SuspendServiceResponse404,
  SuspendServiceResponse406,
  SuspendServiceResponse410,
  SuspendServiceResponse429,
  SuspendServiceResponse500,
  SuspendServiceResponse503,
  UpdateEnvVarsForServiceBodyParam,
  UpdateEnvVarsForServiceMetadataParam,
  UpdateEnvVarsForServiceResponse200,
  UpdateEnvVarsForServiceResponse400,
  UpdateEnvVarsForServiceResponse401,
  UpdateEnvVarsForServiceResponse403,
  UpdateEnvVarsForServiceResponse404,
  UpdateEnvVarsForServiceResponse406,
  UpdateEnvVarsForServiceResponse410,
  UpdateEnvVarsForServiceResponse429,
  UpdateEnvVarsForServiceResponse500,
  UpdateEnvVarsForServiceResponse503,
  UpdateServiceBodyParam,
  UpdateServiceMetadataParam,
  UpdateServiceResponse200,
  UpdateServiceResponse400,
  UpdateServiceResponse401,
  UpdateServiceResponse402,
  UpdateServiceResponse403,
  UpdateServiceResponse404,
  UpdateServiceResponse406,
  UpdateServiceResponse409,
  UpdateServiceResponse410,
  UpdateServiceResponse429,
  UpdateServiceResponse500,
  UpdateServiceResponse503,
} from './types';
