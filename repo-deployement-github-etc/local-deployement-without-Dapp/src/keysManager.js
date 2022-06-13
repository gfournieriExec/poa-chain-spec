import addressGenerator from "./addressGenerator.js";
import { ethers } from "ethers";
import keyManage from "../abi/KeysManager.abi.js";
const accountInstanceWithRPC = async (RPCurl) => {
  const provider = new ethers.providers.JsonRpcProvider(RPCurl);
  //to hide
  //1 0x18868684e8dd846da547f5b6959af2596aa100ededacfe37bcf4c9c9340e3cb4
  //2 0x912c0eaae6a5dbc43075326483ebf168b118a3299f664d121885438af7d7e37b
  //3 0x9177de1f446d437e53ceb17b8af61debda56ac52b580ba8dc6ab9bde08ae7ed6
  //4 0x8325dfa6d6d41b34e00bc59491446867a1a1237101d93e2f96441227a2a93740
  let wallet = new ethers.Wallet(
    "0x8325dfa6d6d41b34e00bc59491446867a1a1237101d93e2f96441227a2a93740",
    provider
  );

  return wallet;
};

export default class KeysManager {
  async init() {
    const KEYS_MANAGER_ADDRESS = "0x785143113db566490e28192689102b1856b2f040";
    console.log("Keys Manager ", KEYS_MANAGER_ADDRESS);

    const KeysManagerAbi = keyManage;
    const account = await accountInstanceWithRPC("http://127.0.0.1:8565/");
    this.instance = new ethers.Contract(
      KEYS_MANAGER_ADDRESS,
      KeysManagerAbi,
      account
    );
    this.gasPrice = ethers.utils.parseUnits("0", "gwei");
    this.gasLimit = ethers.utils.parseUnits("6700000", "wei");
  }

  async isInitialKeyValid(initialKey) {
    return new Promise((resolve, reject) => {
      this.instance;
      let getInitialKeyStatus;
      if (this.instance.getInitialKeyStatus) {
        getInitialKeyStatus = this.instance.getInitialKeyStatus;
      } else {
        getInitialKeyStatus = this.instance.initialKeys;
      }
      getInitialKeyStatus(initialKey)
        .then(function (result) {
          resolve(result);
        })
        .catch(function (e) {
          reject(false);
        });
    });
  }

  async generateKeys() {
    return await addressGenerator();
  }

  createKeys({ mining, voting, payout, sender }) {
    let tx = {
      from: sender,
      gasPrice: this.gasPrice,
      gasLimit: this.gasLimit,
    };
    return this.instance.createKeys(mining, voting, payout, tx);
  }
}
