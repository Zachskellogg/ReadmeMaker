const axios = require("axios");
require("dotenv").config();

const apis = {
    getUser(username) {
        return axios
            .get(`https://api.github.com/users/${username}`)
        .catch(error => {
            console.log("can not find user");
            Process.exit(1);
        })
    }
}
module.exports = apis;