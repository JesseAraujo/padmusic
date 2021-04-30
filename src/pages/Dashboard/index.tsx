import { IoPowerSharp, IoAdd } from 'react-icons/io5'

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
                <div className={styles.mainHeader}>
                    <img src="/me.png" alt="Foto usuário" />
                    <div className={styles.welcomeName}>
                        <p>Bem Vindo(a)</p>
                        <h2>Jessé Brisola de Araujo</h2>
                    </div>
                </div>

                <div className={styles.gridPadReproduction}>
                    <div className={styles.containerPads}>
                        <div className={styles.contentPads}>
                            <div className={styles.searchPads}>
                                <input type="text" />
                            </div>
                        </div>

                        <button type="button">
                            <IoAdd className={styles.iconAddButton} />
                        </button>
                    </div>

                    <div>
                        <p>Lista de <span>reprodução</span></p>

                        <div>
                            <div>

                            </div>
                        </div>
                    </div>

                </div>


            </main>

        </div>
    )
}