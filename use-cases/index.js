import makeGetTimestamp from './get-timestamp'
import makeHandleModeration from './handle-moderation'

const getTimestamp = makeGetTimestamp(makeHandleModeration);

export default getTimestamp;
