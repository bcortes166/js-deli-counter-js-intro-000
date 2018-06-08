var katzDeli = []

var takeANumber = (katzDeliLine, name) => {

  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}


var nowServing = () => {

  return katzDeliLine[0]
  katzDeliLine.shift()
}
