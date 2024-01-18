export interface WordDefinition {
  word: string;
  meanings: {
    definitions: {
      definition: string;
      example?: string;
    }[];
  }[];
}
