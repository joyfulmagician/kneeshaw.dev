"use client";
import React, { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useRole } from "@/contexts/RoleContext";
import { ROLES } from "@/utils/constants";

export default function Demo() {
  const { role } = useRole();

  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [firstnameerrorMessage, setFirstNameErrorMessage] = useState("");
  const [secondnameerrorMessage, setSecondNameErrorMessage] = useState("");
  const [usernameerrorMessage, setUserNameErrorMessage] = useState("");
  const [emailerrorMessage, setEmailErrorMessage] = useState("");
  const [passworderrorMessage, setPassWordErrorMessage] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleFirstNameChange = (event: any) => {
    const value = event.target.value;
    const regex = /^[a-zA-Z]*$/;

    if (!regex.test(value)) {
      setFirstNameErrorMessage("Please enter correctly!");
    } else {
      setFirstNameErrorMessage("");
    }

    setFirstName(value);
  };

  const handleSecondNameChange = (event: any) => {
    const value = event.target.value;
    const regex = /^[a-zA-Z]*$/;

    if (!regex.test(value)) {
      setSecondNameErrorMessage("Please enter correctly!");
    } else {
      setSecondNameErrorMessage("");
    }

    setSecondName(value);
  };

  const handleUserNameChange = (event: any) => {
    const value = event.target.value;
    const regex = /^[a-zA-Z0-9]*$/;

    if (!regex.test(value)) {
      setUserNameErrorMessage("Please enter correctly!");
    } else {
      setUserNameErrorMessage("");
    }

    setUserName(value);
  };

  const handleEmailBlur = (event: any) => {
    const value = event.target.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(value)) {
      setEmailErrorMessage("Please enter a valid email address");
    } else {
      setEmailErrorMessage("");
    }

    setEmail(value);
  };

  const handlePasswordChange = (event: any) => {
    const value = event.target.value;
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$!%*^&amp;+=])[A-Za-z\d@#$!%*^&amp;+=]{8,}$/;

    if (value.length < 8 || !regex.test(value)) {
      setPassWordErrorMessage(
        "Password should be at least 8 characters long and include at least one letter, one number, and one special character.",
      );
    } else {
      setPassWordErrorMessage("");
    }

    setPassword(value);
  };

  return (
    <>
      {role === ROLES.PLAYER && (
        <div className="mb-[70px] mt-[39px] flex w-[80%] min-w-[400px] max-w-[880px] flex-col items-center rounded-[24px] bg-[#35322F] text-[#C2CAD0] lg:max-h-[1189px] lg:w-full">
          <div className="mt-[60px] flex flex-col items-center gap-[10px]">
            <h1 className="text-center text-[52px] font-bold">
              Welcome to
              <br />
              Kneeshaw!
            </h1>

            <p className="text-[20px] font-normal">
              Let&#x27;s create your account
            </p>
          </div>

          <div className="mt-[30px] flex h-[64px] w-[350px] flex-row items-center justify-between gap-[10px] rounded-[20px] bg-[#211D19]">
            <button
              type="button"
              className="h-full w-[163px] font-[600] text-[#AFD275]"
            >
              Developer
            </button>

            <button
              type="button"
              className="h-full w-[163px] rounded-[18px] border bg-[#AFD275] font-[600]"
            >
              Gamer
            </button>
          </div>

          <div className="mt-[70px] flex w-full flex-col gap-[25px] px-[100px]">
            <div className="flex flex-col justify-between gap-[20px] md:flex-row md:items-center">
              <input
                type="text"
                placeholder="First name"
                className="h-[52px] w-[219px] rounded-[16px] border border-[#C2CAD0] bg-transparent pl-[10px] text-[16px] font-normal text-white"
                value={firstName}
                onChange={handleFirstNameChange}
              />
              <div>
                {firstnameerrorMessage && (
                  <div className="text-sm text-red-500">
                    {firstnameerrorMessage}
                  </div>
                )}
              </div>

              <input
                type="text"
                placeholder="First name"
                className="h-[52px] w-[219px] rounded-[16px] border border-[#C2CAD0] bg-transparent pl-[10px] text-[16px] font-normal text-white"
                value={secondName}
                onChange={handleSecondNameChange}
              />
              <div>
                {secondnameerrorMessage && (
                  <div className="text-sm text-red-500">
                    {secondnameerrorMessage}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-[5px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-[52px] w-[72%] min-w-[219px] rounded-[16px] border border-[#C2CAD0] bg-transparent pl-[10px] text-[16px] font-normal text-white"
                value={email}
                onChange={handleEmailBlur}
              />
              {emailerrorMessage && (
                <div className="text-sm text-red-500">{emailerrorMessage}</div>
              )}
              <span className="text-[14px] font-normal">
                Never shown to the public
              </span>
            </div>

            <div className="flex flex-col gap-[5px]">
              <input
                type="text"
                placeholder="Create UserName"
                className="h-[52px] w-[219px] rounded-[16px] border border-[#C2CAD0] bg-transparent pl-[10px] text-[16px] font-normal text-white"
                value={userName}
                onChange={handleUserNameChange}
              />
              <div>
                {usernameerrorMessage && (
                  <div className="text-sm text-red-500">
                    {usernameerrorMessage}
                  </div>
                )}
              </div>
              <span className="text-[14px] font-normal">
                Ideal username is short, unique with no spaces
              </span>
            </div>

            <div className="flex flex-col gap-[5px]">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                className="h-[52px] w-[72%] min-w-[219px] rounded-[16px] border border-[#EDF1F3] bg-transparent pl-[10px] text-[16px] font-normal text-white"
                value={password}
                onChange={handlePasswordChange}
              />
              {passworderrorMessage && (
                <div className="text-sm text-red-500">
                  {passworderrorMessage}
                </div>
              )}
              <div className="flex w-[72%] min-w-[219px] flex-row items-center justify-between">
                <span className="text-[14px] font-normal">
                  At least 8 characters, Aa, 123, &#
                </span>
                <span
                  className="text-[14px] font-normal text-[#AFD275]"
                  onClick={togglePasswordVisibility}
                >
                  show
                </span>
              </div>
            </div>

            <div className="text-[14px] font-light">
              By registering, you agree to our{" "}
              <button type="button" className="font-semibold text-[#AFD275]">
                Privacy Policy
              </button>
              &nbsp;&&nbsp;
              <button type="button" className="font-semibold text-[#AFD275]">
                Terms of Services.
              </button>
            </div>

            <button
              type="button"
              className="h-[52px] w-full rounded-[18px] bg-[#AFD275] text-[14px] font-semibold text-white sm:text-[18px]"
            >
              Create your account
            </button>

            <button
              type="button"
              className="flex h-[52px] w-full flex-row items-center justify-center gap-[10px] rounded-[18px] border border-[#EDF1F3] "
            >
              <FcGoogle />
              <span className="text-[14px] font-semibold sm:text-[18px]">
                Sign up with Google
              </span>
            </button>

            <p className="mb-[70px] text-center text-[14px] font-light">
              Already have an account?{" "}
              <Link href="/signin">
                <span className="font-[600] text-[#AFD275]"> Sign In</span>
              </Link>
            </p>
          </div>
        </div>
      )}

      {role === ROLES.CREATOR && (
        <div className="mb-[70px] mt-[39px] flex w-[80%] min-w-[400px] max-w-[880px] flex-col items-center rounded-[24px] bg-[#F8FAFC] text-[#090914] lg:max-h-[1189px] lg:w-full">
          <div className="mt-[60px] flex flex-col items-center gap-[10px]">
            <h1 className="text-center text-[52px] font-bold">
              Welcome to
              <br />
              Kneeshaw!
            </h1>

            <p className="text-[20px] font-normal">
              Let&#x27;s create your account
            </p>
          </div>

          <div className="mt-[30px] flex h-[64px] w-[350px] flex-row items-center justify-between gap-[10px] rounded-[20px] bg-[#211D19]">
            <button
              type="button"
              className="h-full w-[163px] font-[600] text-[#AFD275]"
            >
              Developer
            </button>

            <button
              type="button"
              className="h-full w-[163px] rounded-[18px] border bg-[#AFD275] font-[600]"
            >
              Gamer
            </button>
          </div>

          <div className="mt-[70px] flex w-full flex-col gap-[25px] px-[100px]">
            <div className="flex flex-col justify-between gap-[20px] md:flex-row md:items-center">
              <input
                type="text"
                placeholder="First name"
                className="h-[52px] w-[219px] rounded-[16px] border border-[#C2CAD0] bg-transparent pl-[10px] text-[16px] font-normal text-black"
                value={firstName}
                onChange={handleFirstNameChange}
              />
              <div>
                {firstnameerrorMessage && (
                  <div className="text-sm text-red-500">
                    {firstnameerrorMessage}
                  </div>
                )}
              </div>

              <input
                type="text"
                placeholder="First name"
                className="h-[52px] w-[219px] rounded-[16px] border border-[#C2CAD0] bg-transparent pl-[10px] text-[16px] font-normal text-black"
                value={secondName}
                onChange={handleSecondNameChange}
              />
              <div>
                {secondnameerrorMessage && (
                  <div className="text-sm text-red-500">
                    {secondnameerrorMessage}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-[5px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-[52px] w-[72%] min-w-[219px] rounded-[16px] border border-[#C2CAD0] bg-transparent pl-[10px] text-[16px] font-normal text-black"
                value={email}
                onChange={handleEmailBlur}
              />
              {emailerrorMessage && (
                <div className="text-sm text-red-500">{emailerrorMessage}</div>
              )}
              <span className="text-[14px] font-normal">
                Never shown to the public
              </span>
            </div>

            <div className="flex flex-col gap-[5px]">
              <input
                type="text"
                placeholder="Create UserName"
                className="h-[52px] w-[219px] rounded-[16px] border border-[#C2CAD0] bg-transparent pl-[10px] text-[16px] font-normal text-black"
                value={userName}
                onChange={handleUserNameChange}
              />
              <div>
                {usernameerrorMessage && (
                  <div className="text-sm text-red-500">
                    {usernameerrorMessage}
                  </div>
                )}
              </div>
              <span className="text-[14px] font-normal">
                Ideal username is short, unique with no spaces
              </span>
            </div>

            <div className="flex flex-col gap-[5px]">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                className="h-[52px] w-[72%] min-w-[219px] rounded-[16px] border border-[#EDF1F3] bg-transparent pl-[10px] text-[16px] font-normal text-black"
                value={password}
                onChange={handlePasswordChange}
              />
              {passworderrorMessage && (
                <div className="text-sm text-red-500">
                  {passworderrorMessage}
                </div>
              )}
              <div className="flex w-[72%] min-w-[219px] flex-row items-center justify-between">
                <span className="text-[14px] font-normal">
                  At least 8 characters, Aa, 123, &#
                </span>
                <span
                  className="text-[14px] font-normal text-[#AFD275]"
                  onClick={togglePasswordVisibility}
                >
                  show
                </span>
              </div>
            </div>

            <div className="text-[14px] font-light">
              By registering, you agree to our{" "}
              <button type="button" className="font-semibold text-[#AFD275]">
                Privacy Policy
              </button>
              &nbsp;&&nbsp;
              <button type="button" className="font-semibold text-[#AFD275]">
                Terms of Services.
              </button>
            </div>

            <button
              type="button"
              className="h-[52px] w-full rounded-[18px] bg-[#AFD275] text-[14px] font-semibold text-white sm:text-[18px]"
            >
              Create your account
            </button>

            <button
              type="button"
              className="flex h-[52px] w-full flex-row items-center justify-center gap-[10px] rounded-[18px] border border-[#C2CAD0] "
            >
              <FcGoogle />

              <span className="text-[14px] font-semibold sm:text-[18px]">
                Sign up with Google
              </span>
            </button>

            <p className="mb-[70px] text-center text-[14px] font-light">
              Already have an account?
              <Link href="/signin">
                <span className="font-[600] text-[#AFD275]"> Sign In</span>
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
