import React from "react"
import Table from "@1ak31sha/ui/ReactTable"
function TableExample() {
  const columns = React.useMemo(
    () => [
      { Header: "#", accessor: "quantity" },
      { Header: "Name", accessor: "name" },
      { Header: "Type", accessor: "type" },
    ],
    [],
  )
  const data = React.useMemo(() => [
    { quantity: 4, name: "Gengar", type: "psychic" },
    { quantity: 4, name: "Vileplume", type: "grass" },
    { quantity: 4, name: "Proffessor Oak", type: "trainer" },
  ])

  const rowClick = (row) => {
    console.log(row)
  }

  return (
    <div>
      <Table columns={columns} data={data} rowClickCallback={rowClick} />
    </div>
  )
}
export default function ButtonExample() {
  return <TableExample />
}
