import { Copy } from "lucide-react"
import React, { useRef } from "react"

import { Alert } from "~/components/ui/alert"
import { links } from "~lib/config"

export default function Displaylinks() {
  const copyLink = (link) => {
    navigator.clipboard.writeText(link)
  }
  return (
    <div>
      <div className=" flex-col flex justify-center items-center  gap-2 p-2 ">
        {links.map((item, index) => (
          <Alert
            key={index}
            className=" items-center justify-between text-white border-none bg-zinc-800 flex gap-2 h-10  ">
            <div className="flex items-center gap-3">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<span>${item.icon}</span>`
                }}
              />
              <a
                target="_blank"
                href={item.link}
                className="flex items-center gap-3 flex-1 overflow-hidden ">
                <div className="truncate w-52">{item.link}</div>
              </a>
            </div>
            <div onClick={() => copyLink(item.link)}>
              <Copy className=" h-4  cursor-pointer" />
            </div>
          </Alert>
        ))}
      </div>
    </div>
  )
}
