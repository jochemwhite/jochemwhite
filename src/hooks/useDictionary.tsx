import { WordDefinition } from "@/types/dictionary";
import axios from "axios";

export default function useDictionary() {
  async function getWordDefinition(word: string) {
    try {
      const res = await axios.get<WordDefinition[]>(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

      return res.data[0];
    } catch (error) {
      console.error(error);
    }
  }

  return { getWordDefinition };
}
