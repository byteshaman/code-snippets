import { Snippet } from './../shared/interfaces';

export const jsSnippets: Snippet[] = [
  {
    description: 'Reverse string',
    code: `const dest = source.split('').reverse().concat('');`
  },
  {
    description: 'Deep copy an object',
    code: `const dest = JSON.parse(JSON.stringify(source));`
  },
  {
    description: 'Get date in dd/mm/yyyy hh:mm format',
    code: `const date = new Date();\n\rconst dateString = \`\${date.getDate()}/\${(date.getMonth() + 1)}/\${date.getFullYear()} \${date.getHours()}:\${date.getMinutes()};\``
  },
]