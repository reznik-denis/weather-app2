import ButtonCity from '../ButtonCity/ButtonCity';
import s from './buttonGroup.module.css'

export default function ButtonGroup() {
    return <div className={s.main}>
        <ButtonCity name="Minsk"/>
        <ButtonCity name="Moscow"/>
        <ButtonCity name="Bratislava"/>
        </div>
}