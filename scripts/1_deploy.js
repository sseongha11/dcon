const hre =  require("hardhat");

async function main() {
    // Fetch contract to deploy

    // Deploy contract
    const token = await hre.ethers.deployContract("Token")
    await token.waitForDeployment()
    console.log( `Token Deployed to: ${token.target}`)

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
