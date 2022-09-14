import * as React from "react";
import { useState } from "react";
import { contractAddresses, abiFile, alchemyKey } from "../constants";
import { ethers, getAddress } from "ethers";
import { useSigner } from "wagmi";

export default function Endorsements() {
  const [finalAddress, setAddress] = useState("");
  const [endorsees, setEndorsees] = useState("");
  const [count, setCount] = useState("");
  const [info0, setInfo0] = useState("");
  const [info1, setInfo1] = useState("");
  const [info2, setInfo2] = useState("");
  const [info3, setInfo3] = useState("");
  const [info4, setInfo4] = useState("");
  const [info5, setInfo5] = useState("");
  const [info6, setInfo6] = useState("");
  const [info7, setInfo7] = useState("");
  const [info8, setInfo8] = useState("");
  const [info9, setInfo9] = useState("");
  const [info10, setInfo10] = useState("");
  const [info11, setInfo11] = useState("");
  const { data: signer, isError, isLoading } = useSigner();
  const alchemyKeyUrl = alchemyKey[80001][0];
  // Alchemy contract set up
  const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
  const web3 = createAlchemyWeb3(alchemyKeyUrl);
  const anonStarsContract = new web3.eth.Contract(
    abiFile,
    contractAddresses[80001][0]
  );
  // Signer getAddress Setup
  (async () => {
    const finaladdressusestate = await signer.getAddress();
    setAddress(finaladdressusestate);
  })();
  // Return Endorsers Setup
  (async () => {
    const function_return = await anonStarsContract.methods
      .returnEndorsementsAddresses(finalAddress.toString())
      .call();
    console.log(function_return);
    setEndorsees(function_return);
    return function_return;
  })();

  (async () => {
    const function_return = await anonStarsContract.methods
      .viewProfileStrings(endorsees[count].toString())
      .call();
    console.log("HERE___________________________________", function_return);
    setInfo0(function_return[0]);
    setInfo1(function_return[1]);
    setInfo2(function_return[2]);
    setInfo3(function_return[3]);
  })();

  (async () => {
    const function_return = await anonStarsContract.methods
      .viewProfileStrings(endorsees[count + 1].toString())
      .call();
    console.log("HERE___________________________________", function_return);
    setInfo4(function_return[0]);
    setInfo5(function_return[1]);
    setInfo6(function_return[2]);
    setInfo7(function_return[3]);
  })();

  (async () => {
    const function_return = await anonStarsContract.methods
      .viewProfileStrings(endorsees[count + 2].toString())
      .call();
    console.log("HERE___________________________________", function_return);
    setInfo8(function_return[0]);
    setInfo9(function_return[1]);
    setInfo10(function_return[2]);
    setInfo11(function_return[3]);
  })();

  // Dynamic Loop Set up
  const increment = () => {
    setCount((prev) => prev + 4);
  };

  return (
    <div className="flex min-h-full items-stretch justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-transparent via-rose-800 to-neutral-900">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Endorsed by the following community Anons!
          </h2>
          <div class="flex items-center bg-gradient-to-t from-yellow-200 via-lime-400 to-red-800">
            <img src={info1} className="h-24 w-24" />
            <div>
              <strong>{info0}</strong>
              <span>{info2}</span>
              <span>{info3}</span>
            </div>
          </div>
          <div class="flex items-center bg-gradient-to-t from-yellow-200 via-lime-400 to-red-800">
            <img src={info5} className="h-24 w-24" />
            <div>
              <strong>{info4}</strong>
              <span>{info6}</span>
              <span>{info7}</span>
            </div>
          </div>
          <div class="flex items-center bg-gradient-to-t from-yellow-200 via-lime-400 to-red-800">
            <img src={info9} className="h-24 w-24" />
            <div>
              <strong>{info8}</strong>
              <span>{info10}</span>
              <span>{info11}</span>
            </div>
          </div>
          <button
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={increment}
          >
            See More Endorsers
          </button>
        </div>
      </div>
    </div>
  );
}
