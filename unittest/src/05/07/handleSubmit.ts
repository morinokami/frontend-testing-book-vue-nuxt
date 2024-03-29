export function handleSubmit(callback: (values: any) => Promise<void> | void) {
  return (event: Event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget as HTMLFormElement)
    const values: { [k: string]: unknown } = {}
    formData.forEach((value, key) => (values[key] = value))
    return callback(values)
  }
}
