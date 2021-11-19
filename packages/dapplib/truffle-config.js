require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace person bone tooth figure render remember column harvest forum fringe gift'; 
let testAccounts = [
"0xbd24dfa5647f62be9f5cf89440d463fc3812ad83a7c934f90ee3d413ed44ce62",
"0x7552b9ee34e4da64781137a785d27f77389817896d2d8f838e50a178017d42cd",
"0x7e8c63c34f23a747568925723da20269f0a480135ce1729c673554afe6661aaf",
"0x60053c2f047dcca0d733cbd7d3ee2c7c81e8930a5f8bf10517a04328ecbadea0",
"0xe169389c885ea81e8e295da1c4c09ba775f4ee9f608b0eacf5b5366cc288e5b9",
"0x65d2b43e4ac2c9962ea81acad049d3105ec293eb63f4793a94be633ab6abe610",
"0xdacd6a2717b6ef527eb49a35cc4007921b681f87170c99fe0c7f449e2472232d",
"0x5c427c1e20e222c506bff42d1321d38e71b5f5dca0353b1958af588b73d516f2",
"0xc1e6fd1ffeefb2f3968ccc1d8d4d4a9fc2e94b4d36b47fd7745857b925518be4",
"0xb3ac2aef3126c2a9b6e37e5cbc43cdea8c797e6602daa68d78d12ce193b5988b"
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

