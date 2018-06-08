var katzDeli = []

var takeANumber = (katzDeliLine, name) => {

  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}


var nowServing = katzDeliLine => {

  if (katzDeliLine.length === 0) {

    return 'There is nobody waiting to be served!'

  } else {

    return `Currently serving ${katzDeliLine[0]}.`
    var katzDeliLine = katzDeliLine.shift()

  }
}
