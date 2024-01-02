/** Have a callback (errback) handle an async function's resolution (success) or rejection (error) */
export default function asyncErrback<T, R>(
	asyncFunction: () => Promise<T>,
	errback: (err: any, value?: T) => R | Promise<R>
): Promise<R> {
	return asyncFunction().then(
		(value) => errback(null, value),
		(error: any) => errback(error)
	)
}
