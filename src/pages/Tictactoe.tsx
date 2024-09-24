import { useState } from 'react'
import { X, Circle, RotateCcw } from 'lucide-react'

export default function Tictactoe() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)
  const [scores, setScores] = useState({ X: 14, O: 11, ties: 32 })

  const calculateWinner = (squares:any) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  const handleClick = (i:any) => {
    if (calculateWinner(board) || board[i]) return
    const newBoard = board.slice()
    newBoard[i] = xIsNext ? 'X' : 'O'
    setBoard(newBoard)
    setXIsNext(!xIsNext)
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setXIsNext(true)
  }

  const renderSquare = (i:any) => (
    <button
      className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center text-4xl font-bold"
      onClick={() => handleClick(i)}
    >
      {board[i] === 'X' && <X className="w-12 h-12 text-teal-400" />}
      {board[i] === 'O' && <Circle className="w-12 h-12 text-yellow-400" />}
    </button>
  )

  const winner = calculateWinner(board)
  const status = winner ? `Winner: ${winner}` : `${xIsNext ? 'X' : 'O'} TURN`

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="mb-4 flex justify-between items-center w-full max-w-xs">
        <div className="flex items-center space-x-2">
          <X className="w-8 h-8 text-teal-400" />
          <Circle className="w-8 h-8 text-yellow-400" />
        </div>
        <div className="bg-gray-800 rounded-md px-4 py-2 flex items-center space-x-2">
          <X className="w-6 h-6 text-gray-400" />
          <span className="font-bold">{status}</span>
        </div>
        <button
          onClick={resetGame}
          className="bg-gray-700 rounded-md p-2 hover:bg-gray-600 transition-colors"
        >
          <RotateCcw className="w-6 h-6" />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[...Array(9)].map((_, i) => renderSquare(i))}
      </div>
      <div className="flex justify-between w-full max-w-xs">
        <div className="bg-teal-400 rounded-md px-4 py-2 text-center">
          <div className="text-xs">X (YOU)</div>
          <div className="font-bold text-xl">{scores.X}</div>
        </div>
        <div className="bg-gray-700 rounded-md px-4 py-2 text-center">
          <div className="text-xs">TIES</div>
          <div className="font-bold text-xl">{scores.ties}</div>
        </div>
        <div className="bg-yellow-400 rounded-md px-4 py-2 text-center">
          <div className="text-xs">O (CPU)</div>
          <div className="font-bold text-xl">{scores.O}</div>
        </div>
      </div>
    </div>
  )
}