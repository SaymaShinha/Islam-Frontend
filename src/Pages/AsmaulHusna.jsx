import { useLoaderData } from "react-router";
import { asmaUlHusna } from "../Functions/getDataFromAPI.js";
import { useState, useEffect } from "react";
import Spinner from "../Components/Spinner.jsx";

function AsmaulHusna() {
    const [names, setNames] = useState([]);
    const [lang, setLang] = useState("en");
    const [loading, setLoading] = useState(false);

    const languages = [
        { code: "am", name: "Amharic (አማርኛ)" },
        { code: "ar", name: "Arabic (العربية)" },
        { code: "az", name: "Azerbaijani (Azərbaycan)" },
        { code: "bg", name: "Bulgarian (Български)" },
        { code: "bn", name: "Bengali (বাংলা)" },
        { code: "bs", name: "Bosnian (Bosanski)" },
        { code: "cs", name: "Czech (Čeština)" },
        { code: "da", name: "Danish (Dansk)" },
        { code: "de", name: "German (Deutsch)" },
        { code: "dv", name: "Dhivehi (ދިވެހި)" },
        { code: "el", name: "Greek (Ελληνικά)" },
        { code: "en", name: "English" },
        { code: "es", name: "Spanish (Español)" },
        { code: "et", name: "Estonian (Eesti)" },
        { code: "fa", name: "Persian (فارسی)" },
        { code: "fi", name: "Finnish (Suomi)" },
        { code: "fr", name: "French (Français)" },
        { code: "gu", name: "Gujarati (ગુજરાતી)" },
        { code: "ha", name: "Hausa" },
        { code: "haw", name: "Hawaiian (ʻŌlelo Hawaiʻi)" },
        { code: "he", name: "Hebrew (עברית)" },
        { code: "hi", name: "Hindi (हिन्दी)" },
        { code: "hr", name: "Croatian (Hrvatski)" },
        { code: "hu", name: "Hungarian (Magyar)" },
        { code: "hy", name: "Armenian (Հայերեն)" },
        { code: "id", name: "Indonesian (Bahasa Indonesia)" },
        { code: "is", name: "Icelandic (Íslenska)" },
        { code: "it", name: "Italian (Italiano)" },
        { code: "ja", name: "Japanese (日本語)" },
        { code: "ka", name: "Georgian (ქართული)" },
        { code: "kk", name: "Kazakh (Қазақ тілі)" },
        { code: "km", name: "Khmer (ភាសាខ្មែរ)" },
        { code: "kn", name: "Kannada (ಕನ್ನಡ)" },
        { code: "ko", name: "Korean (한국어)" },
        { code: "ku", name: "Kurdish (کوردی)" },
        { code: "lo", name: "Lao (ລາວ)" },
        { code: "lt", name: "Lithuanian (Lietuvių)" },
        { code: "lv", name: "Latvian (Latviešu)" },
        { code: "mg", name: "Malagasy" },
        { code: "mi", name: "Maori (Te Reo Māori)" },
        { code: "ml", name: "Malayalam (മലയാളം)" },
        { code: "mr", name: "Marathi (मराठी)" },
        { code: "ms", name: "Malay (Bahasa Melayu)" },
        { code: "mt", name: "Maltese (Malti)" },
        { code: "my", name: "Burmese (မြန်မာဘာသာ)" },
        { code: "ne", name: "Nepali (नेपाली)" },
        { code: "nl", name: "Dutch (Nederlands)" },
        { code: "no", name: "Norwegian (Norsk)" },
        { code: "or", name: "Odia (ଓଡ଼ିଆ)" },
        { code: "pa", name: "Punjabi (ਪੰਜਾਬੀ)" },
        { code: "pl", name: "Polish (Polski)" },
        { code: "ps", name: "Pashto (پښتو)" },
        { code: "pt", name: "Portuguese (Português)" },
        { code: "ro", name: "Romanian (Română)" },
        { code: "ru", name: "Russian (Русский)" },
        { code: "sd", name: "Sindhi (سنڌي)" },
        { code: "si", name: "Sinhala (සිංහල)" },
        { code: "sk", name: "Slovak (Slovenčina)" },
        { code: "sl", name: "Slovenian (Slovenščina)" },
        { code: "so", name: "Somali (Soomaali)" },
        { code: "sq", name: "Albanian (Shqip)" },
        { code: "sr", name: "Serbian (Српски)" },
        { code: "sv", name: "Swedish (Svenska)" },
        { code: "sw", name: "Swahili (Kiswahili)" },
        { code: "ta", name: "Tamil (தமிழ்)" },
        { code: "te", name: "Telugu (తెలుగు)" },
        { code: "th", name: "Thai (ไทย)" },
        { code: "ti", name: "Tigrinya (ትግርኛ)" },
        { code: "tl", name: "Filipino" },
        { code: "tr", name: "Turkish (Türkçe)" },
        { code: "ug", name: "Uyghur (ئۇيغۇرچە)" },
        { code: "uk", name: "Ukrainian (Українська)" },
        { code: "ur", name: "Urdu (اردو)" },
        { code: "uz", name: "Uzbek (Oʻzbekcha)" },
        { code: "vi", name: "Vietnamese (Tiếng Việt)" },
        { code: "zh", name: "Chinese (中文)" }
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const result = await asmaUlHusna(lang);

                console.log(result);

                if (result?.data?.names) {
                    setNames(result.data.names);
                } else {
                    setNames([]);
                }

            } catch (error) {
                console.error(error);
                setNames([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [lang]); // ✅ Runs whenever language changes

    return (
        <div className="p-4">

            {/* Language Selector */}
            <div className="mb-6">
                <select
                    value={lang}
                    onChange={(e) => setLang(e.target.value)}
                    className="select select-bordered w-full max-w-xs"
                >
                    {languages.map((language) => (
                        <option key={language.code} value={language.code}>
                            {language.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Loader */}
            {loading && <Spinner text="Please wait..." />}

            {/* Cards */}
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">

                {names?.map((name) => (
                    <div
                        className="card bg-gray-700 text-white shadow-lg rounded-lg"
                        key={name.number}
                    >
                        <div className="card-body">

                            <h2 className="card-title text-blue-400">
                                {name.name}
                            </h2>

                            <p className="text-red-400">
                                {name.transliteration}
                            </p>

                            <p className="text-yellow-400">
                                {name.translation}
                            </p>

                            <p>{name.meaning}</p>

                            <audio controls className="w-full mt-2">
                                <source
                                    src={`https://islamicapi.com/${name.audio}`}
                                    type="audio/mp3"
                                />
                            </audio>

                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default AsmaulHusna;

