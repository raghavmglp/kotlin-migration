import { build } from 'esbuild';
import { mkdirSync, copyFileSync } from 'fs';

mkdirSync('app/vendor', { recursive: true });
mkdirSync('public/vendor', { recursive: true });

const shared = {
  bundle: true,
  format: 'iife',
  platform: 'browser',
  globalName: 'KotlinWebSiteUI',
};

await build({
  ...shared,
  entryPoints: ['node_modules/@jetbrains/kotlin-web-site-ui/dist/header.js'],
  outfile: 'app/vendor/header.js',
});

await build({
  ...shared,
  entryPoints: ['node_modules/@jetbrains/kotlin-web-site-ui/dist/footer.js'],
  outfile: 'app/vendor/footer.js',
});

copyFileSync('app/vendor/header.js', 'public/vendor/header.js');
copyFileSync('app/vendor/footer.js', 'public/vendor/footer.js');

console.log('Done!');