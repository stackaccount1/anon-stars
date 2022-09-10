import * as React from "react";
import { contractAddresses, abiFile } from "../constants";
import { useState } from "react";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";

export default function CreateTwo() {
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
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Create your anonymous profile!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {" "}
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Start your anon career journey today!
            </a>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label>
                User Name: "anon of the chain"
                <input type="text" name="username" onChange={handleChange} />
              </label>
            </div>
            <div>
              <label>
                Profile Picture Url: "ipfs link here"
                <input
                  type="text"
                  name="profilePictureUrl"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Describe Your Skills: "vyper maxi"
                <input
                  type="text"
                  name="descriptionOfSkills"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Resume Link: "anon github url here"
                <input
                  type="text"
                  name="resumeLink"
                  placeholder={profile.resumeLink}
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center"></div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                *Please double check all information, the blockchain is
                immutable, this is your profile match to your address, changes
                can not be made!*
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              disabled={!write || isLoading}
              onClick={() => write()}
            >
              {isLoading ? "Creating..." : "Create Profile!"}
            </button>
            {isSuccess && (
              <div>
                Successfully created your profile!
                <div>
                  <a href={`https://etherscan.io/tx/${data?.hash}`}>
                    Etherscan
                  </a>
                </div>
              </div>
            )}
            {(isPrepareError || isError) && (
              <div>Error: {(prepareError || error)?.message}</div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
