import styles from './styles.module.scss'

export function Login() {
    return (
        <div className={styles.loginContainer}>


            <div className={styles.content}>
                <header>
                    <img src="/logo.svg" alt="Logo PadMusic" />
                </header>
            </div>

            <main>

                <div className={styles.content}>
                    <div className={styles.formBox}>
                        <form action="">
                            <p>E-mail</p>
                            <input type="text" placeholder="exemplo@exemplo.com" />
                            <p>Senha</p>
                            <input type="password" name="password" id="password" placeholder="**************" />
                            <button type="submit">Entrar</button>
                        </form>

                        <p>Não possui conta? <a href="">Cadastrar agora</a></p>
                    </div>
                </div>

                <div className={styles.imageBackground}></div>

            </main>

        </div>
    )
}