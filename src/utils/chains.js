let allChains = [
  {
    name: 'Polygon Mumbai',
    chainId: 80001,
    isTest: true,
    nativeCurrency: { name: 'Mumbai MATIC', symbol: 'MATIC', decimals: 18 },
    rpcUrls: ['https://rpc.ankr.com/polygon_mumbai'],
    blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
  },
];

allChains = allChains.map((c) => ({
  ...c,
  // isUsable: c.isTest ? process.env.NODE_ENV === 'development' : true,
  isUsable: true,
}));

export function getChainInfo(chainId) {
  if (chainId) {
    const res = allChains.find((c) => c.chainId === chainId);
    if (!res) {
      return {
        name: 'Unknown',
        chainId,
        isTest: false,
        nativeCurrency: null,
        rpcUrls: [],
        blockExplorerUrls: [],
        isUsable: false,
      };
    }
    return res;
  }
  return null;
}

export function getAllChains() {
  return allChains;
}

export function getUsableChains() {
  return allChains.filter((c) => c.isUsable);
}

let activeChain = getUsableChains()[0];
export function getActiveChain() {
  if (activeChain) {
    return activeChain;
  }
  throw new Error('No usable chain found');
}
export function setActiveChain(chainId) {
  const chain = getUsableChains().find((c) => c.chainId === chainId);
  if (chain) {
    activeChain = chain;
  }
  console.log('wrong network connected');
}
