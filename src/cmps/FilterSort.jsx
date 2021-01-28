export function FilterSort ({ handleSortFilter, clearFavorites, showFavOnly }) {
    
    return (
        <section className="toolbar-container">
            <div className="filter-sort-container">
                <div className="fav-toggle">
                    <input type="checkbox" hidden name="favOnly" id="favOnly" onChange={(ev)=>handleSortFilter(ev)}/>
                    <label htmlFor="favOnly">
                        <div className="fav-wrapper">
                            {showFavOnly ? 
                                <i className="fa fa-star yellow"></i> :
                                <i className="fa fa-star-o"></i>
                            }
                        </div>
                    </label>
                </div>
                <div className="select-container">
                    <select name="sortBy" onChange={(ev)=>handleSortFilter(ev)}>
                        <option value="">Sort by</option>
                        <option value="name">By Name</option>
                        <option value="year">Year Founded</option>
                        <option value="favorite">Favorites First</option>
                    </select>
                    <div className="select-arrow"></div>
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
            <div className="btn-container">
                <button onClick={()=>clearFavorites()}><i className="fa fa-ban"></i><span>Clear Favorites</span></button>
            </div>
            </div>
        </section>
    )
}