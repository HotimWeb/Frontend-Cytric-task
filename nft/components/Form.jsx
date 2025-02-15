"use client";

import { useState } from "react";
import { ethers } from "ethers";
import { useAccount, useContractWrite } from "wagmi";
import abi from "../utils/abi.json";
import { wagmi_config } from "../utils/wagmi_config";

const CONTRACT_ADDRESS = "0xaa3906f986e0cd86e64c1e30ce500c1de1ef46ad";

export const Form = () => {
  const [success, setSuccess] = useState(false);
  const [values, setValues] = useState({});

  const contractConfig = {
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: abi.abi,
  };
  const mint = useContractWrite({
    ...contractConfig,
    functionName: "mint",
  });
  const { address } = useAccount();

  const onMintClick = async () => {
    setSuccess(true);
    try {
      const tx = await mint.writeContractAsync(wagmi_config, {
        abi,
        functionName: "transferFrom",
        args: [
          address,
          {
            value: ethers.parseEther("0.001"),
            name: values.name,
            description: values.description,
            image: values.image,
          },
        ],
      });
      const receipt = await tx.wait();
      // @ts-ignore
      const mintedTokenId = await receipt.events[0].args[2].toString();

      try {
        let res = await fetch(`https://nft-minting-api.onrender.com/nft/mint`, {
          method: "post",
          body: JSON.stringify({
            to: receipt.to,
            tokenURI: mintedTokenId,
          }),
        });
        res = await res.json();
        setSuccess(true);
      } catch (e) { }
    } catch (error) {
      console.error(error);
    }
  };

  if (success)
    return (
      <div className="max-w-[576px] bg-[#11182780] rounded-2xl p-8 border border-[#10B981] mx-auto mt-[106px]">
        <div className="flex flex-col justify-center gap-[18px]">
          <span className="mx-auto">{check}</span>
          <h5 className="text-[#10B981] text-center text-2xl font-bold">
            NFT Minted Successfully!
          </h5>
          <p className="text-center text-[#9CA3AF]">
            Your NFT has been created and added to your collection
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-xl bg-[#1F293780] p-6 mt-8">
          <div className="h-[256px] bg-black w-full rounded-lg overflow-clip"></div>

          <div>
            <label className="block text-sm text-[#9CA3AF] mb-0.5">
              NFT Name
            </label>
            <h5 className="text-white font-bold">Celestial Harmony #004</h5>
          </div>
          <div>
            <label className="block text-sm text-[#9CA3AF] mb-0.5">
              Description
            </label>
            <p className="text-white">
              A mesmerizing blend of cosmic elements and digital artistry
            </p>
          </div>
          <div>
            <label className="block text-sm text-[#9CA3AF] mb-0.5">
              NFT ID
            </label>
            <p className="text-[#8B5CF6]">#8F3E2A1D9C</p>
          </div>
        </div>

        <div className="flex gap-4 align-middle mt-6">
          <button
            type="submit"
            className="flex w-full gap-2 justify-center align-middle text-white h-12 font-semibold px-4 rounded-lg my-auto bg-[#1F2937]"
          >
            <span className="my-auto">{share}</span>{" "}
            <span className="my-auto">Share</span>
          </button>

          <button
            type="submit"
            className="flex w-full gap-2 justify-center align-middle text-white h-12 font-semibold px-4 rounded-lg my-auto"
            style={{
              background: "linear-gradient(90deg, #EC4899 0%, #8B5CF6 100%)",
            }}
          >
            <span className="my-auto">{icon}</span>{" "}
            <span className="my-auto">Mint Another</span>
          </button>
        </div>
      </div>
    );

  function onChange({ target: { value, id } }) {
    setValues((prev) => ({ ...prev, [id]: value }));
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        onMintClick();
      }}
      className="max-w-[576px] bg-[#11182780] rounded-2xl p-8 border border-[#1F2937] mx-auto mt-[106px]"
    >
      <h4 className="font-bold text-2xl text-white">Mint Your NFT</h4>

      <div className="mt-6">
        <label className="block text-sm text-[#9CA3AF] mb-2.5">NFT Name</label>
        <input
          id="name"
          value={values.name}
          onChange={onChange}
          placeholder="Enter NFT name"
          className="block rounded-lg w-full bg-[#1F2937] placeholder-[#ADAEBC] text-white px-4 h-[50px]"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm text-[#9CA3AF] mb-2.5">
          Description
        </label>
        <textarea
          id="description"
          value={values.description}
          onChange={onChange}
          placeholder="Description"
          style={{ resize: "none" }}
          className="block rounded-lg py-3 w-full bg-[#1F2937] placeholder-[#ADAEBC] text-white px-4 h-[96px]"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm text-[#9CA3AF] mb-2.5">Image URL</label>
        <input
          id="image"
          values={values.image}
          onChange={onChange}
          placeholder="Enter Image URL"
          className="block rounded-lg w-full bg-[#1F2937] placeholder-[#ADAEBC] text-white px-4 h-[50px]"
        />

        <button
          type="submit"
          className="flex mt-4 w-full gap-2 justify-center align-middle text-white h-[56px] font-semibold px-4 rounded-lg my-auto"
          style={{
            background: "linear-gradient(90deg, #EC4899 0%, #8B5CF6 100%)",
          }}
        >
          <span className="my-auto">{icon}</span>{" "}
          <span className="my-auto">Mint NFT</span>
        </button>
      </div>
    </form>
  );
};

const icon = (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_6_565)">
      <path
        d="M8.10938 0.178101C8.54375 0.0218506 9.01875 0.0218506 9.45625 0.178101L15.4563 2.32185C16.25 2.60623 16.7812 3.35935 16.7812 4.20623V11.7937C16.7812 12.6375 16.25 13.3937 15.4531 13.6781L9.45312 15.8218C9.01875 15.9781 8.54375 15.9781 8.10625 15.8218L2.10625 13.6781C1.3125 13.3937 0.78125 12.6406 0.78125 11.7937V4.20623C0.78125 3.36248 1.3125 2.60623 2.10938 2.32185L8.10938 0.178101ZM8.78125 2.06248L3.35313 3.99998L8.78125 5.93748L14.2094 3.99998L8.78125 2.06248ZM9.78125 13.5812L14.7812 11.7969V5.92185L9.78125 7.70623V13.5812Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_6_565">
        <path d="M0.78125 0H16.7812V16H0.78125V0Z" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const check = (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40Z"
      fill="#10B981"
      fill-opacity="0.2"
    />
    <g clip-path="url(#clip0_6_645)">
      <path
        d="M55.089 29.4109C55.9679 30.2899 55.9679 31.7172 55.089 32.5961L37.089 50.5961C36.2101 51.475 34.7827 51.475 33.9038 50.5961L24.9038 41.5961C24.0249 40.7172 24.0249 39.2899 24.9038 38.4109C25.7827 37.532 27.2101 37.532 28.089 38.4109L35.4999 45.8149L51.9108 29.4109C52.7897 28.532 54.2171 28.532 55.096 29.4109H55.089Z"
        fill="#10B981"
      />
    </g>
  </svg>
);

const share = (
  <svg
    width="15"
    height="17"
    viewBox="0 0 15 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_6_671)">
      <path
        d="M11.1406 7C12.7969 7 14.1406 5.65625 14.1406 4C14.1406 2.34375 12.7969 1 11.1406 1C9.48438 1 8.14062 2.34375 8.14062 4C8.14062 4.125 8.14688 4.25 8.1625 4.37187L5.22188 5.84062C4.68438 5.31875 3.95 5 3.14062 5C1.48438 5 0.140625 6.34375 0.140625 8C0.140625 9.65625 1.48438 11 3.14062 11C3.95 11 4.68438 10.6813 5.22188 10.1594L8.1625 11.6281C8.14688 11.75 8.14062 11.8719 8.14062 12C8.14062 13.6562 9.48438 15 11.1406 15C12.7969 15 14.1406 13.6562 14.1406 12C14.1406 10.3438 12.7969 9 11.1406 9C10.3313 9 9.59688 9.31875 9.05937 9.84062L6.11875 8.37187C6.13438 8.25 6.14062 8.12813 6.14062 8C6.14062 7.87187 6.13438 7.75 6.11875 7.62813L9.05937 6.15938C9.59688 6.68125 10.3313 7 11.1406 7Z"
        fill="white"
      />
    </g>
  </svg>
);
