import { Divider, Input } from 'antd';

// Iteration 5
function Search({ search, setSearch }) {
  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        name="name"
        value={search}
        onChange={handleChange}
        placeholder=" Busque aqui"
      />
    </>
  );
}

export default Search;
