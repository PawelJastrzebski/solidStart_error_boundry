import { createSignal, onMount } from "solid-js";
import "./Counter.css";

export function CounterThrow() {
  const [count, setCount] = createSignal(0);
  throw new Error("Error Counter")

  return (
    <button class="increment" onClick={() => setCount(count() + 1)} type="button">
      Clicks: {count()}
    </button>
  );
}

export function CounterThrowOnMount() {
  const [count, setCount] = createSignal(0);

  onMount(() => {
    throw new Error("Error Counter")
  })
  
  return (
    <button class="increment" onClick={() => setCount(count() + 1)} type="button">
      Clicks: {count()}
    </button>
  );
}
