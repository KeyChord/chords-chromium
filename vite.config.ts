import { $ } from 'dax';
import {keychord, keychordBin} from '@keychord/vite-plugin';

export default {
  plugins: [
    keychord(),
    {
      async buildEnd() {
        await $`bun build ./src/bin/* --target=bun --outdir=./bin`;
      }
    }
  ]
};
