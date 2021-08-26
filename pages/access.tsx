import styles from 'styles/pages/Access.module.sass'

const Access = () => {
  const handeOnSubmit = (e): void => {
    e.preventDefault()
    console.log('submit')
  }

  return (
    <div className={styles.access}>
      <div className={styles.twin_container}>
        <form onSubmit={handeOnSubmit}>this is a form</form>
      </div>
      <div className={styles.twin_container}>imagen</div>
    </div>
  )
}

export default Access
