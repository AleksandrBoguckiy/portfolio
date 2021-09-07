import s from './Freelance.module.css'
import sContainer from '../common/styles/Container.module.css'

export const Freelance = () => {
    return (
        <div className={s.freelanceBlock}>
            <div className={`${sContainer.container}`}>
                <div className={s.freelance}>
                    <h2 className={s.freelanceTitle}>Рассматриваю варианты удаленной работы</h2>
                    <button className={s.freelanceButton}>
                        <h3>Нанять меня</h3>
                    </button>
                </div>
            </div>
        </div>
    );
}