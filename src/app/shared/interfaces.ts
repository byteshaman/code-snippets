export interface Language {
  briefDescription?: string;
  extendedLabel?: string;
  label: string;
  prismLabel: string;
}

export interface Snippet {
  code: string;
  description: string;
}

export interface SnippetList {
  [key: string]: Snippet[];
}