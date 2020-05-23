import React from 'react';
import Greeting from './components/Greeting.js';
import ChooseForm from './components/ChooseForm.js';
import JokeList from './components/JokeList.js';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      favourite: [],
      tick: false
    }

    this.addJoke = this.addJoke.bind(this);
  }

  addJoke(item) {
    const jokes = this.state.jokes;
    jokes.unshift(item);
    this.setState({
      tick: !this.state.tick
    })
  }

  render() {
    return (
      <>
        <header>
          <h1>MSI 2020</h1>
        </header>
        <main>
          <article>
            <Greeting />
            <section>
              <ChooseForm addJoke={this.addJoke} />
            </section>
            <JokeList jokes={this.state.jokes} />
          </article>
        </main>
      </>
    );
  }
}

export default App;