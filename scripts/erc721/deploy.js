const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  const Contract = await ethers.getContractFactory('TestNFT')

  console.log('Deploying NFT...')
  const contract = await Contract.deploy()

  await contract.waitForDeployment()
  const contractAddress = await contract.getAddress()
  fs.writeFileSync("contract.txt", contractAddress);
  console.log('Address written to deployed-address.ts: ', contractAddress)
}
// npx hardhat run scripts/erc721/deploy.js --network swisstronik
// node scripts/erc721/mint.js
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
