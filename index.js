const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);

function appendCat(name){
    const appNewCats = [...cats, name]
    return appNewCats
}
function prependCat(name){
    const preNewCats = [name, ...cats];
    return preNewCats
} 
function destructivelyAppendCat(name) {
    cats.push ("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}  

function destructivelyRemoveLastCat(name){
    cats.pop("Tom")
}
function destructivelyRemoveFirstCat(name) {
   cats.shift("Meddy") 
}
function removeLastCat() {
    return cats.slice (0,cats.length -1);
}
function removeFirstCat() {
    return cats.slice(1);
}