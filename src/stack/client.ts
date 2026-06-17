import { HexclaveClientApp } from "@hexclave/next";

const appurl = process.env.NEXT_PUBLIC_APPURL ?? "http://localhost:3000";

export const hexclaveClientApp = new HexclaveClientApp({
  tokenStore: "nextjs-cookie",
  urls: {
    default: {
      type: "handler-component",
    },
    afterSignIn: appurl,
    afterSignUp: appurl,
    afterSignOut: appurl,
    home: appurl
  },
});
