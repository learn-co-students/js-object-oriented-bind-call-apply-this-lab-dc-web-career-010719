//Your code here
function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, name, arg) {
  return fn.call(name, arg)
}

function setThisWithApply(fn, name, args) {
  return fn.apply(name, args)
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  // const describeSalad = pbj.describe.bind(salad);
  return functionToBeCopied.bind(thisValue)
}
