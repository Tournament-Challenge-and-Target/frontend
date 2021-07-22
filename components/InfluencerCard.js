import propTypes from 'prop-types'

import styles from 'styles/components/InfluencerCard.module.sass'

const InfluencerCard = ({ urlImg, name, followers }) => {
  return (
    <span className={styles.card}>
      <div className={styles.card__image}>
        <img className={styles.image} src={urlImg} alt="Influencer" />
      </div>

      <div className={styles.card__content}>
        <span className={styles.name}>{name}</span>
        <span className={styles.followers}>
          <span>{followers}k</span> Seguidores
        </span>
      </div>
    </span>
  )
}

InfluencerCard.propTypes = {
  urlImg: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  followers: propTypes.number.isRequired,
}

export default InfluencerCard
