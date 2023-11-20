import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from './logo.png'
import s from './index.module.css'
import Wrapper from '../UI/Wrapper'
import Search from '../Search'
import { useCart } from '../hooks/useCart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {

    const classFunction = ({isActive}) => isActive ? s.active : '';

    const product_quantity = useCart().reduce((acc) => acc + 1, 0);

  return (
      <header>
            <nav className={s.header} >
                <Wrapper className={s.nav}>
                    <div className={s.first}>
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                        
                        <Link className={s.link} to="/categories">
                            <button className={s.navButton}>Categories</button> 
                        </Link>

                        <Search/>
                        
                    </div>

                    <div className={s.second}>

                        <div className={s.links}>
                            <NavLink className={classFunction} to="/">Main Page</NavLink>
                            <NavLink className={classFunction} to="/products">All products</NavLink>
                            <NavLink className={classFunction} to="/sales">All Sale</NavLink>
                            <NavLink className={classFunction} to="./searched_products">Search</NavLink>
                        </div>

                        {/* <ul className={[s.links, "headerMenuLinks"].join(" ")}>
                            <li>
                                <NavLink className={classFunction} to="/">Main Page</NavLink>
                            </li>
                            <li>
                                <NavLink className={classFunction} to="/products">All products</NavLink>
                            </li>
                            <li>
                                <NavLink className={classFunction} to="/sales">All Sale</NavLink>
                            </li>
                            <li>
                                <NavLink className={classFunction} to="./searched_products">Search</NavLink>
                            </li>
                        </ul> */}

                        <Link to="./cart">
                            {!product_quantity > 0 || <p className={s.product_quantity}>{product_quantity}</p>}
                            <div className={s.iconomic}>
                            <FontAwesomeIcon icon={faBasketShopping} bounce style={{color: "#00ff2a",}} />
                            </div>
                        </Link>

                    </div>
                </Wrapper>
            </nav>
        </header>
           
            
        
  )
}






