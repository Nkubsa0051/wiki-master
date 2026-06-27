import { HexclaveClientApp } from "@hexclave/next";

const appurl = process.env.NEXT_PUBLIC_APPURL ?? "https://wiki-master-x51y.vercel.app";

export const hexclaveClientApp = new HexclaveClientApp({
  tokenStore: "nextjs-cookie",
  urls: {
    default: {
      type: "handler-component",
    },
    afterSignIn: appurl,
    // afterSignUp: appurl,
    // afterSignOut: appurl,
    // home: appurl
  },
});
