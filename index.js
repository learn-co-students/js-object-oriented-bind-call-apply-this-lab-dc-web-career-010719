//Your code here

function justInvoke(fnc) {
  return fnc()
}

function setThisWithCall(fnc, thisValue, arg) {
  return fnc.call(thisValue, arg)
}

function setThisWithApply(fnc, thisValue, args) {
  return fnc.apply(thisValue, args)
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  return functionToBeCopied.bind(thisValue)
}
