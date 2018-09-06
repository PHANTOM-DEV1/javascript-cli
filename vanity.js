var bip39 = require("bip39");
var phantomjs = require("phantomjscore");

process.on("message", function(message){

  if(message.string){
    phantomjs.crypto.setNetworkVersion(message.version);
    var address = "";
    var passphrase;
    var count = 0;
    while(address.toLowerCase().indexOf(message.string) == -1){
      passphrase = bip39.generateMnemonic();
      address = phantomjs.crypto.getAddress(phantomjs.crypto.getKeys(passphrase).publicKey);
      if(++count == 10){
        count=0;
        process.send({ count: 10 });
      }
    }
    process.send({ passphrase: passphrase });
  }
});
