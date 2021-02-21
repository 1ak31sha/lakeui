import React from "react"
import ArrowBox from "@1ak31sha/ui/ArrowBox"
function ArrowBoxContainer() {
  const propsTest = {
    position: "TOP",
    size:2,
    backgroundColor:"white",
    borderWidth:1,
    borderColor:"palevioletred",
  }
  return (
    <div>
      <ArrowBox
        {...propsTest}
      >
      Brought to you by Lakeisha..........
      Brought to you by Lakeisha..........
      Brought to you by Lakeisha..........
      </ArrowBox>
      <br />
      <ArrowBox
        arrowSize={15}
        position={"RIGHT"}
        size={2}
        backgroundColor={"#232"}
        textColor={"white"}
        borderWidth={4}
        borderColor={"palevioletred"}
      >
      Brought to you by Lakeisha..........
      </ArrowBox>
      <br />
      <ArrowBox
      >
        No Props baby :)
      </ArrowBox>
      <br />
      <ArrowBox
        position={"LEFT"}
        size={2}
        backgroundColor={"white"}
        borderWidth={1}
        borderColor={"limegreen"}
      >
      </ArrowBox>
    </div>
  )
}
export default function ButtonExample() {
  return <ArrowBoxContainer />
}
