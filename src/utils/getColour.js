const getColour = (type) => {
    switch(type.type.name) {
      case 'fire':
        return '#ff944d';
      case 'normal':
        return '#ccccb3';
      case 'flying':
        return '#e6ccff';
      case 'dark':
        return '#d9b38c';
      case 'dragon':
        return '#7070db';
      case 'electric':
        return '#ffffb3';
      case 'fairy':
        return '#ffb3ff';
      case 'fighting':
        return '#ff6666';
      case 'ghost':
        return '#c44dff';
      case 'grass':
        return '#80ff80';
      case 'ground':
        return '#ffd966';
      case 'ice':
        return '#80ffff';
      case 'psychic':
        return '#ff99dd';
      case 'rock':
        return '#cccc00';
      case 'steel':
        return '#b3b3cc';
      case 'water':
        return '#99bbff';
      case 'bug':
        return '#99e600';
      case 'poison':
        return '#d24dff';
      default:
        return '#f2f2f2';
    }
}

export default getColour;