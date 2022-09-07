import * as React from "react";
import { contractAddresses, abiFile } from "../constants";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";

export default function CreateProfile() {
  const one = "google";
  const two = "google.";
  const three = "google..";
  const four = "google...";
  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    addressOrName: contractAddresses[4][0],
    chainId: 4,
    contractInterface: abiFile,
    functionName: "createProfile",
    args: [one, two, three, four],
  });
  const { data, error, isError, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <div>
      <button disabled={!write || isLoading} onClick={() => write()}>
        {isLoading ? "Creating..." : "Profile"}
      </button>
      {isSuccess && (
        <div>
          Successfully created your profile!
          <div>
            <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
          </div>
        </div>
      )}
      {(isPrepareError || isError) && (
        <div>Error: {(prepareError || error)?.message}</div>
      )}
    </div>
  );
}
