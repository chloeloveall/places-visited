// Business logic for Scrapbook
function Scrapbook() {
  this.destinations = {};
}

Scrapbook.prototype.addDestination = function(destination) {
  this.destinations[destination.location] = destination;
} 

// Business logic for Destinations
function Destination(location, landmark, timeOfYear) {
  this.location = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
}

Destination.prototype.activity = function() {
  if (this.timeOfYear === 'Summer') {
    return this.timeOfYear + ' is time to camp!';
  } else if (this.timeOfYear === 'Autumn' || this.timeOfYear === 'Fall') {
    return this.timeOfYear + ' is time to hunt!';
  } else if (this.timeOfYear === 'Winter') {
    return this.timeOfYear + ' is time to ski!';
  } else {
    return this.timeOfYear + ' is time to hike!';
  }
}


let scrapbook = new Scrapbook();
let portland = new Destination('Portland', 'Mount Tabor', 'Summer');
let seattle = new Destination('Seattle', 'Space Needle', 'Autumn');
let bellingham = new Destination('Bellingham', 'Lake Whatcom', 'Winter');

console.log(bellingham.camping());
