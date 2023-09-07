import { useState, useEffect } from "react";
import Imagecard from "./component/imagecard";
import Search from "./component/Search";
function App() {
  const [images, setimages] = useState([]);
  const [isloading, setisloading] = useState(true);
  const [term, setterm] = useState("");
  useEffect(() => {
    async function fetchdata() {
      const response = await fetch(
        `https://pixabay.com/api/?key=37462716-97553511a82b6e31c3acd5367&q=${term}&image_type=photo&pretty=true`
      );

      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      setimages(data.hits);
      setisloading(false);
      console.log(data);
    }
    fetchdata();
  }, [term]);

  return (
    <>
      <Search searchtext={(text) => setterm(text)} />
      <div className="h-[100%] w-[100%]">
        {isloading ? (
          <h1>Loading....</h1>
        ) : (
          <div>
            {images.length === 0 && (
              <p className="text-black mt-48 text-5xl text-center">
                No Images found
              </p>
            )}
            <div className="flex  bg-slate-600 justify-center items-center w-[100%] h-[100%] flex-wrap">
              {images.map((item) => (
                <Imagecard
                  user={item.user}
                  key={item.id}
                  url={item.webformatURL}
                  views={item.views}
                  download={item.downloads}
                  likes={item.likes}
                  tags={item.tags}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default App;
