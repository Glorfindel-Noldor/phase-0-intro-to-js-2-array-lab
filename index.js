const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name)
}

function destructivelyPrependCat(name){
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    return cats.pop()
}

function destructivelyRemoveFirstCat(){
    return cats.shift()
}

function appendCat(name){
    return [...cats, name]
}
// 5) appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name){
    return [name, ...cats]
}
// 6) prepends a cat to the cats array and returns a new array, leaving the cats array unchanged

function removeLastCat(){
    return cats.slice(0,-1)
}
// 7) removes the last cat in the cats array and returns a new array, leaving the cats array unchanged

function removeFirstCat(){
    return cats.slice(1)
}
// 8) removes the first cat from the cats array and returns a new array, leaving the cats array unchanged