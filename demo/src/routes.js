import React from 'react'
//import loadable from 'loadable-components';

import { RouteWithSubRoutes } from '../../src'
import {
  Link
} from 'react-router-dom'
////


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const CategoriaList = () => (
  <div>
    <h2>CategoriaList</h2>
    <Link to="/catalogo/categorias/new">New Categoria</Link>
    <br />
    <Link to={`/catalogo/categorias/edit/2`}>Edit</Link>
  </div>
)
const Sandwiches = () => <h2>Sandwiches</h2>

const Tacos = ({ routes }) => (
  <div>
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
  </div>
)
const Bus = () => <h3>Bus</h3>
const Cart = () => <h3>Cart</h3>

const routes = [
  {
    path: '/home',
    //title: 'Home!',
    component: Home
  },
  {
    path: '/sandwiches',
    //title: 'sandwiches!',
    component: Sandwiches
  },
  {
    path: '/tacos',
    //title: 'tacos!',
    component: Tacos,
    routes: [
      {
        path: '/tacos/bus',
        //title: 'bus!',
        component: Bus
      },
      {
        path: '/tacos/cart',
        //title: 'cart!',
        component: Cart
      }
    ]
  },
  {
    path: '/catalogo',
    //title: 'catalogo!',
    component: Tacos,
    routes: [
      {
        path: '/catalogo/categorias',
        //title: 'categorias!',
        component: Tacos,
        routes: [
          {
            path: '/catalogo/categorias/list',
            //title: 'list cat!',
            component: CategoriaList
          },
          {
            path: '/catalogo/categorias/new',
            //title: 'new cat!',
            component: () => <h3>Categoria new</h3>
          },
          {
            path: '/catalogo/categorias/edit/:id',
            //title: 'edit cat!',
            component: () => <h3>Categoria edit</h3>
          }
        ]
      }
    ]
  }
]

export { routes }






/*
//import { Redirect } from 'react-router'
import {
  Route,
  Redirect

} from 'react-router-dom'
class Tacos2x extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    }
    props.history.push(props.routes[0].path)

  }
  componentWillMount = () => {

   // this.props.history.push('/categorias/list/list')

  }
  componentDidMount = () => {

    this.setState({
      redirect: true,
    })
  }
  handleClick = () => {
    if (this.state.redirect) {
      this.props.history.push(this.props.routes[0].path)
    }
  }

  render() {
    //console.log(JSON.stringify(this.props))
    const { routes, history } = this.props
    //console.log(JSON.stringify(routes[0].path))
    //history.push('/categorias/list/list');
    //console.log(JSON.stringify(this.state.redirect))
    
       // if (this.state.redirect) {
    
         // this.props.history.push('/categorias/list/list')
    
        //} 
    
    return (
      <div>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
        
        <button onClick={this.handleClick}>
                        Volver
                    </button>
      </div>
    )
    
  }

}

const Tacos2p = ({ routes }) => (
  <div>
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
    

  </div>
)
*/