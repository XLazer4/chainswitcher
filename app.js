// Check if MetaMask is installed
if (typeof window.ethereum !== "undefined") {
  console.log("MetaMask is installed!");
}

// Function to connect to Polygon network
async function connectToPolygon() {
  await connectToNetwork("Polygon", "0x89", {
    chainId: "0x89",
    chainName: "Matic Mainnet",
    nativeCurrency: { name: "Matic", symbol: "MATIC", decimals: 18 },
    rpcUrls: ["https://polygon-rpc.com"],
    blockExplorerUrls: ["https://polygonscan.com"],
  });
}

// Function to connect to Meter network
async function connectToMeter() {
  await connectToNetwork("Meter", "0x52", {
    chainId: "0x52",
    chainName: "Meter",
    nativeCurrency: { name: "Meter", symbol: "MTR", decimals: 18 },
    rpcUrls: ["https://rpc.meter.io"],
    blockExplorerUrls: ["https://scan.meter.io"],
  });
}

// Function to connect to Telos network
async function connectToTelos() {
  await connectToNetwork("Telos", "0x28", {
    chainId: "0x28",
    chainName: "Telos EVM Mainnet",
    nativeCurrency: { name: "Telos", symbol: "TLOS", decimals: 18 },
    rpcUrls: ["https://mainnet.telos.net/evm"],
    blockExplorerUrls: ["https://teloscan.io"],
  });
}

// Function to connect to a specific network
async function connectToNetwork(networkName, networkId, networkDetails) {
  try {
    // Request access to the user's MetaMask accounts
    await window.ethereum.request({ method: "eth_requestAccounts" });

    // Get the current network ID
    const chainIdHex = await window.ethereum.request({ method: "eth_chainId" });
    const chainId = parseInt(chainIdHex, 16).toString();

    // Check if the current network matches the target network
    if (chainId === networkId) {
      console.log(`Connected to ${networkName} network!`);
      // You can perform further actions on the target network here
    } else {
      // Check if the target network is already added to MetaMask
      if (chainId === networkId) {
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
      } else {
        // Add the target network to MetaMask
        try {
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [networkDetails],
            // params: [
            //   {
            //     chainId: "0x52",
            //     chainName: "Meter",
            //     nativeCurrency: { name: "Meter", symbol: "MTR", decimals: 18 },
            //     rpcUrls: ["https://rpc.meter.io"],
            //     blockExplorerUrls: ["https://scan.meter.io"],
            //   },
            // ],
          });
          console.log(`Added ${networkName} network to MetaMask!`);
          // Switch to the added network in MetaMask
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: networkId }],
          });
          console.log(`Switched to ${networkName} network!`);
          // You can perform further actions on the target network here
          await displayWalletAddress();
        } catch (error) {
          console.log(
            `Failed to add ${networkName} network to MetaMask:`,
            error
          );
        }
      }
    }
  } catch (error) {
    console.log(`Failed to connect to ${networkName} network:`, error);
  }
}

async function displayWalletAddress() {
  const accounts = await window.ethereum.request({ method: "eth_accounts" });
  const walletAddress = accounts[0];
  document.getElementById("walletAddress").textContent = walletAddress;
}

async function copyWalletAddress() {
  try {
    const walletAddress = document.getElementById("walletAddress").textContent;
    await navigator.clipboard.writeText(walletAddress);
    alert("Wallet address copied to clipboard");
  } catch (err) {
    alert("Error in copying wallet address: ", err);
  }
}
