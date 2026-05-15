const getQuranData = async () => {
    try{
    const res = await fetch(
        "https://raw.githubusercontent.com/SaymaShinha/islamDB/refs/heads/master/islam_public_quran__info.json"
    );

    if (!res.ok) {
        throw new Error("Failed to fetch Quran data");
    }

    const data = await res.json();
    return { data };
    } catch(error){
        throw error;
    }

};

const getSurahData = async (id) => {
    try{
    const res = await fetch(
        `https://raw.githubusercontent.com/SaymaShinha/islamDB/master/ar__uthmani/${id}.json`
    );

    if (!res.ok) {
        throw new Error("Failed to fetch Surah data");
    }

    const getSurah = await res.json();
    return { getSurah };
    } catch(error){
        throw error;
    }
}

const getTransSurahData = async (transLang = "bn__muhiuddin__khan", id = 1) => {
  try {
    const res = await fetch(
      `https://raw.githubusercontent.com/SaymaShinha/islamDB/master/${transLang}/${id}.json`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch Surah data");
    }

    const getTransSurah = await res.json();
    return { getTransSurah };
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}


const getEnglishTransliteration = async (id) => {
  try {
    const res = await fetch(
      `https://raw.githubusercontent.com/SaymaShinha/islamDB/refs/heads/add_audio_2/en__english__transliteration/${id}.json`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch Surah data");
    }

    const englishTransliteration = await res.json();
    return { englishTransliteration };
  }
  catch (error) {
    console.error("API Error:", error);
    throw error;
  }

}

const getEnglishTranslationQuran = async () => {
  try {
    const res = await fetch(
      `https://raw.githubusercontent.com/SaymaShinha/islamDB/refs/heads/add_audio_2/islam_public_en__saheeh__international.json`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch Surah data");
    }

    const quranData = await res.json();
    return { quranData };
  }
  catch (error) {
    console.error("API Error:", error);
    throw error;
  }

}

const getBanglaTranslationQuran = async () => {
  try {
    const res = await fetch(
      `https://raw.githubusercontent.com/SaymaShinha/islamDB/refs/heads/add_audio_2/islam_public_bn__muhiuddin__khan.json`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch Surah data");
    }

    const quranData = await res.json();
    return { quranData };
  }
  catch (error) {
    console.error("API Error:", error);
    throw error;
  }

}

export { getQuranData, getSurahData, getTransSurahData, getEnglishTransliteration, getEnglishTranslationQuran, getBanglaTranslationQuran };