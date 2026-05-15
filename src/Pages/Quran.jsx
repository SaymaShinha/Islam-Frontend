import { useLoaderData, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { getEnglishTranslationQuran, getBanglaTranslationQuran } from "../Functions/getDataFromJsonFile.js";
import Spinner from "../Components/Spinner.jsx";


function Quran() {
    const { quranData } = useLoaderData();
    const data = quranData.data;
    const [surahData, setSurahData] = useState([]);
    const [quran, setQuran] = useState([]);
    const [searchedQuranAyah, setSearchedQuranAyah] = useState([]);
    const [lang, setLang] = useState("en");
    const [searchedWord, setSearchedWord] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setSurahData(data);
    }, [])

    {/* Get surah by Traditional Order */ }
    const getSurahByTraditionalOrder = () => {
        setSurahData(data);
    }

    {/* Get surah according to revelation */ }
    const getSurahAccordingToRevelation = async () => {
        try {
            const res = await fetch(
                "https://raw.githubusercontent.com/SaymaShinha/islamDB/refs/heads/master/islam_public_quran__info__according__to__revelation.json"
            );

            if (!res.ok) {
                throw new Error("Failed to fetch Quran data According To Revelation.");
            }

            const jsonData = await res.json();

            const sorted = [...jsonData].sort((a, b) => {
                return a.chronological_order - b.chronological_order;
            })

            setSurahData(sorted);
        } catch (error) {
            throw error;
        }

    };

    {/* Get surah by Desc Surah Name*/ }
    const getSurahByDescSurahName = () => {
        const sorted = [...data].sort((a, b) => {
            const surahNameA = a.surah_en_name.toLowerCase();
            const surahNameB = b.surah_en_name.toLowerCase();
            if (surahNameA < surahNameB) {
                return -1;
            }
            if (surahNameA > surahNameB) {
                return 1;
            }
            return 0;
        })

        setSurahData(sorted);
    }

    {/* Get Surah By Min to Max Surah Total Ayah */ }
    const getSurahByMinToMaxSurahTotalAyah = () => {
        const sorted = [...data].sort((a, b) => {
            return a.total_ayah - b.total_ayah;
        })

        setSurahData(sorted);
    }

    {/* Get Surah By Max to Min Surah Total Ayah  */ }
    const getSurahByMaxToMinSurahTotalAyah = () => {
        const sorted = [...data].sort((a, b) => {
            return b.total_ayah - a.total_ayah;
        })

        setSurahData(sorted);
    }


    {/* Get Meccan Surah */ }
    const getMeccanSurah = () => {
        const sorted = data.filter((surah) =>
            surah.revelation_type == "Meccan"
        )

        setSurahData(sorted);
    }


    {/* Get Medinan Surah */ }
    const getMedinanSurah = () => {
        const sorted = data.filter((surah) =>
            surah.revelation_type == "Medinan"
        )

        setSurahData(sorted);
    }


    {/* Search Quran */ }
    const searchQuran = (e) => {
        const value = e.target.value.toLowerCase();

        const getSearchQuran = data.filter((surah) =>
            surah["surah_en_name"].toLowerCase().includes(value) || surah["surah_en_name_translation"].toLowerCase().includes(value)
        )
        setSurahData(getSearchQuran);
    }

    useEffect(() => {
        const fetchData = async () => {
            let quranArray = [];
            if (lang == "bn") {
                quranArray = await getBanglaTranslationQuran();
            } else if (lang == "en") {
                quranArray = await getEnglishTranslationQuran();
            }

            setQuran(quranArray.quranData);
        }

        fetchData();
    }, [lang]);

    const searchWordAyah = (e) => {
        try {
            setLoading(true);
            const getWord = e.target.value;

            setSearchedWord(getWord);

            const filteredData = quran.filter((ayah) =>
                ayah["text"].toLowerCase().includes(getWord.toLowerCase())
            )

            setSearchedQuranAyah(filteredData);
        } catch (error) {
            throw error;
        } finally {
            setLoading(false);
        }
    }


    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Navbar */}
                    <nav className="navbar w-full bg-base-300 grid grid-cols-2">
                        <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            {/* Sidebar toggle icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>

                        </label>

                        <select defaultValue="en" onChange={(e) => setLang(e.target.value)} className="select select-primary pl-3 rounded-lg justify-content-end">
                            <option value="en">English</option>
                            <option value="bn">Bangla</option>
                        </select>
                    </nav>
                    {/* Page content here */}
                    <div className="p-4">
                        <input type="text" onChange={(e) => searchWordAyah(e)} placeholder="Search Ayah" className="justify-end content-end input bg-green-100 rounded-lg t m-3 p-3 w-20% justify-content-center" />

                        {searchedWord !== "" && <h2><span className="text-red-600">{searchedQuranAyah.length}</span> Quran Ayah found with <span className="text-primary font-bold">"{searchedWord}"</span> </h2>}


                        {loading && (<Spinner text="Loading..."></Spinner>)}
                        {searchedQuranAyah.map((ayah) => (
                            <div className="row rounded-lg shadow-md m-3 p-5 hover:bg-green-700" key={ayah.id} onClick={() => navigate(`/Surah/${ayah.surah_number}/${ayah.ayah_number}`)}>
                                <div className="grid grid-cols-l">
                                    <h2 className="">{ayah.surah_number}. {ayah.surah_en_name} ( {ayah.ayah_number} )</h2>
                                    <p>{ayah.text}</p>
                                </div>
                            </div>
                        ))}



                    </div>
                </div>

                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="flex min-h-full flex-col items-start bg-base-100 shadow-xl is-drawer-close:w-0 is-drawer-open:w-64">
                        {/* Sidebar content here */}
                        <ul className="menu w-full grow p-4">
                            <li>
                                <details>
                                    <summary>Sort by</summary>
                                    <ul>
                                        <li onClick={() => getSurahByTraditionalOrder()}><a>Traditional Order</a></li>
                                        <li><a as="button" onClick={() => getSurahAccordingToRevelation()}>According To Revelation</a></li>
                                        <li><a as="button" onClick={() => getSurahByDescSurahName()}>A-Z Surah Name</a></li>
                                        <li><a as="button" onClick={() => getSurahByMinToMaxSurahTotalAyah()}>Surah Total Ayah Min Max</a></li>
                                        <li><a as="button" onClick={() => getSurahByMaxToMinSurahTotalAyah()}>Surah Total Ayah Max to Min</a></li>
                                        <li><a as="button" onClick={() => getMeccanSurah()}>Meccan Surah</a></li>
                                        <li><a as="button" onClick={() => getMedinanSurah()}>Medinan Surah</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <input type="text" onChange={(e) => searchQuran(e)} style={{ padding: "5px" }} placeholder="Search Surah" />
                            </li>

                            {surahData.map((surah) => (
                                <li key={surah.id}><a href={`/surah/${surah.surah_number}`}>{surah.surah_number}. {surah.surah_ar_name} <br></br>
                                    {surah.surah_en_name} ( {surah.total_ayah} )<br></br>
                                    {surah.surah_en_name_translation} : {surah.revelation_type}<br></br>
                                    <span className="highlight">{surah.note}</span> </a></li>
                            ))}

                            {/* List item */}
                        </ul>
                    </div>
                </div>
            </div>
            <hr />



        </>
    )
}

export default Quran;