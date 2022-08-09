const http = require('k6/http');
const { check, sleep } = require('k6');

export const options = {
  iterations: 100,
  // iterations: 20,
  // iterations: 50,
  
};


export default () => {
  // css tests
  const res = http.get('https://edehr.org/css/app.a8ba1eeb.css');
  check(res, {
    "success": r => r.status === 200
  });
  const chunkRes = http.get('https://edehr.org/css/chunk-[request][index].3e53e625.css');
  check(chunkRes, {
    "success": r => r.status === 200
  })
  // javascript tests
  const res1 = http.get('https://edehr.org/js/chunk-vendors-c0d76f48.6224f0f3.js');
  check(res1, {
    "success": r => r.status === 200
  });
  const res2 = http.get('https://edehr.org/js/chunk-vendors-b9f70e77.a667288e.js');
  check(res2, {
    "success": r => r.status === 200
  })
  const res3 = http.get('https://edehr.org/js/app.e84e7099.js');
  check(res3, {
    "success": r => r.status === 200
  })
  const res4 = http.get('https://edehr.org/js/chunk-[request][index].fb0d92af.js');
  check(res4, {
    "success": r => r.status === 200
  })
  // favicon
  const favIconRes = http.get('https://edehr.org/favicon-32x32.png')
  check(favIconRes, {
    "success": r => r.status === 200
  })
  // html homepage
  const httpRes = http.get('https://edehr.org/')
  check(httpRes, {
    "success": r => r.status === 200
  })
}

