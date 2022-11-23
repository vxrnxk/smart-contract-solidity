const hre = require("hardhat");

const main = async () => {
  const contractFactory = await hre.ethers.getContractFactory("Contract");
  const contract = await contractFactory.deploy("Francisco Contract, It's OK!");
  await contract.deployed();

  console.log("Contract sent to Blockchain with the address: ", contract.address);

  const setMessageTxn = await contract.setMessage("Fco Lima!");
  await setMessageTxn.wait();
  
  console.log("Message sent with the hash: ", setMessageTxn.hash);
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});