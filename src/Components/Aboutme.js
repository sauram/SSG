import React ,{Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Aboutme extends Component {
  render(){
    return(
      <div className="About-body">


        <div>
          <Grid className="About-Grid">
            <Cell col={6}>
              <img

                src="https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-9/29695015_1832039880429792_8677078344915246623_n.jpg?_nc_cat=102&oh=34e6aaf42123bc143e2186010ca0b0a5&oe=5C5FE168"
                alt="Picture"
                className="Parallex"
              />
            </Cell>
            {/*Content*/}
            <Cell col={6} className="About-text">
              <h2> Introduction</h2>
              <p>
                I am <b>Saurabh Singh Gautam</b> , a B.tech undergraduate of Computer science and Engineering Department at Indian Institute of Technology, Roorkee.
                I am a freelance developer and designer . You can check out some of my designs under the Project section.
              </p>
            </Cell>
            {/*Content*/}

          </Grid>
        </div>

        <hr style={{borderTop :' 2px solid red', width:'60%' , marginTop:'20px',marginLeft:'400px'}}/>

      </div>
    );
  }
}

export default Aboutme;
