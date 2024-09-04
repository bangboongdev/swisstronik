const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const contractFactory = await hre.ethers.getContractFactory("PrivateNFT");
  const contract = await contractFactory.deploy(deployer.address);
  await contract.waitForDeployment();
  const deployedContract = await contract.getAddress();
  fs.writeFileSync("contract.txt", deployedContract);
  console.log(`Contract deployed to ${deployedContract}`);
}
// npx hardhat run scripts/private-nft/deploy.js --network swisstronik
// node scripts/private-nft/mint.js
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
