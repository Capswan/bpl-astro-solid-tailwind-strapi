import { createSignal } from "solid-js";
import { Counter } from "./Counter.jsx"


export function Clicker(foo, bar) {
	const [count, setCount] = createSignal(0);
	const add = () => setCount(count() + 1);
	const subtract = () => setCount(count() - 1);

	return (
		<>
      <h1>Hello</h1>
			<div> <button onClick={subtract}>-</button>
				<pre>{count()}</pre>
				<button onClick={add}>+</button>
			</div>
      <Counter />
		</>
	);
}
