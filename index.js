const config = require('./patternlab-config.json');
const patternlab = require('@pattern-lab/patternlab-node')(config);

// console.log(`Pattern Lab v${patternlab.v()}`);

patternlab.serve(() => {
  // use the callback
}, {
  cleanPublic: true,
}).then(() => {
  // or do something else when this promise resolves
});

//optionally, listen on events
// patternlab.events.on('patternlab-asset-change', (data) => {
//   console.log(data); // {file: 'path/to/file.css', dest: 'path/to/destination'}
// });

// patternlab.events.on('patternlab-pattern-change', (data) => {
//   console.log(data); // {file: 'path/to/file.ext'}
// });

// patternlab.events.on('patternlab-global-change', (data) => {
//   console.log(data); // {file: 'path/to/file.ext'}
// });
