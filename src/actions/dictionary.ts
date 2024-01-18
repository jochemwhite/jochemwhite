"use server"

class dictionary {
  URL: string = 'https://api.dictionaryapi.dev/api/v2/entries/';
  
  constructor() {
    this.URL = 'https://api.dictionaryapi.dev/api/v2/entries/';
  }

  async getDefinition(word: string) {
    const response = await fetch(`${this.URL}en/${word}`);
    const data = await response.json();
    return data;
  }






}


const dictionaryAPI= new dictionary();