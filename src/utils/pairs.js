import { getAllProjects } from '@/utils/projects';
import { getToken } from '@/utils/tokens';

// eslint-disable-next-line import/prefer-default-export
export function getAllPairs() {
  const usdToken = getToken('USD');
  const projects = getAllProjects();
  return projects.map((p) => ({
    id: `${p.token.chainId}-${p.token.ticker}-${usdToken.ticker}`,
    name: p.name,
    tokenA: p.token,
    tokenB: usdToken,
  }));
}

// 80001-ECO_ORNG_1-USDT
