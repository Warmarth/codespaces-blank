const { ethers } = require("ethers");

export function hexToString(hex) {
  return ethers.toUtf8String(hex);
}

 export function stringToHex(payload) {
  return ethers.hexlify(ethers.toUtf8Bytes(payload));
}
 export function isNum(num) {
  return !isNaN(num);
}
