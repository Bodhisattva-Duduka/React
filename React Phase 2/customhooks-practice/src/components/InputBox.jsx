
function InputBox({ query, setQuery }) {
  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <>
      <input placeholder="Enter Username..." className="border-2 rounded-xl focus:outline-none focus:border-blue-600 border-blue-300 w-120 h-10" onChange={handleChange} value={query} type="text" />
    </>
  );
}

export default InputBox;
