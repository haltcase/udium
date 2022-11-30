import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';

export type CancelJobMetadataParam = FromSchema<typeof schemas.CancelJob.metadata>;
export type CancelJobResponse200 = FromSchema<typeof schemas.CancelJob.response['200']>;
export type CancelJobResponse400 = FromSchema<typeof schemas.CancelJob.response['400']>;
export type CancelJobResponse401 = FromSchema<typeof schemas.CancelJob.response['401']>;
export type CancelJobResponse404 = FromSchema<typeof schemas.CancelJob.response['404']>;
export type CancelJobResponse429 = FromSchema<typeof schemas.CancelJob.response['429']>;
export type CancelJobResponse500 = FromSchema<typeof schemas.CancelJob.response['500']>;
export type CancelJobResponse503 = FromSchema<typeof schemas.CancelJob.response['503']>;
export type CreateCustomDomainBodyParam = FromSchema<typeof schemas.CreateCustomDomain.body>;
export type CreateCustomDomainMetadataParam = FromSchema<
  typeof schemas.CreateCustomDomain.metadata
>;
export type CreateCustomDomainResponse201 = FromSchema<
  typeof schemas.CreateCustomDomain.response['201']
>;
export type CreateCustomDomainResponse400 = FromSchema<
  typeof schemas.CreateCustomDomain.response['400']
>;
export type CreateCustomDomainResponse401 = FromSchema<
  typeof schemas.CreateCustomDomain.response['401']
>;
export type CreateCustomDomainResponse402 = FromSchema<
  typeof schemas.CreateCustomDomain.response['402']
>;
export type CreateCustomDomainResponse403 = FromSchema<
  typeof schemas.CreateCustomDomain.response['403']
>;
export type CreateCustomDomainResponse404 = FromSchema<
  typeof schemas.CreateCustomDomain.response['404']
>;
export type CreateCustomDomainResponse406 = FromSchema<
  typeof schemas.CreateCustomDomain.response['406']
>;
export type CreateCustomDomainResponse409 = FromSchema<
  typeof schemas.CreateCustomDomain.response['409']
>;
export type CreateCustomDomainResponse410 = FromSchema<
  typeof schemas.CreateCustomDomain.response['410']
>;
export type CreateCustomDomainResponse429 = FromSchema<
  typeof schemas.CreateCustomDomain.response['429']
>;
export type CreateCustomDomainResponse500 = FromSchema<
  typeof schemas.CreateCustomDomain.response['500']
>;
export type CreateCustomDomainResponse503 = FromSchema<
  typeof schemas.CreateCustomDomain.response['503']
>;
export type CreateDeployBodyParam = FromSchema<typeof schemas.CreateDeploy.body>;
export type CreateDeployMetadataParam = FromSchema<typeof schemas.CreateDeploy.metadata>;
export type CreateDeployResponse201 = FromSchema<typeof schemas.CreateDeploy.response['201']>;
export type CreateDeployResponse400 = FromSchema<typeof schemas.CreateDeploy.response['400']>;
export type CreateDeployResponse401 = FromSchema<typeof schemas.CreateDeploy.response['401']>;
export type CreateDeployResponse404 = FromSchema<typeof schemas.CreateDeploy.response['404']>;
export type CreateDeployResponse406 = FromSchema<typeof schemas.CreateDeploy.response['406']>;
export type CreateDeployResponse409 = FromSchema<typeof schemas.CreateDeploy.response['409']>;
export type CreateDeployResponse410 = FromSchema<typeof schemas.CreateDeploy.response['410']>;
export type CreateDeployResponse429 = FromSchema<typeof schemas.CreateDeploy.response['429']>;
export type CreateDeployResponse500 = FromSchema<typeof schemas.CreateDeploy.response['500']>;
export type CreateDeployResponse503 = FromSchema<typeof schemas.CreateDeploy.response['503']>;
export type CreateServiceBodyParam = FromSchema<typeof schemas.CreateService.body>;
export type CreateServiceResponse201 = FromSchema<typeof schemas.CreateService.response['201']>;
export type CreateServiceResponse400 = FromSchema<typeof schemas.CreateService.response['400']>;
export type CreateServiceResponse401 = FromSchema<typeof schemas.CreateService.response['401']>;
export type CreateServiceResponse402 = FromSchema<typeof schemas.CreateService.response['402']>;
export type CreateServiceResponse406 = FromSchema<typeof schemas.CreateService.response['406']>;
export type CreateServiceResponse409 = FromSchema<typeof schemas.CreateService.response['409']>;
export type CreateServiceResponse429 = FromSchema<typeof schemas.CreateService.response['429']>;
export type CreateServiceResponse500 = FromSchema<typeof schemas.CreateService.response['500']>;
export type CreateServiceResponse503 = FromSchema<typeof schemas.CreateService.response['503']>;
export type DeleteCustomDomainMetadataParam = FromSchema<
  typeof schemas.DeleteCustomDomain.metadata
