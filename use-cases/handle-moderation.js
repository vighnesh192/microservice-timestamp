export default function makeHandleModeration() {
  return function handleModeration({ dateParam }) {
    if(/\D/.test(dateParam)) {
      return {
        unix: new Date(dateParam).getTime(),
        utc: new Date(dateParam).toUTCString()
      }
    }

    return {
      unix: new Date(parseInt(dateParam)).getTime(),
      utc: new Date(parseInt(dateParam)).toUTCString()
    }
  }
}