import React from "react"
import Table from "@1ak31sha/ui/Table"
function TableExample() {
  const headers = [
    { id: "quantity", title: "Quantity" },
    { id: "name", title: "Name" },
    { id: "type", title: "Type" },
  ]
  const data = [
    { quantity: 4, name: "Gengar", type: "psycich" },
    { quantity: 4, name: "Vileplume", type: "grass" },
    { quantity: 4, name: "Proffessor Oak", type: "trainer" },
  ]

  return (
    <div>
      <Table headers={headers} data={data} />
    </div>
  )
}
export default function ButtonExample() {
  return <TableExample />
}
