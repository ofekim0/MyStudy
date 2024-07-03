export default function GameBoard({ onSelectSquare, board }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard)

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     // const updatedBoard = [...prevGameBoard] : 쵯상위 배열만 복사됨 -> 내부 배열도 복사되게끔 하기
  //     const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol
  //     return updatedBoard
  //   })

  //   onSelectSquare()
  // }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
