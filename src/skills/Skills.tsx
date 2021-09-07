import s from './Skills.module.css'
import sContainer from '../common/styles/Container.module.css'
import { Skill } from './skill/Skill';

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.skillsTitle}>Мои скиллы</h2>
                <div className={s.skills}>
                    <Skill title={'JS'}
                           description={'JS бомба, огонь бррррррыл дтфвтаоф жвтаотвофжТА Офываыф ваыва'}/>
                    <Skill title={'CSS'}
                           description={'CSS бомба, огонь бррррррыл дтфвтао фжвтаотв офжТА Офыуваф ываы фвпаыфв'}/>
                    <Skill title={'REACT'}
                           description={'REACT ракета, огонь бррррррыл дтфвтаофжв таотвофжТАО фываывфаыфва ыфваыфва'}/>
                </div>
            </div>
        </div>
    );
}