var katzDeli = []

var takeANumber = (katzDeliLine, name) => {

  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}


var nowServing = deliLine => {

  if (deliLine.length === 0) {

    return 'There is nobody waiting to be served!'

  } else {

    return `Currently serving ${deliLine.shift()}.`
  }
}

var currentLine = deliLine => {

  if (deliLine.length === 0) {

    return 'The line is currently empty.'

  } else {

    var string = ''; var list = []; var i; var n;
    var stringAdd = function() {
      string = string + '${n}. ${deliLIne(i)}, '
    }
    for (i = 0; i < deliLine.length; i++) {
      n = n + 1;
      stringAdd()
    }

  return `The line is currently: ${string}`
}
}
