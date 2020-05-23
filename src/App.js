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
    this.addFavourite = this.addFavourite.bind(this);
    this.removeFavourite = this.removeFavourite.bind(this);
  }

  addJoke(item) {
    const jokes = this.state.jokes;
    jokes.unshift(item);
    this.setState({
      tick: !this.state.tick
    })
  }

  addFavourite(item) {
    const favourite = this.state.favourite;
    favourite.unshift(item);
    console.table(this.state.favourite);
    this.setState({
      tick: !this.state.tick
    })
  }

  removeFavourite(item) {
    const favourite = this.state.favourite;
    const itemIndex = favourite.indexOf(item);
    console.log(itemIndex);
    favourite.splice(itemIndex, 1);
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
            <JokeList jokes={this.state.jokes} addFavourite={this.addFavourite} removeFavourite={this.removeFavourite} />
          </article>
        </main>
        <aside style={{color: 'green'}}>
          <JokeList jokes={this.state.favourite} style={{color: 'green'}} removeFavourite={this.removeFavourite}/>
        </aside>
      </>
    );
  }
}

export default App;
