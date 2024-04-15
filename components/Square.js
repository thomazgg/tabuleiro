import styles from '../styles/Square.module.css'

export default function Square(props) {
  return (
    <div 
      style={{
        backgroundColor: props.p ? "#000" : "#FFF"
      }}
      className={styles.square}>

    </div>
  );
}
