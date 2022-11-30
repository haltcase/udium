const CancelJob = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          serviceId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the service',
          },
          jobId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the job',
          },
        },
        required: ['serviceId', 'jobId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        id: { type: 'string', examples: ['job-xxxxx'] },
        serviceId: { type: 'string', examples: ['srv-xxxxx'] },
        startCommand: { type: 'string', examples: ["echo 'hello world'"] },
        planId: { type: 'string', examples: ['plan-srv-004'] },
        status: { type: 'string', examples: ['succeeded'] },
        createdAt: { type: 'string', examples: ['2021-07-15T07:20:05.777035-07:00'] },
        startedAt: { type: 'string', examples: ['2021-07-15T07:20:05.777035-07:00'] },
        finishedAt: { type: 'string', examples: ['2021-07-15T07:20:05.777035-07:00'] },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const CreateCustomDomain = {
  body: {
    type: 'object',
    required: ['name'],
    properties: { name: { type: 'string' } },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          serviceId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the service',
          },
        },
        required: ['serviceId'],
      },
    ],
  },
  response: {
    '201': {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          domainType: {
            type: 'string',
            enum: ['apex', 'subdomain'],
            description: '`apex` `subdomain`',
          },
          publicSuffix: { type: 'string' },
          redirectForName: { type: 'string' },
          verificationStatus: {
            type: 'string',
            enum: ['verified', 'unverified'],
            description: '`verified` `unverified`',
          },
          createdAt: { type: 'string', format: 'date-time' },
          server: {
            type: 'object',
            properties: { id: { type: 'string' }, name: { type: 'string' } },
          },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '402': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '406': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '410': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const CreateDeploy = {
  body: {
    type: 'object',
    properties: {
      clearCache: {
        type: 'string',
        enum: ['clear', 'do_not_clear'],
        default: 'do_not_clear',
        description: 'Defaults to "do_not_clear"',
      },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          serviceId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the service',
          },
        },
        required: ['serviceId'],
      },
    ],
  },
  response: {
    '201': {
      type: 'object',
      required: ['id'],
      properties: {
        id: { type: 'string' },
        commit: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            message: { type: 'string' },
            createdAt: { type: 'string', format: 'date-time' },
          },
        },
        status: {
          type: 'string',
          enum: [
            'created',
            'build_in_progress',
            'update_in_progress',
            'live',
            'deactivated',
            'build_failed',
            'update_failed',
            'canceled',
          ],
          description:
            '`created` `build_in_progress` `update_in_progress` `live` `deactivated` `build_failed` `update_failed` `canceled`',
        },
        finishedAt: { type: 'string', format: 'date-time' },
        createdAt: { type: 'string', format: 'date-time' },
        updatedAt: { type: 'string', format: 'date-time' },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '406': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '410': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const CreateService = {
  body: {
    type: 'object',
    required: ['type', 'name', 'ownerId', 'repo'],
    properties: {
      type: {
        type: 'string',
        enum: ['static_site', 'web_service', 'private_service', 'background_worker', 'cron_job'],
      },
      name: { type: 'string' },
      ownerId: { type: 'string' },
      repo: {
        type: 'string',
        description:
          "Do not include the branch in the repo string. You can instead supply a 'branch' parameter.",
        examples: ['https://github.com/render-examples/flask-hello-world'],
      },
      autoDeploy: {
        type: 'string',
        enum: ['yes', 'no'],
        default: 'yes',
        description: 'Defaults to "yes"',
      },
      branch: {
        type: 'string',
        description: 'If left empty, this will fall back to the default branch of the repository',
      },
      envVars: {
        type: 'array',
        items: {
          oneOf: [
            {
              type: 'object',
              required: ['key', 'value'],
              properties: { key: { type: 'string' }, value: { type: 'string' } },
            },
            {
              type: 'object',
              required: ['key', 'generateValue'],
              properties: {
                key: { type: 'string' },
                generateValue: { type: 'string', enum: ['yes', 'no'] },
              },
            },
          ],
        },
      },
      secretFiles: {
        type: 'array',
        items: {
          type: 'object',
          required: ['name', 'contents'],
          properties: { name: { type: 'string' }, contents: { type: 'string' } },
        },
      },
      serviceDetails: {
        oneOf: [
          {
            type: 'object',
            properties: {
              buildCommand: { type: 'string' },
              headers: {
                type: 'array',
                items: {
                  type: 'object',
                  required: ['path', 'name', 'value'],
                  properties: {
                    path: { type: 'string' },
                    name: { type: 'string' },
                    value: { type: 'string' },
                  },
                },
              },
              publishPath: {
                type: 'string',
                default: 'public',
                description: 'Defaults to "public"',
              },
              pullRequestPreviewsEnabled: {
                type: 'string',
                enum: ['yes', 'no'],
                default: 'no',
                description: 'Defaults to "no"',
              },
              routes: {
                type: 'array',
                items: {
                  type: 'object',
                  required: ['type', 'source', 'destination'],
                  properties: {
                    type: { type: 'string', enum: ['redirect', 'rewrite'] },
                    source: { type: 'string' },
                    destination: { type: 'string' },
                  },
                },
              },
            },
          },
          {
            type: 'object',
            required: ['env'],
            properties: {
              disk: {
                type: 'object',
                required: ['name', 'mountPath'],
                properties: {
                  name: { type: 'string' },
                  mountPath: { type: 'string' },
                  sizeGB: { type: 'integer', minimum: 1, default: 1, description: 'Defaults to 1' },
                },
              },
              env: {
                type: 'string',
                enum: ['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'],
              },
              envSpecificDetails: {
                oneOf: [
                  {
                    type: 'object',
                    properties: {
                      dockerCommand: { type: 'string' },
                      dockerContext: { type: 'string' },
                      dockerfilePath: {
                        type: 'string',
                        default: './Dockerfile',
                        description: 'Defaults to "./Dockerfile"',
                      },
                    },
                  },
                  {
                    type: 'object',
                    required: ['buildCommand', 'startCommand'],
                    properties: {
                      buildCommand: { type: 'string' },
                      startCommand: { type: 'string' },
                    },
                  },
                ],
              },
              healthCheckPath: { type: 'string' },
              numInstances: {
                type: 'integer',
                minimum: 1,
                default: 1,
                description: 'Defaults to 1',
              },
              plan: {
                type: 'string',
                enum: [
                  'starter',
                  'starter_plus',
                  'standard',
                  'standard_plus',
                  'pro',
                  'pro_plus',
                  'pro_max',
                  'pro_ultra',
                ],
                default: 'starter',
                description: 'Defaults to "starter"',
              },
              pullRequestPreviewsEnabled: {
                type: 'string',
                enum: ['yes', 'no'],
                default: 'no',
                description: 'Defaults to "no"',
              },
              region: {
                type: 'string',
                enum: ['oregon', 'frankfurt'],
                default: 'oregon',
                description: 'Defaults to "oregon"',
              },
            },
          },
          {
            type: 'object',
            required: ['env'],
            properties: {
              disk: {
                type: 'object',
                required: ['name', 'mountPath'],
                properties: {
                  name: { type: 'string' },
                  mountPath: { type: 'string' },
                  sizeGB: { type: 'integer', minimum: 1, default: 1, description: 'Defaults to 1' },
                },
              },
              env: {
                type: 'string',
                enum: ['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'],
              },
              envSpecificDetails: {
                oneOf: [
                  {
                    type: 'object',
                    properties: {
                      dockerCommand: { type: 'string' },
                      dockerContext: { type: 'string' },
                      dockerfilePath: {
                        type: 'string',
                        default: './Dockerfile',
                        description: 'Defaults to "./Dockerfile"',
                      },
                    },
                  },
                  {
                    type: 'object',
                    required: ['buildCommand', 'startCommand'],
                    properties: {
                      buildCommand: { type: 'string' },
                      startCommand: { type: 'string' },
                    },
                  },
                ],
              },
              numInstances: {
                type: 'integer',
                minimum: 1,
                default: 1,
                description: 'Defaults to 1',
              },
              plan: {
                type: 'string',
                enum: [
                  'starter',
                  'starter_plus',
                  'standard',
                  'standard_plus',
                  'pro',
                  'pro_plus',
                  'pro_max',
                  'pro_ultra',
                ],
                default: 'starter',
                description: 'Defaults to "starter"',
              },
              pullRequestPreviewsEnabled: {
                type: 'string',
                enum: ['yes', 'no'],
                default: 'no',
                description: 'Defaults to "no"',
              },
              region: {
                type: 'string',
                enum: ['oregon', 'frankfurt'],
                default: 'oregon',
                description: 'Defaults to "oregon"',
              },
            },
          },
          {
            type: 'object',
            required: ['env'],
            properties: {
              disk: {
                type: 'object',
                required: ['name', 'mountPath'],
                properties: {
                  name: { type: 'string' },
                  mountPath: { type: 'string' },
                  sizeGB: { type: 'integer', minimum: 1, default: 1, description: 'Defaults to 1' },
                },
              },
              env: {
                type: 'string',
                enum: ['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'],
              },
              envSpecificDetails: {
                oneOf: [
                  {
                    type: 'object',
                    properties: {
                      dockerCommand: { type: 'string' },
                      dockerContext: { type: 'string' },
                      dockerfilePath: {
                        type: 'string',
                        default: './Dockerfile',
                        description: 'Defaults to "./Dockerfile"',
                      },
                    },
                  },
                  {
                    type: 'object',
                    required: ['buildCommand', 'startCommand'],
                    properties: {
                      buildCommand: { type: 'string' },
                      startCommand: { type: 'string' },
                    },
                  },
                ],
              },
              numInstances: {
                type: 'integer',
                minimum: 1,
                default: 1,
                description: 'Defaults to 1',
              },
              plan: {
                type: 'string',
                enum: [
                  'starter',
                  'starter_plus',
                  'standard',
                  'standard_plus',
                  'pro',
                  'pro_plus',
                  'pro_max',
                  'pro_ultra',
                ],
                default: 'starter',
                description: 'Defaults to "starter"',
              },
              pullRequestPreviewsEnabled: {
                type: 'string',
                enum: ['yes', 'no'],
                default: 'no',
                description: 'Defaults to "no"',
              },
              region: {
                type: 'string',
                enum: ['oregon', 'frankfurt'],
                default: 'oregon',
                description: 'Defaults to "oregon"',
              },
            },
          },
          {
            type: 'object',
            required: ['env', 'schedule'],
            properties: {
              env: {
                type: 'string',
                enum: ['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'],
              },
              envSpecificDetails: {
                oneOf: [
                  {
                    type: 'object',
                    properties: {
                      dockerCommand: { type: 'string' },
                      dockerContext: { type: 'string' },
                      dockerfilePath: {
                        type: 'string',
                        default: './Dockerfile',
                        description: 'Defaults to "./Dockerfile"',
                      },
                    },
                  },
                  {
                    type: 'object',
                    required: ['buildCommand', 'startCommand'],
                    properties: {
                      buildCommand: { type: 'string' },
                      startCommand: { type: 'string' },
                    },
                  },
                ],
              },
              plan: {
                type: 'string',
                enum: [
                  'starter',
                  'starter_plus',
                  'standard',
                  'standard_plus',
                  'pro',
                  'pro_plus',
                  'pro_max',
                  'pro_ultra',
                ],
                default: 'starter',
                description: 'Defaults to "starter"',
              },
              region: {
                type: 'string',
                enum: ['oregon', 'frankfurt'],
                default: 'oregon',
                description: 'Defaults to "oregon"',
              },
              schedule: { type: 'string' },
            },
          },
        ],
      },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  response: {
    '201': {
      type: 'object',
      properties: {
        service: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            autoDeploy: { type: 'string', enum: ['yes', 'no'], description: '`yes` `no`' },
            branch: { type: 'string' },
            createdAt: { type: 'string', format: 'date-time' },
            name: { type: 'string' },
            notifyOnFail: {
              type: 'string',
              enum: ['default', 'notify', 'ignore'],
              description: '`default` `notify` `ignore`',
            },
            ownerId: { type: 'string' },
            repo: {
              type: 'string',
              examples: ['https://github.com/render-examples/flask-hello-world'],
            },
            slug: { type: 'string' },
            suspended: {
              type: 'string',
              enum: ['suspended', 'not_suspended'],
              description: '`suspended` `not_suspended`',
            },
            suspenders: {
              type: 'array',
              items: {
                type: 'string',
                enum: ['admin', 'billing', 'user', 'parent_service', 'unknown'],
                description: '`admin` `billing` `user` `parent_service` `unknown`',
              },
            },
            type: {
              type: 'string',
              enum: [
                'static_site',
                'web_service',
                'private_service',
                'background_worker',
                'cron_job',
              ],
              description:
                '`static_site` `web_service` `private_service` `background_worker` `cron_job`',
            },
            updatedAt: { type: 'string', format: 'date-time' },
            serviceDetails: {
              oneOf: [
                {
                  type: 'object',
                  properties: {
                    buildCommand: { type: 'string' },
                    parentServer: {
                      type: 'object',
                      properties: { id: { type: 'string' }, name: { type: 'string' } },
                    },
                    publishPath: { type: 'string' },
                    pullRequestPreviewsEnabled: {
                      type: 'string',
                      enum: ['yes', 'no'],
                      description: '`yes` `no`',
                    },
                    url: { type: 'string' },
                  },
                },
                {
                  type: 'object',
                  properties: {
                    disk: {
                      type: 'object',
                      properties: { id: { type: 'string' }, name: { type: 'string' } },
                    },
                    env: {
                      type: 'string',
                      enum: ['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'],
                      description: '`docker` `elixir` `go` `node` `python` `ruby` `rust`',
                    },
                    envSpecificDetails: {
                      oneOf: [
                        {
                          type: 'object',
                          properties: {
                            dockerCommand: { type: 'string' },
                            dockerContext: { type: 'string' },
                            dockerfilePath: { type: 'string' },
                          },
                        },
                        {
                          type: 'object',
                          properties: {
                            buildCommand: { type: 'string' },
                            startCommand: { type: 'string' },
                          },
                        },
                      ],
                    },
                    healthCheckPath: { type: 'string' },
                    numInstances: { type: 'integer' },
                    openPorts: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          port: { type: 'integer', examples: [10000] },
                          protocol: {
                            type: 'string',
                            enum: ['TCP', 'UDP'],
                            description: '`TCP` `UDP`',
                          },
                        },
                      },
                    },
                    parentServer: {
                      type: 'object',
                      properties: { id: { type: 'string' }, name: { type: 'string' } },
                    },
                    plan: {
                      type: 'string',
                      enum: [
                        'starter',
                        'starter_plus',
                        'standard',
                        'standard_plus',
                        'pro',
                        'pro_plus',
                        'pro_max',
                        'pro_ultra',
                        'free',
                        'custom',
                      ],
                      description:
                        '`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `free` `custom`',
                    },
                    pullRequestPreviewsEnabled: {
                      type: 'string',
                      enum: ['yes', 'no'],
                      description: '`yes` `no`',
                    },
                    region: {
                      type: 'string',
                      enum: ['oregon', 'frankfurt'],
                      description: '`oregon` `frankfurt`',
                    },
                    url: { type: 'string' },
                  },
                },
                {
                  type: 'object',
                  properties: {
                    disk: {
                      type: 'object',
                      properties: { id: { type: 'string' }, name: { type: 'string' } },
                    },
                    env: {
                      type: 'string',
                      enum: ['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'],
                      description: '`docker` `elixir` `go` `node` `python` `ruby` `rust`',
                    },
                    envSpecificDetails: {
                      oneOf: [
                        {
                          type: 'object',
                          properties: {
                            dockerCommand: { type: 'string' },
                            dockerContext: { type: 'string' },
                            dockerfilePath: { type: 'string' },
                          },
                        },
                        {
                          type: 'object',
                          properties: {
                            buildCommand: { type: 'string' },
                            startCommand: { type: 'string' },
                          },
                        },
                      ],
                    },
                    numInstances: { type: 'integer' },
                    openPorts: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          port: { type: 'integer', examples: [10000] },
                          protocol: {
                            type: 'string',
                            enum: ['TCP', 'UDP'],
                            description: '`TCP` `UDP`',
                          },
                        },
                      },
                    },
                    parentServer: {
                      type: 'object',
                      properties: { id: { type: 'string' }, name: { type: 'string' } },
                    },
                    plan: {
                      type: 'string',
                      enum: [
                        'starter',
                        'starter_plus',
                        'standard',
                        'standard_plus',
                        'pro',
                        'pro_plus',
                        'pro_max',
                        'pro_ultra',
                        'custom',
                      ],
                      description:
                        '`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `custom`',
                    },
                    pullRequestPreviewsEnabled: {
                      type: 'string',
                      enum: ['yes', 'no'],
                      description: '`yes` `no`',
                    },
                    region: {
                      type: 'string',
                      enum: ['oregon', 'frankfurt'],
                      description: '`oregon` `frankfurt`',
                    },
                    url: { type: 'string' },
                  },
                },
                {
                  type: 'object',
                  properties: {
                    disk: {
                      type: 'object',
                      properties: { id: { type: 'string' }, name: { type: 'string' } },
                    },
                    env: {
                      type: 'string',
                      enum: ['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'],
                      description: '`docker` `elixir` `go` `node` `python` `ruby` `rust`',
                    },
                    envSpecificDetails: {
                      oneOf: [
                        {
                          type: 'object',
                          properties: {
                            dockerCommand: { type: 'string' },
                            dockerContext: { type: 'string' },
                            dockerfilePath: { type: 'string' },
                          },
                        },
                        {
                          type: 'object',
                          properties: {
                            buildCommand: { type: 'string' },
                            startCommand: { type: 'string' },
                          },
                        },
                      ],
                    },
                    numInstances: { type: 'integer' },
                    parentServer: {
                      type: 'object',
                      properties: { id: { type: 'string' }, name: { type: 'string' } },
                    },
                    plan: {
                      type: 'string',
                      enum: [
                        'starter',
                        'starter_plus',
                        'standard',
                        'standard_plus',
                        'pro',
                        'pro_plus',
                        'pro_max',
                        'pro_ultra',
                        'custom',
                      ],
                      description:
                        '`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `custom`',
                    },
                    pullRequestPreviewsEnabled: {
                      type: 'string',
                      enum: ['yes', 'no'],
                      description: '`yes` `no`',
                    },
                    region: {
                      type: 'string',
                      enum: ['oregon', 'frankfurt'],
                      description: '`oregon` `frankfurt`',
                    },
                  },
                },
                {
                  type: 'object',
                  properties: {
                    env: {
                      type: 'string',
                      enum: ['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'],
                      description: '`docker` `elixir` `go` `node` `python` `ruby` `rust`',
                    },
                    envSpecificDetails: {
                      oneOf: [
                        {
                          type: 'object',
                          properties: {
                            dockerCommand: { type: 'string' },
                            dockerContext: { type: 'string' },
                            dockerfilePath: { type: 'string' },
                          },
                        },
                        {
                          type: 'object',
                          properties: {
                            buildCommand: { type: 'string' },
                            startCommand: { type: 'string' },
                          },
                        },
                      ],
                    },
                    lastSuccessfulRunAt: { type: 'string', format: 'date-time' },
                    plan: {
                      type: 'string',
                      enum: [
                        'starter',
                        'starter_plus',
                        'standard',
                        'standard_plus',
                        'pro',
                        'pro_plus',
                        'pro_max',
                        'pro_ultra',
                        'custom',
                      ],
                      description:
                        '`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `custom`',
                    },
                    region: {
                      type: 'string',
                      enum: ['oregon', 'frankfurt'],
                      description: '`oregon` `frankfurt`',
                    },
                    schedule: { type: 'string' },
                  },
                },
              ],
            },
          },
        },
        deployId: { type: 'string' },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '402': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '406': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const DeleteCustomDomain = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          serviceId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the service',
          },
          customDomainIdOrName: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID or name of the custom domain',
          },
        },
        required: ['serviceId', 'customDomainIdOrName'],
      },
    ],
  },
  response: {
    '400': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '406': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '410': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const DeleteService = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          serviceId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the service',
          },
        },
        required: ['serviceId'],
      },
    ],
  },
  response: {
    '401': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '406': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '410': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetCustomDomain = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          serviceId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the service',
          },
          customDomainIdOrName: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID or name of the custom domain',
          },
        },
        required: ['serviceId', 'customDomainIdOrName'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        domainType: {
          type: 'string',
          enum: ['apex', 'subdomain'],
          description: '`apex` `subdomain`',
        },
        publicSuffix: { type: 'string' },
        redirectForName: { type: 'string' },
        verificationStatus: {
          type: 'string',
          enum: ['verified', 'unverified'],
          description: '`verified` `unverified`',
        },
        createdAt: { type: 'string', format: 'date-time' },
        server: {
          type: 'object',
          properties: { id: { type: 'string' }, name: { type: 'string' } },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '406': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '410': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetCustomDomains = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          serviceId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the service',
          },
        },
        required: ['serviceId'],
      },
      {
        type: 'object',
        properties: {
          cursor: {
            type: 'string',
            format: 'byte',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Cursor to begin retrieving entries for this query',
          },
          limit: {
            type: 'number',
            default: 20,
            minimum: 1,
            maximum: 100,
            description: 'Max number of items that can be returned',
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
          name: {
            type: 'array',
            items: { type: 'string' },
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Filter for the names of custom domain',
          },
          domainType: {
            type: 'string',
            enum: ['apex', 'subdomain'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Filter for apex or subdomains',
          },
          verificationStatus: {
            type: 'string',
            enum: ['verified', 'unverified'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Filter for verified or unverified custom domains',
          },
          createdBefore: {
            type: 'string',
            format: 'date-time',
            examples: ['2021-06-17T08:15:30Z'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'Filter for custom domains created before a certain time (specified as an ISO 8601 timestamp)',
          },
          createdAfter: {
            type: 'string',
            format: 'date-time',
            examples: ['2021-02-17T08:15:30Z'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'Filter for custom domains created after a certain time (specified as an ISO 8601 timestamp)',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          customDomain: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              name: { type: 'string' },
              domainType: {
                type: 'string',
                enum: ['apex', 'subdomain'],
                description: '`apex` `subdomain`',
              },
              publicSuffix: { type: 'string' },
              redirectForName: { type: 'string' },
              verificationStatus: {
                type: 'string',
                enum: ['verified', 'unverified'],
                description: '`verified` `unverified`',
              },
              createdAt: { type: 'string', format: 'date-time' },
              server: {
                type: 'object',
                properties: { id: { type: 'string' }, name: { type: 'string' } },
              },
            },
          },
          cursor: { type: 'string', format: 'byte' },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '406': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '410': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetDeploy = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          serviceId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the service',
          },
          deployId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the deploy',
          },
        },
        required: ['serviceId', 'deployId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      required: ['id'],
      properties: {
        id: { type: 'string' },
        commit: {
          type: 'object',
          properties: {
            id: { type: 'string' },
            message: { type: 'string' },
            createdAt: { type: 'string', format: 'date-time' },
          },
        },
        status: {
          type: 'string',
          enum: [
            'created',
            'build_in_progress',
            'update_in_progress',
            'live',
            'deactivated',
            'build_failed',
            'update_failed',
            'canceled',
          ],
          description:
            '`created` `build_in_progress` `update_in_progress` `live` `deactivated` `build_failed` `update_failed` `canceled`',
        },
        finishedAt: { type: 'string', format: 'date-time' },
        createdAt: { type: 'string', format: 'date-time' },
        updatedAt: { type: 'string', format: 'date-time' },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '406': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '410': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetDeploys = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          serviceId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the service',
          },
        },
        required: ['serviceId'],
      },
      {
        type: 'object',
        properties: {
          startTime: {
            type: 'integer',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Epoch/Unix timestamp of start of time range to return',
          },
          endTime: {
            type: 'integer',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Epoch/Unix timestamp of end of time range to return',
          },
          cursor: {
            type: 'string',
            format: 'byte',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Cursor to begin retrieving entries for this query',
          },
          limit: {
            type: 'number',
            default: 20,
            minimum: 1,
            maximum: 100,
            description: 'Max number of items that can be returned',
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          deploy: {
            type: 'object',
            required: ['id'],
            properties: {
              id: { type: 'string' },
              commit: {
                type: 'object',
                properties: {
                  id: { type: 'string' },
                  message: { type: 'string' },
                  createdAt: { type: 'string', format: 'date-time' },
                },
              },
              status: {
                type: 'string',
                enum: [
                  'created',
                  'build_in_progress',
                  'update_in_progress',
                  'live',
                  'deactivated',
                  'build_failed',
                  'update_failed',
                  'canceled',
                ],
                description:
                  '`created` `build_in_progress` `update_in_progress` `live` `deactivated` `build_failed` `update_failed` `canceled`',
              },
              finishedAt: { type: 'string', format: 'date-time' },
              createdAt: { type: 'string', format: 'date-time' },
              updatedAt: { type: 'string', format: 'date-time' },
            },
          },
          cursor: { type: 'string', format: 'byte' },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '406': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '410': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetEnvVarsForService = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          serviceId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the service',
          },
        },
        required: ['serviceId'],
      },
      {
        type: 'object',
        properties: {
          cursor: {
            type: 'string',
            format: 'byte',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Cursor to begin retrieving entries for this query',
          },
          limit: {
            type: 'number',
            default: 20,
            minimum: 1,
            maximum: 100,
            description: 'Max number of items that can be returned',
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          envVar: {
            type: 'object',
            required: ['key', 'value'],
            properties: { key: { type: 'string' }, value: { type: 'string' } },
          },
          cursor: { type: 'string', format: 'byte' },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '406': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '410': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetHeaders = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          serviceId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the service',
          },
        },
        required: ['serviceId'],
      },
      {
        type: 'object',
        properties: {
          path: {
            type: 'array',
            items: { type: 'string' },
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Filter for specific paths that headers apply to',
          },
          name: {
            type: 'array',
            items: { type: 'string' },
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Filter for header names',
          },
          value: {
            type: 'array',
            items: { type: 'string' },
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Filter for header values',
          },
          cursor: {
            type: 'string',
            format: 'byte',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Cursor to begin retrieving entries for this query',
          },
          limit: {
            type: 'number',
            default: 20,
            minimum: 1,
            maximum: 100,
            description: 'Max number of items that can be returned',
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          headers: {
            type: 'object',
            required: ['path', 'name', 'value'],
            properties: {
              path: { type: 'string' },
              name: { type: 'string' },
              value: { type: 'string' },
            },
          },
          cursor: { type: 'string', format: 'byte' },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '406': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '410': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetJob = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          serviceId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the service',
          },
          jobId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the job',
          },
        },
        required: ['serviceId', 'jobId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        id: { type: 'string', examples: ['job-xxxxx'] },
        serviceId: { type: 'string', examples: ['srv-xxxxx'] },
        startCommand: { type: 'string', examples: ["echo 'hello world'"] },
        planId: { type: 'string', examples: ['plan-srv-004'] },
        status: { type: 'string', examples: ['succeeded'] },
        createdAt: { type: 'string', examples: ['2021-07-15T07:20:05.777035-07:00'] },
        startedAt: { type: 'string', examples: ['2021-07-15T07:20:05.777035-07:00'] },
        finishedAt: { type: 'string', examples: ['2021-07-15T07:20:05.777035-07:00'] },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetOwner = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          ownerId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the user or team',
          },
        },
        required: ['ownerId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      required: ['id'],
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        email: { type: 'string' },
        type: { type: 'string', enum: ['user', 'team'], description: '`user` `team`' },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '406': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '410': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetOwners = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          name: {
            type: 'array',
            items: { type: 'string' },
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
          email: {
            type: 'array',
            items: { type: 'string' },
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
          cursor: {
            type: 'string',
            format: 'byte',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Cursor to begin retrieving entries for this query',
          },
          limit: {
            type: 'number',
            default: 20,
            minimum: 1,
            maximum: 100,
            description: 'Max number of items that can be returned',
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'array',
      items: {
        properties: {
          owner: {
            type: 'object',
            required: ['id'],
            properties: {
              id: { type: 'string' },
              name: { type: 'string' },
              email: { type: 'string' },
              type: { type: 'string', enum: ['user', 'team'], description: '`user` `team`' },
            },
          },
          cursor: { type: 'string', format: 'byte' },
        },
        type: 'object',
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '406': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetRoutes = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          serviceId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the service',
          },
        },
        required: ['serviceId'],
      },
      {
        type: 'object',
        properties: {
          type: {
            type: 'array',
            items: { type: 'string', enum: ['redirect', 'rewrite'] },
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Filter for the type of route rule',
          },
          source: {
            type: 'array',
            items: { type: 'string' },
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Filter for the source path of the route',
          },
          destination: {
            type: 'array',
            items: { type: 'string' },
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Filter for the destination path of the route',
          },
          cursor: {
            type: 'string',
            format: 'byte',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Cursor to begin retrieving entries for this query',
          },
          limit: {
            type: 'number',
            default: 20,
            minimum: 1,
            maximum: 100,
            description: 'Max number of items that can be returned',
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          routes: {
            type: 'object',
            required: ['type', 'source', 'destination'],
            properties: {
              type: {
                type: 'string',
                enum: ['redirect', 'rewrite'],
                description: '`redirect` `rewrite`',
              },
              source: { type: 'string' },
              destination: { type: 'string' },
            },
          },
          cursor: { type: 'string', format: 'byte' },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '406': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '410': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetService = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          serviceId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the service',
          },
        },
        required: ['serviceId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        id: { type: 'string' },
        autoDeploy: { type: 'string', enum: ['yes', 'no'], description: '`yes` `no`' },
        branch: { type: 'string' },
        createdAt: { type: 'string', format: 'date-time' },
        name: { type: 'string' },
        notifyOnFail: {
          type: 'string',
          enum: ['default', 'notify', 'ignore'],
          description: '`default` `notify` `ignore`',
        },
        ownerId: { type: 'string' },
        repo: {
          type: 'string',
          examples: ['https://github.com/render-examples/flask-hello-world'],
        },
        slug: { type: 'string' },
        suspended: {
          type: 'string',
          enum: ['suspended', 'not_suspended'],
          description: '`suspended` `not_suspended`',
        },
        suspenders: {
          type: 'array',
          items: {
            type: 'string',
            enum: ['admin', 'billing', 'user', 'parent_service', 'unknown'],
            description: '`admin` `billing` `user` `parent_service` `unknown`',
          },
        },
        type: {
          type: 'string',
          enum: ['static_site', 'web_service', 'private_service', 'background_worker', 'cron_job'],
          description:
            '`static_site` `web_service` `private_service` `background_worker` `cron_job`',
        },
        updatedAt: { type: 'string', format: 'date-time' },
        serviceDetails: {
          oneOf: [
            {
              type: 'object',
              properties: {
                buildCommand: { type: 'string' },
                parentServer: {
                  type: 'object',
                  properties: { id: { type: 'string' }, name: { type: 'string' } },
                },
                publishPath: { type: 'string' },
                pullRequestPreviewsEnabled: {
                  type: 'string',
                  enum: ['yes', 'no'],
                  description: '`yes` `no`',
                },
                url: { type: 'string' },
              },
            },
            {
              type: 'object',
              properties: {
                disk: {
                  type: 'object',
                  properties: { id: { type: 'string' }, name: { type: 'string' } },
                },
                env: {
                  type: 'string',
                  enum: ['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'],
                  description: '`docker` `elixir` `go` `node` `python` `ruby` `rust`',
                },
                envSpecificDetails: {
                  oneOf: [
                    {
                      type: 'object',
                      properties: {
                        dockerCommand: { type: 'string' },
                        dockerContext: { type: 'string' },
                        dockerfilePath: { type: 'string' },
                      },
                    },
                    {
                      type: 'object',
                      properties: {
                        buildCommand: { type: 'string' },
                        startCommand: { type: 'string' },
                      },
                    },
                  ],
                },
                healthCheckPath: { type: 'string' },
                numInstances: { type: 'integer' },
                openPorts: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      port: { type: 'integer', examples: [10000] },
                      protocol: {
                        type: 'string',
                        enum: ['TCP', 'UDP'],
                        description: '`TCP` `UDP`',
                      },
                    },
                  },
                },
                parentServer: {
                  type: 'object',
                  properties: { id: { type: 'string' }, name: { type: 'string' } },
                },
                plan: {
                  type: 'string',
                  enum: [
                    'starter',
                    'starter_plus',
                    'standard',
                    'standard_plus',
                    'pro',
                    'pro_plus',
                    'pro_max',
                    'pro_ultra',
                    'free',
                    'custom',
                  ],
                  description:
                    '`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `free` `custom`',
                },
                pullRequestPreviewsEnabled: {
                  type: 'string',
                  enum: ['yes', 'no'],
                  description: '`yes` `no`',
                },
                region: {
                  type: 'string',
                  enum: ['oregon', 'frankfurt'],
                  description: '`oregon` `frankfurt`',
                },
                url: { type: 'string' },
              },
            },
            {
              type: 'object',
              properties: {
                disk: {
                  type: 'object',
                  properties: { id: { type: 'string' }, name: { type: 'string' } },
                },
                env: {
                  type: 'string',
                  enum: ['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'],
                  description: '`docker` `elixir` `go` `node` `python` `ruby` `rust`',
                },
                envSpecificDetails: {
                  oneOf: [
                    {
                      type: 'object',
                      properties: {
                        dockerCommand: { type: 'string' },
                        dockerContext: { type: 'string' },
                        dockerfilePath: { type: 'string' },
                      },
                    },
                    {
                      type: 'object',
                      properties: {
                        buildCommand: { type: 'string' },
                        startCommand: { type: 'string' },
                      },
                    },
                  ],
                },
                numInstances: { type: 'integer' },
                openPorts: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      port: { type: 'integer', examples: [10000] },
                      protocol: {
                        type: 'string',
                        enum: ['TCP', 'UDP'],
                        description: '`TCP` `UDP`',
                      },
                    },
                  },
                },
                parentServer: {
                  type: 'object',
                  properties: { id: { type: 'string' }, name: { type: 'string' } },
                },
                plan: {
                  type: 'string',
                  enum: [
                    'starter',
                    'starter_plus',
                    'standard',
                    'standard_plus',
                    'pro',
                    'pro_plus',
                    'pro_max',
                    'pro_ultra',
                    'custom',
                  ],
                  description:
                    '`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `custom`',
                },
                pullRequestPreviewsEnabled: {
                  type: 'string',
                  enum: ['yes', 'no'],
                  description: '`yes` `no`',
                },
                region: {
                  type: 'string',
                  enum: ['oregon', 'frankfurt'],
                  description: '`oregon` `frankfurt`',
                },
                url: { type: 'string' },
              },
            },
            {
              type: 'object',
              properties: {
                disk: {
                  type: 'object',
                  properties: { id: { type: 'string' }, name: { type: 'string' } },
                },
                env: {
                  type: 'string',
                  enum: ['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'],
                  description: '`docker` `elixir` `go` `node` `python` `ruby` `rust`',
                },
                envSpecificDetails: {
                  oneOf: [
                    {
                      type: 'object',
                      properties: {
                        dockerCommand: { type: 'string' },
                        dockerContext: { type: 'string' },
                        dockerfilePath: { type: 'string' },
                      },
                    },
                    {
                      type: 'object',
                      properties: {
                        buildCommand: { type: 'string' },
                        startCommand: { type: 'string' },
                      },
                    },
                  ],
                },
                numInstances: { type: 'integer' },
                parentServer: {
                  type: 'object',
                  properties: { id: { type: 'string' }, name: { type: 'string' } },
                },
                plan: {
                  type: 'string',
                  enum: [
                    'starter',
                    'starter_plus',
                    'standard',
                    'standard_plus',
                    'pro',
                    'pro_plus',
                    'pro_max',
                    'pro_ultra',
                    'custom',
                  ],
                  description:
                    '`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `custom`',
                },
                pullRequestPreviewsEnabled: {
                  type: 'string',
                  enum: ['yes', 'no'],
                  description: '`yes` `no`',
                },
                region: {
                  type: 'string',
                  enum: ['oregon', 'frankfurt'],
                  description: '`oregon` `frankfurt`',
                },
              },
            },
            {
              type: 'object',
              properties: {
                env: {
                  type: 'string',
                  enum: ['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'],
                  description: '`docker` `elixir` `go` `node` `python` `ruby` `rust`',
                },
                envSpecificDetails: {
                  oneOf: [
                    {
                      type: 'object',
                      properties: {
                        dockerCommand: { type: 'string' },
                        dockerContext: { type: 'string' },
                        dockerfilePath: { type: 'string' },
                      },
                    },
                    {
                      type: 'object',
                      properties: {
                        buildCommand: { type: 'string' },
                        startCommand: { type: 'string' },
                      },
                    },
                  ],
                },
                lastSuccessfulRunAt: { type: 'string', format: 'date-time' },
                plan: {
                  type: 'string',
                  enum: [
                    'starter',
                    'starter_plus',
                    'standard',
                    'standard_plus',
                    'pro',
                    'pro_plus',
                    'pro_max',
                    'pro_ultra',
                    'custom',
                  ],
                  description:
                    '`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `custom`',
                },
                region: {
                  type: 'string',
                  enum: ['oregon', 'frankfurt'],
                  description: '`oregon` `frankfurt`',
                },
                schedule: { type: 'string' },
              },
            },
          ],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '406': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '410': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const GetServices = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          name: {
            type: 'array',
            items: { type: 'string' },
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Filter for the names of services',
          },
          type: {
            type: 'array',
            items: {
              type: 'string',
              enum: [
                'static_site',
                'web_service',
                'private_service',
                'background_worker',
                'cron_job',
              ],
            },
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Filter for types of services',
          },
          env: {
            type: 'array',
            items: {
              type: 'string',
              enum: ['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'],
            },
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Filter for environments of services',
          },
          region: {
            type: 'array',
            items: { type: 'string', enum: ['oregon', 'frankfurt'] },
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Filter for regions of services',
          },
          suspended: {
            type: 'array',
            items: { type: 'string', enum: ['suspended', 'not_suspended'] },
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: "Filter services based on whether they're suspended or not suspended",
          },
          createdBefore: {
            type: 'string',
            format: 'date-time',
            examples: ['2021-06-17T08:15:30Z'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'Filter for services created before a certain time (specified as an ISO 8601 timestamp)',
          },
          createdAfter: {
            type: 'string',
            format: 'date-time',
            examples: ['2021-02-17T08:15:30Z'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'Filter for services created after a certain time (specified as an ISO 8601 timestamp)',
          },
          updatedBefore: {
            type: 'string',
            format: 'date-time',
            examples: ['2021-06-17T08:15:30Z'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'Filter for services updated before a certain time (specified as an ISO 8601 timestamp)',
          },
          updatedAfter: {
            type: 'string',
            format: 'date-time',
            examples: ['2021-02-17T08:15:30Z'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'Filter for services updated after a certain time (specified as an ISO 8601 timestamp)',
          },
          ownerId: {
            type: 'array',
            items: { type: 'string' },
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'The ID of the owner (team or personal user) whose resources should be returned',
          },
          cursor: {
            type: 'string',
            format: 'byte',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Cursor to begin retrieving entries for this query',
          },
          limit: {
            type: 'number',
            default: 20,
            minimum: 1,
            maximum: 100,
            description: 'Max number of items that can be returned',
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          service: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              autoDeploy: { type: 'string', enum: ['yes', 'no'], description: '`yes` `no`' },
              branch: { type: 'string' },
              createdAt: { type: 'string', format: 'date-time' },
              name: { type: 'string' },
              notifyOnFail: {
                type: 'string',
                enum: ['default', 'notify', 'ignore'],
                description: '`default` `notify` `ignore`',
              },
              ownerId: { type: 'string' },
              repo: {
                type: 'string',
                examples: ['https://github.com/render-examples/flask-hello-world'],
              },
              slug: { type: 'string' },
              suspended: {
                type: 'string',
                enum: ['suspended', 'not_suspended'],
                description: '`suspended` `not_suspended`',
              },
              suspenders: {
                type: 'array',
                items: {
                  type: 'string',
                  enum: ['admin', 'billing', 'user', 'parent_service', 'unknown'],
                  description: '`admin` `billing` `user` `parent_service` `unknown`',
                },
              },
              type: {
                type: 'string',
                enum: [
                  'static_site',
                  'web_service',
                  'private_service',
                  'background_worker',
                  'cron_job',
                ],
                description:
                  '`static_site` `web_service` `private_service` `background_worker` `cron_job`',
              },
              updatedAt: { type: 'string', format: 'date-time' },
              serviceDetails: {
                oneOf: [
                  {
                    type: 'object',
                    properties: {
                      buildCommand: { type: 'string' },
                      parentServer: {
                        type: 'object',
                        properties: { id: { type: 'string' }, name: { type: 'string' } },
                      },
                      publishPath: { type: 'string' },
                      pullRequestPreviewsEnabled: {
                        type: 'string',
                        enum: ['yes', 'no'],
                        description: '`yes` `no`',
                      },
                      url: { type: 'string' },
                    },
                  },
                  {
                    type: 'object',
                    properties: {
                      disk: {
                        type: 'object',
                        properties: { id: { type: 'string' }, name: { type: 'string' } },
                      },
                      env: {
                        type: 'string',
                        enum: ['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'],
                        description: '`docker` `elixir` `go` `node` `python` `ruby` `rust`',
                      },
                      envSpecificDetails: {
                        oneOf: [
                          {
                            type: 'object',
                            properties: {
                              dockerCommand: { type: 'string' },
                              dockerContext: { type: 'string' },
                              dockerfilePath: { type: 'string' },
                            },
                          },
                          {
                            type: 'object',
                            properties: {
                              buildCommand: { type: 'string' },
                              startCommand: { type: 'string' },
                            },
                          },
                        ],
                      },
                      healthCheckPath: { type: 'string' },
                      numInstances: { type: 'integer' },
                      openPorts: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            port: { type: 'integer', examples: [10000] },
                            protocol: {
                              type: 'string',
                              enum: ['TCP', 'UDP'],
                              description: '`TCP` `UDP`',
                            },
                          },
                        },
                      },
                      parentServer: {
                        type: 'object',
                        properties: { id: { type: 'string' }, name: { type: 'string' } },
                      },
                      plan: {
                        type: 'string',
                        enum: [
                          'starter',
                          'starter_plus',
                          'standard',
                          'standard_plus',
                          'pro',
                          'pro_plus',
                          'pro_max',
                          'pro_ultra',
                          'free',
                          'custom',
                        ],
                        description:
                          '`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `free` `custom`',
                      },
                      pullRequestPreviewsEnabled: {
                        type: 'string',
                        enum: ['yes', 'no'],
                        description: '`yes` `no`',
                      },
                      region: {
                        type: 'string',
                        enum: ['oregon', 'frankfurt'],
                        description: '`oregon` `frankfurt`',
                      },
                      url: { type: 'string' },
                    },
                  },
                  {
                    type: 'object',
                    properties: {
                      disk: {
                        type: 'object',
                        properties: { id: { type: 'string' }, name: { type: 'string' } },
                      },
                      env: {
                        type: 'string',
                        enum: ['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'],
                        description: '`docker` `elixir` `go` `node` `python` `ruby` `rust`',
                      },
                      envSpecificDetails: {
                        oneOf: [
                          {
                            type: 'object',
                            properties: {
                              dockerCommand: { type: 'string' },
                              dockerContext: { type: 'string' },
                              dockerfilePath: { type: 'string' },
                            },
                          },
                          {
                            type: 'object',
                            properties: {
                              buildCommand: { type: 'string' },
                              startCommand: { type: 'string' },
                            },
                          },
                        ],
                      },
                      numInstances: { type: 'integer' },
                      openPorts: {
                        type: 'array',
                        items: {
                          type: 'object',
                          properties: {
                            port: { type: 'integer', examples: [10000] },
                            protocol: {
                              type: 'string',
                              enum: ['TCP', 'UDP'],
                              description: '`TCP` `UDP`',
                            },
                          },
                        },
                      },
                      parentServer: {
                        type: 'object',
                        properties: { id: { type: 'string' }, name: { type: 'string' } },
                      },
                      plan: {
                        type: 'string',
                        enum: [
                          'starter',
                          'starter_plus',
                          'standard',
                          'standard_plus',
                          'pro',
                          'pro_plus',
                          'pro_max',
                          'pro_ultra',
                          'custom',
                        ],
                        description:
                          '`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `custom`',
                      },
                      pullRequestPreviewsEnabled: {
                        type: 'string',
                        enum: ['yes', 'no'],
                        description: '`yes` `no`',
                      },
                      region: {
                        type: 'string',
                        enum: ['oregon', 'frankfurt'],
                        description: '`oregon` `frankfurt`',
                      },
                      url: { type: 'string' },
                    },
                  },
                  {
                    type: 'object',
                    properties: {
                      disk: {
                        type: 'object',
                        properties: { id: { type: 'string' }, name: { type: 'string' } },
                      },
                      env: {
                        type: 'string',
                        enum: ['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'],
                        description: '`docker` `elixir` `go` `node` `python` `ruby` `rust`',
                      },
                      envSpecificDetails: {
                        oneOf: [
                          {
                            type: 'object',
                            properties: {
                              dockerCommand: { type: 'string' },
                              dockerContext: { type: 'string' },
                              dockerfilePath: { type: 'string' },
                            },
                          },
                          {
                            type: 'object',
                            properties: {
                              buildCommand: { type: 'string' },
                              startCommand: { type: 'string' },
                            },
                          },
                        ],
                      },
                      numInstances: { type: 'integer' },
                      parentServer: {
                        type: 'object',
                        properties: { id: { type: 'string' }, name: { type: 'string' } },
                      },
                      plan: {
                        type: 'string',
                        enum: [
                          'starter',
                          'starter_plus',
                          'standard',
                          'standard_plus',
                          'pro',
                          'pro_plus',
                          'pro_max',
                          'pro_ultra',
                          'custom',
                        ],
                        description:
                          '`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `custom`',
                      },
                      pullRequestPreviewsEnabled: {
                        type: 'string',
                        enum: ['yes', 'no'],
                        description: '`yes` `no`',
                      },
                      region: {
                        type: 'string',
                        enum: ['oregon', 'frankfurt'],
                        description: '`oregon` `frankfurt`',
                      },
                    },
                  },
                  {
                    type: 'object',
                    properties: {
                      env: {
                        type: 'string',
                        enum: ['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'],
                        description: '`docker` `elixir` `go` `node` `python` `ruby` `rust`',
                      },
                      envSpecificDetails: {
                        oneOf: [
                          {
                            type: 'object',
                            properties: {
                              dockerCommand: { type: 'string' },
                              dockerContext: { type: 'string' },
                              dockerfilePath: { type: 'string' },
                            },
                          },
                          {
                            type: 'object',
                            properties: {
                              buildCommand: { type: 'string' },
                              startCommand: { type: 'string' },
                            },
                          },
                        ],
                      },
                      lastSuccessfulRunAt: { type: 'string', format: 'date-time' },
                      plan: {
                        type: 'string',
                        enum: [
                          'starter',
                          'starter_plus',
                          'standard',
                          'standard_plus',
                          'pro',
                          'pro_plus',
                          'pro_max',
                          'pro_ultra',
                          'custom',
                        ],
                        description:
                          '`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `custom`',
                      },
                      region: {
                        type: 'string',
                        enum: ['oregon', 'frankfurt'],
                        description: '`oregon` `frankfurt`',
                      },
                      schedule: { type: 'string' },
                    },
                  },
                ],
              },
            },
          },
          cursor: { type: 'string', format: 'byte' },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '406': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const ListJob = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          serviceId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the service',
          },
        },
        required: ['serviceId'],
      },
      {
        type: 'object',
        properties: {
          cursor: {
            type: 'string',
            format: 'byte',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'Cursor to begin retrieving entries for this query',
          },
          limit: {
            type: 'number',
            default: 20,
            minimum: 1,
            maximum: 100,
            description: 'Max number of items that can be returned',
            $schema: 'http://json-schema.org/draft-04/schema#',
          },
          status: {
            type: 'array',
            items: { type: 'string', enum: ['pending', 'running', 'succeeded', 'failed'] },
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'Filter for the status of the job (`pending`, `running`, `succeeded`, or `failed`)',
          },
          createdBefore: {
            type: 'string',
            format: 'date-time',
            examples: ['2021-06-17T08:15:30Z'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'Filter for jobs created before a certain time (specified as an ISO 8601 timestamp)',
          },
          createdAfter: {
            type: 'string',
            format: 'date-time',
            examples: ['2021-02-17T08:15:30Z'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'Filter for jobs created after a certain time (specified as an ISO 8601 timestamp)',
          },
          startedBefore: {
            type: 'string',
            format: 'date-time',
            examples: ['2021-06-17T08:15:30Z'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'Filter for jobs started before a certain time (specified as an ISO 8601 timestamp)',
          },
          startedAfter: {
            type: 'string',
            format: 'date-time',
            examples: ['2021-02-17T08:15:30Z'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'Filter for jobs started after a certain time (specified as an ISO 8601 timestamp)',
          },
          finishedBefore: {
            type: 'string',
            format: 'date-time',
            examples: ['2021-06-17T08:15:30Z'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'Filter for jobs finished before a certain time (specified as an ISO 8601 timestamp)',
          },
          finishedAfter: {
            type: 'string',
            format: 'date-time',
            examples: ['2021-02-17T08:15:30Z'],
            $schema: 'http://json-schema.org/draft-04/schema#',
            description:
              'Filter for jobs finished after a certain time (specified as an ISO 8601 timestamp)',
          },
        },
        required: [],
      },
    ],
  },
  response: {
    '200': {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          job: {
            type: 'object',
            properties: {
              id: { type: 'string', examples: ['job-xxxxx'] },
              serviceId: { type: 'string', examples: ['srv-xxxxx'] },
              startCommand: { type: 'string', examples: ["echo 'hello world'"] },
              planId: { type: 'string', examples: ['plan-srv-004'] },
              status: { type: 'string', examples: ['succeeded'] },
              createdAt: { type: 'string', examples: ['2021-07-15T07:20:05.777035-07:00'] },
              startedAt: { type: 'string', examples: ['2021-07-15T07:20:05.777035-07:00'] },
              finishedAt: { type: 'string', examples: ['2021-07-15T07:20:05.777035-07:00'] },
            },
          },
          cursor: { type: 'string', format: 'byte', examples: ['abc123'] },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const PostJob = {
  body: {
    type: 'object',
    required: ['startCommand'],
    properties: { startCommand: { type: 'string' }, planId: { type: 'string' } },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          serviceId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the service',
          },
        },
        required: ['serviceId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        id: { type: 'string', examples: ['job-xxxxx'] },
        serviceId: { type: 'string', examples: ['srv-xxxxx'] },
        startCommand: { type: 'string', examples: ["echo 'hello world'"] },
        planId: { type: 'string', examples: ['plan-srv-004'] },
        status: { type: 'string', examples: ['succeeded'] },
        createdAt: { type: 'string', examples: ['2021-07-15T07:20:05.777035-07:00'] },
        startedAt: { type: 'string', examples: ['2021-07-15T07:20:05.777035-07:00'] },
        finishedAt: { type: 'string', examples: ['2021-07-15T07:20:05.777035-07:00'] },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const RefreshCustomDomain = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          serviceId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the service',
          },
          customDomainIdOrName: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID or name of the custom domain',
          },
        },
        required: ['serviceId', 'customDomainIdOrName'],
      },
    ],
  },
  response: {
    '400': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '406': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '410': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const ResumeService = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          serviceId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the service',
          },
        },
        required: ['serviceId'],
      },
    ],
  },
  response: {
    '400': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '406': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '410': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const ScaleService = {
  body: {
    type: 'object',
    required: ['numInstances'],
    properties: { numInstances: { type: 'integer', examples: [3] } },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          serviceId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the service',
          },
        },
        required: ['serviceId'],
      },
    ],
  },
  response: {
    '400': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '406': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '410': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const SuspendService = {
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          serviceId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the service',
          },
        },
        required: ['serviceId'],
      },
    ],
  },
  response: {
    '400': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '406': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '410': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const UpdateEnvVarsForService = {
  body: {
    type: 'array',
    items: {
      oneOf: [
        {
          type: 'object',
          required: ['key', 'value'],
          properties: { key: { type: 'string' }, value: { type: 'string' } },
        },
        {
          type: 'object',
          required: ['key', 'generateValue'],
          properties: {
            key: { type: 'string' },
            generateValue: { type: 'string', enum: ['yes', 'no'] },
          },
        },
      ],
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          serviceId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the service',
          },
        },
        required: ['serviceId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          envVar: {
            type: 'object',
            required: ['key', 'value'],
            properties: { key: { type: 'string' }, value: { type: 'string' } },
          },
          cursor: { type: 'string', format: 'byte' },
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '406': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '410': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
const UpdateService = {
  body: {
    type: 'object',
    properties: {
      autoDeploy: { type: 'string', enum: ['yes', 'no'] },
      branch: { type: 'string' },
      name: { type: 'string' },
      serviceDetails: {
        oneOf: [
          {
            type: 'object',
            properties: {
              buildCommand: { type: 'string' },
              publishPath: { type: 'string' },
              pullRequestPreviewsEnabled: { type: 'string', enum: ['yes', 'no'] },
            },
          },
          {
            type: 'object',
            properties: {
              envSpecificDetails: {
                oneOf: [
                  {
                    type: 'object',
                    properties: {
                      dockerCommand: { type: 'string' },
                      dockerContext: { type: 'string' },
                      dockerfilePath: { type: 'string' },
                    },
                  },
                  {
                    type: 'object',
                    properties: {
                      buildCommand: { type: 'string' },
                      startCommand: { type: 'string' },
                    },
                  },
                ],
              },
              healthCheckPath: { type: 'string' },
              numInstances: { type: 'integer' },
              plan: {
                type: 'string',
                enum: [
                  'starter',
                  'starter_plus',
                  'standard',
                  'standard_plus',
                  'pro',
                  'pro_plus',
                  'pro_max',
                  'pro_ultra',
                ],
              },
              pullRequestPreviewsEnabled: { type: 'string', enum: ['yes', 'no'] },
            },
          },
          {
            type: 'object',
            properties: {
              envSpecificDetails: {
                oneOf: [
                  {
                    type: 'object',
                    properties: {
                      dockerCommand: { type: 'string' },
                      dockerContext: { type: 'string' },
                      dockerfilePath: { type: 'string' },
                    },
                  },
                  {
                    type: 'object',
                    properties: {
                      buildCommand: { type: 'string' },
                      startCommand: { type: 'string' },
                    },
                  },
                ],
              },
              numInstances: { type: 'integer' },
              plan: {
                type: 'string',
                enum: [
                  'starter',
                  'starter_plus',
                  'standard',
                  'standard_plus',
                  'pro',
                  'pro_plus',
                  'pro_max',
                  'pro_ultra',
                ],
              },
              pullRequestPreviewsEnabled: { type: 'string', enum: ['yes', 'no'] },
            },
          },
          {
            type: 'object',
            properties: {
              envSpecificDetails: {
                oneOf: [
                  {
                    type: 'object',
                    properties: {
                      dockerCommand: { type: 'string' },
                      dockerContext: { type: 'string' },
                      dockerfilePath: { type: 'string' },
                    },
                  },
                  {
                    type: 'object',
                    properties: {
                      buildCommand: { type: 'string' },
                      startCommand: { type: 'string' },
                    },
                  },
                ],
              },
              numInstances: { type: 'integer' },
              plan: {
                type: 'string',
                enum: [
                  'starter',
                  'starter_plus',
                  'standard',
                  'standard_plus',
                  'pro',
                  'pro_plus',
                  'pro_max',
                  'pro_ultra',
                ],
              },
              pullRequestPreviewsEnabled: { type: 'string', enum: ['yes', 'no'] },
            },
          },
          {
            type: 'object',
            properties: {
              envSpecificDetails: {
                oneOf: [
                  {
                    type: 'object',
                    properties: {
                      dockerCommand: { type: 'string' },
                      dockerContext: { type: 'string' },
                      dockerfilePath: { type: 'string' },
                    },
                  },
                  {
                    type: 'object',
                    properties: {
                      buildCommand: { type: 'string' },
                      startCommand: { type: 'string' },
                    },
                  },
                ],
              },
              plan: {
                type: 'string',
                enum: [
                  'starter',
                  'starter_plus',
                  'standard',
                  'standard_plus',
                  'pro',
                  'pro_plus',
                  'pro_max',
                  'pro_ultra',
                ],
              },
              schedule: { type: 'string' },
            },
          },
        ],
      },
    },
    $schema: 'http://json-schema.org/draft-04/schema#',
  },
  metadata: {
    allOf: [
      {
        type: 'object',
        properties: {
          serviceId: {
            type: 'string',
            $schema: 'http://json-schema.org/draft-04/schema#',
            description: 'The ID of the service',
          },
        },
        required: ['serviceId'],
      },
    ],
  },
  response: {
    '200': {
      type: 'object',
      properties: {
        id: { type: 'string' },
        autoDeploy: { type: 'string', enum: ['yes', 'no'], description: '`yes` `no`' },
        branch: { type: 'string' },
        createdAt: { type: 'string', format: 'date-time' },
        name: { type: 'string' },
        notifyOnFail: {
          type: 'string',
          enum: ['default', 'notify', 'ignore'],
          description: '`default` `notify` `ignore`',
        },
        ownerId: { type: 'string' },
        repo: {
          type: 'string',
          examples: ['https://github.com/render-examples/flask-hello-world'],
        },
        slug: { type: 'string' },
        suspended: {
          type: 'string',
          enum: ['suspended', 'not_suspended'],
          description: '`suspended` `not_suspended`',
        },
        suspenders: {
          type: 'array',
          items: {
            type: 'string',
            enum: ['admin', 'billing', 'user', 'parent_service', 'unknown'],
            description: '`admin` `billing` `user` `parent_service` `unknown`',
          },
        },
        type: {
          type: 'string',
          enum: ['static_site', 'web_service', 'private_service', 'background_worker', 'cron_job'],
          description:
            '`static_site` `web_service` `private_service` `background_worker` `cron_job`',
        },
        updatedAt: { type: 'string', format: 'date-time' },
        serviceDetails: {
          oneOf: [
            {
              type: 'object',
              properties: {
                buildCommand: { type: 'string' },
                parentServer: {
                  type: 'object',
                  properties: { id: { type: 'string' }, name: { type: 'string' } },
                },
                publishPath: { type: 'string' },
                pullRequestPreviewsEnabled: {
                  type: 'string',
                  enum: ['yes', 'no'],
                  description: '`yes` `no`',
                },
                url: { type: 'string' },
              },
            },
            {
              type: 'object',
              properties: {
                disk: {
                  type: 'object',
                  properties: { id: { type: 'string' }, name: { type: 'string' } },
                },
                env: {
                  type: 'string',
                  enum: ['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'],
                  description: '`docker` `elixir` `go` `node` `python` `ruby` `rust`',
                },
                envSpecificDetails: {
                  oneOf: [
                    {
                      type: 'object',
                      properties: {
                        dockerCommand: { type: 'string' },
                        dockerContext: { type: 'string' },
                        dockerfilePath: { type: 'string' },
                      },
                    },
                    {
                      type: 'object',
                      properties: {
                        buildCommand: { type: 'string' },
                        startCommand: { type: 'string' },
                      },
                    },
                  ],
                },
                healthCheckPath: { type: 'string' },
                numInstances: { type: 'integer' },
                openPorts: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      port: { type: 'integer', examples: [10000] },
                      protocol: {
                        type: 'string',
                        enum: ['TCP', 'UDP'],
                        description: '`TCP` `UDP`',
                      },
                    },
                  },
                },
                parentServer: {
                  type: 'object',
                  properties: { id: { type: 'string' }, name: { type: 'string' } },
                },
                plan: {
                  type: 'string',
                  enum: [
                    'starter',
                    'starter_plus',
                    'standard',
                    'standard_plus',
                    'pro',
                    'pro_plus',
                    'pro_max',
                    'pro_ultra',
                    'free',
                    'custom',
                  ],
                  description:
                    '`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `free` `custom`',
                },
                pullRequestPreviewsEnabled: {
                  type: 'string',
                  enum: ['yes', 'no'],
                  description: '`yes` `no`',
                },
                region: {
                  type: 'string',
                  enum: ['oregon', 'frankfurt'],
                  description: '`oregon` `frankfurt`',
                },
                url: { type: 'string' },
              },
            },
            {
              type: 'object',
              properties: {
                disk: {
                  type: 'object',
                  properties: { id: { type: 'string' }, name: { type: 'string' } },
                },
                env: {
                  type: 'string',
                  enum: ['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'],
                  description: '`docker` `elixir` `go` `node` `python` `ruby` `rust`',
                },
                envSpecificDetails: {
                  oneOf: [
                    {
                      type: 'object',
                      properties: {
                        dockerCommand: { type: 'string' },
                        dockerContext: { type: 'string' },
                        dockerfilePath: { type: 'string' },
                      },
                    },
                    {
                      type: 'object',
                      properties: {
                        buildCommand: { type: 'string' },
                        startCommand: { type: 'string' },
                      },
                    },
                  ],
                },
                numInstances: { type: 'integer' },
                openPorts: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      port: { type: 'integer', examples: [10000] },
                      protocol: {
                        type: 'string',
                        enum: ['TCP', 'UDP'],
                        description: '`TCP` `UDP`',
                      },
                    },
                  },
                },
                parentServer: {
                  type: 'object',
                  properties: { id: { type: 'string' }, name: { type: 'string' } },
                },
                plan: {
                  type: 'string',
                  enum: [
                    'starter',
                    'starter_plus',
                    'standard',
                    'standard_plus',
                    'pro',
                    'pro_plus',
                    'pro_max',
                    'pro_ultra',
                    'custom',
                  ],
                  description:
                    '`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `custom`',
                },
                pullRequestPreviewsEnabled: {
                  type: 'string',
                  enum: ['yes', 'no'],
                  description: '`yes` `no`',
                },
                region: {
                  type: 'string',
                  enum: ['oregon', 'frankfurt'],
                  description: '`oregon` `frankfurt`',
                },
                url: { type: 'string' },
              },
            },
            {
              type: 'object',
              properties: {
                disk: {
                  type: 'object',
                  properties: { id: { type: 'string' }, name: { type: 'string' } },
                },
                env: {
                  type: 'string',
                  enum: ['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'],
                  description: '`docker` `elixir` `go` `node` `python` `ruby` `rust`',
                },
                envSpecificDetails: {
                  oneOf: [
                    {
                      type: 'object',
                      properties: {
                        dockerCommand: { type: 'string' },
                        dockerContext: { type: 'string' },
                        dockerfilePath: { type: 'string' },
                      },
                    },
                    {
                      type: 'object',
                      properties: {
                        buildCommand: { type: 'string' },
                        startCommand: { type: 'string' },
                      },
                    },
                  ],
                },
                numInstances: { type: 'integer' },
                parentServer: {
                  type: 'object',
                  properties: { id: { type: 'string' }, name: { type: 'string' } },
                },
                plan: {
                  type: 'string',
                  enum: [
                    'starter',
                    'starter_plus',
                    'standard',
                    'standard_plus',
                    'pro',
                    'pro_plus',
                    'pro_max',
                    'pro_ultra',
                    'custom',
                  ],
                  description:
                    '`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `custom`',
                },
                pullRequestPreviewsEnabled: {
                  type: 'string',
                  enum: ['yes', 'no'],
                  description: '`yes` `no`',
                },
                region: {
                  type: 'string',
                  enum: ['oregon', 'frankfurt'],
                  description: '`oregon` `frankfurt`',
                },
              },
            },
            {
              type: 'object',
              properties: {
                env: {
                  type: 'string',
                  enum: ['docker', 'elixir', 'go', 'node', 'python', 'ruby', 'rust'],
                  description: '`docker` `elixir` `go` `node` `python` `ruby` `rust`',
                },
                envSpecificDetails: {
                  oneOf: [
                    {
                      type: 'object',
                      properties: {
                        dockerCommand: { type: 'string' },
                        dockerContext: { type: 'string' },
                        dockerfilePath: { type: 'string' },
                      },
                    },
                    {
                      type: 'object',
                      properties: {
                        buildCommand: { type: 'string' },
                        startCommand: { type: 'string' },
                      },
                    },
                  ],
                },
                lastSuccessfulRunAt: { type: 'string', format: 'date-time' },
                plan: {
                  type: 'string',
                  enum: [
                    'starter',
                    'starter_plus',
                    'standard',
                    'standard_plus',
                    'pro',
                    'pro_plus',
                    'pro_max',
                    'pro_ultra',
                    'custom',
                  ],
                  description:
                    '`starter` `starter_plus` `standard` `standard_plus` `pro` `pro_plus` `pro_max` `pro_ultra` `custom`',
                },
                region: {
                  type: 'string',
                  enum: ['oregon', 'frankfurt'],
                  description: '`oregon` `frankfurt`',
                },
                schedule: { type: 'string' },
              },
            },
          ],
        },
      },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '400': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '401': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '402': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '403': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '404': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '406': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '409': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '410': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '429': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '500': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
    '503': {
      type: 'object',
      properties: { id: { type: 'string' }, message: { type: 'string' } },
      $schema: 'http://json-schema.org/draft-04/schema#',
    },
  },
} as const;
export {
  CancelJob,
  CreateCustomDomain,
  CreateDeploy,
  CreateService,
  DeleteCustomDomain,
  DeleteService,
  GetCustomDomain,
  GetCustomDomains,
  GetDeploy,
  GetDeploys,
  GetEnvVarsForService,
  GetHeaders,
  GetJob,
  GetOwner,
  GetOwners,
  GetRoutes,
  GetService,
  GetServices,
  ListJob,
  PostJob,
  RefreshCustomDomain,
  ResumeService,
  ScaleService,
  SuspendService,
  UpdateEnvVarsForService,
  UpdateService,
};
