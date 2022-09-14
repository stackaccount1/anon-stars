import * as React from "react";
import { contractAddresses, abiFile, alchemyKey } from "../constants";
import { BigNumber } from "@ethersproject/bignumber";
import { useState } from "react";
import { ethers, getAddress } from "ethers";
import { useContractRead, useContract, useSigner } from "wagmi";
import { parse, stringify, toJSON, fromJSON } from "flatted";

export default function ViewProfile() {
  const [info, setInfo] = useState("");
  const [finalAddress, setAddress] = useState("");
  const [info0, setInfo0] = useState("");
  const [info1, setInfo1] = useState("");
  const [info2, setInfo2] = useState("");
  const [info3, setInfo3] = useState("");
  const alchemyKeyUrl = alchemyKey[80001][0];
  const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
  const web3 = createAlchemyWeb3(alchemyKeyUrl);
  const anonStarsContract = new web3.eth.Contract(
    abiFile,
    contractAddresses[80001][0]
  );
  const { data: signer, isError, isLoading } = useSigner();

  (async () => {
    const finaladdressusestate = await signer.getAddress();
    setAddress(finaladdressusestate);
  })();

  console.log("here is the address+_________________", finalAddress);

  console.log("here is the ", signer);
  console.log("here is the object", info);
  console.log("here is the object", info0);
  console.log("here is the object", info1);
  console.log("here is the object", info2);
  console.log("here is the object", info3);

  (async () => {
    const function_return = await anonStarsContract.methods
      .viewProfileStrings(finalAddress.toString())
      .call();
    console.log("HERE___________________________________", function_return);
    console.log("info 1 attempt", function_return[0]);
    setInfo0(function_return[0]);
    setInfo1(function_return[1]);
    setInfo2(function_return[2]);
    setInfo3(function_return[3]);
    return function_return;
  })();
  /*
  const viewProfileInfo = async (signer) => {
    const function_return = await anonStarsContract.methods
      .viewProfileStrings(signer)
      .call();
    setInfo(function_return);
    return function_return;
  };*/

  //console.log(viewProfileInfo);

  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-yellow-200 via-lime-400 to-red-800">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            {info0}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {" "}
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              <img src={info1} className="" />
              {info2}
              <a> Resume Link: </a>
              <a href> {info3}</a>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

//const { parse, stringify } = require("flatted");
/*
  const one = signer;
  console.log(signer);
  const chainId = 80001;
  const { data } = useContractRead({
    addressOrName: contractAddresses[chainId][0],
    contractInterface: abiFile,
    chainId: 80001,
    functionName: "returnEndorsementsAddresses",
    args: [one],
  });
  const viewprofile = stringify(contractRead.data);
  console.log("Return id____________________________________________");
  console.log(data);
  let number = ethers.BigNumber.from(data.toString());
  number = number.toString();
  */
