import './styles.css';
import { useState } from 'react';

const movies = ['a1.jpg', 'a2.jpg', 'a3.jpg', 'a4.jpg'];
const description = {
  action: {
    'a1.jpg':
      'Justice League is a 2017 American superhero film based on the DC Comics superhero team of the same name.',
    'a2.jpg':
      'The true story of Pfc. Desmond T. Doss (Andrew Garfield), who won the Congressional Medal of Honor despite refusing to bear arms during WWII on religious grounds.',
    'a3.jpg':
      "After learning that his father was brutally killed by Bhallaladeva, Mahendra Baahubali raises an army to defeat him and release his mother from the former's captivity.",
    'a4.jpg':
      'Two soldiers in Afghanistan face off against a group of rogue special ops and a cell of heavily armed Taliban.',
  },
  animated: {
    'a1.jpg':
      "Carl, an old widower, goes off on an adventure in his flying house in search of Paradise Falls, his wife's dream destination.",
    'a2.jpg':
      'A jazz musician, stuck in a mediocre job, finally gets his big break. However, when a wrong step takes him to the Great Before, he tries to help an infant soul in order to return to reality.',
    'a3.jpg':
      'When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the giants in their tracks.',
    'a4.jpg':
      'In Monstropolis, best friends Sulley and Mike are the top scarers working at the Monsters, Inc. However, their lives are hugely disrupted when a human girl enters their world.',
  },
  biography: {
    'a1.jpg':
      'Hugh Glass, a legendary frontiersman, is severely injured in a bear attack and is abandoned by his hunting crew. He uses his skills to survive and take revenge on his companion who betrayed him.',
    'a2.jpg':
      'John Nash, a brilliant but asocial mathematical genius, finds his life changing for the worse after he accepts an assignment from William Parcher.',
    'a3.jpg':
      "Milkha Singh, an Indian athlete, overcomes many agonising obstacles in order to become a world champion, Olympian and one of India's most iconic athletes.",
    'a4.jpg':
      'During the WWII, acclaimed Polish musician Wladyslaw faces various struggles as he loses contact with his family. As the situation worsens, he hides in the ruins of Warsaw in order to survive.',
  },
  sifi: {
    'a1.jpg':
      'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
    'a2.jpg':
      'Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences.',
    'a3.jpg':
      "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
    'a4.jpg':
      "When Air Force Space Command receives a signal from an alien satellite in Earth's orbit, a government conspiracy is uncovered.",
  },
};

export default function App() {
  const [genre, setGenre] = useState('action');

  return (
    <div className="App">
      <div
        className="img"
        style={{
          margin: '0px',
          padding: '0px',
          backgroundImage: `url(/src/${genre}/a1.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '70% 100%',
          backgroundPosition: 'center',
        }}
      >
        <div className="blur">
          <h1 className="header">The best movie recommendations</h1>

          <hr />

          <div className="btns">
            <button
              className="btn"
              style={{
                color: genre === 'action' ? 'green' : 'black',
                fontSize: genre === 'action' ? '3vw' : '2vw',
              }}
              onClick={() => setGenre('action')}
            >
              Action
            </button>
            <button
              className="btn"
              style={{
                color: genre === 'biography' ? 'green' : 'black',
                fontSize: genre === 'biography' ? '3vw' : '2vw',
              }}
              onClick={() => setGenre('biography')}
            >
              Biograpgy
            </button>
            <button
              className="btn"
              style={{
                color: genre === 'sifi' ? 'green' : 'black',
                fontSize: genre === 'sifi' ? '3vw' : '2vw',
              }}
              onClick={() => setGenre('sifi')}
            >
              Sci-Fi
            </button>
            <button
              className="btn"
              style={{
                color: genre === 'animated' ? 'green' : 'black',
                fontSize: genre === 'animated' ? '3vw' : '2vw',
              }}
              onClick={() => setGenre('animated')}
            >
              Animated
            </button>
          </div>
          <hr />
          <div className="mov-grid">
            {movies.map((item) => {
              return (
                <div key={item} className="mov-tile">
                  <img
                    className="mov-img"
                    key={item}
                    src={`./src/${genre}/${item}`}
                    alt=""
                  />
                  <div className="mov-desc-layer">
                    <p className="mov-desc">
                      {description[`${genre}`][`${item}`]}
                    </p>
                    {/* <p className="mov-desc">Amar Narute</p> */}
                  </div>
                </div>
              );
            })}
          </div>

          <h2 className="header">Best of each genre</h2>
          <div className="mov-grid">
            <div className="mov-tile">
              <h3>Action</h3>
              <img className="mov-img" src="./src/action/a2.jpg" alt="" />
            </div>

            <div className="mov-tile">
              <h3>Biography</h3>
              <img className="mov-img" src="./src/biography/a1.jpg" alt="" />
            </div>

            <div className="mov-tile">
              <h3>Sci-Fi</h3>
              <img className="mov-img" src="./src/sifi/a1.jpg" alt="" />
            </div>

            <div className="mov-tile">
              <h3>Animated</h3>
              <img className="mov-img" src="./src/animated/a2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
