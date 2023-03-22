import { getToken } from './tokens';

const projects = [
  {
    id: 'p-ECO_ORNG_1',
    name: 'Orange renewable energy plant 001',
    totalSupply: 1_000_000,
    token: getToken('ECO_ORNG_1'),
  },
  {
    id: 'p-ECO_ORNG_1',
    name: 'Orange renewable energy plant 002',
    totalSupply: 1_000_000,
    token: getToken('ECO_ORNG_2'),
  },
];

export function getAllProjects() {
  return projects;
}

export function getProjectById(id) {
  return projects.find((p) => p.id === id);
}
