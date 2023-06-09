// Check if MetaMask is installed
if (typeof window.ethereum !== "undefined") {
  console.log("MetaMask is installed!");
}

// Function to connect to Polygon network
async function connectToPolygon() {
  await connectToNetwork("Polygon", "0x89");
}

// Function to connect to Meter network
async function connectToMeter() {
  await connectToNetwork("Meter", "0x52");
}

// Function to connect to Telos network
async function connectToTelos() {
  await connectToNetwork("Telos", "0x28");
}

// Function to connect to a specific network
async function connectToNetwork(networkName, networkId) {
  try {
    // Request access to the user's MetaMask accounts
    await window.ethereum.request({ method: "eth_requestAccounts" });

    // Get the current network ID
    const chainId = await window.ethereum.request({ method: "eth_chainId" });

    // Check if the current network matches the target network
    if (chainId === networkId) {
      console.log(`Connected to ${networkName} network!`);
      // You can perform further actions on the target network here
    } else {
      // Switch to the target network in MetaMask
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: networkId }],
        });
        console.log(`Switched to ${networkName} network!`);
        // You can perform further actions on the target network here
      } catch (error) {
        console.log(`Failed to switch to ${networkName} network:`, error);
      }
    }
  } catch (error) {
    console.log(`Failed to connect to ${networkName} network:`, error);
  }
}
