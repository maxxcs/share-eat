import "../styles/globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Modal from "../components/modal/Modal";
import { AppContextProvider } from "../components/Context";
import { useChangeBackgroundColor, useBackButton } from "../utils/hooks";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  const handleBack = useBackButton();
  useChangeBackgroundColor();

  return (
    <AppContextProvider>
      <div className="f-col ctr">
        <Header displayBg={true} handleClose={handleBack} />
        <Component {...pageProps} />
        <Footer />
        <Modal />
      </div>
    </AppContextProvider>
  );
}

export default App;
