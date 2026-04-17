import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function baseProps({ size = 14, ...rest }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...rest,
  };
}

export function IconPlus(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function IconSparkles(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

export function IconWand(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M15 4V2M15 10V8M11 6h2M17 6h2M5 21l12-12" />
      <path d="M18 13l.5 1.5L20 15l-1.5.5L18 17l-.5-1.5L16 15l1.5-.5L18 13z" />
    </svg>
  );
}

export function IconUpscale(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 16V8M8 12l4-4 4 4" />
    </svg>
  );
}

export function IconDownload(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}

export function IconMessage(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export function IconImage(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}

export function IconCursor(props: IconProps) {
  return (
    <svg {...baseProps({ size: 14, strokeWidth: 1.25, ...props })}>
      <path
        d="M3 2.5 L3 18 L7.5 13.5 L10 20 L12.5 18.5 L10 12.5 L16 12.5 Z"
        fill="#ffffff"
        stroke="#0a0a0a"
        strokeWidth={1}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconLoader(props: IconProps) {
  return (
    <svg {...baseProps(props)} className={`animate-spin ${props.className ?? ""}`}>
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}

export function IconPackage(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
    </svg>
  );
}

export function IconAudioLines(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M2 10v4M6 6v12M10 3v18M14 8v8M18 5v14M22 10v4" />
    </svg>
  );
}

export function IconClapperboard(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M20.2 6 3 11l-.9-2.4a2 2 0 0 1 1.2-2.5l13.2-4a2 2 0 0 1 2.5 1.2zM6.2 5.3l3 5.7M11.2 3.6l3 5.7M16.2 2l3 5.7" />
      <path d="M4 11h16v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
    </svg>
  );
}

export function IconPlay(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M6 4l15 8-15 8z" fill="currentColor" />
    </svg>
  );
}

export function IconPause(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" stroke="none" />
      <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconFolderDown(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2z" />
      <path d="M12 10v6M9 13l3 3 3-3" />
    </svg>
  );
}

export function IconSave(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <path d="M17 21v-8H7v8M7 3v5h8" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...baseProps({ strokeWidth: 2.25, ...props })}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function IconMaximize2(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
    </svg>
  );
}

export function IconFilm(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <rect x="2" y="2" width="20" height="20" rx="2.5" />
      <path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" />
    </svg>
  );
}

export function IconSettings(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33h0a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

export function IconChevronDown(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
