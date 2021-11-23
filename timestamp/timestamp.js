export default function buildMakeTimestamp() {
  return function makeTimestamp({unix, utc}) {
    if(!unix) {
      throw new Error("Invalid Date");
    }

    return Object.freeze({
      getUnix: () => unix,
      getUtc: () => utc
    });
  }
}