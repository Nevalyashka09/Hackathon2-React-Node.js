/* import Models from "../components/Models";
import CardLogo from "../components/CardLogo";
import Stockage from "../components/Stockage"; */

import Stepper from "../components/TimeLine";

import { AppProvider } from "../components/Context/AppContext";
import CardLogo from "../components/CardLogo";
import Stockage from "../components/Stockage";
import Ram from "../components/Ram";
import Loupe from "../components/Loupe";

export default function Home() {
  return (
    <AppProvider>
      <Stepper />
      <CardLogo />
      <Stockage />
      <Ram />
      <Loupe />
    </AppProvider>
  );
}
