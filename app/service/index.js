import axios from 'axios';
import {
  DEFAULT_OPTS,
  API_URL,
} from '../config';

const setHeader = (opts) => ({ ...DEFAULT_OPTS, ...opts });

export const GET = (params) => {
  const { path, opts = {}, body = {} } = params;
  const url = API_URL + path;
  console.log('url ', url);
  return axios({
    method: 'get',
    headers: setHeader(opts),
    params: body,
    url,
  });
};

export const PUT = (params) => {
  const { path, body = {}, opts = {} } = params;
  const url = API_URL + path;
  console.log('url ', url);

  return axios({
    method: 'put',
    headers: setHeader(opts),
    data: body,
    url,
  });
};

export const POST = (params) => {
  const { path, body = {}, opts = {} } = params;
  const url = API_URL + path;
  console.log('url ', url);

  return axios({
    method: 'post',
    headers: setHeader(opts),
    data: body,
    url,
  });
};

export const DEL = (params) => {
  const { path, opts = {} } = params;

  return axios({
    method: 'get',
    headers: setHeader(opts),
    url: API_URL + path,
  });
};
