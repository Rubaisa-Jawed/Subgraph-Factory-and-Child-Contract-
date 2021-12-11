const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
 
  const accounts = await hre.ethers.getSigners();
  const Factory = await ethers.getContractFactory("FactoryContract");
  const factoryAddress = '0x85378b1DDb099AfF9c5fddE56149bcfaF7078682';
  const factory = new ethers.Contract(factoryAddress, Factory.interface, accounts[0]);
  // const factory = await Factory.deploy();


  // await factory.deployed();

  console.log("Factory deployed to:", factory.address);

  // const child = await factory.createChild(1);
  // const child2 = await factory.createChild(2);
  // const child3 = await factory.createChild(3);
  // const child4 = await factory.createChild(4);
  // const child5 = await factory.createChild(5);

  const Child = await ethers.getContractFactory("ChildContract");
  const childaddress = "0xDFFEc3322933eae7dEc3CFc634c10208e204DebA";
  const child = new ethers.Contract(childaddress, Child.interface, accounts[0]);

  await child.updateChild(67, {
      maxFeePerGas : ethers.utils.parseUnits("100", "gwei"),
      maxPriorityFeePerGas : ethers.utils.parseUnits("5", "gwei")
    });

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });