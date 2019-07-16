// TASK 0

let getNumbers = (text) => {
    let result = [];
    for (let i = 0; i < text.length; i++) {
        if (!isNaN(text[i])) {
            result.push(text[i]);
        }
    }
    return result;
}

getNumbers('Get07Up04Samurai');

// TASK 1

let findTypes = (...args) => {
    let
        numberCounter = 0,
        stringCounter = 0,
        booleanCounter = 0,
        objectCounter = 0,
        undefCouter = 0;
    for (let i = 0; i < args.length; i++) {
        switch (typeof args[i]) {
            case 'number':
                numberCounter++;
                break;
            case 'string':
                stringCounter++;
                break;
            case 'boolean':
                booleanCounter++;
                break;
            case 'undefined':
                undefCouter++;
                break;
            case 'object':
                objectCounter++;
                break;
            default:
                break;
        }
    }

    let result = {
        'number': numberCounter,
        'string': stringCounter,
        'boolean': booleanCounter,
        'undefined': undefCouter,
        'object': objectCounter
    }
    return result;
}

findTypes('Luke Skywalker', 'R2D2', null, 54, undefined, 5545, true, false, true);

// TASK 2

let executeforEach = (array, func) => {
    for (let item in array) {
        func(array[item]);
    }
}

executeforEach([1, 2, 3], (item) => {
    console.log(item);
});

// TASK 3

let mapArray = (array, func) => {
    let result = [];
    executeforEach(array, (item) => {
        result.push(func(item));
    });
    return result;
}
mapArray([2, 5, 8], (item) => {
    return item + 3;
});

// TASK 4

let filterArray = (array, filter) => {
    let result = [];
    executeforEach(array, (item) => {
        if (filter(item)) {
            result.push(item);
        }
    });
    return result;
}
filterArray([2, 5, 8], (item) => {
    return item > 3;
});

// TASK 5

let showFormattedDate = (date) => {
    let year = date.getFullYear();
    let month = date.toString().substr(4, 3);
    let day = date.getDate();
    return 'Date: ' + month + ' ' + day + ' ' + year;
}

console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));

// TASK 6

let canConvertToDate = (date) => {
    let checkDate = new Date(date);
    let maxMonth = 12;
    let maxDays = 31;
    if (checkDate.getMonth() <= maxMonth && checkDate.getDate() <= maxDays) {
        return true;
    } else {
        return false;
    }
}

console.log(canConvertToDate('2016-13-18T00:00:00')); // false
console.log(canConvertToDate('2016-03-18T00:00:00')); // true

// TASK 7

let daysBetween = (dateOne, dateTwo) => {
    const msPerDay = 1000 * 60 * 60 * 24;
    let difference;
    if (dateOne > dateTwo) {
        difference = dateOne.getTime() - dateTwo.getTime();
    } else {
        difference = dateTwo.getTime() - dateOne.getTime();
    }

    return Math.round(difference / msPerDay);
}

console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));

const users = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        'birthday': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        'birthday': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        'birthday': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        'birthday': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
];

// TASK 8

let getAmountOfAdultPeople = (data) => {
    const dateNow = new Date();
    const daysInYear = 365;
    let people = [];
    let birtdays = [];
    for (let i = 0; i < data.length; i++) {
        birtdays[i] = data[i]['birthday'];
        people[i] = Math.round(daysBetween(new Date(dateNow), new Date(birtdays[i])) / daysInYear);
    }

    people = filterArray(people, (age) => {
        let adultAge = 18;
        return age >= adultAge;
    });

    console.log(people.length);
}

getAmountOfAdultPeople(users);

// TASK 9

let keys = (object) => {
    let result = [];
    for (let value in object) {
        result.push(value);
    }

    console.log(result);
}

keys({ myvalue: 2, myvalue2: 3 })

// TASK 10

let values = (object) => {
    let result = [];
    for (let value in object) {
        result.push(object[value]);
    }
    console.log(result);
}

values({ key1: 1, key2: 2, key3: 3 });