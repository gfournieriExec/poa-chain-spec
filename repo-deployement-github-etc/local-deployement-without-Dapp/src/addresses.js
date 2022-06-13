import { constants } from "./constants.js";
import helpers from "./helpers.js";
// module.exports = {
//   KEYS_MANAGER_ADDRESS: '0xfc90125492e58dbfe80c0bfb6a2a759c4f703ca8'
// }

export default (web3Config) => {
  const branch = constants.NETWORKS[8995].BRANCH;
  return new Promise((resolve, reject) => {
    fetch(helpers.addressesURL(branch))
      .then((response) => {
        response.json().then((json) => {
          resolve({ addresses: json, web3Config });
        });
      })
      .catch(function (err) {
        let addr = helpers.addressesURL(branch);
        helpers.wrongRepoAlert(addr);
        reject(err);
      });
  });
};
