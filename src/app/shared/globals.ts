import * as s  from "../snippets/snippets.index";
import { Language, SnippetList } from "./interfaces";

export const languages: Language[] = [
  {
    briefDescription: 'Node.js Version Manager for Windows',
    label: 'nvm',
    prismLabel: 'txt'
  },
  {
    extendedLabel: 'javascript',
    label: 'js',
    prismLabel: 'js'
  },
];

export const snippets: SnippetList = {
  'js': s.jsSnippets,
  'nvm': s.nvmSnippets,
}


