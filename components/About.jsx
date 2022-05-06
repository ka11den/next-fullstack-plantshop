import styles from '../styles/About.module.css'

const About = () => {
  return (
    <section className={styles.section}>
        <div className={styles.container}>        
            <div className={styles.about__container}>
            <h1 className={styles.about__title}>
                Steps to start your plants off right
              </h1>
              <div className={styles.about__container__content}>              
                <article className={styles.about__article}>
                  <span className={styles.about__number_article}>
                    01
                  </span>
                  <span className={styles.about__title__article}>
                    Choose Plant
                  </span>
                  <span className={styles.about__subtitle__article}>
                  Choose Plantrwgrwgwgwgwgwrgwrg
                  </span>
                </article>

                <article className={styles.about__article}>
                <span className={styles.about__number_article}>
                    02
                  </span>
                  <span className={styles.about__title__article}>
                    Choose Plant
                  </span>
                  <span className={styles.about__subtitle__article}>
                    Choose Plantrwgrwgwgwgwgwrgwrg
                  </span>
                </article>

                <article className={styles.about__article}>
                <span className={styles.about__number_article}>
                    03
                  </span>
                  <span className={styles.about__title__article}>
                    Choose Plantrwgrwgwgwgwgwrgwrg
                  </span>
                  <span className={styles.about__subtitle__article}>
                    Choose Plantrwgrwgwgwgwgwrgwrg
                  </span>
                </article>
              </div>
            </div>
        </div>
      </section>
  )
}

export default About