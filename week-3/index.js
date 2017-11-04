'use strict';

require('./02-01-freezing-and-sealing/exercise.js');
require('./02-02-open-closed/exercise.js');
require('./03-01-LSP-with-objects/exercise.js');
require('./05-01-SRP-DIP/exercise.js');
// the following tests start servers on port 3000, so they
// can't run concurrently
require('./05-02-poor-mans-di/exercise.js')
    .then(() => { return require('./05-03-ioc-containers/exercise.js'); });
