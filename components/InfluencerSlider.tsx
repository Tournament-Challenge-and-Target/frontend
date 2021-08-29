import React from 'react'
import { InfluencerCard } from 'components'

import styles from 'styles/components/InfluencersSlider.module.sass'

const InfluencerSlider = (): React.ReactElement => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Nuestros streamers más activos</h3>
      <InfluencerCard
        urlImg="https://images.unsplash.com/photo-1558788353-f76d92427f16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=678&q=80"
        name="Julius The Dog"
        followers={827}
      />

      <InfluencerCard
        urlImg="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
        name="Borja"
        followers={827}
      />

      <InfluencerCard
        urlImg="https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        name="Murga"
        followers={827}
      />

      <InfluencerCard
        urlImg="https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80"
        name="NoeNoelius"
        followers={827}
      />
    </div>
  )
}

export default InfluencerSlider
