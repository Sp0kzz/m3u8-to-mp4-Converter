mycustom-sc.js text/javascript
(function() {
const hostname = window.location.hostname.replace(/^www\./, '');

if (hostname === 'ip2.network') {
  const ids = [
    'e999d1e2', 'e2f68c3f', '46d2ae6','b4a29ece','' 'f790c827', '5190f1b', 'd64d1001',
    'd07c253', 'b0d250ab', '5f601666', '36d61f15', '6b72588e', '46cbe6b1',
    'b7ac6962', 'ccea211e', '84943d1d', 'ab329d79', '98f5459b', '54b6072f',
    '1cd7e63b', '92358fe4', 'ea530119', '565f4f24', '1b5c21c2', '38c51976',
    '7881b212', 'b10c6a14', '6a0dab69', 'cc0ffc07', '9600e01d', 'ccfac0be',
    'c8d361fc', '9cc63c4a', '031b6e62', '689b5e40', '7ce01f72', 'd2ebac96',
    'fd26fddd', '3e1f0a47', '1ab86775', 'f9a603d0', '925c2fd1', '893ac313',
    '3e4a7995', '839887fb', 'cc3871e4', 'c443712f', 'be7e5ee8', '39825cb5',
    'c5b40c83', '3e724a24', 'a63c4374', 'eed7051c', '92b00a3d', '44a2e39b',
    '93eecfaf', 'e0af480c', '959f2200', '130846be', '5a1520b1', '2fddd1e0',
    '78f9de4c', 'c826a46c', 'af92a8f2', '9fc8a597', 'f66e308a', 'f280bcd9',
    'f7697d02', '987d4c43', 'bf331c95', 'e640bacd', '3896f0fc', '6beedc56',
    '416637fa', '192c7c80', '688fceb9', '95a35eff', '36ab2aa1', 'd0c20823',
    '198bc0f7', '15b0cca3', '17982359', 'a8712c12', '4915962a', '6a4b5849',
    'a2e50d8a', 'd3ad4233', 'ae4c2fd1', 'e8ca9193', 'e168cf93', '4cbd7576',
    '519434b3', '41d38a32', 'afac1d4b', '214011fa', 'e8cd283b', 'c7265c56',
    '29cd1ce8', '8aeb29c9', '9236aa5e', '3dc71f38', 'b56f3c47', 'e7b6fe1b',
    '97935136', 'b9d6df8e', '7ef4d5ab', 'e4981a01', '07a19ffc', '38c7f5f2',
    '809ab148', 'a5febddb', 'bcaed3c3', '15183332', '90ad2312', 'd2cc6e33',
    'c529e5ba', '57522276', '9e78c980', '0342a420', 'a884804f', '89e901d0',
    'e93810e1', 'd2f43481', 'a033f6be', '0d6904e0', 'cf4231a9', '45657e0a',
    '2902a59a', '213db9f7', '767a2c5d', '7f2ab035'
  ];

  const css = ids.map(id => `#${id} { display: none !important; }`).join('\n');
  
  const style = document.createElement('style');
  style.textContent = css;
  (document.head || document.documentElement).appendChild(style);
}
})();
