import React from "react"
import PropTypes from "prop-types"
import { css } from "emotion"
import "./ReactTable.css"
import {
  useTable,
  useGroupBy,
  useFilters,
  useSortBy,
  useExpanded,
} from "react-table"

const Table = ({ columns, data, rowClickCallback }) => {
  //
  //
  // const foo = { bar: { foo: "bar"}}
  // const test = bar?.foo
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy)
  // } = useTable({ headers, data2 })

  return (
    <table {...getTableProps()}>
      <thead className={css``}>
        {headerGroups.map(headerGroup => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            className={css`
              background-image: linear-gradient(#969899, #ccc);
              color: #000;
              th {
                padding: 5px;
                &:first-child {
                  border-top-left-radius: 52px;
                  border-bottom-left-radius: 52px;
                }
                &:last-child {
                  border-top-right-radius: 52px;
                  border-bottom-right-radius: 52px;
                  padding-right: 15px;
                }
              }
            `}
          >
            {headerGroup.headers.map(column => (
              // Add the sorting props to control sorting. For this example
              // we can add them into the header props
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render("Header")}
                {/* Add a sort direction indicator */}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr
              {...row.getRowProps()}
              onClick={() => rowClickCallback(row)}
              className={css`
                &:first-child {
                  td {
                    border-top: 0;
                  }
                }
                color: palevioletred;
                &:hover {
                  color: black;
                }
              `}
            >
              {row.cells.map(cell => {
                let color,
                  backgroundImage,
                  textTransform,
                  textShadow,
                  fontFamily,
                  fontWeight,
                  fontStyle,
                  fontSize,
                  padding = undefined
                if (cell.column.id === "type") {
                  padding = "3px"
                  switch (cell.value) {
                    case "grass":
                      color = "#fff"
                      backgroundImage = "linear-gradient(#a0ce90, #2bb452)"
                      break
                    case "psychic":
                      color = "#fff"
                      backgroundImage = "linear-gradient(#b3a3c5, #6b4a9b)"
                      break
                    case "water":
                      color = "#fff"
                      backgroundImage = "linear-gradient(#56B2F8, #C0E6F4)"
                      break
                    case "fire":
                      color = "#fff"
                      backgroundImage = "linear-gradient(#EA3D4A, #DF9371)"
                      break
                    case "lightning":
                      color = "#000"
                      backgroundImage = "linear-gradient(#EDB82D, #E8E01D)"
                      break
                    case "dark":
                      color = "#fff"
                      backgroundImage = "linear-gradient(#436e88, #30343d)"
                      break
                    case "steel":
                      color = "#fff"
                      backgroundImage = "linear-gradient(#7e7c77, #d6c6af)"
                      break
                    case "fairy":
                      color = "#fff"
                      backgroundImage = "linear-gradient(#fd149b, #c0054a)"
                      break
                    case "fighting":
                      color = "#000"
                      backgroundImage = "linear-gradient( #e36229, #FFC271)"
                      break
                    case "normal":
                      color = "#000"
                      backgroundImage = "linear-gradient(#E2D2DC, #EDE9E8)"
                      break

                    default:
                      break
                  }
                  console.log(cell)
                } else if (cell.column.id === "name") {
                  fontFamily = "Fira Sans"
                } else if (cell.column.id === "hp") {
                  fontFamily = "Fira Sans"
                } else if (cell.column.id === "retreatCost") {
                  fontFamily = "Fira Sans"
                } else if (cell.column.id === "quantity") {
                  fontFamily = "Fira Sans"
                } else if (cell.column.id === "category") {
                  padding = "3px"
                  switch (cell.value) {
                    case "Trainer":
                      textTransform = "uppercase"
                      backgroundImage =
                        "linear-gradient(-90deg,#EEC035, #F3E383,#EEC035)"
                      color = "#000"
                      fontFamily = "Signika"
                      fontStyle = "bold"
                      fontWeight = "800"


                      break
                    case "Stadium":
                      textTransform = "uppercase"
                      backgroundImage = "linear-gradient(#647757,#DEEBD4 )"
                      color = "Black"
                      fontWeight = "800"
                      // fontSize = "10pt"
                      break
                    case "Supporter":
                      textTransform = "uppercase"
                      color = "#F63916"
                      backgroundImage =
                        "linear-gradient(#8A7871, #FBF7E9,#8A7871)"
                      fontWeight = 600
                      textShadow = "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff"
                      fontFamily = "'Passion One', sans-serif"
                      fontStyle = "italic"
                      break
                    case "Stage 1":
                      textTransform = "uppercase"
                      color = "#626565"
                      backgroundImage =
                        "linear-gradient(#A19D90, #FFFEFE,#A19D90)"
                      fontWeight = 800
                      break
                    case "Stage 2":
                      textTransform = "uppercase"
                      color = "#626565"
                      backgroundImage =
                        "linear-gradient(#A19D90, #FFFEFE,#A19D90)"

                      fontWeight = 800
                      break
                    case "Basic":
                      textTransform = "uppercase"
                      color = "#626565"
                                            fontFamily = "'Orbitron', cursive"
                      backgroundImage =
                        "linear-gradient(#A19D90, #FFFEFE,#A19D90)"
                      fontWeight = 800
                      break
                    case "Tool":
                      textTransform = "uppercase"
                      color = "#0E74BA"
                      backgroundImage =
                        "linear-gradient(#A19D90, #FFFEFE,#A19D90)"
                      fontWeight = 800
                      break
                    case "Energy":
                      textTransform = "uppercase"
                      fontFamily = "'Audiowide', cursive"
                      color = "#000"
                      fontWeight = 800
                      break
                    case "Special Energy":
                      textTransform = "uppercase"
                      fontFamily = "'Audiowide', cursive"
                      color = "#000"
                      fontWeight = 500
                      fontSize = "10pt"
                      break

                    default:
                      break
                  }
                } else {
                  padding = "5px"
                }
                return (
                  <td
                    className={css`
                      text-align: center;
                    `}
                    {...cell.getCellProps()}
                  >
                    <div
                      className={css`
                        color: ${color};
                        background-image: ${backgroundImage};
                        border-radius: 50px;
                        padding: ${padding};
                        font-family: ${fontFamily};
                        text-transform: ${textTransform};
                        text-shadow: ${textShadow};
                        font-weight: ${fontWeight};
                        font-size: ${fontSize};
                        font-style: ${fontStyle};
                      `}
                    >
                      {cell.render("Cell")}
                    </div>
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

Table.propTypes = {}

Table.defaultProps = {}

export default Table

// psuedo code
/*




for each item, render row
loop through each row, then check the particular colum, get longest string and adjust size

maintain "view" and database, handle sorting in database, then send the data into the table
"pre-processor?" go through values, figure out biggest value and adjust column size














*/
