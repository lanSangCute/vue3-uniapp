import { defineConfig, ConfigEnv, UserConfigExport } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
// import { viteVConsole } from 'vite-plugin-vconsole';
import * as path from 'path';

const { resolve } = require('path');

function pathResolve(dir) {
  return resolve(__dirname, dir);
}
// export default ({ command, mode }: ConfigEnv): UserConfigExport=>{
//   plugins: [uni(), viteVConsole({
//     entry: [path.resolve('src/main.ts')], // entry file
//     localEnabled: command === 'serve', // dev environment
//     enabled: command !== 'serve' || mode === 'test', // build production
//     config: { // vconsole options
//       maxLogNumber: 1000,
//       theme: 'light'
//     }
//   })],
//   resolve: {
//     alias: {
//       '/@/': pathResolve('./src'),
//     },
//   },
// //   viteVConsole({
// //     entry: resolve(__dirname, './src/main.ts'), // entry file
// //     localEnabled: mode !== 'prod', // dev environment
// //     enabled: mode !== 'prod', // build production
// //     config: {
// //       // vconsole options
// //       maxLogNumber: 1000,
// //       theme: 'light'
// //     }
// // })
// });

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  console.log(command, command === 'serve');
  console.log(mode, command !== 'serve' || mode === 'test');

  return {
    plugins: [
      uni(),
      // viteVConsole({
      //   entry: [path.resolve('src/main.ts')], // entry for each page, different from the above
      //   localEnabled: true,
      //   enabled: true,
      //   config: {
      //     maxLogNumber: 1000,
      //     theme: 'dark',
      //   },
      // }),
      // viteVConsole({
      //   entry: [path.resolve('src/main.ts')], // entry file
      //   localEnabled: command === 'serve', // dev environment
      //   enabled: command !== 'serve' || mode === 'test', // build production
      //   config: { // vconsole options
      //     maxLogNumber: 1000,
      //     theme: 'light',
      //   },
      // }),
    ],
    resolve: {
      alias: {
        '/@/': pathResolve('./src'),
      },
    },
  };
};
