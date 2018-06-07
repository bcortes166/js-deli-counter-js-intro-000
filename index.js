var takeANumber = (katzDeliLine, name) => {

  katzDeliLine.push(name)
  return katzDeliLine.length + 1
}


var nowServing = () => {

  return katzDeliLine(0)
  katzDeliLine.shift()
}
