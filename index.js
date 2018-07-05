// Add your functions and code here

function destructivelyAppendKitten (name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}


function destructivelyRemoveLastKitten() {
  kittens.pop()
}


function destructivelyRemoveFirstKitten() {
  kittens.shift(0)
  return kittens
}


function appendKitten(name){
  return kittens.concat(name)
}

function prependKitten(name){
<<<<<<< HEAD
  var kittensP = [name, ...kittens]
  return kittensP
  
}


function removeLastKitten() {
  return kittens.slice(0,2)

}


function removeFirstKitten() {
  return kittens.slice(1)
}
=======
  return kittens.splice(0,0,name)
}



//  var kittensP = [name, ...kittens]
//  return kittensP
>>>>>>> b6c3258fbcb137127a63facc76a1eb39e9a49cbf
