const asmaUlHusna = async (lang = "en") => {
  const apiKey = import.meta.env.VITE_Islamicapi_API_KEY;

  const response = await fetch(
    `https://islamicapi.com/api/v1/asma-ul-husna/?language=${lang}&api_key=${apiKey}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Asmaul Husna");
  }

  return await response.json();
};

export { asmaUlHusna };
