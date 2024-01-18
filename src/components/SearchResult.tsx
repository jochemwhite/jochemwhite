import { WordDefinition } from "@/types/dictionary";
import React from "react";

interface Props {
  searchResults: WordDefinition;
}

export default function SearchResult({ searchResults }: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold">{searchResults.word}</h2>
      <p className="text-xl">{searchResults.meanings[0].definitions[0].definition}</p>

      <p className="text-xl">Example:</p>
      <p className="text-xl">{searchResults.meanings[0].definitions[0].example}</p>
     
    </div>
  );
}
