"use client";

import {
  ChevronDownIcon,
  PlusIcon,
  ArrowUpRightIcon,
  ArrowsRightLeftIcon,
  ArrowPathIcon,
} from "@heroicons/react/20/solid";

import { useState } from "react";

import { Button } from "./ui/button";

const Hero = () => {
  const transactionsList = [
    {
      address: "0x9d2918b782...",
      from: "0x4838B106...B0BAD5f97",
      to: "0x864bD4E8...277056E22",
      amount: "0.04478 ETH",
    },
    {
      address: "0x9d291b46a2...",
      from: "0x4838B106...B0ECA5f56",
      to: "0x864bD4E8...2770A6652",
      amount: "0.00102 ETH",
    },
    {
      address: "0x9d2918b782...",
      from: "0x4838B106...B0B675BAD",
      to: "0x864bD4E8...2770567DA",
      amount: "0.12480 ETH",
    },
    {
      address: "0x9d2918b782...",
      from: "0x4838B106...B0B6FA67C",
      to: "0x864bD4E8...2770ADF78",
      amount: "1.23130 ETH",
    },
    {
      address: "0x9d2918b782...",
      from: "0x4838B106...B0B675BAD",
      to: "0x864bD4E8...2770567DA",
      amount: "0.00680 ETH",
    },
  ];
  const [transactions, setTransactions] = useState(transactionsList);

  return (
    <section className="relative flex flex-col sm:h-[68rem] lg:h-[30rem] gap-36 my-2 lg:my-[80px]">
      <div className="flex flex-col gap-4 w-auto lg:max-w-[45%] my-10">
        <h1 className="scroll-m-20 text-4xl sm:text-5xl font-extrabold tracking-tight text-pretty md:text-6xl lg:text-5xl lg:leading-tight from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
          Revolutionizing NGO Fundraising with Web3 and WalletConnect
        </h1>
        <span className="text-xs sm:text-sm text-[#dedede] mb-4">
          Empowering NGOs to Unlock New Donation Channels with Effortless Crypto
          Integration and Superior Security
        </span>
        <Button variant="default" className="w-fit p-4 sm:p-6 drop-shadow-md">
          Connect Wallet
        </Button>
      </div>

      <div className="heroDisplay hidden sm:block relative lg:absolute right-0 top-0">
        <div className="absolute right-[160px] md:right-[310px] top-0 w-[230px] h-[450px] bg-[#cecece] rounded-3xl flex justify-center items-center drop-shadow-lg">
          <div className="w-[210px] h-[430px] bg-[#dedede] flex flex-col items-center rounded-3xl shadow-inner">
            <div className="text-xs mt-5 bg-secondary px-2 py-1 rounded-full flex justify-center items-center">
              Ethereum <ChevronDownIcon className="h-4 w-4" />
            </div>
            <div className="w-[185px] h-[6\70px] border-[1px] border-secondary rounded-md my-10 flex flex-col items-center text-secondary">
              <span className="text-xs w-11/12 py-2 flex justify-between border-b-[1px]">
                <span>Account 1</span>
                <ChevronDownIcon className="h-4 w-4" />{" "}
              </span>
              <span className="text-[11px] w-11/12 py-2 flex justify-between">
                <span>Address: 0x8a51...9a5d</span>
                <span>...</span>
              </span>
            </div>
            <div className="w-11/12">
              <div className="text-secondary text-lg font-semibold text-center">
                24.03 ETH
              </div>
              <div className="flex justify-evenly mt-5">
                <div className="flex flex-col items-center">
                  <span className="h-8 w-8 bg-primary rounded-full flex justify-center items-center">
                    <PlusIcon className="h-6 w-6" />
                  </span>
                  <span className="text-xs text-secondary mt-2">Buy/Sell</span>
                </div>

                <div className="flex flex-col items-center">
                  <span className="h-8 w-8 bg-primary rounded-full flex justify-center items-center">
                    <ArrowUpRightIcon className="h-6 w-6" />
                  </span>
                  <span className="text-xs text-secondary mt-2">Send</span>
                </div>

                <div className="flex flex-col items-center">
                  <span className="h-8 w-8 bg-primary rounded-full flex justify-center items-center">
                    <ArrowsRightLeftIcon className="h-6 w-6" />
                  </span>
                  <span className="text-xs text-secondary mt-2">Swap</span>
                </div>
              </div>
            </div>
            <div className="w-11/12 flex flex-col my-6">
              <span className="text-xs text-secondary my-2 flex gap-1">
                <PlusIcon className="h-4 w-4" />
                Import tokens
              </span>
              <span className="text-xs text-secondary my-2 flex gap-1">
                <ArrowPathIcon className="h-4 w-4" />
                Refresh list
              </span>
            </div>
          </div>
        </div>

        <div className="absolute -z-20 -right-[206px] -top-[60px] w-[500px] md:w-[650px] h-[500px] rounded-l-xl from-purple-500 via-pink-500 to-blue-500 bg-gradient-to-r">
          <div className="absolute -z-10 inset-0 rounded-l-xl from-purple-500 via-pink-500 to-blue-500 bg-gradient-to-r blur-md"></div>
          <div className="my-12 ml-[150px] w-[350px] md:w-[500px] h-[400px] rounded-l-xl bg-[linear-gradient(hsla(0,_0%,_100%,_.7),_hsla(0,_0%,_100%,_.7)_25%,_rgba(246,_249,_252,_.6)_50%,_rgba(246,_249,_252,_.7)_100%)]">
            <div className="w-11/12 h-auto mx-auto py-2">
              <div className="font-medium text-sm text-secondary py-4 border-b-[1px] border-[rgba(230,230,230,0.6)]">
                Latest Transactions
              </div>

              {transactions.map((transaction) => {
                return (
                  <div
                    key={transaction.address}
                    className="flex justify-around items-center text-xs text-secondary font-medium py-3 border-b-[1px] border-[rgba(230,230,230,0.6)]"
                  >
                    <span className="text-blue-800 hidden md:block">
                      {transaction.address}
                    </span>
                    <div className="flex flex-col">
                      <span>
                        From{" "}
                        <span className="text-blue-800">
                          {transaction.from}
                        </span>
                      </span>
                      <span>
                        To{" "}
                        <span className="text-blue-800">{transaction.to}</span>
                      </span>
                    </div>
                    <span className="font-semibold">{transaction.amount}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
