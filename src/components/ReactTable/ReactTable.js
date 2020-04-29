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
      <thead>
        {headerGroups.map(headerGroup => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            className={css`
              background-image: linear-gradient(#969899, #ccc);
              color: #000;
              th {
                &:first-child {
                  border-top-left-radius: 52px;
                  border-bottom-left-radius: 52px;
                }
                &:last-child {
                  border-top-right-radius: 52px;
                  border-bottom-right-radius: 52px;
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
              onClick={()=>rowClickCallback(row)}
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
                return <td 
                 className={css`
                   text-align: center;
                   `}  
                {...cell.getCellProps()}>{cell.render("Cell")}</td>
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
