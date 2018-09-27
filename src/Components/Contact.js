import React ,{Component} from 'react';
import {Grid, Cell ,List, ListItem, ListItemContent } from 'react-mdl';
class Contact extends Component {
  render(){
    return(
      <div className="contact-body">
        <Grid className="contact-grid">

          <Cell col={6}>
            <h2>Saurabh</h2>
            <img
              src="https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-9/29695015_1832039880429792_8677078344915246623_n.jpg?_nc_cat=102&oh=34e6aaf42123bc143e2186010ca0b0a5&oe=5C5FE168"
              alt="avatar"
              style={{height: '250px'}}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '2em', fontSize :'20px'}}>
              I am a freelance developer and designer.
              I have been into development for past 1 year.
              I love to code and develop web applications.
              I am also into designing and whenever get time try to make something new.
            </p>
          </Cell>

          <Cell col={6}>

            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                {/*Number*/}
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (+91) 997 301 8247
                  </ListItemContent>
                </ListItem>
                {/*Email*/}
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    saurabhGautam@gamil.com
                  </ListItemContent>
                </ListItem>
                {/*Skype ID*/}
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    Skype ID
                  </ListItemContent>
                </ListItem>
                {/*address*/}
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-address-card" aria-hidden="true"  style={{fontSize: '60px'}} />
                    S-22, Ravindra Bhawan, IIT Roorkee-247667
                  </ListItemContent>
                </ListItem>

              </List>
            </div>

          </Cell>

        </Grid>

      </div>
    );
  }
}

export default Contact;
