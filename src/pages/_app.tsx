import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import BottomNavBar from "../components/BottomNavBar";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Component {...pageProps} />
      <BottomNavBar page={router.pathname} profilePicture="/avatar1.png" />
    </>
  );
}

export default MyApp;