>;
export type DeleteCustomDomainResponse400 = FromSchema<
  typeof schemas.DeleteCustomDomain.response['400']
>;
export type DeleteCustomDomainResponse401 = FromSchema<
  typeof schemas.DeleteCustomDomain.response['401']
>;
export type DeleteCustomDomainResponse403 = FromSchema<
  typeof schemas.DeleteCustomDomain.response['403']
>;
export type DeleteCustomDomainResponse404 = FromSchema<
  typeof schemas.DeleteCustomDomain.response['404']
>;
export type DeleteCustomDomainResponse406 = FromSchema<
  typeof schemas.DeleteCustomDomain.response['406']
>;
export type DeleteCustomDomainResponse410 = FromSchema<
  typeof schemas.DeleteCustomDomain.response['410']
>;
export type DeleteCustomDomainResponse429 = FromSchema<
  typeof schemas.DeleteCustomDomain.response['429']
>;
export type DeleteCustomDomainResponse500 = FromSchema<
  typeof schemas.DeleteCustomDomain.response['500']
>;
export type DeleteCustomDomainResponse503 = FromSchema<
  typeof schemas.DeleteCustomDomain.response['503']
>;
export type DeleteServiceMetadataParam = FromSchema<typeof schemas.DeleteService.metadata>;
export type DeleteServiceResponse401 = FromSchema<typeof schemas.DeleteService.response['401']>;
export type DeleteServiceResponse403 = FromSchema<typeof schemas.DeleteService.response['403']>;
export type DeleteServiceResponse404 = FromSchema<typeof schemas.DeleteService.response['404']>;
export type DeleteServiceResponse406 = FromSchema<typeof schemas.DeleteService.response['406']>;
export type DeleteServiceResponse410 = FromSchema<typeof schemas.DeleteService.response['410']>;
export type DeleteServiceResponse429 = FromSchema<typeof schemas.DeleteService.response['429']>;
export type DeleteServiceResponse500 = FromSchema<typeof schemas.DeleteService.response['500']>;
export type DeleteServiceResponse503 = FromSchema<typeof schemas.DeleteService.response['503']>;
export type GetCustomDomainMetadataParam = FromSchema<typeof schemas.GetCustomDomain.metadata>;
export type GetCustomDomainResponse200 = FromSchema<typeof schemas.GetCustomDomain.response['200']>;
export type GetCustomDomainResponse400 = FromSchema<typeof schemas.GetCustomDomain.response['400']>;
export type GetCustomDomainResponse401 = FromSchema<typeof schemas.GetCustomDomain.response['401']>;
export type GetCustomDomainResponse403 = FromSchema<typeof schemas.GetCustomDomain.response['403']>;
export type GetCustomDomainResponse404 = FromSchema<typeof schemas.GetCustomDomain.response['404']>;
export type GetCustomDomainResponse406 = FromSchema<typeof schemas.GetCustomDomain.response['406']>;
export type GetCustomDomainResponse410 = FromSchema<typeof schemas.GetCustomDomain.response['410']>;
export type GetCustomDomainResponse429 = FromSchema<typeof schemas.GetCustomDomain.response['429']>;
export type GetCustomDomainResponse500 = FromSchema<typeof schemas.GetCustomDomain.response['500']>;
export type GetCustomDomainResponse503 = FromSchema<typeof schemas.GetCustomDomain.response['503']>;
export type GetCustomDomainsMetadataParam = FromSchema<typeof schemas.GetCustomDomains.metadata>;
export type GetCustomDomainsResponse200 = FromSchema<
  typeof schemas.GetCustomDomains.response['200']
