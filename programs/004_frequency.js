function frequencyCounter(str) {

    const map = new Map();

    str.split("").forEach(ch => {
        updateMapValueIncrementer(map, ch);
    });
    return map;
}

function updateMapValueIncrementer(map, key) {
    if(!map.has(key)) map.set(key, 0);
    map.set(key, map.get(key)+1);
}

console.log(frequencyCounter("This is a very long string!"));
