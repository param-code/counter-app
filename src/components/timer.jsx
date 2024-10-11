
const Timer = ({ formattedTime }) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-blue-600 dark:text-blue-400 font-mono">
        {formattedTime}
      </h1>
    </div>
  )
}

export default Timer
