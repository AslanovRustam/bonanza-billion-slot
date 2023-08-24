import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  const { t } = useTranslation();
  return (
    <Suspense fallback="null">
      <Header />
      <Main t={t} />
      <Footer />
    </Suspense>
  );
}

export default App;
