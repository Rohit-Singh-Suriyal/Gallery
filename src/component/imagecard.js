const Imagecard=(props)=>{
const tags=props.tags.split(',');
 return(

 <div className="w-[350px]  rounded  shadow-lg mx-4 my-4 bg-white">

        <img src={props.url} className="w-full"></img>
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">

            Photo by {props.user}

          </div>
          <ul>
          <li>
            <strong className="mr-2">Views</strong>
            {props.views}
          </li>
          <li>
            <strong className="mr-2">Downloads:</strong>
            {props.download}
          </li>
          <li>
            <strong className="mr-2">Likes</strong>
            {props.likes}
          </li>
        </ul>
        </div>
        <div className="px-6 py-4 flex flex-wrap ">
         {
            tags.map((item,index)=>(
                <span key={index} className="bg-blue-300 rounded-2xl my-2 px-4 font-bold mx-2  text-xl">#{item}</span>

            ))
         }
         
        </div>
       
      </div>
 )



}
export default Imagecard;