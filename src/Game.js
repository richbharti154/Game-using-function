import React,{useState} from 'react'

import styles from './Game.module.css'
function Game() {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleClick = () => {
    if (!gameOver) {
      setScore(score + 1);
      if (score >= 10) {
        setGameOver(true);
      }
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Game</h1>
      <p className={styles.score}>Score: {score}</p>
      {gameOver && <p className={styles.gameOver}>Game Over!</p>}
      <button className={styles.button} onClick={handleClick}>
        Click Me!
      </button>
    </div>
  );
}

export default Game;
