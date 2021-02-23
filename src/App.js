import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const increment2 = () => setCount(preveousCount => preveousCount + 1)
  const decrement2 = () => setCount(preveousCount => preveousCount - 1)

  const reset = () => setCount(0)

  const double = () => setCount(count * 2)

  const divide3 = () => setCount(preveousCount => {
    if (preveousCount % 3 === 0) {
      return preveousCount / 3
    } else {
      return preveousCount
    }
  })

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={double}>×2</button>
        <button onClick={divide3}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  );
}

export default App
