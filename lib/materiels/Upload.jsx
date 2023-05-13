import React, { useEffect, useState, useCallback } from 'react'
import { Upload as AntdUpload, Button, message } from 'antd'

export default function Upload (props) {
  const { disabled, action, listType = 'picture-card', value = [], onChange, max, size, ...rest } = props
  const [fileList, setFileList] = useState([])
  useEffect(() => {
    if (!value) {
      return
    }
    let adapterValue = value
    if (typeof adapterValue === 'string') {
      adapterValue = [adapterValue]
    }
    setFileList(adapterValue.map((item, index) => {
      return {
        uid: `${item}${index}`,
        name: '',
        url: item,
        status: 'done',
      }
    }))
  }, [])

  const handlePicChange = useCallback(
    ({ file, fileList }) => {
      if (size && file.size / 1024 >= size) {
        message.error(`超出最大图片限制${size}KB`)

        return
      }

      if (file.status === 'error') {
        message.error(file.response && file.response.msg || '上传图片失败')
        // 说明 如果要显示上传错误的样式，需要自己实现上传列表的展示，upload默认不支持
        setFileList(fileList.filter(item => !item.error))

        return
      }

      if (file.status === 'done') {
        setFileList(fileList.map((item) => {
          if (item.response) {
            item.url = item.response.data || item.response.url
          }

          return item
        }))
        onChange(fileList.map(item => item.url).filter(item => !!item))
      }

      if (file.status === 'uploading' || file.status === 'removed') {
        setFileList(fileList)
        onChange(fileList.map(item => item.url).filter(item => !!item))
      }

      if (fileList.length === 0) {
        onChange([])
      }
    },
    [],
  )

  return (
    <AntdUpload
      disabled={disabled}
      action={action}
      listType={listType}
      {...rest}
      fileList={fileList}
      onChange={handlePicChange}
    >
      {
        fileList.length < max || !max ? <div>
          <Button disabled={disabled}>上传</Button>
        </div> : null
      }
    </AntdUpload>
  )
}
