/**
 * function description
 * common ajax
 *
 * @param    {string}
 * @returns  void
 *
 * @date     2018-06-01
 * @author   Breeze_微风<332522058@qq.com>
 */
require('isomorphic-fetch');

const LOCAL_HOST = '127.0.0.1';
const LOCAL_PORT = process.env.port || 8080;

const Local = {
  host: LOCAL_HOST,
  port: LOCAL_PORT,
  domain: `http://${LOCAL_HOST}:${LOCAL_PORT}`
};

function request(options) {
  const defaults = {
    host: null,
    path: null,
    method: 'POST',
    data: {},
    'Content-Type': 'application/json',
    Accept: 'application/json'
  };
  let url;
  const headers = {};
  options = Object.assign({}, defaults, options);

  const isNode = typeof window === 'undefined';

  if (isNode && options.host === null) {
    url = Local.domain + options.path;
  } else {
    url = options.host === null ? options.path : options.host + options.path;
  }

  Object.keys(options).forEach((key) => {
    if (!key.match(/url|method|data|host|path/)) {
      headers[key] = options[key];
    }
  });
  const requestData = {
    method: options.method,
    headers
    // credentials: 'include'
  };
  if (options.method.toLowerCase() === 'post') {
    requestData.body = options.method.toLowerCase() === 'post' ? JSON.stringify(options.data) : {};
  }
  return fetch(url, requestData).then(res => res.json());
}


const post = (host, path, data) => request({
  host,
  path,
  data,
  method: 'POST'
});

export default {
  request,
  post
};
