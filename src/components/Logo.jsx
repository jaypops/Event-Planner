export default function Logo() {
  return (
    <div className="auth-logo">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24" cy="24" r="24" fill="url(#logo-gradient)" />
        <path
          d="M24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14ZM24 31C20.134 31 17 27.866 17 24C17 20.134 20.134 17 24 17C27.866 17 31 20.134 31 24C31 27.866 27.866 31 24 31Z"
          fill="white"
        />
        <circle cx="24" cy="24" r="4" fill="white" />
        <defs>
          <linearGradient
            id="logo-gradient"
            x1="0"
            y1="0"
            x2="48"
            y2="48"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#667eea" />
            <stop offset="1" stopColor="#764ba2" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
