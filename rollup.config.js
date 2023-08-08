import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.ts',
  output: {
    file: 'public/index.js',
    format: 'es'
  },
  plugins: [
    typescript(),
    resolve({ browser: true })
  ]
};
