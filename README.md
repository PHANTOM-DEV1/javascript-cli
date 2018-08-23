
# phantom-client
CLI client for PHANTOM blockchain.
You can connect to devnet, mainnet or your custom private/public blockchain.

Features:
- connect to network or a node,
- get stats of a network,
- create or get status of an account,
- create vanity accounts (multi-cpu supported),
- send amount in USD, EUR or other FIAT currency at the market price (Phantom only),
- register a delegate,
- vote for a delegate,
- sign and verify message using your address.

# Installation
You need to have node (version 7.6.0 or newer) installed. Then:
```
$> git clone https://github.com/PhantomCore
$> npm install -g
$> phantom-client


phantom>
```

# Usage
```
phantom> help

  Commands:

    help [command...]                     Provides help for a given command.
    exit                                  Exits application.
    connect <network>                     Connect to network. Network is devnet or mainnet
    connect node <url>                    Connect to a server. For example "connect node 5.39.9.251:4000"
    disconnect                            Disconnect from server or network
    network stats                         Get stats from network
    account status <address>              Get account status
    account vote <name>                   Vote for delegate <name>. Remove previous vote if needed. Leave empty to clear vote
    account send <amount> <recipient>     Send <amount> phantom to <recipient>. <amount> format examples: 10, USD10.4, EUR100
    account delegate <username>           Register a new delegate with <username>
    account create                        Generate a new random cold account
    account vanity <string>               Generate an address containing lowercased <string> (WARNING you could wait for long)
    message sign <message>                Sign a message
    message verify <message> <publickey>  Verify the <message> signed by the owner of <publickey> (you will be prompted to provide the signature)
    shphantom                                 No you don't want to use this command
```



## Security

If you discover a security vulnerability within this application, please send an e-mail to security@phantom.org. All security vulnerabilities will be promptly addressed.

# License

**MIT License**

- Copyright © 2017 ARK.io
- Copyright © 2017 FX Thoorens
- Copyright © 2018 Phantom.org


Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
