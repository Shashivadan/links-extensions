import React, { useRef, useState } from "react"

import { useStorage } from "@plasmohq/storage/hook"

import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function Addlinks() {
  const [value, setValue] = useState<string>("")
  const [error, setError] = useState<string>("")
  const ref = useRef<HTMLInputElement>(null)

  const handleOnClick = async () => {
    if (value.length === 0) return setError("Link cannot be empty")
    const regex = new RegExp(
      "^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?"
    )
    if (!regex.test(value)) return setError("Please enter a valid URL")

    const links = localStorage.getItem("links")
    if (JSON.parse(links).filter((item) => item.link === value).length > 0)
      return setError("Link already exists")

    setError("")
    localStorage.setItem("links", JSON.stringify([...JSON.parse(links), value]))
    setValue("")
    console.log("links", links)
    ref.current.innerHTML = ""
  }

  return (
    <>
      <div className=" flex p-2 gap-2">
        <Input
          ref={ref}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className=" bg-zinc-900 focus:border-none border-none"
        />
        <div>
          <Button onClick={handleOnClick}>Add</Button>
        </div>
      </div>
      <div className="flex justify-center p-2">
        {error && <p className="text-red-500 sm text-center">{error}</p>}
      </div>
    </>
  )
}
