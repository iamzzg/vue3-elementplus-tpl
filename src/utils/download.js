/**
 * 下载文件
 * @param {*} blobPart 二进制对象
 * @param {*} filename 文件命
 */
export function useDownLoad(blobPart, filename, ext = '.xls') {
  const blob = new Blob([blobPart])
  const objectUrl = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = objectUrl
  a.download = filename + ext
  a.onload = () => {
    URL.revokeObjectURL(objectUrl)
  }
  a.click()
}
