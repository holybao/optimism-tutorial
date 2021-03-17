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
const ALCHEMY_API_KEY = "9q-Ju6bHgcRp9mKae8PV73QNqKCFsmkr";
const ROPSTEN_PRIVATE_KEY = "c78552b0b4f167332e95a71b10d5658f55ceb0e059703424ad8059b391313efc";

module.exports = {
  solidity: "0.7.3",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`]
    }
  }
};