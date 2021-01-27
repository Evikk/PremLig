export function Pagination({teamsLength, itemsPerPage, currPage, onPageChange}){
    const pages = Array.from(Array(Math.round(teamsLength/itemsPerPage)), (v, i) => i + 1)
    console.log(currPage);
    
    return (
        <ul className="pages-list">
            {currPage !== pages[0] && <li onClick={()=>onPageChange(currPage-1)}>&lt;</li> }
            {pages.map((page, idx)=>{
                return <li key={idx} 
                            className={currPage === page ? 'current-page' : 'page'} 
                            onClick={()=>onPageChange(page)}>
                                {page}
                        </li>
            })}
            {currPage !== pages[pages.length-1] && <li onClick={()=>onPageChange(currPage+1)}>&gt;</li> }
        </ul>
    )
}