export function FilterSort ({ handleSortFilter, clearFavorites }) {
    return (
        <section className="filter-sort-container">
            <select name="sortBy" onChange={(ev)=>handleSortFilter(ev)}>
                <option value="">Sort by</option>
                <option value="name">By Name</option>
                <option value="favorite">Favorites First</option>
            </select>
            <label htmlFor="favOnly">Show Favorites Only</label>
            <input type="checkbox" name="favOnly" id="favOnly" onChange={(ev)=>handleSortFilter(ev)}/>
            <button onClick={()=>clearFavorites()}>Clear Favorites</button>
            <select name="paginate" onChange={(ev)=>handleSortFilter(ev)}>
                <option value="0">Show All Teams</option>
                <option value="5">5 per page</option>
                <option value="7">7 per page</option>
                <option value="10">10 per page</option>
            </select>
        </section>
    )
}