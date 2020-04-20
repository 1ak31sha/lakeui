import React from "react"
import ArrowBox from "@1ak31sha/ui/ArrowBox"
function ArrowBoxContainer() {
  return (
    <div>
      <ArrowBox
        position={"TOP"}
        size={2}
        color={"white"}
        borderWidth={1}
        borderColor={"palevioletred"}
      >
      Brought to you by Lakeisha..........
      </ArrowBox>
      <ArrowBox
        position={"RIGHT"}
        size={2}
        color={"white"}
        borderWidth={1}
        borderColor={"palevioletred"}
      >
      Brought to you by Lakeisha..........
      </ArrowBox>
    </div>
  )
}
export default function ButtonExample() {
  return <ArrowBoxContainer />
}
