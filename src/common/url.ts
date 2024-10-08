import config from 'config'

export function getSiteUrl(path = '') {
  return new URL(
    path,
    process.env.NODE_ENV === 'development' ? 'http://localhost:8088' : config.siteUrl,
  )
}
