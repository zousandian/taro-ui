const ora = require('ora')
const fs = require('fs-extra')
const path = require('path')

const H5_DIST_PATH = 'packages/taro-ui-demo/dist'
const STATIC_H5_PATH = 'packages/taro-ui-docs/static/h5'

const spinner = ora('Copy h5 website to taro-ui-docs...')
spinner.start()

const copyFromPath = path.resolve(__dirname, '..', H5_DIST_PATH)
const copyToPath = path.resolve(__dirname, '..', STATIC_H5_PATH)

fs.pathExists(copyFromPath)
  .then(exists => {
    if (!exists) {
      console.log()
      console.log('Error: no such file or directory, path', H5_DIST_PATH)
      return process.exit(1)
    }
  })

fs.pathExists(copyToPath)
  .then(exists => exists && fs.emptyDirSync(copyToPath))

fs.copy(copyFromPath, copyToPath)
  .then(() => spinner.stop())
  .catch(err => console.error(err))
