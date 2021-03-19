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

module.exports = {
  solidity: "0.7.3",
  networks: {
    ropsten: {
      	url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      	accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    },

    local: {
        url: "http://localhost:8545",
        accounts: [`0x${DEPLOYER_PRIVATE_KEY}`]

    }
  }
};