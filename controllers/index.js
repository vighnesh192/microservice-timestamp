import makeGetTimestampController from './get-timestamp-controller.js';

import getTimestamp from '../use-cases/index.js';

const getTimestampController = makeGetTimestampController({ getTimestamp })

export default getTimestampController;