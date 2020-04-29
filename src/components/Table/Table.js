import React from "react"
import PropTypes from "prop-types"
import { css } from "emotion"
import "./Table.css"

const Table = ({ headers, data }) => {
  //
  //
  const col_widths = [];
  const getColumn = (data, key) => {
    let arr = []
    data.map((row, i) => {
      arr.push(row[0])
    })
    console.log(arr)
    return arr
  }
  const calcWidths = data => {
    // const first = getColumn(data, "quantity")
    // var fontSize = 12
    // var test = document.getElementById("Test")
    // test.style.fontSize = fontSize
    // var height = test.clientHeight + 1 + "px"
    // var width = test.clientWidth + 1 + "px"

    // console.log(height, width)
  }
  const renderItem = item => {
    const col_widths = [3, 4, 5]
    return Object.entries(item).map(entry => {
      console.log(entry[0], entry[1])
      let width = 0
      switch (entry[0]) {
        case "name":
          width = 50
          break
        case "quantity":
          width = 20
        default:
          break
      }
      return (
        <div
          className={css`
            width: ${width}px;
          `}
        >
          {entry[1]}
        </div>
      )
    })
  }

  const renderRows = data => {

    if (data.length > 0) {
      calcWidths(data)
      return data.map((item, i) => {
        return (
          <React.Fragment key={i}>
            <div
              className={css`
                display: flex;
                flex-direction: row;
              `}
              onClick={() => {}}
            >
              {renderItem(item)}
            </div>
          </React.Fragment>
        )
      })
    } else {
      return <div key={0}>no data!</div>
    }
  }

  return (
    <div>
      <div
        className={css`
          display: flex;
          flex-direction: row;
        `}
      >
        <div className="quantity">#</div>
        <div className="name">Name</div>
        <div className="category">Category</div>
        <div className="type">Type</div>
        <div className="hp">HP</div>
        <div className="retreatCost">Retreat Cost</div>
      </div>

      {renderRows(data)}
    </div>
  )
}

Table.propTypes = {
}

Table.defaultProps = {
}

export default Table

// psuedo code
/*




for each item, render row
loop through each row, then check the particular colum, get longest string and adjust size

maintain "view" and database, handle sorting in database, then send the data into the table
"pre-processor?" go through values, figure out biggest value and adjust column size














*/
