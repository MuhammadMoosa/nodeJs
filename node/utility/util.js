const getContinent =({destinations, continent}) =>{

  const filteredDestinations = destinations.filter(destination => destination.continent.toLowerCase() === continent.toLowerCase())

  return filteredDestinations
}


export {getContinent}