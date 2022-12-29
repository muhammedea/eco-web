import { getAllProjects } from '@/utils/projects';
import { getToken } from '@/utils/tokens';

// eslint-disable-next-line import/prefer-default-export
export function getAllPairs() {
  const usdToken = getToken('USD');
  const projects = getAllProjects();
  return projects.map((p) => ({
    id: p.id,
    name: p.name,
    tokenA: p.token,
    tokenB: usdToken,
  }));
}
