const fetcher = async <T = any>(...args: Parameters<typeof fetch>): Promise<T> => {
  const res = await fetch(...args)
  return await (res.ok ? res.json() : Promise.reject(res))
}

export default fetcher
