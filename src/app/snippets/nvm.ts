import { Snippet } from './../shared/interfaces';

export const nvmSnippets: Snippet[] = [
  {
    description: 'Display the current running version of NVM',
    code: `nvm v`
  },
  {
    description: 'Display active version',
    code: `nvm current`
  },
  {
    description: 'Switch to the latest installed version',
    code: `nvm use lts`
  },
  {
    description: 'Switch to a specific version',
    code: `nvm use <version>`
  },
  {
    description: 'List local versions',
    code: `nvm ls`
  },
  {
    description: 'List remote available versions',
    code: `nvm ls available`
  },
  {
    description: 'Install the latest available version',
    code: `nvm install node`
  },
  {
    description: 'Install a specific version',
    code: `nvm install <version>`
  },
  {
    description: 'Uninstall a specific version',
    code: `nvm uninstall <version>`
  },
]