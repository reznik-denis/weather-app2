import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import s from './Navigation.module.css';

import {getCityName} from '../../redux/selectors'

export default function Navigation() {
    const cityName = useSelector(getCityName)
    return <nav className={s.main}>
        <NavLink to="/" className={({ isActive }) => isActive ? s.active : s.link}>Main</NavLink>
        <NavLink to={`/in/${cityName}`} className={({ isActive }) => isActive ? s.active : s.link}>Weather forecast</NavLink>
    </nav>
}