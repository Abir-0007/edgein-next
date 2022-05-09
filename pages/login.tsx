import { Magic } from 'magic-sdk'
import { useRouter } from 'next/router'
import { FormEvent } from 'react'

interface FormElements extends HTMLCollection {
  email: HTMLInputElement;
}

export default function Login() {
  const router = useRouter()
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const elements = (event.target as HTMLFormElement).elements as FormElements

    // the Magic code
    const did = await new Magic(process.env.NEXT_PUBLIC_MAGIC_PUB_KEY || '')
      .auth
      .loginWithMagicLink({ email: elements.email.value })

    // Once we have the did from magic, login with our own API
    const authRequest = await fetch('/api/login', {
      method: 'POST',
      headers: { Authorization: `Bearer ${did}` }
    })

    if (authRequest.ok) {
      // We successfully logged in, our API
      // set authorization cookies and now we
      // can redirect to the dashboard!
      router.push('/')
    } else { /* handle errors */ }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input name="email" type="email" />
      <button>Log in</button>
    </form>
  )
}