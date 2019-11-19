import React, {Component} from 'react';

class App extends Component{
    render(){
        return(
          <div className="wrapper">
              <div className="header">
                  <div className="navbar">
                      <div className="logo">
                          <img className="imgfluid" src={require('../logo/babastudio-logo.png')} />
                      </div>
                      <div className="menu">
                           <ul>
                                <li><a>Home</a></li>
                                <li><a>Blogs</a></li>
                                <li><a>Galery</a></li>
                                <li><a>Kontak</a></li>
                           </ul>
                      </div>
                  </div>
              </div>
                  {/* end header */}
                  <div className="slider">
                      <div className="slidercontent">
                              <img className="imageslider" src={require('../images/banner-desktop.jpg')} />
                      </div>
                  </div>
                  {/* slider */}
                  <h2 className="dataprestasi">Prestasi Murid Babastudio</h2>
                  <div className="content">
                  
                          <div className="content-gambar">
                              <div className="image">
                                    <img className="imageslider" src={require('../images/21cineplex.jpg')} />
                                    <div className="contentimage">
                                         <h2 className="fontimage">www.21cineplex</h2>
                                    </div>
                              </div>
                          </div>
                              <div className="image">
                                      <img className="imageslider" src={require('../images/bpn.jpg')} />
                                      <div className="contentimage">
                                          <h2 className="fontimage">www.bpn.go.id</h2>
                                      </div>  
                              </div>
                              <div className="image">
                                      <img className="imageslider" src={require('../images/republika.jpg')} />
                                      <div className="contentimage">
                                          <h2 className="fontimage">wwww.republika.co.id</h2>
                                      </div>
                                <div className="content-map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.028605622624!2d106.99307894966742!3d-6.259962295446669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698dd1d502ed43%3A0x556565c2411f873!2sBABASTUDIO%20(Bekasi)!5e0!3m2!1sen!2sid!4v1574178761890!5m2!1sen!2sid" width="400" height="300" frameborder="0" allowfullscreen=""></iframe>
                                </div>
                              </div>
                  </div>
                  {/* end cgambar */}
                  <div className="content-gambar"></div>
                        <h2 className="dataprestasi">Tempat Kursus Babastudio</h2>
                        <div className="content-youtube">
                            <iframe  src="https://www.youtube.com/embed/jmF7TQFmoAc?start=2" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
          </div>
        )
    }
}
export default App;
