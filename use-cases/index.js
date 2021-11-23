import makeGetTimestamp from './get-timestamp.js'
import makeHandleModeration from './handle-moderation.js'

const handleModeration = makeHandleModeration();

const getTimestamp = makeGetTimestamp(handleModeration);

export default getTimestamp;
