// Check if MetaMask is installed
if (typeof window.ethereum !== "undefined") {
  console.log("MetaMask is installed!");
}

// Function to connect to Polygon network
async function connectToPolygon() {
  // Request access to the user's MetaMask accounts
  await window.ethereum.request({ method: "eth_requestAccounts" });

  // Get the current network ID
  const chainId = await window.ethereum.request({ method: "eth_chainId" });

  // Check if the current network is Polygon (Matic)
  if (chainId === "0x89" || chainId === "137") {
    console.log("Connected to Polygon network!");
    // You can perform further actions on the Polygon network here
  } else {
    // Switch to Polygon network in MetaMask
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x89" }], // Polygon Mainnet
      });
      console.log("Switched to Polygon network!");
      // You can perform further actions on the Polygon network here
    } catch (error) {
      console.log("Failed to switch to Polygon network:", error);
    }
  }
}

async function connectToMeter() {
  // Request access to the user's MetaMask accounts
  await window.ethereum.request({ method: "eth_requestAccounts" });

  // Get the current network ID
  const chainId = await window.ethereum.request({ method: "eth_chainId" });

  // Check if the current network is Polygon (Matic)
  if (chainId === "0x52" || chainId === "82") {
    console.log("Connected to Polygon network!");
    // You can perform further actions on the Polygon network here
  } else {
    // Switch to Polygon network in MetaMask
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x52" }], // Polygon Mainnet
      });
      console.log("Switched to Polygon network!");
      // You can perform further actions on the Polygon network here
    } catch (error) {
      console.log("Failed to switch to Polygon network:", error);
    }
  }
}

async function connectToTelos() {
  // Request access to the user's MetaMask accounts
  await window.ethereum.request({ method: "eth_requestAccounts" });

  // Get the current network ID
  const chainId = await window.ethereum.request({ method: "eth_chainId" });

  // Check if the current network is Polygon (Matic)
  if (chainId === "0x28" || chainId === "40") {
    console.log("Connected to Polygon network!");
    // You can perform further actions on the Polygon network here
  } else {
    // Switch to Polygon network in MetaMask
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x28" }], // Polygon Mainnet
      });
      console.log("Switched to Polygon network!");
      // You can perform further actions on the Polygon network here
    } catch (error) {
      console.log("Failed to switch to Polygon network:", error);
    }
  }
}