>;
export type GetCustomDomainsResponse400 = FromSchema<
  typeof schemas.GetCustomDomains.response['400']
>;
export type GetCustomDomainsResponse401 = FromSchema<
  typeof schemas.GetCustomDomains.response['401']
>;
export type GetCustomDomainsResponse403 = FromSchema<
  typeof schemas.GetCustomDomains.response['403']
>;
export type GetCustomDomainsResponse404 = FromSchema<
  typeof schemas.GetCustomDomains.response['404']
>;
export type GetCustomDomainsResponse406 = FromSchema<
  typeof schemas.GetCustomDomains.response['406']
>;
export type GetCustomDomainsResponse410 = FromSchema<
  typeof schemas.GetCustomDomains.response['410']
>;
export type GetCustomDomainsResponse429 = FromSchema<
  typeof schemas.GetCustomDomains.response['429']
>;
export type GetCustomDomainsResponse500 = FromSchema<
  typeof schemas.GetCustomDomains.response['500']
>;
export type GetCustomDomainsResponse503 = FromSchema<
  typeof schemas.GetCustomDomains.response['503']
>;
export type GetDeployMetadataParam = FromSchema<typeof schemas.GetDeploy.metadata>;
export type GetDeployResponse200 = FromSchema<typeof schemas.GetDeploy.response['200']>;
export type GetDeployResponse401 = FromSchema<typeof schemas.GetDeploy.response['401']>;
export type GetDeployResponse403 = FromSchema<typeof schemas.GetDeploy.response['403']>;
export type GetDeployResponse404 = FromSchema<typeof schemas.GetDeploy.response['404']>;
export type GetDeployResponse406 = FromSchema<typeof schemas.GetDeploy.response['406']>;
export type GetDeployResponse410 = FromSchema<typeof schemas.GetDeploy.response['410']>;
export type GetDeployResponse429 = FromSchema<typeof schemas.GetDeploy.response['429']>;
export type GetDeployResponse500 = FromSchema<typeof schemas.GetDeploy.response['500']>;
export type GetDeployResponse503 = FromSchema<typeof schemas.GetDeploy.response['503']>;
export type GetDeploysMetadataParam = FromSchema<typeof schemas.GetDeploys.metadata>;
export type GetDeploysResponse200 = FromSchema<typeof schemas.GetDeploys.response['200']>;
export type GetDeploysResponse401 = FromSchema<typeof schemas.GetDeploys.response['401']>;
export type GetDeploysResponse403 = FromSchema<typeof schemas.GetDeploys.response['403']>;
export type GetDeploysResponse404 = FromSchema<typeof schemas.GetDeploys.response['404']>;
export type GetDeploysResponse406 = FromSchema<typeof schemas.GetDeploys.response['406']>;
export type GetDeploysResponse410 = FromSchema<typeof schemas.GetDeploys.response['410']>;
export type GetDeploysResponse429 = FromSchema<typeof schemas.GetDeploys.response['429']>;
export type GetDeploysResponse500 = FromSchema<typeof schemas.GetDeploys.response['500']>;
export type GetDeploysResponse503 = FromSchema<typeof schemas.GetDeploys.response['503']>;
export type GetEnvVarsForServiceMetadataParam = FromSchema<
  typeof schemas.GetEnvVarsForService.metadata
>;
export type GetEnvVarsForServiceResponse200 = FromSchema<
  typeof schemas.GetEnvVarsForService.response['200']
>;
export type GetEnvVarsForServiceResponse401 = FromSchema<
  typeof schemas.GetEnvVarsForService.response['401']
