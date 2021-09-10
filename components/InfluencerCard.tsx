import React from 'react'

import styles from 'styles/components/InfluencerCard.module.sass'

type Props = {
  urlImg: string
  name: string
  followers: number
}

const InfluencerCard = ({
  urlImg,
  name,
  followers,
}: Props): React.ReactElement => {
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

export default InfluencerCard
