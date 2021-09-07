import s from './Widget.module.css'

export const Widget = () => {
    return (
        <div className={s.widgetBlock}>
            <div className={s.widget}></div>
        </div>
    )
}