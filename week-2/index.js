require('./10-hilary/exercise.js');
require('./20-blueprints/exercise-1/exercise.js');
require('./20-blueprints/exercise-2/exercise.js');
require('./30-promise-execution/exercise.js');
require('./40-mongodb/exercise-1/exercise.js')
    .then(() => { return require('./40-mongodb/exercise-2/exercise.js'); })
    .then(() => { return require('./40-mongodb/exercise-3/exercise.js'); })
    .then(() => { return require('./40-mongodb/exercise-4/exercise.js'); })
    .then(() => { return require('./40-mongodb/exercise-5/exercise.js'); })
    .then(() => { return require('./40-mongodb/exercise-6/exercise.js'); })
    .then(() => { return require('./40-mongodb/exercise-7/exercise.js'); })
    .then(() => { return require('./40-mongodb/exercise-8/exercise.js'); })
    .then(() => { return require('./40-mongodb/exercise-9/exercise.js'); })
    .then(() => { return require('./40-mongodb/exercise-10/exercise.js'); });