import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item); //if we are in the like or delete button part of the row, 
                                          //we go through this "if" and render those images in the row.
                              //column is received 4m moviesTable as a prop

    return _.get(item, column.path);  //see this example: https://www.geeksforgeeks.org/lodash-_-get-method/
                                  //basically movie obj er attribute path a dewa thake and based on it, we get the 
                              //from the "item" object
  };

  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };

  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            {columns.map(column => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
