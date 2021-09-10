import React from 'react'

import styles from 'styles/components/Spinner.module.sass'

const Spinner = (): React.ReactElement => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner} />
    </div>
  )
}

export default Spinner
