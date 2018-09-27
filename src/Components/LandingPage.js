import React ,{Component} from 'react';
import {Grid , Cell} from 'react-mdl';
class LandingPage extends Component {
  render(){
    return(
      <div style={{width : '100%' , margin :'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
              alt="User Avatar"
              className="Avatar-image"
            />
            <div className="banner-text">
              <h1>  Developer | Designer</h1>
              <hr />
              <p>HTML | CSS | JAVASCRIPT| REACTJS | DJANGO | ADOBE PHOTOSHOP | ADOBE ILLUSTRATOR</p>

              <div className="social-links">

                {/* LinkedIn */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a href="https://github.com/sauram" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* fb */}
                <a href="https://www.facebook.com/zansaurabh.singh" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>


              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
