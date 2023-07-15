import classNames from "classnames";
import style from './Component/Global.module.scss'
import { publicRoutes } from './Routes'
import {Route,Routes} from 'react-router-dom'
import DefaultLayout from "./Layout/defaultLayout";
// tải sass để sử dụng scss
// tải router để link trâng web 
const cx = classNames.bind(style)
function App() {
  return (
       <div className={cx("App")}>
        <Routes>
        {
          publicRoutes.map((e,index) =>{
            return <Route path={e.path} key={index} element={<DefaultLayout children={e.component} />}/>
          })
        }
        </Routes>
       </div>
  );
}

export default App;
