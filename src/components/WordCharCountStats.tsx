type wordCharCountStatsType = {
  wordLength: number;
  charLength: number;
};

export default function WordCharCountStats({
  charLength,
  wordLength,
}: wordCharCountStatsType) {
  return (
    <div className="absolute bottom-3 right-4 text-xs text-gray-500 bg-white px-2 py-1 rounded border">
      {wordLength} words • {charLength} characters
    </div>
  );
}
