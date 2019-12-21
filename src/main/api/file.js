import AWS from 'aws-sdk'
import * as fs from 'fs'
import { ACCESS_KEY, SECRET_ACCESS_KEY, USER_BUCKET_NAME, MEETING_BUCKET_NAME } from '../../../config/config'
import { createMeetingFileKey, createUserVoiceFileKey } from '../util'

const s3 = new AWS.S3({
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY
})

const uploadFileStream = (fileStream, bucketName, fileKey) => {
  return new Promise((resolve, reject) => {
    s3.upload({
      Bucket: bucketName,
      Key: fileKey,
      Body: fileStream
    }, (err, data) => {
      if (err) reject(err)
      resolve(fileKey)
    })
  })
}

const uploadS3 = (filePath, bucketName, fileKey) => {
  return uploadFileStream(fs.createReadStream(filePath), bucketName, fileKey)
}

export const uploadMeetingFile = (filePath) => {
  return uploadS3(filePath, MEETING_BUCKET_NAME, createMeetingFileKey(filePath))
}

export const uploadUserFile = (filePath, userName) => {
  return uploadS3(filePath, USER_BUCKET_NAME, createUserVoiceFileKey(userName, filePath))
}
