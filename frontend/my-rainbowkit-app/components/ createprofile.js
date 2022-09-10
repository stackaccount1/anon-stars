import * as React from "react";
import { contractAddresses, abiFile } from "../constants";
import { useState } from "react";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";

export default function CreateProfile() {
  const [profile, setProfile] = useState({
    username: "",
    profilePictureUrl: "",
    descriptionOfSkills: "",
    resumeLink: "",
  });

  const handleChange = (event) => {
    setProfile({ ...profile, [event.target.name]: event.target.value });
  };

  const one = profile.username;
  const two = profile.profilePictureUrl;
  const three = profile.descriptionOfSkills;
  const four = profile.resumeLink;

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
      <form>
        <label>
          UserName:
          <input type="text" name="username" onChange={handleChange} />
        </label>
        <label>
          Profile Picture URL:
          <input type="text" name="profilePictureUrl" onChange={handleChange} />
        </label>
        <label>
          Description Of Skills:
          <input
            type="text"
            name="descriptionOfSkills"
            onChange={handleChange}
          />
        </label>
        <label>
          Resume Link:
          <input
            type="text"
            name="resumeLink"
            placeholder={profile.resumeLink}
            onChange={handleChange}
          />
        </label>
        <button disabled={!write || isLoading} onClick={() => write()}>
          {isLoading ? "Creating..." : "Create Profile!"}
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
      </form>
    </div>
  );
}
