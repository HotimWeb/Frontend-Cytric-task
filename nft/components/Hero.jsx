export const Hero = () => {
  return (
    <div>
      <h1 className="leading-[60px] text-white font-bold text-[60px] text-center">
        Discover & Collect <br />
        Extraordinary NFTs
      </h1>
      <p className="mt-[76px] text-white text-xl text-center max-w-[795px] mx-auto">
        Enter the world of digital art and collectibles. Explore unique NFTs
        created by artists worldwide.
      </p>
      <div className="gap-4 mt-12 flex justify-center">
        <button
          className="flex w-[193px] gap-2 justify-center align-middle text-white h-[58px] font-semibold px-4 rounded-xl my-auto"
          style={{
            background: "linear-gradient(90deg, #EC4899 0%, #8B5CF6 100%)",
          }}
        >
          <span className="my-auto">{rocket}</span>{" "}
          <span className="my-auto">Start creating</span>
        </button>

        <button className="flex justify-center w-[193px] border border-[#374151] bg-[#1F293780] gap-2 align-middle text-white h-[58px] font-semibold px-4 rounded-xl my-auto">
          <span className="my-auto">{play}</span>{" "}
          <span className="my-auto">Watch demo</span>
        </button>
      </div>
    </div>
  );
};

const rocket = (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_6_550)">
      <g clip-path="url(#clip1_6_550)">
        <path
          d="M5.05003 12.0281L4.08441 11.0625C3.81878 10.7969 3.72503 10.4125 3.84378 10.0562C3.93753 9.77812 4.06253 9.41562 4.21253 9H0.90628C0.63753 9 0.38753 8.85625 0.253155 8.62187C0.11878 8.3875 0.121905 8.1 0.259405 7.86875L1.90003 5.10312C2.30628 4.41875 3.04066 4 3.83441 4H6.40628C6.48128 3.875 6.55628 3.75937 6.63128 3.64687C9.19066 -0.128126 13.0032 -0.253125 15.2782 0.165625C15.6407 0.23125 15.9219 0.515625 15.9907 0.878125C16.4094 3.15625 16.2813 6.96562 12.5094 9.525C12.4 9.6 12.2813 9.675 12.1563 9.75V12.3219C12.1563 13.1156 11.7375 13.8531 11.0532 14.2563L8.28753 15.8969C8.05628 16.0344 7.76878 16.0375 7.53441 15.9031C7.30003 15.7688 7.15628 15.5219 7.15628 15.25V11.9C6.71566 12.0531 6.33128 12.1781 6.04066 12.2719C5.69066 12.3844 5.30941 12.2875 5.04691 12.0281H5.05003ZM12.1563 5.25C12.4878 5.25 12.8057 5.1183 13.0402 4.88388C13.2746 4.64946 13.4063 4.33152 13.4063 4C13.4063 3.66848 13.2746 3.35054 13.0402 3.11612C12.8057 2.8817 12.4878 2.75 12.1563 2.75C11.8248 2.75 11.5068 2.8817 11.2724 3.11612C11.038 3.35054 10.9063 3.66848 10.9063 4C10.9063 4.33152 11.038 4.64946 11.2724 4.88388C11.5068 5.1183 11.8248 5.25 12.1563 5.25Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_6_550">
        <rect
          width="16"
          height="16"
          fill="white"
          transform="translate(0.15625)"
        />
      </clipPath>
      <clipPath id="clip1_6_550">
        <path d="M0.15625 0H16.1562V16H0.15625V0Z" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const play = (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_6_555)">
      <path
        d="M0.953125 8C0.953125 5.87827 1.79598 3.84344 3.29627 2.34315C4.79656 0.842855 6.83139 0 8.95312 0C11.0749 0 13.1097 0.842855 14.61 2.34315C16.1103 3.84344 16.9531 5.87827 16.9531 8C16.9531 10.1217 16.1103 12.1566 14.61 13.6569C13.1097 15.1571 11.0749 16 8.95312 16C6.83139 16 4.79656 15.1571 3.29627 13.6569C1.79598 12.1566 0.953125 10.1217 0.953125 8ZM6.8375 4.59688C6.6 4.72813 6.45312 4.98125 6.45312 5.25V10.75C6.45312 11.0219 6.6 11.2719 6.8375 11.4031C7.075 11.5344 7.3625 11.5312 7.59688 11.3875L12.0969 8.6375C12.3188 8.5 12.4563 8.25937 12.4563 7.99687C12.4563 7.73438 12.3188 7.49375 12.0969 7.35625L7.59688 4.60625C7.36563 4.46562 7.075 4.45937 6.8375 4.59062V4.59688Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_6_555">
        <path d="M0.953125 0H16.9531V16H0.953125V0Z" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
