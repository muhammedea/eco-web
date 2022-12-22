import { getActiveChain } from './chains';

const tokens = [
  {
    name: 'Ecolarium Token',
    symbol: 'ECO',
    contractAddress: '0x535bc2B3654Fd04e545b57f58B847d89626a1568',
    url: '',
    logo: '',
    chainId: 80001,
  },
  {
    name: 'Stable USD',
    symbol: 'USD',
    contractAddress: '0x46DA39648179376DEF71076dFC5F45171239ecEd',
    url: '',
    logo: '',
    chainId: 80001,
  },
  {
    name: 'Orange Renewable Energy Plant 001',
    symbol: 'ECO_ORNG_1',
    contractAddress: '0xbE593B942715FCb68C4062024f2A9be92f429C6a',
    url: '',
    logo: '',
    chainId: 80001,
  },
  {
    name: 'Orange Renewable Energy Plant 002',
    symbol: 'ECO_ORNG_2',
    contractAddress: '0xEAc79A59750680b43B9AA40eA46124B1a54a0227',
    url: '',
    logo: '',
    chainId: 80001,
  },
];

export function getAllTokens() {
  const chain = getActiveChain();
  return tokens.filter((t) => t.chainId === chain.chainId);
}

export function getToken(tokenSymbol) {
  return getAllTokens().find((t) => t.symbol === tokenSymbol);
}
