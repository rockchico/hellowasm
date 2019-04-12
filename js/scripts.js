(async () => {
  const fetchPromise = fetch('js/fib.wasm');
  const module = await WebAssembly.compileStreaming(fetchPromise);
  const instance = await WebAssembly.instantiate(module);
  const result = instance.exports.fib(42);
  console.log(result);
})();

