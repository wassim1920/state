import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: 'John Doe',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imgSrc: 'https://via.placeholder.com/150',
      profession: 'Web Developer',
    },
    shows: false,
    mountedAt: new Date(),
  };

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const mountedAt = new Date(this.state.mountedAt);
      mountedAt.setSeconds(mountedAt.getSeconds() + 1);
      this.setState({ mountedAt });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Show</button>
        {this.state.shows && (
          <div>
            <h1>{fullName}</h1>
            <img src={imgSrc} alt="profile" />
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        )}
        <p>Component mounted at: {this.state.mountedAt.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default App;
