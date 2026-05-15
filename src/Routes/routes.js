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
import { getQuranData, getSurahData } from "../Functions/getDataFromJsonFile.js";
import Farz from "../Pages/Namaz/Farz.jsx";

{/* Namaz */ }
import NamazHome from "../Pages/Namaz/NamazHome.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "asmaul-husna", Component: AsmaulHusna },
      {
        path: "/quran", loader: async () => {
          const quranData = await getQuranData();
          return { quranData };
        }, Component: Quran
      },
      {
        path: "/surah/:surahNumber", loader: async ({ params }) => {
          const surahData = await getSurahData(params.surahNumber);
          return { surahData };
        }, Component: Surah
      },
      {
        path: "/surah/:surahNumber/:ayahNumber", loader: async ({ params }) => {
          const surahData = await getSurahData(params.surahNumber);
          return { surahData };
        }, Component: Surah
      },
      { path: "/prophets", Component: Prophets },
      { path: "/about", Component: About },
      { path: "/contact", Component: Contact },
      { path: "/privacy-policy", Component: PrivacyPolicy },
      { path: "/disclaimer", Component: Disclaimer },
      { path: "/terms-of-use", Component: TermsOfUse },
      { path: "/namaz", Component: NamazHome },
      { path: "/farz", Component: Farz },
    ],
  }
]);

export default router;