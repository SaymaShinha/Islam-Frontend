const getSurahAyahNumber = (data, globalAyahNumber, surahNumber) => {
  const currentIndex = data.findIndex(
    (ayah) =>
      Number(ayah.ayah_number) === Number(globalAyahNumber) &&
      Number(ayah.surah_number) === Number(surahNumber),
  );

  if (currentIndex === -1) {
    return null;
  }

  const previousAyahsInSurah = data
    .slice(0, currentIndex)
    .filter((ayah) => Number(ayah.surah_number) === Number(surahNumber));

  return previousAyahsInSurah.length + 1;
};

export default getSurahAyahNumber;
