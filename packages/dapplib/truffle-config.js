require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict roast fortune street name return night unfold inner another army general'; 
let testAccounts = [
"0x14810244274ee226966b737cadd6523c3407e8c8b24b6ca601eb313183adbcb9",
"0x3d496c4a24d9b628afc03dc508e311b76e802d9571dcde266cec6d32cec4d25f",
"0x5a0979eca07d98009828bf6d495b499cdd51d90ac3215f99d3e590d5d6a7d352",
"0x58141be3bda703087c883b5cdddce72e3266b3693aae3c4a02555ded696a0aed",
"0x71ac82a90d8046189f5a50b5d0d809d10f24c12c17dc9663a94c564f20fd8178",
"0x783b15696d819121b360a978ebedc8c88ad2f5c8de0435acd8ebfccd3bc92d82",
"0xd3c84cd68a94c08ed2a6ee256d1177311013dcc1a1e27d470c002254d669b919",
"0x8a0f48c51daf42a4cea58624834dac6b9bddfd54746b844e4daf44ce4b161a3c",
"0xa0b997058c08fbc0960040a9cdb925dc5023c86f0376613c7f11251de951814c",
"0x322bc85113e2a4b164f2770bae51cf1e18a6056d15169a504d77b5a64fb8bb4f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

