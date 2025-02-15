"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { Hero } from "../components/Hero";
import { Form } from "../components/Form";
import { Gallery } from "../components/Gallery";
import { Connect } from "../components/ConnectButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen`}
      style={{
        background: "linear-gradient(90deg, #000000 0%, #111827 100%)",
      }}
    >
      <header className="px-6 border-b border-[#1F2937] bg-black bg-opacity-80 h-[73px] w-full">
        <div className="flex max-w-[1280px] mx-auto align-middle justify-between h-full">
          <div className="my-auto">{icon}</div>

          <div className="my-auto">
            <Connect>
              <span className="my-auto">{wallet}</span>{" "}
              <span className="my-auto">Connect wallet</span>
            </Connect>
          </div>
        </div>
      </header>

      <main className="py-[123px]">
        <Hero />
        <Form />
        <Gallery />
      </main>
    </div>
  );
}

const icon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_1879_72)">
      <g clip-path="url(#clip1_1879_72)">
        <path
          d="M10.9922 0.267187C11.6437 0.0328121 12.3563 0.0328121 13.0125 0.267187L22.0125 3.48281C23.2031 3.90937 24 5.03906 24 6.30938V17.6906C24 18.9562 23.2031 20.0906 22.0078 20.5172L13.0078 23.7328C12.3563 23.9672 11.6437 23.9672 10.9875 23.7328L1.9875 20.5172C0.796875 20.0906 0 18.9609 0 17.6906V6.30938C0 5.04375 0.796875 3.90937 1.99219 3.48281L10.9922 0.267187ZM12 3.09375L3.85781 6L12 8.90625L20.1422 6L12 3.09375ZM13.5 20.3719L21 17.6953V8.88281L13.5 11.5594V20.3719Z"
          fill="#8B5CF6"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_1879_72">
        <rect width="24" height="24" fill="white" />
      </clipPath>
      <clipPath id="clip1_1879_72">
        <path d="M0 0H24V24H0V0Z" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const wallet = (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_1879_78)">
      <g clip-path="url(#clip1_1879_78)">
        <path
          d="M2.09375 1C0.990625 1 0.09375 1.89688 0.09375 3V13C0.09375 14.1031 0.990625 15 2.09375 15H14.0938C15.1969 15 16.0938 14.1031 16.0938 13V6C16.0938 4.89688 15.1969 4 14.0938 4H2.59375C2.31875 4 2.09375 3.775 2.09375 3.5C2.09375 3.225 2.31875 3 2.59375 3H14.0938C14.6469 3 15.0938 2.55313 15.0938 2C15.0938 1.44687 14.6469 1 14.0938 1H2.09375ZM13.0938 8.5C13.359 8.5 13.6133 8.60536 13.8009 8.79289C13.9884 8.98043 14.0938 9.23478 14.0938 9.5C14.0938 9.76522 13.9884 10.0196 13.8009 10.2071C13.6133 10.3946 13.359 10.5 13.0938 10.5C12.8285 10.5 12.5742 10.3946 12.3866 10.2071C12.1991 10.0196 12.0938 9.76522 12.0938 9.5C12.0938 9.23478 12.1991 8.98043 12.3866 8.79289C12.5742 8.60536 12.8285 8.5 13.0938 8.5Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_1879_78">
        <rect
          width="16"
          height="16"
          fill="white"
          transform="translate(0.09375)"
        />
      </clipPath>
      <clipPath id="clip1_1879_78">
        <path d="M0.09375 0H16.0938V16H0.09375V0Z" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
