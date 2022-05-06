import styles from '../styles/PlantsList.module.css'
import PlantsCard from '../components/PlantsCard'

const PlantsList = ({plantsList}) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {plantsList.map((plants) => (
          <PlantsCard key={plants._id} plants={plants} />
        ))}        
      </div>
    </section>
  )
}

export default PlantsList