const crypto = require("crypto");
/**
 * Methods to make secure communication.
 */
var SecureConnection = {
  makeHash(msg) {
    const hash = crypto.createHash("sha256");
    hash.update(msg);
    return hash.digest("hex");
  },
  getRandom() {
    crypto.randomBytes(16, function(ex, buf) {
      return buf.toString("hex");
    });
    randBuf = crypto.randomBytes(16);
    return randBuf.toString("hex");
  },
  createKey() {
    var DH = crypto.createDiffieHellman(512);
    DH.generateKeys();
    var my_private = DH.getPrivateKey();
    var my_public = DH.getPublicKey();
    var prime = DH.getPrime();
    var iv = this.getRandom();
    return [my_private, my_public, prime, iv];
  },
  computeSecret(their_public, my_private, prime) {
    var DH = crypto.createDiffieHellman(prime);
    DH.setPrivateKey(my_private);
    return DH.computeSecret(their_public);
  },
  encryptData(data, secret, iv) {
    var cipher = crypto.createCipher("aes-128-cbc", secret, iv);
    var cipherResult = cipher.update(data, "utf8", "hex");
    return (cipherResult += cipher.final("hex"));
  },
  decryptData(data, secret, iv) {
    var decipher = crypto.createDecipher("aes-128-cbc", secret, iv);
    var decrypted = decipher.update(data, "hex", "utf8");
    return (decrypted += decipher.final("utf8"));
  }
};

module.exports = SecureConnection;
