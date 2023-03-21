import { getAllProjects } from '@/utils/projects';
import { getToken } from '@/utils/tokens';

// eslint-disable-next-line import/prefer-default-export
export function getAllPairs() {
  const usdToken = getToken('USDT');
  const projects = getAllProjects();
  console.log(projects);
  console.log(usdToken);
  const pairs = projects.map((p) => ({
    id: `${p.token.chainId}-${p.token.symbol}-${usdToken.symbol}`,
    name: p.name,
    chainId: p.token.chainId,
    tokenA: p.token,
    tokenB: usdToken,
  }));
  pairs.unshift({
    id: `${projects[0].token.chainId}-ECO-${usdToken.symbol}`,
    name: 'ECO Token / USDT',
    chainId: usdToken.chainId,
    tokenA: getToken('ECO'),
    tokenB: usdToken,
  });
  return pairs;
}

// 80001-ECO_ORNG_1-USDT
