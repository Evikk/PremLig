import "../assets/styles/filterSort.css"

export function FilterSort ({ handleSortFilter, clearFavorites }) {
    return (
        <section className="toolbar-container">
            <div className="filter-sort-container">
                <div className="select-container">
                    <select name="sortBy" onChange={(ev)=>handleSortFilter(ev)}>
                        <option value="">Sort by</option>
                        <option value="name">By Name</option>
                        <option value="year">Year Founded</option>
                        <option value="favorite">Favorites First</option>
                    </select>
                    <div className="select-arrow"></div>
                </div>
                <div>
                    <input type="checkbox" name="favOnly" id="favOnly" onChange={(ev)=>handleSortFilter(ev)}/>
                    <label htmlFor="favOnly">Show Favorites Only</label>
                </div>
                <div className="select-container">
                    <select name="paginate" onChange={(ev)=>handleSortFilter(ev)}>
                        <option value="0">Show All Teams</option>
                        <option value="5">5 per page</option>
                        <option value="7">7 per page</option>
                        <option value="10">10 per page</option>
                    </select>
                    <div className="select-arrow"></div>
                </div>
            </div>
            <div className="btn-container">
                <button onClick={()=>clearFavorites()}>Clear Favorites</button>
            </div>
        </section>
    )
}