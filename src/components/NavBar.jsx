import React from "react"
import CartWidget from "./CartWidget"


const NavBar = () => {
    return (
        <nav>
            Eureka!
            <ul>
                <li><button>Inicio</button></li>
                <li><button>Productos</button></li>
                <li><button>$cyber monday$</button></li>
                <li><button>Stock</button></li>
                <li><button>Nosotros</button></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar