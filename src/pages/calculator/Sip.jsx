import React from "react";
import pie from "../../assets/sip-pie.png";
import slider from "../../assets/sip-bar.png";
import sip from "../../assets/sip.png";

const Sip = () => {
  return (
    <>
      <div>
        <p className="m-3 font-manrope lg:m-4 text-[25px] lg:text-[28px] font-semibold xl:pl-6 xl:my-6">
          SIP Calculator
        </p>
        <div className="mx-4 md:mx-10 lg:flex justify-center">
          <div className="p-4 bg-[#f8f8f8] border rounded-2xl">
            <div className="flex flex-col md:flex-row items-center ">
              <div className="">
                <img src={sip} className="w-[120px]" />
                <img
                  src={slider}
                  className="py-4 md:w-[380px] lg:w-[300px] xl:w-[420px]"
                />
              </div>
              <img
                src={pie}
                className="my-6 md:w-[210px] md:mx-10 lg:my-2 lg:w-[130px] lg:mx-4 xl:w-[200px] xl:mx-24"
              />
            </div>
            <div className="text-[#434061] flex items-center justify-center md:justify-normal lg:mt-10">
              <div>
                <ul>
                  <li className="p-4 font-semibold">Invested Amout</li>
                  <li className="p-4 font-semibold">Est. Returns</li>
                  <li className="p-4 font-semibold">Total Value</li>
                </ul>
              </div>
              <div className=" md:ml-36 lg:ml-14 xl:ml-40">
                <ul>
                  <li className="p-4 font-semibol">₹ 30,00,000</li>
                  <li className="p-4 font-semibol">₹ 28,08,477</li>
                  <li className="p-4 font-semibol">₹ 58,08,477</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="font-inter mx-10 my-8 lg:my-0 lg:mx-0 lg:ml-16 text-center">
            <table>
              <thead>
                <tr className="bg-[#E0E0E0]">
                  <th className="font-semibold border py-3 px-12 text-[18px]">
                    Popular Calculators
                  </th>
                </tr>
              </thead>
              <tbody className="text-[#434061] ">
                <tr>
                  <td className="border text-[14px] py-2 px-12 xl:text-[16px]">
                    SIP Calculator
                  </td>
                </tr>
                <tr>
                  <td className="border py-2 px-12 text-[16px]">
                    Lumpsum Calculator
                  </td>
                </tr>

                <tr>
                  <td className="border py-2 px-12 text-[16px]">
                    SWP Calculator
                  </td>
                </tr>
                <tr>
                  <td className="border py-2 px-12 text-[16px]">
                    Mutual Fund Returns Calculator
                  </td>
                </tr>

                <tr>
                  <td className="border py-2 px-12 text-[16px]">
                    Sukanya Samridhhi Yojana Calculator
                  </td>
                </tr>
                <tr>
                  <td className="border py-2 px-12 text-[16px]">
                    PPF Calculator
                  </td>
                </tr>
                <tr>
                  <td className="border py-2 px-12 text-[16px]">
                    EPF Calculator
                  </td>
                </tr>
                <tr>
                  <td className="border py-2 px-12 text-[16px]">
                    FD Calculator
                  </td>
                </tr>
                <tr>
                  <td className="border py-2 px-12 text-[16px]">
                    RD Calculator
                  </td>
                </tr>
                <tr>
                  <td className="border py-2 px-12 text-[16px]">
                    EMI Calculator
                  </td>
                </tr>
                <tr>
                  <td className="border py-2 px-12 text-[16px]">
                    Income Tax Calculator
                  </td>
                </tr>

                <tr>
                  <td className="border py-2 px-12 text-[16px]">
                    HRA Calculator
                  </td>
                </tr>

                <tr>
                  <td className="border py-2 px-12 text-[16px]">
                    NPS Calculator
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* theory */}
      <div className="mx-4 md:mx-12 md:my-10 lg:mx-14 xl:mx-20 xl:my-20">
        <div className=" my-8 xl:mr-[420px]">
          <p className="text-[#000000] text-[20px] font-semibold my-2 xl:text-[30px]">
            SIP Calculator – Systematic Investment Plan Calculator
          </p>
          <p className="text-[#434061] text-[18px] leading-loose">
            Prospective investors can think that SIPs and mutual funds are the
            same. However, SIPs are merely a method of investing in mutual
            funds, the other method being a lumpsum. A SIP calculator is a tool
            that helps you determine the returns you can avail when parking your
            funds in such investment tools. Systematic Investment Plan or SIP is
            a process of investing a fixed sum of money in mutual funds at
            regular intervals. SIPs usually allow you to invest weekly,
            quarterly, or monthly. 
          </p>
        </div>

        <div className=" my-8 xl:mr-[420px]">
          <p className="text-[#000000] text-[20px] font-semibold my-2 xl:text-[30px]">
            What is a SIP Calculator?
          </p>
          <p className="text-[#434061] text-[18px] leading-loose">
            A SIP calculator is a simple tool that allows individuals to get an
            idea of the returns on their mutual fund investments made through
            SIP. SIP investments in mutual funds have become one of the most
            popular investment options for millennials lately.
            <p className="mt-4">
              These mutual fund sip calculators are designed to give potential
              investors an estimate on their mutual fund investments. However,
              the actual returns offered by a mutual fund scheme varies
              depending on various factors. The SIP calculator does not provide
              clarification for the exit load and expense ratio (if any). 
            </p>
          </p>
        </div>

        <div className=" my-8 xl:mr-[420px]">
          <p className="text-[#000000] text-[20px] font-semibold my-2 xl:text-[30px]">
            How can a SIP return calculator help you?
          </p>
          <p className="text-[#434061] text-[18px] leading-loose">
            SIPs are a more lucrative mode of investing funds compared to a lump
            sum amount according to several mutual fund experts. It helps you
            become financially disciplined and create a habit of savings that
            can benefit you in the future.
            <p className="mt-4">
              A SIP calculator online is a beneficial tool, which shows the
              estimated returns you will earn after the investment tenure.
            </p>
            <p className="mt-4">
              Few of the benefits of SIP calculators include –
              <ul className="list-decimal ml-8">
                <li>
                  Assists you to determine the amount you want to invest in.
                </li>
                <li>Tells you the total amount you have invested.</li>
                <li>Gives an estimated value of the returns</li>
              </ul>
            </p>
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="mx-4 my-14 font-manrope md:mx-14 lg:mx-28 xl:mx-20 xl:mr-[690px]">
        <p className="text-[25px] font-semibold text-[#000000] md:text-[30px]">
          FAQs
        </p>
        <div class=" divide-y divide-neutral-200 mt-4">
          <div class="py-3 md:py-5">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between">
                <span className="text-[#434061] text-[17px] lg:text-[18px] xl:text-[19px]">
                  {" "}
                  How much can I invest in a SIP?
                </span>
                <span class="transition group-open:rotate-180 ml-20">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="group-open:animate-fadeIn mt-3 text-[17px]  xl:text-[18px] text-[#434061]">
                facilisis mauris sit amet massa vitae tortor condimentum lacinia
                quis vel eros donec ac odio tempor orci dapibus ultrices in
                iaculis nunc sed augue lacus viverra vitae congue eu consequat
                ac felis donec et odio pellentesque diam volutpat commodo sed
              </p>
            </details>
          </div>
          <div class="py-3 md:py-5">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between">
                <span className="text-[#434061] text-[17px] lg:text-[18px] xl:text-[19px]">
                  {" "}
                  What is the maximum tenure of a SIP?
                </span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="group-open:animate-fadeIn mt-3 text-[17px]  xl:text-[18px] text-[#434061]">
                facilisis mauris sit amet massa vitae tortor condimentum lacinia
                quis vel eros donec ac odio tempor orci dapibus ultrices in
                iaculis nunc sed augue lacus viverra vitae congue eu consequat
                ac felis donec et odio pellentesque diam volutpat commodo sed
              </p>
            </details>
          </div>
          <div class="py-3 md:py-5">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between">
                <span className="text-[#434061] text-[17px] lg:text-[18px] xl:text-[19px]">
                  Are SIPs similar to mutual funds?
                </span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="group-open:animate-fadeIn mt-3 text-[17px]  xl:text-[18px] text-[#434061]">
                facilisis mauris sit amet massa vitae tortor condimentum lacinia
                quis vel eros donec ac odio tempor orci dapibus ultrices in
                iaculis nunc sed augue lacus viverra vitae congue eu consequat
                ac felis donec et odio pellentesque diam volutpat commodo sed
              </p>
            </details>
          </div>
          <div class="py-3 md:py-5">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between">
                <span className="text-[#434061] text-[17px] lg:text-[18px] xl:text-[19px]">
                  {" "}
                  Can I modify my SIP amount?
                </span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="group-open:animate-fadeIn mt-3 text-[17px]  xl:text-[18px] text-[#434061]">
                facilisis mauris sit amet massa vitae tortor condimentum lacinia
                quis vel eros donec ac odio tempor orci dapibus ultrices in
                iaculis nunc sed augue lacus viverra vitae congue eu consequat
                ac felis donec et odio pellentesque diam volutpat commodo sed
              </p>
            </details>
          </div>
          <div class="py-3 md:py-5">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between">
                <span className="text-[#434061] text-[17px] lg:text-[18px] xl:text-[19px]">
                  Do SIP allows only equity mutual funds investments?
                </span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="group-open:animate-fadeIn mt-3 text-[17px]  xl:text-[18px] text-[#434061]">
                facilisis mauris sit amet massa vitae tortor condimentum lacinia
                quis vel eros donec ac odio tempor orci dapibus ultrices in
                iaculis nunc sed augue lacus viverra vitae congue eu consequat
                ac felis donec et odio pellentesque diam volutpat commodo sed
              </p>
            </details>
          </div>
          <div class="py-3 md:py-5">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between">
                <span className="text-[#434061] text-[17px] lg:text-[18px] xl:text-[19px]">
                  {" "}
                  Can I renew a SIP?
                </span>
                <span class="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p class="group-open:animate-fadeIn mt-3 text-[17px]  xl:text-[18px] text-[#434061]">
                facilisis mauris sit amet massa vitae tortor condimentum lacinia
                quis vel eros donec ac odio tempor orci dapibus ultrices in
                iaculis nunc sed augue lacus viverra vitae congue eu consequat
                ac felis donec et odio pellentesque diam volutpat commodo sed
              </p>
            </details>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sip;
