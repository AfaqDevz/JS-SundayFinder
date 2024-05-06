//Made by Afaq
let totalSundays = 0

for(let i = 2024 ; i <= 2050; i++){
    let eachYear = new Date('1 January,' + i)
    if (eachYear.getDay() == 0){
        document.write('<br>' + i)
        totalSundays++
    }
}

document.write('<br> Total Sundays: ' + totalSundays)