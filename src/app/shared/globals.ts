import * as s  from "../snippets/snippets.index";
import { Language, SnippetList } from "./interfaces";

export const languages: Language[] = [
  {
    extendedLabel: 'javascript',
    label: 'js',
    prismLabel: 'js'
  },
  {
    briefDescription: 'Node.js Version Manager for Windows',
    label: 'nvm',
    prismLabel: 'txt'
  },
];

export const snippets: SnippetList = {
  'js': s.jsSnippets,
  'nvm': s.nvmSnippets,
}


