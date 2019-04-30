 const HDWalletProvider = require('truffle-hdwallet-provider');
 const conf = require('./conf.js');
module.exports = {
  networks: {
      development: {
        provider: () => new HDWalletProvider(conf.mnemonic_dev, conf.rpc_dev),
        network_id: conf.id,
        gasPrice: 0,
        gas: 4500000,
        type: "quorum"
      },
      node_1: {
        provider: () => new HDWalletProvider(conf.mnemonic_1, conf.rpc_1),
        network_id: conf.id,
        gasPrice: 0,
        gas: 4500000,
        type: "quorum"
      },
      node_2: {
        provider: () => new HDWalletProvider(conf.mnemonic_2, conf.rpc_2),
        network_id: conf.id,
        gasPrice: 0,
        gas: 4500000,
        type: "quorum"
      }
  },
  mocha: {
  },
  compilers: {
    solc: {
    }
  }
}
