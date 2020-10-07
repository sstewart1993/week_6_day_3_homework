const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation
  })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation
  })

};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport
  })

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance >= minDistance
  })
 
};

Traveller.prototype.distances = function(){
  return this.journeys.map((journey) => {
    return journey.distance
  })
}

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const distances = this.distances()
  const total = distances.reduce((accumulator, distance) => {
    return (accumulator + distance)
  })
  return total
};

// Traveller.prototype.vehicles = function(){
//   return this.journeys.set((journey) => {
//   return journey.transport
//   })
// }

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   const newVehicles = Set[this.vehicles()]
//   return newVehicles

// };


module.exports = Traveller;
