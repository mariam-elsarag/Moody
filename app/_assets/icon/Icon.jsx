export const MicIcon = ({ width = "26", heigth = "32", color = "white" }) => {
  return (
    <svg
      width={width}
      height={heigth}
      viewBox="0 0 28 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 24C12.3333 24 10.9167 23.4167 9.75 22.25C8.58333 21.0833 8 19.6667 8 18V6C8 4.33333 8.58333 2.91667 9.75 1.75C10.9167 0.583333 12.3333 0 14 0C15.6667 0 17.0833 0.583333 18.25 1.75C19.4167 2.91667 20 4.33333 20 6V18C20 19.6667 19.4167 21.0833 18.25 22.25C17.0833 23.4167 15.6667 24 14 24ZM12 38V31.85C8.53333 31.3833 5.66667 29.8333 3.4 27.2C1.13333 24.5667 0 21.5 0 18H4C4 20.7667 4.975 23.125 6.925 25.075C8.875 27.025 11.2333 28 14 28C16.7667 28 19.125 27.025 21.075 25.075C23.025 23.125 24 20.7667 24 18H28C28 21.5 26.8667 24.5667 24.6 27.2C22.3333 29.8333 19.4667 31.3833 16 31.85V38H12Z"
        fill={color}
      />
    </svg>
  );
};
export const XIcon = ({
  width = "14",
  heigth = "14",
  color = "var(--color-tertiary)",
}) => {
  return (
    <svg
      width={width}
      height={heigth}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
        fill={color}
      />
    </svg>
  );
};
export const PauseIcon = ({
  width = "14",
  heigth = "14",
  color = "var(--color-tertiary)",
}) => {
  return (
    <svg
      width={width}
      height={heigth}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 14V0H14V14H8ZM0 14V0H6V14H0ZM10 12H12V2H10V12ZM2 12H4V2H2V12ZM2 2V12V2ZM10 2V12V2Z"
        fill={color}
      />
    </svg>
  );
};
export const LanguageIcon = ({
  width = "24",
  heigth = "24",
  color = "var(--color-tertiary)",
}) => {
  return (
    <svg
      width={width}
      height={heigth}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.0001 3H9.0001C7.0501 8.84 7.0501 15.16 9.0001 21H8.0001"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 3C16.95 8.84 16.95 15.16 15 21"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 8.99961C8.84 7.04961 15.16 7.04961 21 8.99961"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const BurgerIcon = ({
  width = "24",
  heigth = "24",
  color = "var(--color-tertiary)",
}) => {
  return (
    <svg
      width={width}
      height={heigth}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 4.5H21"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 9.5H21"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 14.5H21"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 19.5H21"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const GithubIcon = ({
  width = "24",
  heigth = "24",
  color = "var(--color-tertiary)",
}) => {
  return (
    <svg
      width={width}
      height={heigth}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_186_66)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.0099 0C5.36875 0 0 5.40833 0 12.0992C0 17.4475 3.43994 21.9748 8.21205 23.5771C8.80869 23.6976 9.02724 23.3168 9.02724 22.9965C9.02724 22.716 9.00757 21.7545 9.00757 20.7527C5.6667 21.474 4.97099 19.3104 4.97099 19.3104C4.43409 17.9082 3.63858 17.5478 3.63858 17.5478C2.54511 16.8066 3.71823 16.8066 3.71823 16.8066C4.93117 16.8868 5.56763 18.0486 5.56763 18.0486C6.64118 19.8913 8.37111 19.3707 9.06706 19.0501C9.16638 18.2688 9.48473 17.728 9.82275 17.4276C7.15817 17.1471 4.35469 16.1055 4.35469 11.458C4.35469 10.1359 4.8316 9.05428 5.58729 8.21304C5.46807 7.91263 5.0504 6.67043 5.70677 5.00787C5.70677 5.00787 6.72083 4.6873 9.00732 6.24981C9.98625 5.98497 10.9958 5.85024 12.0099 5.84911C13.024 5.84911 14.0577 5.98948 15.0123 6.24981C17.299 4.6873 18.3131 5.00787 18.3131 5.00787C18.9695 6.67043 18.5515 7.91263 18.4323 8.21304C19.2079 9.05428 19.6652 10.1359 19.6652 11.458C19.6652 16.1055 16.8617 17.1269 14.1772 17.4276C14.6148 17.8081 14.9924 18.5292 14.9924 19.6711C14.9924 21.2936 14.9727 22.5957 14.9727 22.9962C14.9727 23.3168 15.1915 23.6976 15.7879 23.5774C20.56 21.9745 23.9999 17.4475 23.9999 12.0992C24.0196 5.40833 18.6312 0 12.0099 0Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_186_66">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const LinkedIcon = ({
  width = "24",
  heigth = "24",
  color = "var(--color-tertiary)",
}) => {
  return (
    <svg
      width={width}
      height={heigth}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_186_48)">
        <path
          d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_186_48">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const ArrowIcon = ({
  width = "12",
  heigth = "8",
  color = "var(--color-primary-2)",
}) => {
  return (
    <svg
      width={width}
      height={heigth}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 7.4L0 1.4L1.4 0L6 4.6L10.6 0L12 1.4L6 7.4Z" fill={color} />
    </svg>
  );
};
