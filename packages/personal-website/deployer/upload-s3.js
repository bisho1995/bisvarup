const fs = require('fs')
const path = require('path')
const AWS = require('aws-sdk')

AWS.config.loadFromPath(path.join(__dirname, '..', 'aws-config.json'))

const s3 = new AWS.S3({ apiVersion: '2006-03-01' })

function getFiles(folder) {
  if (!fs.existsSync(folder)) return null
  if (fs.statSync(folder).isFile()) return folder

  return fs.readdirSync(folder).reduce((acc, f) => {
    const file = path.join(folder, f)
    if (fs.lstatSync(file).isFile()) acc.push(file)
    else acc.push(...getFiles(file))

    return acc
  }, [])
}

const BUILD_DIR = path.join(__dirname, '..', 'build')

const allBuildFiles = getFiles(BUILD_DIR)

function getMimeType(file) {
  const ext = path.extname(file)
  switch (ext) {
    case '.html':
    case '.htm':
      return 'text/html'
    case '.css':
      return 'text/css'
    case '.js':
      return 'text/javascript'
    case '.json':
      return 'application/json'
    case '.jpg':
    case '.jepg':
      return 'image/jpeg'
    case '.svg':
      return 'image/svg+xml'
    case '.ico':
      return 'image/vnd.microsoft.icon'
    default:
      return ''
  }
}

allBuildFiles.forEach((file) => {
  const uploadParams = { Bucket: 'bisvarup.me', Key: '', Body: '', ContentType: getMimeType(file), ACL: 'public-read' }

  const fStream = fs.createReadStream(file)
  fStream.on('error', console.error)

  uploadParams.Body = fStream
  uploadParams.Key = file
    .split(BUILD_DIR)
    .pop()
    .replace(/^\/|\/$/g, '')

  s3.upload(uploadParams, (err, data) => {
    if (err) {
      console.error('Error', err)
    }
    if (data) {
      console.log('Upload Success', data.Location)
    }
  })
})

// const uploadParams = { Bucket: 'bisvarup.me', Key: 'TEST.TEST', Body: '' }
// const fStream = fs.createReadStream(path.join(__dirname, '..', 'package.json'))
// fStream.on('error', console.error)
// uploadParams.Body = fStream
// s3.upload(uploadParams, (err, data) => {
//   if (err) throw err

//   console.log(data)
// })
