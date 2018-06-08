var katzDeli = []

var takeANumber = (katzDeliLine, name) => {

  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}


var nowServing = () => {

  if (katzDeliLine.length) > 0 {
    return 'There is nobody waiting to be served'
  } else {
  return katzDeliLine[0]
  katzDeliLine.shift()
  }
}
