import * as React from "react";
import { contractAddresses, abiFile } from "../constants";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useContractRead,
} from "wagmi";

export default function ViewProfile() {
  const chainId = 4;
  /*
  const { data0 } = useContractRead({
    addressOrName: contractAddresses[chainId][0],
    chainId: 31337,
    contractInterface: abiFile,
    functionName: "viewProfile",
    args: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
  });
  const { data2 } = useContractRead({
    addressOrName: contractAddresses[chainId][0],
    chainId: 31337,
    contractInterface: abiFile,
    functionName: "viewProfile",
    args: "0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199",
  });
  const { data3 } = useContractRead({
    addressOrName: contractAddresses[chainId][0],
    chainId: 31337,
    contractInterface: abiFile,
    functionName: "viewProfileStrings",
    args: "0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199",
  });*/
  const { data } = useContractRead({
    addressOrName: contractAddresses[chainId][0],
    chainId: 4,
    contractInterface: abiFile,
    functionName: "returnId",
  });
  /*
  const { data5 } = useContractRead({
    addressOrName: contractAddresses[chainId][0],
    chainId: 31337,
    contractInterface: abiFile,
    functionName: "returnEndorsementsAddresses",
    args: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
  });
  const { data6 } = useContractRead({
    addressOrName: contractAddresses[chainId][0],
    chainId: 31337,
    contractInterface: abiFile,
    functionName: "returnEndorsementsAddresses",
    args: "0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199",
  });*/
  console.log("Return id____________________________________________");
  console.log(data);

  return <p></p>;
}
