import {useEffect} from "react"

export function Redirect() {
  useEffect(() => {
    window.location.href = "https://wizbox.shop"
  }, [])
  return <h1>Redirect</h1>
}
