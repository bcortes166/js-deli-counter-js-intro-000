var katzDeli = []

var takeANumber = (katzDeliLine, name) => {

  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}


var nowServing = deliLine => {

  if (deliLine.length === 0) {

    return 'There is nobody waiting to be served!'

  } else {

    return `Currently serving ${deliLine[0]}.`

    katzDeliLine.deliLine()

  }
}
