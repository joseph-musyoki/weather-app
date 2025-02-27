export default function Search({search, setSearch,handleSearch}) {
 

    return <div className="search">
        <input type="text"
        placeholder="Enter City Name..."
        value={search}
        onChange={(event)=>setSearch(event.target.value)} />
        <button onClick={handleSearch} >search</button>
     </div>
  }

