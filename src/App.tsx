import React, { useEffect } from "react";
import { BrowserNode } from "@connext/vector-browser-node";
import { ChannelSigner } from "@connext/vector-utils";
import pino from "pino";
import { Wallet } from "ethers";

import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    const effect = async () => {
      const wallet = Wallet.createRandom();
      const signer = new ChannelSigner(wallet.privateKey);
      const node = await BrowserNode.connect({
        chainAddresses: {
          "4": {
            channelMastercopyAddress:
              "0x048D978cEa968a6D27Ef1C792Cb1bA83A9A5bBc9",
            channelFactoryAddress: "0x70b3673264E9D56Cc8e53597bF3105eF281a5a0c",
            transferRegistryAddress:
              "0x268ee7145a1c717d36dAfcF402b51ac4BAdD6388",
          },
        },
        chainProviders: "https://rinkeby.infura.io/v3/",
        logger: pino(),
        signer,
        messagingUrl: "https://messaging.connext.network",
      });
      console.log(`Node connected! ${node.publicIdentifier}`);
    };
    effect();
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
