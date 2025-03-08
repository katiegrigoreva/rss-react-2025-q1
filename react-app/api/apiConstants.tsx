import md5 from 'md5';

export const apiConstants = {
  _apiKeyPrivate: '13cc7adece0ba34b89d11f61aca2fb177fa82f9a',
  _apiKeyPublic: 'ede7c87b314e4253d2fa3cc4c3e4b962',
  _apiKey: 'apikey=ede7c87b314e4253d2fa3cc4c3e4b962',
  _apiBase: 'https://gateway.marvel.com:443/v1/public/characters',
  _baseQuery: '?limit=8&offset=0',
  _limit: 8,
};

const timestamp = new Date().getTime();
const hash: string = md5(`${timestamp}${apiConstants._apiKeyPrivate}${apiConstants._apiKeyPublic}`);

export const _hash = `hash=${hash}`;
export const _ts = `ts=${timestamp}`;
