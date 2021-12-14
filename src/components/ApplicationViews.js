import { Route, Routes } from "react-router-dom";
import { ArticleList } from "./article/ArticleList";


//ApplicationViews renders the function based on the web address
export const ApplicationViews = () => {

  return  (
      
        <Routes>

          {/* Home render when http://localhost:3000/articles */}
          <Route exact path="articles/*" element={<ArticleList />} />

        
        
        </Routes>

     
    );
  }
