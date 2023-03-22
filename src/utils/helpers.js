import { ethers } from 'ethers';

export function formatAmount(input, decimals = 2) {
  const value = ethers.utils.formatEther(input);
  const [part1, part2] = value.split('.');
  return `${part1}.${part2.slice(0, decimals)}`;
}

export function formatDolar(input) {
  console.log('formatDolar', input);
  let val = input;
  if (ethers.BigNumber.isBigNumber(input)) {
    val = ethers.utils.formatEther(input);
  }
  return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(val);
}

export function formatDate(input) {
  let date = input;
  if (typeof input === 'string') {
    date = new Date(input);
  }
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1;
  let dd = date.getDate();

  if (dd < 10) dd = `0${dd}`;
  if (mm < 10) mm = `0${mm}`;

  return `${dd}.${mm}.${yyyy}`;
}

export function formatTime(input) {
  let date = input;
  if (typeof input === 'string') {
    date = new Date(input);
  }
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  if (hh < 10) hh = `0${hh}`;
  if (mm < 10) mm = `0${mm}`;
  if (ss < 10) ss = `0${ss}`;

  return `${hh}:${mm}.${ss}`;
}

export function formatShortDateTime(input) {
  let date = input;
  if (typeof input === 'string') {
    date = new Date(input);
  }

  let MM = date.getMonth() + 1;
  let dd = date.getDate();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  if (hh < 10) hh = `0${hh}`;
  if (mm < 10) mm = `0${mm}`;
  if (ss < 10) ss = `0${ss}`;

  if (dd < 10) dd = `0${dd}`;
  if (MM < 10) MM = `0${MM}`;

  return `${MM}-${dd} ${hh}:${mm}`;
}

export function getPercentage(partialValue, totalValue) {
  if (ethers.BigNumber.isBigNumber(partialValue) || ethers.BigNumber.isBigNumber(totalValue)) {
    if (ethers.BigNumber.from(totalValue).isZero()) {
      return 0;
    }
    return ethers.BigNumber.from(partialValue).mul(10000).div(ethers.BigNumber.from(totalValue)).toNumber() / 100;
  }
  if (+totalValue === 0) {
    return 0;
  }
  return (partialValue * 100) / totalValue;
}
