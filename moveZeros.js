function moveZeros(arr) {
    /* Opcion mala 

    let newArr = []
    let zeros = 0
    arr.forEach(i => {
        i === 0 ? zeros += 1 : newArr.push(i)
    });
    while (zeros > 0){
        newArr.push(0)
        zeros--
    }

    */

    let noZeros = arr.filter(i => i !== 0)
    let zeros = arr.filter(i => i === 0)
    return noZeros.concat(zeros)
}
let arr = [false,1,0,1,2,0,1,3,"a"]
document.getElementById("normalArray").innerHTML += arr.join("-")
document.getElementById("finalArray").innerHTML += (moveZeros(arr)).join("-")