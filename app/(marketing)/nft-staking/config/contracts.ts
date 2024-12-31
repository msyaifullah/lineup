import { chain } from "./chain";
import { client } from "./client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "0xe2e1df5e5E962bA13B09467af15f13bd29f029F9";
const rewardTokenContractAddress = "0xb9Ccb2674d07170B704F25643c3AAE8DAefc49A2";
const stakingContractAddress = "0xFB66d02f9a6202430c6D9f4D502e050fB05a6E4F";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingABI
});