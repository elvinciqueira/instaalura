export default async function HttpClient(url, {headers, body, ...options}) {
  const serverResponse = await fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })

  if (serverResponse.ok) {
    return serverResponse.json()
  }

  throw new Error('Não foi possível cadastrar o usuário agora :(')
}
