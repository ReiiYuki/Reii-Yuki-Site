import React, { Component } from 'react'

export default class Project extends Component {
  render(){
    return (
      <div id="project">
        <div className="section light-blue darken-4 white-text">
          <div className="container">
            <h1 className="condensed light">Project</h1>
            <h3 className="condensed light">2014</h3>
            <div className="row">
              <div className="col s3">
                <div id="kawaii-killer" className="center">
                  <a href="http://www.greenfoot.org/scenarios/11904">
                    <img src="dist/medias/images/kawaii-killer.png" className="responsive-img"></img>
                    <h5 className="center white-text condensed light">Kawaii Killer</h5>
                  </a>
                </div>
              </div>
            </div>
            <h3 className="condensed light">2015</h3>
            <div className="row">
              <div className="col s3">
                <div id="thai-flag" className="center">
                  <a href="http://www.xn--72cg7aib8dyfra8l.com/">
                    <img src="dist/medias/images/thai-flag.png" className="responsive-img"></img>
                    <h5 className="center white-text condensed light">Let's keep the national flags on the pole</h5>
                  </a>
                </div>
              </div>
              <div className="col s3">
                <div id="saori" className="center">
                  <a href="https://bitbucket.org/b5710546593/saori-assistance">
                    <img src="dist/medias/images/saori.png" className="responsive-img"></img>
                    <h5 className="center white-text condensed light">Saori : The Assistance</h5>
                  </a>
                </div>
              </div>
              <div className="col s3">
                <div id="dot" className="center">
                  <a href="https://github.com/ReiiYuki/digitaldot">
                    <img src="dist/medias/images/dot.png" className="responsive-img"></img>
                    <h5 className="center white-text condensed light">Digital Dot</h5>
                  </a>
                </div>
              </div>
              <div className="col s3">
                <div id="ward" className="center">
                  <a href="http://exceed.cpe.ku.ac.th/wiki/index.php/Exceed_12_Seat_Belt">
                    <img src="dist/medias/images/ward.jpg" className="responsive-img circle"></img>
                    <h5 className="center white-text condensed light">Clothesline Sky Ward</h5>
                  </a>
                </div>
              </div>
            </div>
            <h3 className="condensed light">2016</h3>
            <div className="row">
              <div className="col s3">
                <div id="warku" className="center">
                  <a href="https://github.com/ReiiYuki/WarKu">
                    <img src="dist/medias/images/warku.png" className="responsive-img "></img>
                    <h5 className="center white-text condensed light">WarKu</h5>
                  </a>
                </div>
              </div>
              <div className="col s3">
                <div id="cookie" className="center">
                  <a href="https://github.com/b5710546232/Cookie-rising">
                    <img src="dist/medias/images/cookie.png" className="responsive-img "></img>
                    <h5 className="center white-text condensed light">Cookie : Rising</h5>
                  </a>
                </div>
              </div>
              <div className="col s3">
                <div id="kebthung" className="center">
                  <a href="https://github.com/ReiiYuki/kebthung">
                    <img src="dist/medias/images/kebthung.png" className="responsive-img "></img>
                    <h5 className="center white-text condensed light">Kebthung</h5>
                  </a>
                </div>
              </div>
              <div className="col s3">
                <div id="pokemon" className="center">
                  <a href="https://github.com/ReiiYuki/PokemonWeakDetector">
                    <img src="dist/medias/images/pokemon.png" className="responsive-img "></img>
                    <h5 className="center white-text condensed light">Pokemon Weak Detector</h5>
                  </a>
                </div>
              </div>
              <div className="col s3">
                <div id="nature" className="center">
                  <a href="https://github.com/ReiiYuki/WSP_BACKEND">
                    <img src="dist/medias/images/naturedrink.png" className="responsive-img "></img>
                    <h5 className="center white-text condensed light">Nature Drink</h5>
                  </a>
                </div>
              </div>
              <div className="col s3">
                <div id="kem" className="center">
                  <a href="https://github.com/b5710546232/KEM_KNOWLEDGE">
                    {/* {                    <img src="dist/medias/images/no.png" className="responsive-img circle"></img>   */}
                    <h5 className="center white-text condensed light">Rice Variety Suggestion System</h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
