import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  constructor(props) {
    super(props);
    // TODO: set initial state
    this.state = {
      hasWon: false,
      board: this.createBoard()
    };
    this.flipCellsAround = this.flipCellsAround.bind(this);
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  // DONE: create array-of-arrays of true/false values
  createBoard() {
    function randBoolRow() {
      return Math.random() >= 0.5;
    }
    let board = [];
    for (let i = 0; i < this.props.nrows; i++) {
      for (let j = 0; j < this.props.ncols; j++) {
        try {
          board[i].push(randBoolRow());
        } catch (err) {
          board.push([]);
          board[i].push(randBoolRow());
        }
      }
    }
    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    // let { ncols, nrows } = this.props;
    let ncols = this.props.ncols;
    let nrows = this.props.nrows;
    let newBoard = this.state.board;
    let [y, x] = coord.split("-").map(Number);

    function flipCell(y, x) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        // console.log(newBoard[y][x]);
        newBoard[y][x] = !newBoard[y][x];
        console.log(y, x);
        // console.log(newBoard[y][x]);
      }
      //try and change top cell
      try {
        newBoard[y - 1][x] = !newBoard[y - 1][x];
      } catch {}
      //try and change bottom cell
      try {
        newBoard[y + 1][x] = !newBoard[y + 1][x];
      } catch {}
      //try and change left cell
      try {
        newBoard[y][x - 1] = !newBoard[y][x - 1];
      } catch {}
      // //try and change left cell
      try {
        if (x + 1 !== ncols) {
          newBoard[y][x + 1] = !newBoard[y][x + 1];
        }
      } catch {}
    }

    // TODO: flip this cell and the cells around it
    flipCell(y, x);

    // win when every cell is turned off
    function youWon(array) {
      for (let i = 0; i < nrows; i++) {
        for (let j = 0; j < ncols; j++) {
          if (array[i][j] === true) {
            return false;
          }
        }
      }
      return true;
    }
    // TODO: determine is the game has been won
    this.setState({ board: newBoard, hasWon: youWon(newBoard) });
  }

  /** Render game board or winning message. */

  render() {
    const grid = this.state.board.map((m, mindex) => (
      <div className="row" key={mindex}>
        {m.map((n, nindex) => (
          <Cell
            key={[mindex, nindex]}
            isLit={n}
            coordinate={mindex + "-" + nindex}
            flipCellsAroundMe={this.flipCellsAround}
          />
        ))}
      </div>
    ));
    return (
      <div>
        <h1 className={"neon"}>Lights Out</h1>
        <div className={this.state.hasWon ? "Board-Grid-Won" : "Board-Grid"}>
          {grid}
        </div>
        <h1 className="neon">{this.state.hasWon ? "You Win!" : null}</h1>
      </div>
    );
    // if the game is won, just show a winning msg & render nothing else

    // TODO

    // make table board

    // TODO
  }
}

export default Board;
