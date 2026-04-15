function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}


function ctoF(cel){
    return (cel * 9 ) / 5;
}

module.exports = {generateRandomNumber, ctoF};