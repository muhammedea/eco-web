import { getToken } from './tokens';

const projects = [
  /* {
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
  }, */
  {
    id: 'p-ECO_EFLTN',
    name: 'Eflatun Tarim Energy Plant',
    totalSupply: 1_000_000,
    token: getToken('ECO_EFLTN'),
  },
  {
    id: 'p-ECO_AKD',
    name: 'AKD Kids Energy Plant',
    totalSupply: 1_000_000,
    token: getToken('ECO_AKD'),
  },
];

export function getAllProjects() {
  return projects;
}

export function getProjectById(id) {
  return projects.find((p) => p.id === id);
}
