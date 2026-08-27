import { createBrowserRouter } from "react-router";
import App from "../App.jsx";
import Home from "../Pages/Home.jsx";
import AsmaulHusna from "../Pages/AsmaulHusna.jsx";
import Quran from "../Pages/Quran.jsx";
import Surah from "../Pages/Surah.jsx";
import Prophets from "../Pages/Prophets.jsx";
import About from "../Pages/About.jsx";
import Contact from "../Pages/Contact.jsx";
import PrivacyPolicy from "../Pages/PrivacyPolicy.jsx";
import Disclaimer from "../Pages/Disclaimer.jsx";
import TermsOfUse from "../Pages/TermsOfUse.jsx";
import {
  getQuranData,
  getSurahData,
} from "../Functions/getDataFromJsonFile.js";


{
  /* Namaz */
}
import NamazHome from "../Pages/Namaz/NamazHome.jsx";
import FarzNamaz from "../Pages/Namaz/Farz.jsx";
import WajibNamaz from "../Pages/Namaz/WajibNamaz.jsx";
import NaflNamaz from "../Pages/Namaz/NaflNamaz.jsx";
import OtherNamaz from "../Pages/Namaz/OtherNamaz.jsx";
import EidNamaz from "../Pages/Namaz/Wajib/EidNamaz.jsx";
import WatibNamaz from "../Pages/Namaz/Wajib/WatibNamaz.jsx";
import TahajjudNamaz from "../Pages/Namaz/Nafl/TahajjudNamaz.jsx";
import IshraqNamaz from "../Pages/Namaz/Nafl/IshraqNamaz.jsx";
import IstikharaNamaz from "../Pages/Namaz/Nafl/IstikharaNamaz.jsx";

{
  /* user */
}
import ProtectedRoute from "./ProtectedRoute.jsx";
import AuthLayout from "../auth/AuthLayout.jsx";
import LoginForm from "../auth/LoginForm.jsx";
import RegistrationForm from "../auth/RegistrationForm.jsx";
import UserProfile from "../auth/UserProfile.jsx";
import FixMistakesOfPrayer from "../Pages/Namaz/FixMistakesOfPrayer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "asma-ul-husna", Component: AsmaulHusna },
      {
        path: "/quran",
        loader: async () => {
          const quranData = await getQuranData();
          return { quranData };
        },
        Component: Quran,
      },
      {
        path: "/surah/:surahNumber",
        loader: async ({ params }) => {
          const surahData = await getSurahData(params.surahNumber);
          return { surahData };
        },
        Component: Surah,
      },
      {
        path: "/surah/:surahNumber/:ayahNumber",
        loader: async ({ params }) => {
          const surahData = await getSurahData(params.surahNumber);
          return { surahData };
        },
        Component: Surah,
      },
      { path: "/prophets", Component: Prophets },
      { path: "/about", Component: About },
      { path: "/contact", Component: Contact },
      { path: "/privacy-policy", Component: PrivacyPolicy },
      { path: "/disclaimer", Component: Disclaimer },
      { path: "/terms-of-use", Component: TermsOfUse },
      { path: "/namaz", Component: NamazHome },
      { path: "/farz-namaz", Component: FarzNamaz },
      {
        path: "/wajib-namaz",
        Component: WajibNamaz,
      },
      {
        path: "/eid-namaz",
        Component: EidNamaz,
      },
      {
        path: "/watib-namaz",
        Component: WatibNamaz,
      },
      {
        path: "/nafl-namaz",
        Component: NaflNamaz,
      },
      {
        path: "tahajjud-namaz",
        Component: TahajjudNamaz,
      },
      {
        path: "ishraq-namaz",
        Component: IshraqNamaz,
      },
      {
        path: "istikhara-namaz",
        Component: IstikharaNamaz,
      },
      {
        path: "/other-namaz",
        Component: OtherNamaz,
      },
      { path: "/fix-mistakes-of-prayer", Component: FixMistakesOfPrayer },

      {
        path: "/user-profile",
        element: (
          <ProtectedRoute>
            <UserProfile></UserProfile>
          </ProtectedRoute>
        ),
      },
      {
        path: "/auth",
        Component: AuthLayout,
        children: [
          { index: true, Component: RegistrationForm },
          { path: "login", Component: LoginForm },
        ],
      },
    ],
  },
]);

export default router;
