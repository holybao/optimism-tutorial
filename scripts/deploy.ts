
import { l2ethers as ethers } from 'hardhat'

async function main() {

  const name = 'Some Really Cool Token Name'
  const initialSupply = 10000000

    const [deployer] = await ethers.getSigners();
  
    console.log(
        "Deploying contracts with the account:",
        deployer.address
    );
    
    console.log("Account balance:", (await deployer.getBalance()).toString());
    console.log("Account nonce:", (await deployer.getTransactionCount()).toString());
  
    const Token = await ethers.getContractFactory("ERC20");
    console.log("Token bytecode:" , Token.bytecode);
    const token = await Token.deploy(initialSupply, name);
    console.log("Token address:", token.address);
    
  }
  
main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });