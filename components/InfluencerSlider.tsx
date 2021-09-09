import React from 'react'
import { InfluencerCard } from 'components'

import styles from 'styles/components/InfluencersSlider.module.sass'

const InfluencerSlider = (): React.ReactElement => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Nuestros streamers más activos</h3>
      <InfluencerCard
        urlImg="images/julian.png"
        name="Julius The Dog"
        followers={827}
      />

      <InfluencerCard
        urlImg="images/noelius.png"
        name="Borja"
        followers={827}
      />

      <InfluencerCard urlImg="images/jorge.png" name="Murga" followers={827} />

      <InfluencerCard
        urlImg="images/borja.png"
        name="NoeNoelius"
        followers={827}
      />
    </div>
  )
}

export default InfluencerSlider
