import { useMemo } from 'react';

import { SkillCard } from './SkillCard';
import { skills } from '../../data/skills';

import './Skills.css';

export const SkillsScreen = () => {

    const skillsList = useMemo(() =>  skills, []);
    
    return (
        <div className="skills-screen">
            <div className="skills-container">
                {
                    skillsList.map( skill => 
                        <SkillCard 
                            key={ skill.id }
                            { ...skill }
                        />
                    )
                }
            </div>
        </div>
    )
}
