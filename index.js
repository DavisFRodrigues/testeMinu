const axios = require("axios");

const url = 'https://minutrade-callback.glitch.me/combinatividade/auth';
const uname = '';
const pass = '';
axios.post(url, {}, {
  auth: {
    username: uname,
    password: pass
  }
}).then(function(response) {
    console.log(response.data);
    
}).catch(function(error) {
  console.log(error);
});
