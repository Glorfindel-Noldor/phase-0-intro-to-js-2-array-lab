const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push(name);
};
function destructivelyPrependCat(name){
    cats.unshift(name);
};
function destructivelyRemoveLastCat(name){
    cats.pop(name);
};
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
};
function appendCat(name){
   return appendCat = [...cats,name];
};
function prependCat(name){
    return prependCat = [name, ...cats];
}
function removeLastCat(name){
    return removeLastCat = cats.slice(name,-1);
}
function removeFirstCat(name){
    return removeFirstCat = cats.slice(1,name)
}