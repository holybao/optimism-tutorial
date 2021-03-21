import { HardhatUserConfig } from 'hardhat/types'

import '@eth-optimism/plugins/hardhat/compiler'
import '@eth-optimism/plugins/hardhat/ethers' 

import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'

/*const config: HardhatUserConfig = {
  solidity: "0.7.3",
};

export default config*/

require("@nomiclabs/hardhat-waffle");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

// Ropsten

const ALCHEMY_API_KEY = "9q-Ju6bHgcRp9mKae8PV73QNqKCFsmkr";
const ROPSTEN_PRIVATE_KEY = "44279b9535cc31f7bd0aadf2edd7df56d571e7e132d8de42088b0d62473abcfc";

// Local Rollup

const DEPLOYER_PRIVATE_KEY = "44279b9535cc31f7bd0aadf2edd7df56d571e7e132d8de42088b0d62473abcfc";
const ACCOUNT2 = "f618fde2ad03d932007b982a53a82dd089767ab6be3da05f6bdf16af53281ec0";
const ACCOUNT3 = "153c2ac29851a022659849a61cd42c48e2040622e673c172f8fd86c460672592";

module.exports = {
  solidity: "0.7.3",
  networks: {
    ropsten: {
      	url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      	accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    },

    local: {
        url: "http://localhost:8545",
        accounts: [`0x${DEPLOYER_PRIVATE_KEY}`, `0x${ACCOUNT2}`, `0x${ACCOUNT3}`]
    }
  }
};