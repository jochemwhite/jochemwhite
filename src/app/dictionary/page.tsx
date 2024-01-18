"use client";
import Search from "@/components/Search";
import SearchResult from "@/components/SearchResult";
import useDictionary from "@/hooks/useDictionary";
import { WordDefinition } from "@/types/dictionary";
import { useDebounce } from "@uidotdev/usehooks";
import React from "react";

export default function Page() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState<WordDefinition>();
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const { getWordDefinition } = useDictionary();

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      handleSearch();
    }
  }, [debouncedSearchTerm]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  function handleSearch() {
    if (!searchTerm) return;

    switch (searchTerm) {
      case "innocent":
        setSearchResults({
          word: "innocent",
          meanings: [
            {
              definitions: [
                {
                  definition: "Daniek ",
                  example: "https://www.twitch.tv/daniekjuu",
                },
              ],
            },
          ],
        });
        break;
      case "onschuldig":
        setSearchResults({
          word: "onschuldig",
          meanings: [
            {
              definitions: [
                {
                  definition: "Daniek",
                  example: "https://www.twitch.tv/daniekjuu",
                },
              ],
            },
          ],
        });
        break;

      default:
        getWordDefinition(searchTerm).then((res) => setSearchResults(res));
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-r from-green-400 to-blue-500">
      <h1 className="text-9xl uppercase font-black">Dictionary</h1>
      <Search onChange={handleChange} />

      {searchResults && <SearchResult searchResults={searchResults} />}
    </div>
  );
}
