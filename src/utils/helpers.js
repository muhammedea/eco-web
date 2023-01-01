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

export function formatDate(date) {
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();

  if (dd < 10) dd = `0${dd}`;
  if (mm < 10) mm = `0${mm}`;

  return `${dd}.${mm}.${yyyy}`;
}
