function* makeIndex() {
  var i = 0
  while(true) {
    console.log("ss")
    var stop = yield i
    i++
    console.log("~~")
    console.log(stop)
    if (stop === true) {
      break
    }
  }
}

var iter = makeIndex()
console.log(iter.next().value)
console.log("iiii")
console.log(iter.next().value)
console.log(iter.next(true))
