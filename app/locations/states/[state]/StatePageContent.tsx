"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { slugifyRevert } from "camote-utils"

type StatePageContentProps = {}

export default function StatePageContent({}: StatePageContentProps) {
  const params = useParams()
  const stateSlug = params.state || ""
  const [stateName, setStateName] = useState("")

  useEffect(() => {
    if (stateSlug) {
      setStateName(slugifyRevert(stateSlug))
    }
  }, [stateSlug])

  return (
    <div>
      {/* You can add content here that is specific to the state page */}
      <h2 className="text-2xl font-bold mb-4">{stateName ? `Welcome to ${stateName}` : "Loading State..."}</h2>
      <p className="text-gray-400">This page will display information about legal services in {stateName}.</p>
    </div>
  )
}
