import React from "react"

import { useStorage } from "@plasmohq/storage/hook"

import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function Addlinks() {
  const [links, setLinks] = useStorage<string>("links", "")
  const [value, setValue] = React.useState("")
  const handleOnClick = () => {
    if (value.length === 0) {
      return
    }
    // setLinks(value)
    console.log("value", value)
    // setValue("")
  }
  return (
    <>
      <div className=" flex p-2 gap-2">
        <Input
          onChange={(e) => setValue(e.target.value)}
          className=" bg-zinc-900 focus:border-none border-none"
        />
        <Button onClick={handleOnClick}>Add</Button>
      </div>
    </>
  )
}
