function Destination(location, landmark, timeOfYear) {
  this.location = location;
  this.landmark = landmark;
  this.timeOfYear = timeOfYear;
}

Destination.prototype.camping = function() {
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

let portland = new Destination('Portland', 'Mount Tabor', 'Summer');
let seattle = new Destination('Seattle', 'Space Needle', 'Autumn');
let bellingham = new Destination('Bellingham', 'Lake Whatcom', 'Winter');

console.log(bellingham.camping());
