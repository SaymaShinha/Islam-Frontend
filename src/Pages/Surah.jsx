import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { getTransSurahData, getEnglishTransliteration } from "../Functions/getDataFromJsonFile.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Surah = () => {
    const { surahData } = useLoaderData();
    const getSurah = surahData.getSurah;
    const surahNumber = getSurah[0].surah_number;
    const navigate = useNavigate();
    const { ayahNumber } = useParams();
    const [transLang, settranslang] = useState("en_A_J__arberry");
    const [transSurah, setTransSurah] = useState([]);
    const [englishTransliterationData, setEnglishTransliterationData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getEnglishTransliteration(surahNumber);

            setEnglishTransliterationData(data["englishTransliteration"]);
        }

        fetchData();
    }, [surahNumber]);


    useEffect(() => {
        const fetchData = async () => {
            const getTransSurah = await getTransSurahData(transLang, surahNumber);
            getTransSurah && setTransSurah(getTransSurah.getTransSurah);
        }

        fetchData();

    }, [transLang, getSurah, surahNumber]);

    useEffect(() => {
        if (ayahNumber) {
            const timeout = setTimeout(() => {
                document.getElementById(String(ayahNumber))
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 300);
        }
    }, [ayahNumber]);

    return (
        <>

            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table table-zebra" style={{ width: "100%"}}>
                    <thead>
                        <tr colSpan={3}>

                            {/* ⬅️ Previous */}
                            <th className="text-left">
                                <button
                                    onClick={() => 
                                        navigate(
                                            `/surah/${getSurah[0].surah_number === 1
                                                ? 114
                                                : getSurah[0].surah_number - 1
                                            }`
                                        )
                                    }
                                    className="btn btn-outline btn-sm text-primary"
                                >
                                    <span className="hidden sm:inline">← Previous</span>
                                    <span className="sm:hidden">←</span>
                                </button>
                            </th>

                            {/* 🕌 Surah Info */}
                            <th className="text-center space-y-1">

                                <div className="text-lg font-bold text-primary">
                                    {getSurah[0].surah_number}. {getSurah[0].surah_ar_name}
                                </div>

                                <div className="text-sm font-semibold">
                                    {getSurah[0].surah_en_name} ({getSurah.length})
                                </div>

                                <div className="text-xs opacity-70">
                                    {getSurah[0].surah_en_name_translation} •{" "}
                                    {getSurah[0].revelation_type}
                                </div>

                                {getSurah[0].note && (
                                    <div className="text-xs text-accent italic">
                                        {getSurah[0].note}
                                    </div>
                                )}

                            </th>

                            {/* ➡️ Next */}
                            <th className="text-right">
                                <button
                                    onClick={() =>
                                        navigate(
                                            `/surah/${getSurah[0].surah_number === 114
                                                ? 1
                                                : getSurah[0].surah_number + 1
                                            }`
                                        )
                                    }
                                    className="btn btn-outline btn-sm text-primary"
                                >
                                    <span className="hidden sm:inline">Next →</span>
                                    <span className="sm:hidden">→</span>
                                </button>
                            </th>

                        </tr>
                    </thead>
                    <tbody>

                        {/* Bismillah */}
                        <tr>
                            <td colSpan={3} className="text-center py-6">

                                <div className="space-y-2">

                                    <p className="text-sm text-error">
                                        أعوذ بالله من الشيطان الرجيم
                                    </p>

                                    {getSurah[0]?.surah_number !== 9 && (
                                        <p className="text-xl font-semibold text-primary">
                                            بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
                                        </p>
                                    )}

                                </div>

                            </td>
                        </tr>

                        {/* Divider */}
                        <tr>
                            <td colSpan={3}>
                                <div className="divider my-0"></div>
                            </td>
                        </tr>

                        {/* Ayahs */}
                        {getSurah?.map((ayah, i) => (
                            <tr key={ayah.id} id={`${i + 1}`}>

                                <td colSpan={3} className="p-4">

                                    <div className="space-y-3 p-4 rounded-xl bg-base-100 border border-base-300 hover:shadow-md hover:border-primary/20 transition">

                                        {/* Arabic */}
                                        <p className="text-right text-2xl leading-loose font-semibold">
                                            {ayah.text}
                                        </p>

                                        {/* Transliteration */}
                                        <p className="text-sm text-success italic">
                                            {englishTransliterationData[i]?.text}
                                        </p>

                                        {/* Translation */}
                                        <p className="text-base text-base-content/80">
                                            <span className="font-medium">{i + 1}.</span>{" "}
                                            {transSurah[i]?.text}
                                        </p>

                                    </div>

                                </td>

                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Surah;
