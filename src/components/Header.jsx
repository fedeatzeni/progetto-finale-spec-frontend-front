import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/product/favorites">Preferiti</NavLink>
        </header>
    )
}