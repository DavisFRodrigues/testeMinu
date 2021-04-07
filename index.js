const axios = require("axios");

const url = 'https://minutrade-callback.glitch.me/combinatividade/auth';
const uname = 'minu_user';
const pass = '8cddb342724e';
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
