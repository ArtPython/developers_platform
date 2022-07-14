import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./../../css/general/menu.css"

const Header = () => {
    return (
        <div style={{ background: 'gray' }}>
            <div>
                <div>
                    <div id="container">
                        <nav>
                            <ul>
                                <li><Link to='/'>home</Link></li>
                                <li><Link to='/tables/'>tables</Link></li>
                                <li><Link to='/developers'>developers</Link></li>
                                <li><Link to='/qa'>QA</Link></li>
                                <li><Link to='/dev-to-project'>dev-to-pro</Link></li>
                                <li><Link to='/managers'>managers</Link></li>
                                <li><Link to='/projects'>projects</Link></li>
                                <li><Link to='/tasks'>tasks</Link></li>
                                <li><Link to='/about'>about</Link></li>
                                <li><Link to='/languages'>languages</Link></li>
                                <li><Link to='/frameworks'>frameworks</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header;