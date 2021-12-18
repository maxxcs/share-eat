import "../styles/globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { useChangeBackgroundColor } from "../utils/backgroundColor";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  useChangeBackgroundColor();

  return (
    <div className="f-col ctr">
      <Header displayBg={true} />
      <Footer />
    </div>
  );
}

export default App;
