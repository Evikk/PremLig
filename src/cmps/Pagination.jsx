export function Pagination({teamsLength, itemsPerPage, currPage, onPageChange}){
    const pages = Array.from(Array(Math.round(teamsLength/itemsPerPage)), (v, i) => i + 1)
    return (
        <div className="pagination-container">
            <ul className="pages-list">
                <i onClick={()=>onPageChange(currPage-1)} className={`${currPage !== pages[0]} fa fa-chevron-circle-left`}></i>
                {pages.map((page, idx)=>{
                    return <li key={idx} 
                                className={currPage === page ? 'current-page' : 'page'} 
                                onClick={()=>onPageChange(page)}>
                                    {page}
                            </li>
                })}
                <i onClick={()=>onPageChange(currPage+1)} className={`${currPage !== pages[pages.length-1]} fa fa-chevron-circle-right`}></i>
            </ul>
        </div>
    )
}