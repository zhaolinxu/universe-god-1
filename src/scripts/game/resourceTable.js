const Resource = require('./resource');

module.exports = (game) => {
  let resourceTable = {};

  resourceTable['mass'] = new Resource({
    game: game,
    name: 'mass',
    suffix: 'kg',
    resourceHolder: 'holder-mass',
    resourceID: 'display-mass',
    resourceContainer: 'overview-container',
    independant: true,
    visible: true,
    amount: 10000
  });

  resourceTable['oxygen'] = new Resource({
    game: game,
    name: 'oxygen',
    resourceHolder: 'holder-oxygen',
    resourceID: 'display-oxygen',
    resourceContainer: 'resources-container',
    imgPath: 'atoms/oxygen.svg',
    independant: true,
    visible: true,
    amount: 10
  });

  resourceTable['hydrogen'] = new Resource({
    game: game,
    name: 'hydrogen',
    resourceHolder: 'holder-hydrogen',
    resourceID: 'display-hydrogen',
    resourceContainer: 'resources-container',
    imgPath: 'atoms/hydrogen.svg',
    independant: true,
    visible: true,
    amount: 20
  });

  resourceTable['water'] = new Resource({
    game: game,
    name: 'water',
    suffix: 'L',
    resourceHolder: 'holder-water',
    resourceID: 'display-water',
    resourceContainer: 'resources-container',
    imgPath: 'atoms/water.svg',
    independant: false,
    cost: { hydrogen: 2, oxygen: 1 },
    visible: true
  });

  return resourceTable;
};
