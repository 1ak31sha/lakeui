import React from "react"
import Table from "@1ak31sha/ui/ReactTable"
function TableExample() {
  const columns = React.useMemo(
    () => [
      { Header: "#", accessor: "quantity" },
      { Header: "Name", accessor: "name" },
      { Header: "Set", accessor: "set" },
      { Header: "Category", accessor: "category" },
      { Header: "Type", accessor: "type" },
      { Header: "HP", accessor: "hp" },
      { Header: "Retreat Cost", accessor: "retreatCost" },
    ],
    [],
  )
  const data = React.useMemo(() => [
    { quantity: 4, name: "Gengar", set: "SF", category: "Stage 2", type: "psychic", hp: 90, retreatCost: 0 },
    { quantity: 4, name: "Vileplume", type: "grass", category: "Stage 2", hp: 120, retreatCost: 2 },
    { quantity: 4, name: "Gyarados", type: "water", category: "Stage 1", hp: 130, retreatCost: 3 },
    { quantity: 4, name: "Charizard", type: "fire", category: "Stage 2", hp: 120, retreatCost: 4 },
    { quantity: 4, name: "Raichu", type: "lightning", category: "Stage 1", hp: 110, retreatCost: 0 },
    { quantity: 4, name: "Rayquaza", type: "normal", category: "Basic", hp: 150, retreatCost: 4 },
    { quantity: 4, name: "Sneasle", type: "dark", category: "Basic", hp: 60, retreatCost: 0 },
    { quantity: 4, name: "Durant", type: "steel", category: "Basic", hp: 80, retreatCost: 1 },
    { quantity: 4, name: "Jigglypuff", type: "fairy", category: "Basic", hp: 120, retreatCost: 1 },
    { quantity: 4, name: "Rhyperior", type: "fighting", category: "Stage 2", hp: 180, retreatCost: 4 },
    { quantity: 4, name: "Proffessor Oak", category: "Trainer" },
    { quantity: 4, name: "Pokemon Collector", category: "Supporter" },
    { quantity: 4, name: "Broken Time Space", category: "Stadium" },
    { quantity: 4, name: "Golden Berry", category: "Tool" },
    { quantity: 4, name: "Water", category: "Energy" },
    { quantity: 4, name: "Double Colorless", category: "Special Energy" },
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
