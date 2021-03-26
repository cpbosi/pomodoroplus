import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';
import { useSession } from 'next-auth/client'

export function Profile() {
    const { level } = useContext(ChallengesContext);
    const [ session ] = useSession();

    return (
        <div className={styles.profileContainer}>
            {session && <img src={session.user.image} alt="imagem" />}
            <div>
            {session && <strong>{session.user.name}</strong>}
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}</p>
            </div>
        </div>
    );
}