const http = require('k6/http');
const { check, sleep } = require('k6');

export const options = {
  iterations: 100,
  // iterations: 20,
  // iterations: 50,
  
};


export default () => {
  // home API request
  const home = http.get('https://edehr.org/api/home/')
  check(home, {
    "success": r => r.status === 200
  })

  // manifest
  const manifest = http.get("https://edehr.org/site.webmanifest")
  check(manifest, {
    "success": r => r.status === 200
  })
}
