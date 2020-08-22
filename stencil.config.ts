import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'al-card',
  taskQueue: 'async',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@ajmchambers/al-card',
      proxiesFile: '../al-card-react/src/components.ts'
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle'
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass(),
    postcss({
      plugins: [autoprefixer()]
    })
  ],
};
