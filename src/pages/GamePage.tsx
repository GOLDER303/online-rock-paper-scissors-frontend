import paperIcon from "../img/icons/paper-icon.svg"
import rockIcon from "../img/icons/rock-icon.svg"
import scissorsIcon from "../img/icons/scissors-icon.svg"

const GamePage = () => {
    return (
        <div className="flex flex-col h-screen pt-8 bg-gradient-to-r from-purple-700 to-purple-600 text-white">
            <h1 className="text-4xl text-center font-bold drop-shadow-lg">Round 1</h1>

            <div className="flex flex-col flex-1">
                <div className="flex flex-col justify-evenly items-center flex-1">
                    <h2 className="text-center text-2xl font-bold">Opponent's Score: 0</h2>
                    <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-orange-300"></div>
                </div>

                <div className="flex flex-col justify-evenly flex-1">
                    <h2 className="text-center text-2xl font-bold">Your Score: 0</h2>

                    <div className="flex items-center justify-center gap-5">
                        <div className="w-full">
                            {/* https://www.flaticon.com/free-icons/rock */}
                            <img
                                src={rockIcon}
                                alt="rock icon"
                            />
                            <p className="mt-2 text-2xl font-bold text-center">Rock</p>
                        </div>
                        <div className="w-full">
                            {/* https://www.flaticon.com/free-icons/paper */}
                            <img
                                src={paperIcon}
                                alt="paper icon"
                            />
                            <p className="mt-2 text-2xl font-bold text-center">Paper</p>
                        </div>
                        <div className="w-full">
                            {/* https://www.flaticon.com/free-icons/scissors */}
                            <img
                                src={scissorsIcon}
                                alt="scissors icon"
                            />
                            <p className="mt-2 text-2xl font-bold text-center">Scissors</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GamePage
