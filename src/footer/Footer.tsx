import s from './Footer.module.css'
import {Widget} from "./widget/Widget";
import sContainer from "../common/styles/Container.module.css";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <div className={s.footer}>
                    <h2 className={s.headerTitle}>Александр Богуцкий</h2>
                    <div className={s.widgets}>
                        <Widget/>
                        <Widget/>
                        <Widget/>
                        <Widget/>
                    </div>
                    <h3 className={s.footerTitle}>©2021 Все права защищены</h3>
                </div>
            </div>
        </div>
    )
}