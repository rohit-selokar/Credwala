import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import InputSlider from "react-input-slider";
ChartJS.register(ArcElement, Tooltip, Legend);

const Ssy = () => {
  const data = {
    labels: ["Principal Amount", "Total Interest"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["#3551E7", "#E4E4E4"],
      },
    ],
  };

  const [loanAmount, setLoanAmount] = useState(100000);
  const [rateOfInterest, setRateOfInterest] = useState(15);
  const [loanTenure, setLoanTenure] = useState(2018);

  const handleLoanAmountChange = (newValue) => {
    setLoanAmount(newValue);
  };

  const handleRateOfInterest = (newValue) => {
    setRateOfInterest(newValue);
  };

  const handleLoanTensure = (newValue) => {
    setLoanTenure(newValue);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  
    // Scroll to top again after hash links have been processed
    const handleHashChange = () => {
      window.scrollTo(0, 0);
    };
  
    window.addEventListener('hashchange', handleHashChange);
  
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);  
  return (
    <>
      <div className="mx-4 md:mx-16 xl:mx-20">
        <p className="font-manrope text-[25px] my-6 lg:my-10 lg:text-[30px] font-medium tracking-wider">
          Sukanya Samariddhi Yojana Calculator
        </p>
        <div className="xl:flex justify-between">
          <div className="p-5 bg-[#f8f8f8] border rounded-2xl shadow">
            <p className="text-[18px] text-[#434061] ml-4">
              Latest SSY Rate = 8.2%
            </p>

            <div className="flex flex-col lg:flex-row items-center ">
              <div className="p-4 w-[100%] lg:w-[600px] xl:w-[500px] font-semibold text-[17px]">
                <div>
                  <p className=" flex items-center justify-between">
                    Yearly Investment
                    <div>
                      <button className="px-4 p-2 border border-[#B9BABD] rounded-l-md">
                        ₹
                      </button>
                      <input
                        type="number"
                        className=" p-2 w-28 border border-[#B9BABD] rounded-r-md"
                        value={loanAmount}
                        onChange={(e) =>
                          setLoanAmount(parseInt(e.target.value))
                        }
                      />
                    </div>
                  </p>
                  <InputSlider
                    axis="x"
                    x={loanAmount}
                    xmin={0}
                    xmax={1000000}
                    onChange={(newValue) => handleLoanAmountChange(newValue.x)}
                    style={{ width: "100%", height: "4px" }}
                  />
                </div>

                <div className="mt-12">
                  <p className="flex items-center justify-between">
                    Girl’s Age
                    <div>
                      <input
                        className="border border-[#B9BABD] p-2 rounded-md bg-white w-16 mx-3 text-center"
                        type="number"
                        value={rateOfInterest}
                        onChange={(e) =>
                          setRateOfInterest(parseInt(e.target.value))
                        }
                      />
                      <button className="bg-[#3551E7] text-white px-5 p-2 border border-[#B9BABD] rounded-md">
                        Years
                      </button>
                    </div>
                  </p>
                  <InputSlider
                    axis="x"
                    x={rateOfInterest}
                    xmin={0}
                    xmax={30}
                    onChange={(newValue) => handleRateOfInterest(newValue.x)}
                    style={{ width: "100%", height: "4px" }}
                  />
                </div>

                <div className="mt-12">
                  <p className="flex items-center justify-between">
                    Start Period
                    <div>
                      <input
                        type="number"
                        className="border border-[#B9BABD] p-2 rounded-md w-20 text-center"
                        value={loanTenure}
                        onChange={(e) =>
                          setLoanTenure(parseInt(e.target.value))
                        }
                      />
                    </div>
                  </p>
                  <InputSlider
                    axis="x"
                    x={loanTenure}
                    xmin={1500}
                    xmax={3000}
                    onChange={(newValue) => handleLoanTensure(newValue.x)}
                    style={{ width: "100%", height: "4px" }}
                  />
                </div>
              </div>

              <div className="m-4">
                <Doughnut data={data} className="w-[290px]" />
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-normal lg:mt-10 text-[#434061]">
              <div>
                <ul>
                  <li className="p-2 font-semibold">Total Investment</li>
                  <li className="p-2 font-semibold">Total Interest</li>
                  <li className="p-2 font-semibold">Maturity Year</li>
                  <li className="p-2 font-semibold">Maturity Value</li>
                </ul>
              </div>
              <div className=" md:ml-36 lg:ml-14 xl:ml-56">
                <ul>
                  <li className="p-2 font-semibol">₹ 1,50,000</li>
                  <li className="p-2 font-semibol">₹ 3,11,839</li>
                  <li className="p-2 font-semibol">₹ 2039</li>
                  <li className="p-2 font-semibol">₹ 19,91,214</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mx-6 md:mx-0 border my-6 xl:my-0 rounded-2xl font-inter text-center md:mr-72 lg:mr-[37rem] xl:mr-0">
            <table>
              <thead>
                <tr>
                  <th className="font-medium py-3 text-[18px] bg-[#E0E0E0] rounded-t-[15px]">
                    Popular Calculators
                  </th>
                </tr>
              </thead>
              <tbody className="text-[#434061] ">
                <tr>
                  <td className="border-t-[1px] text-[14px] py-2.5 px-10 lg:px-4 xl:px-12 md:text-[16px]">
                    SIP Calculator
                  </td>
                </tr>
                <tr>
                  <td className="border-t-[1px] text-[15px] py-2.5 px-10 lg:px-4 xl:px-12 md:text-[16px]">
                    Lumpsum Calculator
                  </td>
                </tr>

                <tr>
                  <td className="border-t-[1px] text-[15px] py-2.5 px-10 lg:px-4 xl:px-12 md:text-[16px]">
                    SWP Calculator
                  </td>
                </tr>
                <tr>
                  <td className="border-t-[1px] text-[15px] py-2.5 px-10 lg:px-4 xl:px-12 md:text-[16px]">
                    Mutual Fund Returns Calculator
                  </td>
                </tr>

                <tr>
                  <td className="border-t-[1px] text-[15px] py-2.5 px-10 lg:px-4 xl:px-12 md:text-[16px]">
                    Sukanya Samridhhi Yojana Calculator
                  </td>
                </tr>
                <tr>
                  <td className="border-t-[1px] text-[15px] py-2.5 px-10 lg:px-4 xl:px-12 md:text-[16px]">
                    PPF Calculator
                  </td>
                </tr>
                <tr>
                  <td className="border-t-[1px] text-[15px] py-2.5 px-10 lg:px-4 xl:px-12 md:text-[16px]">
                    EPF Calculator
                  </td>
                </tr>
                <tr>
                  <td className="border-t-[1px]text-[15px] py-2.5 px-10 lg:px-4 xl:px-12 md:text-[16px]">
                    FD Calculator
                  </td>
                </tr>
                <tr>
                  <td className="border-t-[1px] text-[15px] py-2.5 px-10 lg:px-4 xl:px-12 md:text-[16px]">
                    RD Calculator
                  </td>
                </tr>
                <tr>
                  <td className="border-t-[1px] text-[15px] py-2.5 px-10 lg:px-4 xl:px-12 md:text-[16px]">
                    EMI Calculator
                  </td>
                </tr>
                <tr>
                  <td className="border-t-[1px] text-[15px] py-2.5 px-10 lg:px-4 xl:px-12 md:text-[16px]">
                    Income Tax Calculator
                  </td>
                </tr>

                <tr>
                  <td className="border-t-[1px] text-[15px] py-2.5 px-10 lg:px-4 xl:px-12 md:text-[16px]">
                    HRA Calculator
                  </td>
                </tr>

                <tr>
                  <td className="border-t-[1px] text-[15px] py-2.5 px-10 lg:px-4 xl:px-12 md:text-[16px] rounded-b-xl">
                    NPS Calculator
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Theory */}
      <div className="mx-4 md:mx-16 md:my-10 lg:mt-16 xl:mx-20 xl:my-20 lg:mr-[150px] xl:mr-[520px] leading-loose">
        <p className="text-[#434061] md:text-[17px] lg:text-[18px]">
          Investments in Mutual Funds can be broadly classified into two
          types- lumpsum and SIP. A lumpsum investment is when the depositor
          invests a significant sum of money on a particular mutual fund scheme.
          SIP or Systematic Investment Plan, on the other hand, entails the
          investment of smaller amounts on a monthly basis.
        </p>

        <p className="text-[#434061] md:text-[17px] lg:text-[18px] mt-6">
          Both these type of mutual fund investment strategies have their fair
          share of benefits. Lumpsum investments are particularly preferred by a
          majority of investors, as there are lesser variables involved and
          returns are generally on the higher side. To find out the estimated
          returns on your lumpsum mutual fund investment, you may use a mutual
          fund lumpsum calculator available online.
        </p>
        <div>
          <p className="text-[#000000] text-[23px] md:text-[27px] font-semibold my-2 xl:text-[30px] mt-8">
            Who Can Use This Calculator?
          </p>
          <div className="text-[#434061] md:text-[17px] lg:text-[18px]">
            <p>
              Since investing in an SSY Account is a long-term affair, it is
              wise to plan the investments ahead of time and the Sukanya
              Samriddhi Yojana Calculator is a great way to start planning. You
              might want to know how much you will invest each year, how the
              interest earned will pan out, and calculate the maturity amount.
              To that end, you can count on the SSY Calculator.
            </p>

            <p className="mt-6">
              Firstly, to use the Sukanya Samriddhi Yojana Calculator, you must
              ensure that you meet the scheme eligibility criteria. Legal
              guardians of girl children can open an SSY Account if the
              following conditions are fulfilled:
            </p>

            <ul className="list-disc ml-10 mt-6">
              <li>The girl child is an Indian resident.</li>
              <li>The girl child's age should not exceed 10 years.</li>
              <li>
                A family with two girl children can open up to two accounts.
              </li>
            </ul>

            <p>
              One of the requirements for enjoying the benefits of an SSY
              Account is that you have to make a minimum of a single
              contribution per financial year till 14 years are completed. Thus,
              you will earn interest on the amount invested in the account. Your
              maturity amount will consist of both the principal amount along
              with interest earned. The SSY calculator can prove to be
              invaluable here in planning your finances
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mx-4 my-10 font-manrope md:mx-16 md:mr-[150px] lg:mr-[350px] xl:mx-20 xl:mr-[600px]">
        <p className="text-[28px] font-semibold text-[#000000] md:text-[30px]">
          FAQs
        </p>
        <div class=" divide-y divide-neutral-200 mt-4">
          <div class="py-3 md:py-5">
            <details class="group">
              <summary class="flex cursor-pointer list-none items-center justify-between">
                <span className="text-[#434061] text-[17px] lg:text-[18px] xl:text-[19px]">
                  {" "}
                  Can I open 2 Sukanya Samriddhi Yojana accounts?
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
                  Can parents withdraw money from the Sukanya Samriddhi Yojana
                  account?
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
                  What is the maturity period of an SSY account?
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
                  Can an SSY account be closed before maturity?
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
                  Is there any tax benefit of Sukanya Samriddhi Yojana?
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

export default Ssy;
