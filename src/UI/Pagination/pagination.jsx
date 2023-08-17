import { getPages } from "../../Utils/getPages";


const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPages(totalPages)
    return ( 
<div>
{pagesArray.map(p => 
  <button key={p} 
  onClick={() => changePage(p)}>{p}
  </button>
)}
</div>
     );
}
 
export default Pagination;