>;
export type GetEnvVarsForServiceResponse403 = FromSchema<
  typeof schemas.GetEnvVarsForService.response['403']
>;
export type GetEnvVarsForServiceResponse404 = FromSchema<
  typeof schemas.GetEnvVarsForService.response['404']
>;
export type GetEnvVarsForServiceResponse406 = FromSchema<
  typeof schemas.GetEnvVarsForService.response['406']
>;
export type GetEnvVarsForServiceResponse410 = FromSchema<
  typeof schemas.GetEnvVarsForService.response['410']
>;
export type GetEnvVarsForServiceResponse429 = FromSchema<
  typeof schemas.GetEnvVarsForService.response['429']
>;
export type GetEnvVarsForServiceResponse500 = FromSchema<
  typeof schemas.GetEnvVarsForService.response['500']
>;
export type GetEnvVarsForServiceResponse503 = FromSchema<
  typeof schemas.GetEnvVarsForService.response['503']
>;
export type GetHeadersMetadataParam = FromSchema<typeof schemas.GetHeaders.metadata>;
export type GetHeadersResponse200 = FromSchema<typeof schemas.GetHeaders.response['200']>;
export type GetHeadersResponse401 = FromSchema<typeof schemas.GetHeaders.response['401']>;
export type GetHeadersResponse403 = FromSchema<typeof schemas.GetHeaders.response['403']>;
export type GetHeadersResponse404 = FromSchema<typeof schemas.GetHeaders.response['404']>;
export type GetHeadersResponse406 = FromSchema<typeof schemas.GetHeaders.response['406']>;
export type GetHeadersResponse410 = FromSchema<typeof schemas.GetHeaders.response['410']>;
export type GetHeadersResponse429 = FromSchema<typeof schemas.GetHeaders.response['429']>;
export type GetHeadersResponse500 = FromSchema<typeof schemas.GetHeaders.response['500']>;
export type GetHeadersResponse503 = FromSchema<typeof schemas.GetHeaders.response['503']>;
export type GetJobMetadataParam = FromSchema<typeof schemas.GetJob.metadata>;
export type GetJobResponse200 = FromSchema<typeof schemas.GetJob.response['200']>;
export type GetJobResponse400 = FromSchema<typeof schemas.GetJob.response['400']>;
export type GetJobResponse401 = FromSchema<typeof schemas.GetJob.response['401']>;
export type GetJobResponse404 = FromSchema<typeof schemas.GetJob.response['404']>;
export type GetJobResponse429 = FromSchema<typeof schemas.GetJob.response['429']>;
export type GetJobResponse500 = FromSchema<typeof schemas.GetJob.response['500']>;
export type GetJobResponse503 = FromSchema<typeof schemas.GetJob.response['503']>;
export type GetOwnerMetadataParam = FromSchema<typeof schemas.GetOwner.metadata>;
export type GetOwnerResponse200 = FromSchema<typeof schemas.GetOwner.response['200']>;
export type GetOwnerResponse401 = FromSchema<typeof schemas.GetOwner.response['401']>;
export type GetOwnerResponse404 = FromSchema<typeof schemas.GetOwner.response['404']>;
export type GetOwnerResponse406 = FromSchema<typeof schemas.GetOwner.response['406']>;
export type GetOwnerResponse410 = FromSchema<typeof schemas.GetOwner.response['410']>;
export type GetOwnerResponse429 = FromSchema<typeof schemas.GetOwner.response['429']>;
export type GetOwnerResponse500 = FromSchema<typeof schemas.GetOwner.response['500']>;
export type GetOwnerResponse503 = FromSchema<typeof schemas.GetOwner.response['503']>;
export type GetOwnersMetadataParam = FromSchema<typeof schemas.GetOwners.metadata>;
export type GetOwnersResponse200 = FromSchema<typeof schemas.GetOwners.response['200']>;
export type GetOwnersResponse401 = FromSchema<typeof schemas.GetOwners.response['401']>;
export type GetOwnersResponse406 = FromSchema<typeof schemas.GetOwners.response['406']>;
export type GetOwnersResponse429 = FromSchema<typeof schemas.GetOwners.response['429']>;
export type GetOwnersResponse500 = FromSchema<typeof schemas.GetOwners.response['500']>;
export type GetOwnersResponse503 = FromSchema<typeof schemas.GetOwners.response['503']>;
export type GetRoutesMetadataParam = FromSchema<typeof schemas.GetRoutes.metadata>;
export type GetRoutesResponse200 = FromSchema<typeof schemas.GetRoutes.response['200']>;
export type GetRoutesResponse401 = FromSchema<typeof schemas.GetRoutes.response['401']>;
export type GetRoutesResponse403 = FromSchema<typeof schemas.GetRoutes.response['403']>;
export type GetRoutesResponse404 = FromSchema<typeof schemas.GetRoutes.response['404']>;
export type GetRoutesResponse406 = FromSchema<typeof schemas.GetRoutes.response['406']>;
export type GetRoutesResponse410 = FromSchema<typeof schemas.GetRoutes.response['410']>;
export type GetRoutesResponse429 = FromSchema<typeof schemas.GetRoutes.response['429']>;
export type GetRoutesResponse500 = FromSchema<typeof schemas.GetRoutes.response['500']>;
export type GetRoutesResponse503 = FromSchema<typeof schemas.GetRoutes.response['503']>;
export type GetServiceMetadataParam = FromSchema<typeof schemas.GetService.metadata>;
export type GetServiceResponse200 = FromSchema<typeof schemas.GetService.response['200']>;
export type GetServiceResponse401 = FromSchema<typeof schemas.GetService.response['401']>;
export type GetServiceResponse403 = FromSchema<typeof schemas.GetService.response['403']>;
export type GetServiceResponse404 = FromSchema<typeof schemas.GetService.response['404']>;
export type GetServiceResponse406 = FromSchema<typeof schemas.GetService.response['406']>;
export type GetServiceResponse410 = FromSchema<typeof schemas.GetService.response['410']>;
export type GetServiceResponse429 = FromSchema<typeof schemas.GetService.response['429']>;
export type GetServiceResponse500 = FromSchema<typeof schemas.GetService.response['500']>;
export type GetServiceResponse503 = FromSchema<typeof schemas.GetService.response['503']>;
export type GetServicesMetadataParam = FromSchema<typeof schemas.GetServices.metadata>;
export type GetServicesResponse200 = FromSchema<typeof schemas.GetServices.response['200']>;
export type GetServicesResponse401 = FromSchema<typeof schemas.GetServices.response['401']>;
export type GetServicesResponse406 = FromSchema<typeof schemas.GetServices.response['406']>;
export type GetServicesResponse429 = FromSchema<typeof schemas.GetServices.response['429']>;
export type GetServicesResponse500 = FromSchema<typeof schemas.GetServices.response['500']>;
export type GetServicesResponse503 = FromSchema<typeof schemas.GetServices.response['503']>;
export type ListJobMetadataParam = FromSchema<typeof schemas.ListJob.metadata>;
export type ListJobResponse200 = FromSchema<typeof schemas.ListJob.response['200']>;
export type ListJobResponse400 = FromSchema<typeof schemas.ListJob.response['400']>;
export type ListJobResponse401 = FromSchema<typeof schemas.ListJob.response['401']>;
export type ListJobResponse404 = FromSchema<typeof schemas.ListJob.response['404']>;
export type ListJobResponse429 = FromSchema<typeof schemas.ListJob.response['429']>;
export type ListJobResponse500 = FromSchema<typeof schemas.ListJob.response['500']>;
export type ListJobResponse503 = FromSchema<typeof schemas.ListJob.response['503']>;
export type PostJobBodyParam = FromSchema<typeof schemas.PostJob.body>;
export type PostJobMetadataParam = FromSchema<typeof schemas.PostJob.metadata>;
export type PostJobResponse200 = FromSchema<typeof schemas.PostJob.response['200']>;
export type PostJobResponse400 = FromSchema<typeof schemas.PostJob.response['400']>;
export type PostJobResponse401 = FromSchema<typeof schemas.PostJob.response['401']>;
export type PostJobResponse404 = FromSchema<typeof schemas.PostJob.response['404']>;
export type PostJobResponse429 = FromSchema<typeof schemas.PostJob.response['429']>;
export type PostJobResponse500 = FromSchema<typeof schemas.PostJob.response['500']>;
export type PostJobResponse503 = FromSchema<typeof schemas.PostJob.response['503']>;
export type RefreshCustomDomainMetadataParam = FromSchema<
  typeof schemas.RefreshCustomDomain.metadata
