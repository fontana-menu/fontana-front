export const getApp = () => {
  return getSubdomain(window.location.hostname)
}

function getSubdomain(location) {
  const locationList = location.split('.')
  const isLocal = locationList.slice(-1)[0] === 'localhost'

  if (isLocal) {
    return locationList.slice(0, -1).join('')
  }
  return locationList.slice(0, -2).join('')
}
