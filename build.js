const path = require('path')
const fs = require('fs/promises')

// const CleanCSS = require('clean-css')
// const stylus = require('stylus')
const esbuild = require('esbuild')

//
// The output target is passed by the build tool,
// it's where we want to write all of our files.
//
const target = path.resolve(process.argv[2]);

if (!target) {
  console.log('  - Did not receive the build target path as an argument')
  process.exit(1)
}

// const cp = async (a, b) => fs.copyFile(
//   path.resolve(a),
//   path.join(b, path.basename(a))
// )

async function main () {
  await esbuild.build({
    entryPoints: ['src/main/index.js'],
    bundle: true,
    keepNames: true,
    // minify: true,
    format: 'cjs',
    outfile: path.join(target, 'main.js'),
    platform: 'node'
  })

}

main()
