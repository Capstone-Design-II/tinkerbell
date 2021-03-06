import * as crypto from 'crypto'
import * as path from 'path'
import * as R from 'ramda'
import moment from 'moment'

const hashString = (str) => {
  const md5 = crypto.createHash('md5')
  const hash = md5.update(str).digest('hex')
  return R.slice(0, 8, hash)
}

export const createMeetingFileKey = (filePath) => {
  const dateToken = moment().format('YYMMDDHHmmss')
  const fileName = R.pipe(
    path.basename,
    hashString
  )(filePath)
  return dateToken + fileName + path.extname(filePath)
}

export const createUserVoiceFileKey = (name, filePath) => {
  const dateToken = moment().format('YYMMDDHHmmss')
  const fileName = hashString(name)
  return dateToken + fileName + path.extname(filePath)
}
