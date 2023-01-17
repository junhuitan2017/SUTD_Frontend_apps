import { useState, useCallback } from 'react'

interface UseCounterHookReturnType {
  count: number
  increment: () => void
}

function useCounter(): UseCounterHookReturnType {
  const [count, setCount] = useState(0)

  const increment = useCallback(() => setCount(x => x + 1), [])

  return { count, increment }
}

export default useCounter
