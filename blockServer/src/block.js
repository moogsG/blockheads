import CryptoJS from 'crypto-js';

import chain from './chain';

export const calcNonce = ({index, prevHash, timestamp, data}) => {
  for (var x = 0; x <= 500000; x++) {
    var nonce = 0;
    let hash = CryptoJS.SHA256(index + prevHash + timestamp + data + x).toString();
    if (hash.substring(0, 4) === '0000') {
      console.log(x);
      return x.toString();
      break;
    }
  }

}

export const calcHash = ({index, prevHash, timestamp, data}) => {
  for (var x = 0; x <= 500000; x++) {
    var nonce = 0;
    let hash = CryptoJS.SHA256(index + prevHash + timestamp + data + x).toString();
    if (hash.substring(0, 4) === '0000') {
      return hash;
      break;
    }
  }

}

export const create = (data) => {
    const prev = chain.last();
    const index = prev.index + 1;
    const timestamp = new Date().getTime();
    const prevHash = prev.hash;
    const nonce = calcNonce({
        index,
        prevHash,
        timestamp,
        data
    });
    const hash = calcHash({
        index,
        prevHash,
        timestamp,
        data
    });

    return {
        index,
        timestamp,
        data,
        prevHash,
        hash,
        nonce
    };
};

export const isNewBlockValid = (newBlock, prevBlock = chain.last()) => {
    let isValid = true;

    if (prevBlock.index + 1 !== newBlock.index) {
        console.log('New block has invalid index');
        isValid = false;
    } else if (prevBlock.hash !== newBlock.prevHash) {
        console.log('New block has invalid prevHash');
        isValid = false;
    } else if (calcHash(newBlock) !== newBlock.hash) {
        console.log('New block has invalid hash');
        isValid = false;
    }

    return isValid;
};
