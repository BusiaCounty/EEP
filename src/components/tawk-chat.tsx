import { useEffect } from "react";

declare global {
  interface Window {
    Tawk_API?: Record<string, unknown>;
    Tawk_LoadStart?: Date;
  }
}

const TAWK_SCRIPT_ID = "tawk-to-script";

export function TawkChat() {
  useEffect(() => {
    if (document.getElementById(TAWK_SCRIPT_ID)) return;

    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const script = document.createElement("script");
    script.id = TAWK_SCRIPT_ID;
    script.async = true;
    script.src = "https://embed.tawk.to/6ad9194cdc0b373464e52b53/1k5g0llah";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    script.addEventListener("error", () => {
      console.error("The Tawk.to chat widget failed to load.");
    });

    document.head.appendChild(script);
  }, []);

  return null;
}
