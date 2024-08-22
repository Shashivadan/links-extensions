import "./input.css"

import { useState } from "react"

import Addlinks from "~components/Addlinks"
import Displaylinks from "~components/Displaylinks"
import { Button } from "~components/ui/button"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div className=" bg-zinc-950 text-white min-w-[400px] h-fit">
      <div>
        <h1 className="text-2xl text-center py-4 font-semibold">
          Link Collector
        </h1>
      </div>
      <div>
        <Displaylinks />
      </div>
      <div>
        <Addlinks />
      </div>
    </div>
  )
}

export default IndexPopup