>;
export type RefreshCustomDomainResponse400 = FromSchema<
  typeof schemas.RefreshCustomDomain.response['400']
>;
export type RefreshCustomDomainResponse401 = FromSchema<
  typeof schemas.RefreshCustomDomain.response['401']
>;
export type RefreshCustomDomainResponse403 = FromSchema<
  typeof schemas.RefreshCustomDomain.response['403']
>;
export type RefreshCustomDomainResponse404 = FromSchema<
  typeof schemas.RefreshCustomDomain.response['404']
>;
export type RefreshCustomDomainResponse406 = FromSchema<
  typeof schemas.RefreshCustomDomain.response['406']
>;
export type RefreshCustomDomainResponse410 = FromSchema<
  typeof schemas.RefreshCustomDomain.response['410']
>;
export type RefreshCustomDomainResponse429 = FromSchema<
  typeof schemas.RefreshCustomDomain.response['429']
>;
export type RefreshCustomDomainResponse500 = FromSchema<
  typeof schemas.RefreshCustomDomain.response['500']
>;
export type RefreshCustomDomainResponse503 = FromSchema<
  typeof schemas.RefreshCustomDomain.response['503']
>;
export type ResumeServiceMetadataParam = FromSchema<typeof schemas.ResumeService.metadata>;
export type ResumeServiceResponse400 = FromSchema<typeof schemas.ResumeService.response['400']>;
export type ResumeServiceResponse401 = FromSchema<typeof schemas.ResumeService.response['401']>;
export type ResumeServiceResponse403 = FromSchema<typeof schemas.ResumeService.response['403']>;
export type ResumeServiceResponse404 = FromSchema<typeof schemas.ResumeService.response['404']>;
export type ResumeServiceResponse406 = FromSchema<typeof schemas.ResumeService.response['406']>;
export type ResumeServiceResponse410 = FromSchema<typeof schemas.ResumeService.response['410']>;
export type ResumeServiceResponse429 = FromSchema<typeof schemas.ResumeService.response['429']>;
export type ResumeServiceResponse500 = FromSchema<typeof schemas.ResumeService.response['500']>;
export type ResumeServiceResponse503 = FromSchema<typeof schemas.ResumeService.response['503']>;
export type ScaleServiceBodyParam = FromSchema<typeof schemas.ScaleService.body>;
export type ScaleServiceMetadataParam = FromSchema<typeof schemas.ScaleService.metadata>;
export type ScaleServiceResponse400 = FromSchema<typeof schemas.ScaleService.response['400']>;
export type ScaleServiceResponse401 = FromSchema<typeof schemas.ScaleService.response['401']>;
export type ScaleServiceResponse403 = FromSchema<typeof schemas.ScaleService.response['403']>;
export type ScaleServiceResponse404 = FromSchema<typeof schemas.ScaleService.response['404']>;
export type ScaleServiceResponse406 = FromSchema<typeof schemas.ScaleService.response['406']>;
export type ScaleServiceResponse410 = FromSchema<typeof schemas.ScaleService.response['410']>;
export type ScaleServiceResponse429 = FromSchema<typeof schemas.ScaleService.response['429']>;
export type ScaleServiceResponse500 = FromSchema<typeof schemas.ScaleService.response['500']>;
export type ScaleServiceResponse503 = FromSchema<typeof schemas.ScaleService.response['503']>;
export type SuspendServiceMetadataParam = FromSchema<typeof schemas.SuspendService.metadata>;
export type SuspendServiceResponse400 = FromSchema<typeof schemas.SuspendService.response['400']>;
export type SuspendServiceResponse401 = FromSchema<typeof schemas.SuspendService.response['401']>;
export type SuspendServiceResponse403 = FromSchema<typeof schemas.SuspendService.response['403']>;
export type SuspendServiceResponse404 = FromSchema<typeof schemas.SuspendService.response['404']>;
export type SuspendServiceResponse406 = FromSchema<typeof schemas.SuspendService.response['406']>;
export type SuspendServiceResponse410 = FromSchema<typeof schemas.SuspendService.response['410']>;
export type SuspendServiceResponse429 = FromSchema<typeof schemas.SuspendService.response['429']>;
export type SuspendServiceResponse500 = FromSchema<typeof schemas.SuspendService.response['500']>;
export type SuspendServiceResponse503 = FromSchema<typeof schemas.SuspendService.response['503']>;
export type UpdateEnvVarsForServiceBodyParam = FromSchema<
  typeof schemas.UpdateEnvVarsForService.body
