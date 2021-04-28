import { IoPowerSharp } from 'react-icons/io5'

import styles from './styles.module.scss'



export default function Dashboard() {
    return (
        <div className={styles.dashboardContainer}>

            <header>
                <img src="/logo.svg" alt="PadMusic" />
                <button type='button'>
                    <IoPowerSharp className={styles.iconPower} />
                </button>
            </header>

            <main>
                <div>
                    <img src="/me.png" alt="" />
                    <p>Bem Vindo(a)</p>
                    <h2>Jessé Brisola de Araujo</h2>
                </div>

            </main>

        </div>
    )
}