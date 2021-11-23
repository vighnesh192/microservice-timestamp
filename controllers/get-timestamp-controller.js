export default function makeGetTimestampController({ getTimestamp }) {
  return function getTimestampController(httpRequest) {
    const timestamp = getTimestamp({
      dateParam: httpRequest.params.date
    });
    return timestamp;
  }
}