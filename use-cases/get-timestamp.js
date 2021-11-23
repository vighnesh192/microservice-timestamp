import makeTimestamp from '../timestamp/index.js'
export default function makeGetTimestamp(handleModeration) {
    return function getTimestamp({ dateParam }) {
      // Pass dateParam to handleModeration use-case
      const moderated = handleModeration(dateParam);
      console.log(moderated)
      try {
        // Pass moderated date to entity
        const timestamp = makeTimestamp(moderated); 
        return {
          unix: timestamp.getUnix(),
          utc: timestamp.getUtc()
        }
      } 
      catch(error) {
        return { error: "Invalid Date" }
      }
    }
}