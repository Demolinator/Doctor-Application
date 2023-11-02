import "@/styles/globals.css";
import "@/styles/index.css"
import "@/styles/login.css"
import "@/styles/profile.css"
import "@/styles/serviceslist.css"
import "@/styles/doclist.css"
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
