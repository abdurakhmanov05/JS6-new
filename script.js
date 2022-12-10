let user = {
    name: 'Zafar',
    surname: 'Abdurakhmanov',
    age: 17,
    gender: 'male',
    disciple: {
        number: 35,
        class: 11,
        room: 13
    },
    passport: {
        serries: 'AC',
        number: 14579146871,
        date: 2021
    },
    
}

let description = {
    hairColor: 'black',
    eyesColor: 'black',
    wight: 80,
    height: 183,
}

let types = {
    string: [],
    number: [],
    object: [],
    boolean: []
}

let obj = Object.assign({}, user, description)
let keys = Object.keys(obj)
let values = Object.values(obj)
let newObj =  Object.assign({}, keys, values)

    if (newObj === 'number') {
        types.number.push(newObj)
    } else if (newObj === 'string') {
        types.string.push(newObj)
    } else if (newObj === 'object') {
        types.object.push(newObj)
    } else {
        types.boolean.push(newObj)
    }

console.log(obj);
console.log(keys);
console.log(values);
console.log(newObj);
console.log(types);