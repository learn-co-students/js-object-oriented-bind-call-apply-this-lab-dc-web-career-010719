//Your code here
function justInvoke(fn){
  let x = fn
  return x()



}
function setThisWithCall(fn, thisValue, arg){
  return fn.call(thisValue, arg)



}
function setThisWithApply(fn, thisValue, args){

  if (typeof(args) === "object"){
    return fn.apply(thisValue, args)
  }else{
    return fn.apply(thisValue, [args])
  }


}
function returnNewFunctionOf(functionToBeCopied, thisValue){
  return functionToBeCopied.bind(thisValue)
  debugger


}
