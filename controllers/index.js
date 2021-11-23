import makeGetTimestampController from './get-timestamp-controller';

import getTimestamp from '../use-cases';

const getTimestampController = makeGetTimestampController({ getTimestamp })

export default getTimestampController;