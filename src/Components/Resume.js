import React ,{Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Skills from './skills';
class Resume extends Component {
  render(){
    return(
      <div>
        <Grid>

          <Cell col={3}>

          </Cell>
          <Cell col={6}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <div>
                <h1> Saurabh Singh Gautam </h1>
                <h5>S-22,Ravindra Bhawan, IIT Roorkee<br />
                  Roorkee, Haridwar-247667. <br />
                  ss0274307@gmail.com<br />
                  9973018247
                </h5>
              </div>
              <img
                src="https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-9/29695015_1832039880429792_8677078344915246623_n.jpg?_nc_cat=102&oh=34e6aaf42123bc143e2186010ca0b0a5&oe=5C5FE168"
                alt="Picture"
                style={{height: '250px',borderRadius:'300px'}}
              />
            </div>
            />


            <hr style={{borderTop: '3px solid #e22947'}} />



            <h2 style={{align:'center'}}>Education</h2>
            <Education
              startYear={2012}
              endYear={2014}
              schoolName="D.A.V Public School,Hehal"
              Description="High School"
              CG="10.00"
            />
            <Education
              startYear={2014}
              endYear={2016}
              schoolName="D.P.S ,Ranchi"
              Description=" Intermediate"
              CG="98.20%"
            />
            <Education
              startYear={2017}
              endYear={2021}
              schoolName="1st year"
              Description="Indian Institute of Technology ,Roorkee"
              CG="8.219"
            />

            <hr style={{borderTop: '3px solid #e22947'}} />


            <h2 style={{align:'center'}}>Skills</h2>
            <Skills
              skill="C++"
              progress={100}
            />
            <Skills
              skill="HTML/CSS"
              progress={80}
            />
            <Skills
              skill="ReactJS"
              progress={90}
            />
            <Skills
              skill="Django"
              progress={40}
            />
            <Skills
              skill="Adobe Illustrator"
              progress={70}
            />
            <Skills
              skill="Adobe Photoshop"
              progress={60}
            />
          </Cell>

        </Grid>
      </div>
    );
  }
}

export default Resume;
