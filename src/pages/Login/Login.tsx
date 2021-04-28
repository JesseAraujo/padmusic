import styles from './styles.module.scss'
import Modal from 'react-modal'
import { useState } from 'react'
import NewUserRegistration from '../NewUserRegistrationModal'




export function Login() {
    const [isNewUserRegistration, setIsNewUserRegistration] = useState(false)

    function handleOpenNewUserRegistrationModal() {
        setIsNewUserRegistration(true)
    }

    function handleCloseNewUserRegistrationModal() {
        setIsNewUserRegistration(false)
    }

    return (
        <div className={styles.loginContainer}>

            <div className={styles.content}>

                <header>
                    <img src="/logo.svg" alt="Logo PadMusic" />
                </header>

                <main>
                    <div className={styles.formBox}>
                        <form action="/Dashboard">
                            <p>E-mail</p>
                            <input type="text" placeholder="exemplo@exemplo.com" />
                            <p>Senha</p>
                            <input type="password" name="password" id="password" placeholder="**************" />
                            <button type="submit">Entrar</button>
                        </form>
                        <p>Não possui conta? <a onClick={handleOpenNewUserRegistrationModal} >Cadastrar agora</a></p>
                    </div>
                </main>

            </div>

            <img src="/background.svg" alt="" className={styles.imageBackground} />

            <NewUserRegistration
                isOpen={isNewUserRegistration}
                onRequestClose={handleCloseNewUserRegistrationModal}
            />

        </div>
    )
}