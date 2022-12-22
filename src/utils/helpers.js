import { ethers } from 'ethers';

export function formatAmount(input) {
  const value = ethers.utils.formatEther(input);
  const [part1, part2] = value.split('.');
  return `${part1}.${part2.slice(0, 2)}`;
}

export function formatNumber(input) {
  // TODO : implement this
  return input.toString();
}
