function alan(x){
var AlanStation = ['Rejection', 'Disappointment', 'Backstabbing Central', 'Shattered Dreams Parkway'];
for (let i=0; i<AlanStation.length; i++) {
    if (!x.includes(AlanStation[i])){
        return 'No, seriously, run. You will miss it.'
    }
}
return 'Smell my cheese you mother!'
}