>;
export type UpdateEnvVarsForServiceMetadataParam = FromSchema<
  typeof schemas.UpdateEnvVarsForService.metadata
>;
export type UpdateEnvVarsForServiceResponse200 = FromSchema<
  typeof schemas.UpdateEnvVarsForService.response['200']
>;
export type UpdateEnvVarsForServiceResponse400 = FromSchema<
  typeof schemas.UpdateEnvVarsForService.response['400']
>;
export type UpdateEnvVarsForServiceResponse401 = FromSchema<
  typeof schemas.UpdateEnvVarsForService.response['401']
>;
export type UpdateEnvVarsForServiceResponse403 = FromSchema<
  typeof schemas.UpdateEnvVarsForService.response['403']
>;
export type UpdateEnvVarsForServiceResponse404 = FromSchema<
  typeof schemas.UpdateEnvVarsForService.response['404']
>;
export type UpdateEnvVarsForServiceResponse406 = FromSchema<
  typeof schemas.UpdateEnvVarsForService.response['406']
>;
export type UpdateEnvVarsForServiceResponse410 = FromSchema<
  typeof schemas.UpdateEnvVarsForService.response['410']
>;
export type UpdateEnvVarsForServiceResponse429 = FromSchema<
  typeof schemas.UpdateEnvVarsForService.response['429']
