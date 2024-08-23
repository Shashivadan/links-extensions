import { Copy } from "lucide-react"
import React, { useEffect, useRef, useState } from "react"



import { Alert } from "~/components/ui/alert"

export default function Displaylinks() {
  const [urls, setUrls] = useState([])
  useEffect(() => {
    async function getLinks() {
      const links = localStorage.getItem("links")
      setUrls(JSON.parse(links))
    }
    getLinks()
  }, [])
  const copyLink = (link) => {
    navigator.clipboard.writeText(link)
  }
  return (
    <div>
      <div className=" flex-col flex justify-center items-center  gap-2 p-2 ">
        {urls.length > 0 ? (
          <>
            {urls.map((item, index) => (
              <Alert
                key={index}
                className=" items-center justify-between text-white border-none bg-zinc-800 flex gap-2 h-10  ">
                <div className="flex items-center ">
                  <a
                    target="_blank"
                    href={item}
                    className="flex items-center gap-3 flex-1 overflow-hidden ">
                    <div className="truncate w-52">{item}</div>
                  </a>
                </div>
                <div onClick={() => copyLink(item)}>
                  <Copy className=" h-4  cursor-pointer" />
                </div>
              </Alert>
            ))}
          </>
        ) : (
          <> Nothing is there</>
        )}
      </div>
    </div>
  )
}
