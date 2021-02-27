import { BrowserRouter,Link, Route, Switch} from 'react-router-dom'
import {Nav} from '../Nav/Nav'
import Main from "../Main/main";
import About from "../About/about";
import ProductsList from "../Products/ProductsList";
import Product from "../Products/Product";
import Blog from "../Blog/Blog";
import MyForm from "../Form/MyForm";
import ToDoList from "../ToDoList/ToDoList"


export default function Routing(props) {
    return (
        <BrowserRouter>
        <Nav theme={props.theme}/>
        <main>
        <Switch>
          <Route path="/" exact> <Main />   </Route>
          <Route path="/about" > <About/>   </Route>
          <Route path="/product/:id" component={(props)=><Product />} />
          <Route path="/blog/:id" component={Blog}/>
          <Route path="/myform" > <MyForm/>  </Route>
          <Route path="/todolist" > <ToDoList/>   </Route>
          <Route path="/products" > <ProductsList bucket={props.bucket}/></Route> 
          {/* <Route path="/product/:id" component={ProductDetail} />  */}
        </Switch>
        </main>
        </BrowserRouter>

    );
}