>;
export type UpdateEnvVarsForServiceResponse500 = FromSchema<
  typeof schemas.UpdateEnvVarsForService.response['500']
>;
export type UpdateEnvVarsForServiceResponse503 = FromSchema<
  typeof schemas.UpdateEnvVarsForService.response['503']
>;
export type UpdateServiceBodyParam = FromSchema<typeof schemas.UpdateService.body>;
export type UpdateServiceMetadataParam = FromSchema<typeof schemas.UpdateService.metadata>;
export type UpdateServiceResponse200 = FromSchema<typeof schemas.UpdateService.response['200']>;
export type UpdateServiceResponse400 = FromSchema<typeof schemas.UpdateService.response['400']>;
export type UpdateServiceResponse401 = FromSchema<typeof schemas.UpdateService.response['401']>;
export type UpdateServiceResponse402 = FromSchema<typeof schemas.UpdateService.response['402']>;
export type UpdateServiceResponse403 = FromSchema<typeof schemas.UpdateService.response['403']>;
export type UpdateServiceResponse404 = FromSchema<typeof schemas.UpdateService.response['404']>;
export type UpdateServiceResponse406 = FromSchema<typeof schemas.UpdateService.response['406']>;
export type UpdateServiceResponse409 = FromSchema<typeof schemas.UpdateService.response['409']>;
export type UpdateServiceResponse410 = FromSchema<typeof schemas.UpdateService.response['410']>;
export type UpdateServiceResponse429 = FromSchema<typeof schemas.UpdateService.response['429']>;
export type UpdateServiceResponse500 = FromSchema<typeof schemas.UpdateService.response['500']>;
export type UpdateServiceResponse503 = FromSchema<typeof schemas.UpdateService.response['503']>;
