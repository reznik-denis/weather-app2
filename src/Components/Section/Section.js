import s from './Section.module.css';

export default function Section({ children, title, name}) {
    return <div>
        <h2 className={s.title}>{title}</h2>
        <h3 className={s.capitalize}>{name}</h3>
        {children}
    </div>
};