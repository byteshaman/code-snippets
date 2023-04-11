import { Snippet } from './../shared/interfaces';

export const jsSnippets: Snippet[] = [
  {
    description: 'Reverse a string',
    code: `const reversed = str.split('').reverse().join('');`
  },
  {
    description: 'Deep copy an object',
    code: `const newObj = JSON.parse(JSON.stringify(oldObj));`
  },
  {
    description: 'Get date in dd/mm/yyyy hh:mm format',
    code: `const date = new Date();\n\rconst dateString = \`\${date.getDate()}/\${(date.getMonth() + 1)}/\${date.getFullYear()} \${date.getHours()}:\${date.getMinutes()};\``
  },
  {
    description: 'Empty a node of all its children',
    code: `myNode.replaceChildren();`
  },
  {
    description: 'Truncate a string longer than num',
    code: `const trucated = str.length > num ? str.slice(0, num) + "..." : str;`
  },
  {
    description: 'Remove all falsy values from an array',
    code: `const dest = source.filter(el => Boolean(el));`
  },
]