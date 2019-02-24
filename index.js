//Your code here
function justInvoke(func) {
  return func()
}

function setThisWithCall(func, obj, arg) {
  return func.call(obj, arg)
}

function setThisWithApply(func, obj, arg){
  return  func.apply(obj, arg)
}

function returnNewFunctionOf(func, arg) {
const newFunction = func.bind(arg)
return newFunction
}
