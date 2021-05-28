const textColour = (stat) => {
    if (stat < 50) {
        return '#e62e00';
    } else if (stat >= 50 && stat < 80) {
        return '#cc9900';
    } else {
       return '#009900'; 
    } 
}

export default textColour;