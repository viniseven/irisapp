export function formatTitleCase(text: string): string {
  if (!text) return "";

  // Preposições e artigos que devem permanecer em minúsculo
  const prepositions = new Set([
    "de",
    "da",
    "do",
    "das",
    "dos",
    "e",
    "em",
    "para",
    "com",
  ]);

  return text
    .toLowerCase()
    .split(" ")
    .map((word, index) => {
      // Primeira palavra do nome sempre fica maiúscula, as demais dependem se são preposição
      if (index === 0 || !prepositions.has(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word;
    })
    .join(" ");
}
