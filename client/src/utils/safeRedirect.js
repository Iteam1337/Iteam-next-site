// Turns a user-supplied value into a path on this site, so redirects can never
// leave iteam.se ("//evil.com", "https://evil.com" and "\evil.com" all stay local).
export const toSafeRedirectPath = (value) => {
  const path = Array.isArray(value) ? value[0] : value
  if (typeof path !== 'string') return '/'

  const localPath = `/${path.trim().replace(/^[/\\]+/, '')}`
  const hasUnsafeChar = [...localPath].some(
    (char) => char === '\\' || char.charCodeAt(0) < 32
  )
  return hasUnsafeChar ? '/' : localPath
}
