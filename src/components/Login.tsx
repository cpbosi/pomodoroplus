import { signIn, signOut, useSession } from 'next-auth/client';
import styles from '../styles/components/Login.module.css';

export function Login() {
    const [session] = useSession()

    //   FIME PATRICK TRTAR O LOADIN E FAZER BOTAO TAMANHO CETO
    return <div className={styles.loginContainer}>
        {!session && <div className={styles.buttonLogin}>
            <button
                            type="button"
                            className={styles.buttonLogin}
                            onClick={(): Promise<void> => signIn("auth0")}
                        >
                            Entrar
            </button>
        </div>}
        {session && <div className={styles.buttonLogout}>
            <button
                            type="button"
                            className={styles.buttonLogout}
                            onClick={(): Promise<void> => signOut()}
                        >
                            Sair
            </button>
        </div>}
    </div>
}