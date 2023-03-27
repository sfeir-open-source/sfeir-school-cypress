export const BAD_REQUEST_SCHEMA = {
  type: 'object',
  properties: {
    statusCode: { type: 'number' },
    message: { type: 'array', items: { type: 'string' } },
    error: { type: 'string' },
  },
};

export const UNAUTHORIZED_SCHEMA = {
  type: 'object',
  properties: { statusCode: { type: 'number' }, message: { type: 'string' } },
};

export const INTERNAL_SERVER_SCHEMA = {
  type: 'object',
  properties: { statusCode: { type: 'number' }, message: { type: 'string' } },
};
