import React from "react";
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube';
import VideoList from "./VideoList"
import VideoDetail from "./VideoDetail"

// Poor attempt to hide my API key
import KEY from "./key"

class App extends React.Component {

  componentDidMount() {
        this.onTermSubmit("cute kittens")
  }

  state = { videos: [], selectedVideo: null }

  onTermSubmit = async term => {

    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: KEY
      }
    });
    this.setState({videos : response.data.items})
  }

    onVideoSelect = (video) =>{
      this.setState({ selectedVideo: video })
    }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
              <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo} firstVideo={this.state.videos[0]}/>
              </div>
              <div className="five wide column">
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
