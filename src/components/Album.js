import React, { Component } from 'react';
import albumData from './../data/albums';

class Album extends Component {
  constructor(props){
    super(props);

    const specificAlbum = albumData.find(a => {
      return a.slug === this.props.match.params.slug
    });

    this.state ={
      album: specificAlbum
    };
  }

  formatTime(seconds){
    //70 seconds = 1:10
    var minutes = Math.floor(seconds / 60);
    var s = Math.floor(seconds % 60);
    if(s < 10){
      s = "0" + s;
    }
    return minutes +":" + s;
  }

  render () {
    return (
      <section className="album">
        <section id="album-info">
        <img id="album-cover-art" src={this.state.album.albumCover} alt="" />
          <div className="album-details">
            <h1 id="album-titls">{this.state.album.title}</h1>
            <h2 className="artist">{this.state.album.artist}</h2>
            <div id="release-info">{this.state.album.releaseInfo}</div>
          </div>
        </section>
          <table id="song-list">
            <colgroup>
              <col id="song-number-column"/>
              <col id="song-title-column"/>
              <col id="song-duration-column"/>
            </colgroup>
            <tbody>
              {this.state.album.songs.map( (song, index) =>
                  <tr className="song" key={index}>
                  <td className="song-number">{index +1}</td>
                  <td className="song-title">{song.title}</td>
                  <td className="song-duration">{this.formatTime(song.duration)}</td>
                  </tr>

                )}
            </tbody>
          </table>
      </section>
    );
  }
}

export default Album;
