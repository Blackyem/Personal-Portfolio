export type TechName =
  | "react"
  | "typescript"
  | "javascript"
  | "node"
  | "mui"
  | "html5"
  | "css3"
  | "git"
  | "github"
  | "vscode"
  | "figma"
  | "postman"
  | "restapi";

interface TechIconProps {
  name: TechName;
  size?: number;
  className?: string;
}

const LABEL_FONT = "Arial, Helvetica, sans-serif";

export function TechIcon({ name, size = 26, className }: TechIconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    className,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "react":
      return (
        <svg {...common} fill="none">
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1">
            <ellipse cx="12" cy="12" rx="10.5" ry="4.2" />
            <ellipse cx="12" cy="12" rx="10.5" ry="4.2" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10.5" ry="4.2" transform="rotate(120 12 12)" />
          </g>
        </svg>
      );

    case "typescript":
      return (
        <svg {...common}>
          <rect width="24" height="24" rx="3.5" fill="#3178C6" />
          <text
            x="12"
            y="17"
            textAnchor="middle"
            fontSize="11"
            fontWeight="800"
            fill="#ffffff"
            fontFamily={LABEL_FONT}
          >
            TS
          </text>
        </svg>
      );

    case "javascript":
      return (
        <svg {...common}>
          <rect width="24" height="24" rx="3.5" fill="#F7DF1E" />
          <text
            x="12"
            y="17"
            textAnchor="middle"
            fontSize="11"
            fontWeight="800"
            fill="#101828"
            fontFamily={LABEL_FONT}
          >
            JS
          </text>
        </svg>
      );

    case "node":
      return (
        <svg {...common}>
          <path
            fill="#5FA04E"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 1.6 21.2 7v10L12 22.4 2.8 17V7zm0 3.1L5.6 8.4v7.2L12 19.3l6.4-3.7V8.4z"
          />
        </svg>
      );

    case "mui":
      return (
        <svg {...common}>
          <rect width="24" height="24" rx="4" fill="#007FFF" />
          <text
            x="12"
            y="17"
            textAnchor="middle"
            fontSize="11"
            fontWeight="800"
            fill="#ffffff"
            fontFamily={LABEL_FONT}
          >
            M
          </text>
        </svg>
      );

    case "html5":
      return (
        <svg {...common}>
          <path d="M3.4 2h17.2l-1.56 17.02L12 21.6l-6.98-2.58z" fill="#E44D26" />
          <path d="M12 4.2v15.4l5.6-2.08L18.9 4.2z" fill="#F16529" />
          <text
            x="12"
            y="15.6"
            textAnchor="middle"
            fontSize="9"
            fontWeight="800"
            fill="#ffffff"
            fontFamily={LABEL_FONT}
          >
            5
          </text>
        </svg>
      );

    case "css3":
      return (
        <svg {...common}>
          <path d="M3.4 2h17.2l-1.56 17.02L12 21.6l-6.98-2.58z" fill="#1572B6" />
          <path d="M12 4.2v15.4l5.6-2.08L18.9 4.2z" fill="#33A9DC" />
          <text
            x="12"
            y="15.6"
            textAnchor="middle"
            fontSize="9"
            fontWeight="800"
            fill="#ffffff"
            fontFamily={LABEL_FONT}
          >
            3
          </text>
        </svg>
      );

    case "git":
      return (
        <svg {...common} fill="#F05032">
          <path d="M23.55 10.93 13.07.45a1.55 1.55 0 0 0-2.19 0L8.71 2.63l2.76 2.76a1.65 1.65 0 0 1 2.33 2.34l2.66 2.66a1.65 1.65 0 1 1-1.27 1.51c0-.13.02-.26.05-.38l-2.48-2.48v6.53a1.65 1.65 0 1 1-2.29-1.51l-2.68-2.68a1.65 1.65 0 0 1-.9-2.16L7.97 4.59.45 12.11a1.55 1.55 0 0 0 0 2.19l10.48 10.48c.6.6 1.58.6 2.19 0l10.43-10.43a1.55 1.55 0 0 0 0-2.19z" />
        </svg>
      );

    case "github":
      return (
        <svg {...common} fill="#181717">
          <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.26.8-.58v-2.03c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.28-1.23 3.28-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58A12 12 0 0 0 12 .3" />
        </svg>
      );

    case "vscode":
      return (
        <svg {...common}>
          <path fill="#007ACC" d="M17.8 1.5 22 3.2v17.6l-4.2 1.7L8 12z" />
          <path fill="#1F9CF0" d="M17.8 1.5 8 12l9.8 10.5z" opacity="0.85" />
          <path fill="#007ACC" d="M8 12 2 8.2v7.6z" />
        </svg>
      );

    case "figma":
      return (
        <svg {...common}>
          <path d="M7 2.5A2.5 2.5 0 0 1 9.5 0H12v5H9.5A2.5 2.5 0 0 1 7 2.5z" fill="#F24E1E" />
          <path d="M12 0h2.5a2.5 2.5 0 0 1 0 5H12z" fill="#FF7262" />
          <path d="M7 8.5A2.5 2.5 0 0 1 9.5 6H12v5H9.5A2.5 2.5 0 0 1 7 8.5z" fill="#A259FF" />
          <circle cx="16.5" cy="8.5" r="2.5" fill="#1ABCFE" />
          <path d="M7 14.5A2.5 2.5 0 0 1 9.5 12H12v2.5a2.5 2.5 0 1 1-5 0z" fill="#0ACF83" />
        </svg>
      );

    case "postman":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="11" fill="#FF6C37" />
          <circle cx="12" cy="12" r="6.4" fill="none" stroke="#fff" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="2.4" fill="#fff" />
        </svg>
      );

    case "restapi":
      return (
        <svg {...common}>
          <rect width="24" height="24" rx="6" fill="#00A651" />
          <path
            d="M8.5 7c-1 0-1.6.5-1.6 1.5v1.2c0 .8-.5 1.3-1.4 1.3v2c.9 0 1.4.5 1.4 1.3v1.2c0 1 .6 1.5 1.6 1.5v-1.6c-.4 0-.6-.2-.6-.7v-1c0-.9-.4-1.4-1.2-1.7.8-.3 1.2-.8 1.2-1.7v-1c0-.5.2-.7.6-.7zm7 0v1.6c.4 0 .6.2.6.7v1c0 .9.4 1.4 1.2 1.7-.8.3-1.2.8-1.2 1.7v1c0 .5-.2.7-.6.7V17c1 0 1.6-.5 1.6-1.5v-1.2c0-.8.5-1.3 1.4-1.3v-2c-.9 0-1.4-.5-1.4-1.3V8.5c0-1-.6-1.5-1.6-1.5z"
            fill="#ffffff"
          />
        </svg>
      );

    default:
      return null;
  }
}
