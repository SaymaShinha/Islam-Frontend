const highlightText = (text, query) => {
  if (!text) return "";

  const cleanQuery = query?.trim();

  if (!cleanQuery) {
    return text;
  }

  const words = cleanQuery
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"));

  if (!words.length) {
    return text;
  }

  const regex = new RegExp(`(${words.join("|")})`, "gi");

  return text.split(regex).map((part, index) => {
    const matched = words.some(
      (word) => part.toLowerCase() === word.replace(/\\/g, "").toLowerCase(),
    );

    return matched ? (
      <mark
        key={index}
        className="rounded-md bg-warning/40 px-1 font-bold text-warning-content"
      >
        {part}
      </mark>
    ) : (
      part
    );
  });
};

export default highlightText;
