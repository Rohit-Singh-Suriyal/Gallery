import { useRef } from "react"
const Search=({searchtext})=>{
  
    const inputref=useRef();
    const submithandler=(event)=>{
        event.preventDefault();
        const text=inputref.current.value;
        console.log(text);
        searchtext(text);
        

    }
 return(
  <>
   <img className="absolute z-1 w-full h-24 object-cover -mt-4" src="https://i0.wp.com/sevenseasmedia.org/wp-content/uploads/2017/05/widget-search-background.jpg?ssl=1"></img>
  <div className="relative z-2 ">
   
 
  <form on onSubmit={submithandler} className="bg-green-400 mx-auto px-7 py-4 my-4 border-2 w-full flex justify-center shadow-2xl rounded-2xl ">
    <div className="  flex ">
    <input ref={inputref} className="outline-0  border-0 w-[200px] px-2  -ml-3 text-[20px] font-bold"></input>
    <button className="mx-4 px-3 font-bold bg-white hover:bg-black hover:text-white text-black ">Search</button>

    </div>
  








  </form>
  
  </div>
 
 
 
 
 
 
 </>






 )




}
export default Search;