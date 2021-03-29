class VigenereCipheringMachine {
  constructor(m = true) {
    this.m = m;
  }

  genKey(str, key) {
    let diff = str.length - key.length;
  
    for (let i = 0; i < diff; i++) {
      key += key[i % key.length];
    }
  
    return key;
  }

  encrypt(str, key) {
    if (arguments.length < 2) throw Error; 
  
    if (str.length !== key.length) {
      key = this.genKey(str, key);
    }
  
    str = str.toUpperCase();
    key = key.toUpperCase();
  
    let alphLength = 26;
    let keyPosition = 0;
    let cipher = '';
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= 'A' && str[i] <= 'Z') {

        let ascii = (str.charCodeAt(i) + key.charCodeAt(keyPosition)) % alphLength;
        ascii += 'A'.charCodeAt(0);
        cipher += String.fromCharCode(ascii);
        keyPosition += 1;
      } else {

        cipher += str[i];
        continue;
      }
    }
  
    if (this.m) {
      return cipher;
    } else {
      return cipher.split('').reverse().join('');
    }
  }    
  decrypt(str, key) {
    if (arguments.length < 2) throw Error; 
  
    if (str.length !== key.length) {
      key = this.genKey(str, key);
    }
  
    str = str.toUpperCase();
    key = key.toUpperCase();
  
    let decipher = '';
    let keyPosition = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= 'A' && str[i] <= 'Z') {
  
        let ascii = (str.charCodeAt(i) - key.charCodeAt(keyPosition) + 26) % 26;
        ascii += 'A'.charCodeAt(0);
        decipher += String.fromCharCode(ascii)
        keyPosition += 1;
      } else {
  
        decipher += str[i];
        continue;
      }
    }
  
    if (this.m) {
      return decipher;
    } else {
      return decipher.split('').reverse().join('');
    };
  }
}

module.exports = VigenereCipheringMachine;
