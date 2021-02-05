import React, { useCallback, useEffect, useState } from 'react'
import Layout from '~/components/Layout'
import { useDropzone } from 'react-dropzone'
import { apiClient } from '../../utils/apiClient'
import { FaFileUpload } from 'react-icons/fa'
import { Field, Form } from 'react-final-form'
import Button from '~/components/Button'
import { CreatePostRequest } from '~/server/types'
import classNames from 'classnames'
import { useRouter } from 'next/dist/client/router'

const NewPost = () => {
  const router = useRouter()

  const [imageFile, setImageFile] = useState<File>()
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setImageFile(acceptedFiles[0])
  }, [])

  const {
    getRootProps,
    getInputProps,
    fileRejections,
    isDragActive
  } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: false
  })

  useEffect(() => {
    console.log(fileRejections)
  }, [fileRejections])

  const onSubmit = async (data: CreatePostRequest) => {
    data.image = imageFile as Blob
    await apiClient.posts
      .$post({ body: data })
      .then(() => router.push('/'))
      .catch((e) => alert(e))
  }

  return (
    <Layout title="Inngur | New post">
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting }) => (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-white p-8 shadow rounded"
          >
            <div className="flex justify-center items-center space-x-4">
              <label className="flex-1 text-gray-700">Title</label>
              <Field
                name="title"
                component="input"
                type="text"
                placeholder="optional"
                className={classNames(
                  'form-input flex-6 w-full bg-gray-100 rounded',
                  { 'animate-pulse': submitting }
                )}
              />
            </div>

            <div
              className={classNames(
                'flex justify-center items-center bg-gray-100 rounded',
                { 'animate-pulse': submitting }
              )}
              style={{ height: 'calc(100vh / 2)' }}
              {...getRootProps()}
            >
              <input name="image" {...getInputProps()} />
              {isDragActive ? <p>Drop a file here ...</p> : <FaFileUpload />}
            </div>

            <div className="flex justify-center">
              <Button
                type="button"
                disabled={!imageFile || submitting}
                className="w-1/2"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </form>
        )}
      />
    </Layout>
  )
}

export default NewPost
