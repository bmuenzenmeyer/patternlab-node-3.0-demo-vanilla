const config = require('./patternlab-config.json');
const patternlab = require('@pattern-lab/patternlab-node')(config);

patternlab.serve({
  cleanPublic: true,
  watch: true
});

// patternlab.events.on('patternlab-asset-change', (data) => {
//   console.log(data); // {file: 'path/to/file.css', dest: 'path/to/destination'}
// });

// patternlab.events.on('patternlab-pattern-change', (data) => {
//   console.log(data); // {file: 'path/to/file.ext'}
// });

// patternlab.events.on('patternlab-global-change', (data) => {
//   console.log(data); // {file: 'path/to/file.ext'}
// });
