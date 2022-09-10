import * as React from "react";
import { contractAddresses, abiFile } from "../constants";
import { BigNumber } from "@ethersproject/bignumber";
import { useContractRead, useContract, useSigner } from "wagmi";
import { parse, stringify, toJSON, fromJSON } from "flatted";

export default function ViewProfile() {
  const { parse, stringify } = require("flatted");
  const { data: signer, isError, isLoading } = useSigner();
  const one = signer;
  console.log(signer);
  const chainId = 4;
  const contractRead = useContractRead({
    addressOrName: contractAddresses[chainId][0],
    contractInterface: abiFile,
    chainId: 4,
    functionName: "returnEndorsementsAddresses",
    args: [one],
  });
  const viewprofile = stringify(contractRead.data);
  console.log("Return id____________________________________________");
  console.log(viewprofile);
  /*
  let number = ethers.BigNumber.from(data.toString());
  number = number.toString();
  */
  return <h1>hello</h1>;
}
