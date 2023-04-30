let statistics = {
    redCards: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for (const entry in statistics) {
    if (entry[0] == 'r' || statistics[entry] % 2 == 1) {
        console.log(entry)
    }
}
