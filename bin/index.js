#! /usr/bin/env node

'use strict'

const crypto = require('crypto')

let {2: type, 3: key, 4: password} = process.argv

let cipher = crypto.createCipher('aes192', key);
let decipher = crypto.createDecipher('aes192', key);

let pwd = 1

switch (type) {
  case 'encode':
    // 加密
    pwd = cipher.update(password, 'utf8', 'hex')
    pwd += cipher.final('hex')

    console.log(`[\x1B[33m${password}\x1B[39m] after encryption:`)
    console.log(`\x1B[31m${pwd}\x1B[39m`)
    break
  case 'decode':
    // 解密
    pwd = decipher.update(password, 'hex', 'utf8')
    pwd += decipher.final('utf8')    //  new Buffer(`${crypto.createHash('MD5').update(password, 'UTF-8').digest('hex')}`).toString('base64')

    console.log(`[\x1B[31m${password}\x1B[39m] after decryption:`)
    console.log(`\x1B[33m${pwd}\x1B[39m`)
    break
}
