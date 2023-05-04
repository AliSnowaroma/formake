function segmentationArray (arr, ssLenth = 1) {
  if (arr.length <= ssLenth) {
    return [arr]
  }
  const arrCopy = arr.concat()
  const segArr = []
  while (arrCopy.length > ssLenth) {
    segArr.push(arrCopy.splice(0, ssLenth))
  }
  segArr.push(arrCopy)

  return segArr
}

export default segmentationArray
