const SimpleStorage = artifacts.require("SimpleStorage");
const conf = require('./conf.js');

module.exports = function (deployer) {
    deployer.deploy(SimpleStorage, 42, { privateFor: [conf.privacyPublicKey1] })
};
