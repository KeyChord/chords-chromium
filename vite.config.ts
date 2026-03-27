import { $ } from 'dax';
import chordPackage from '@keychord/vite-plugin';

export default {
  plugins: [
    chordPackage(),
    {
      async buildEnd() {
        await $`bun build  ./src/bin/chrome-remote-interface.ts --target=bun --outfile=./bin/chrome-remote-interface.js`;
      }
    }
  ]
};
