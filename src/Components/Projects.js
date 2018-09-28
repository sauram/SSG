import React ,{Component} from 'react';
import {Tabs , Tab ,Grid ,Cell, Card ,CardText, CardTitle,CardMenu,CardActions, Button, IconButton} from 'react-mdl';
class Projects extends Component {
  constructor(props){
    super(props);
    this.state={ActiveTab :0};
  }
  toggleCategories(){
    if(this.state.ActiveTab===0){
      return(
        <div  className="project-grid">
          <Card shadow={5} style={{
            minWidth:'950' ,
            margin: 'auto'

          }}>
            <CardTitle style={{color :'#fff', height:'178px' , background :'url(https://facebook.github.io/react/logo-og.png) center / cover' }}></CardTitle>
            <CardText>ReactApp #1</CardText>
            <CardActions border>
              <Button colored >Github</Button>
              <Button colored>Codepen</Button>
              <Button colored>Gitlab</Button>

            </CardActions>
            <CardMenu style={{color:'#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{
            minWidth:'450' ,
            margin:'auto'
          }}>
            <CardTitle style={{color :'#fff', height:'178px' , background :'url(https://facebook.github.io/react/logo-og.png) center / cover' }}></CardTitle>
            <CardText>ReactApp #2</CardText>
            <CardActions border>
              <Button colored >Github</Button>
              <Button colored>Codepen</Button>
              <Button colored>Gitlab</Button>

            </CardActions>
            <CardMenu style={{color:'#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{
            minWidth:'450' ,
            margin:'auto'
          }}>
            <CardTitle style={{color :'#fff', height:'178px' , background :'url(https://facebook.github.io/react/logo-og.png) center / cover' }}></CardTitle>
            <CardText>ReactApp #3</CardText>
            <CardActions border>
              <Button colored >Github</Button>
              <Button colored>Codepen</Button>
              <Button colored>Gitlab</Button>

            </CardActions>
            <CardMenu style={{color:'#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{
            minWidth:'450' ,
            margin:'auto'
          }}>
            <CardTitle style={{color :'#fff', height:'178px' , background :'url(https://facebook.github.io/react/logo-og.png) center / cover' }}></CardTitle>
            <CardText>ReactApp #4</CardText>
            <CardActions border>
              <Button colored >Github</Button>
              <Button colored>Codepen</Button>
              <Button colored>Gitlab</Button>

            </CardActions>
            <CardMenu style={{color:'#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


        </div>
          );

          }
          else if(this.state.ActiveTab === 1){
            return(
              <div  className="project-grid">
                <Card shadow={5} style={{
                  minWidth:'950' ,
                  margin: 'auto'

                }}>
                  <CardTitle style={{color :'#fff', height:'178px' , background :'url(https://www.djangoproject.com/m/img/logos/django-logo-negative.png) center / cover' }}></CardTitle>
                  <CardText>Django #1</CardText>
                  <CardActions border>
                    <Button colored >Github</Button>
                    <Button colored>Codepen</Button>
                    <Button colored>Gitlab</Button>

                  </CardActions>
                  <CardMenu style={{color:'#fff' }}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>

                <Card shadow={5} style={{
                  minWidth:'450' ,
                  margin:'auto'
                }}>
                  <CardTitle style={{color :'#fff', height:'178px' , background :'url(https://www.djangoproject.com/m/img/logos/django-logo-negative.png) center / cover' }}></CardTitle>
                  <CardText>Django #2</CardText>
                  <CardActions border>
                    <Button colored >Github</Button>
                    <Button colored>Codepen</Button>
                    <Button colored>Gitlab</Button>

                  </CardActions>
                  <CardMenu style={{color:'#fff' }}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>
                <Card shadow={5} style={{
                  minWidth:'450' ,
                  margin:'auto'
                }}>
                  <CardTitle style={{color :'#fff', height:'178px' , background :'url(https://www.djangoproject.com/m/img/logos/django-logo-negative.png) center / cover' }}></CardTitle>
                  <CardText>Django #3</CardText>
                  <CardActions border>
                    <Button colored >Github</Button>
                    <Button colored>Codepen</Button>
                    <Button colored>Gitlab</Button>

                  </CardActions>
                  <CardMenu style={{color:'#fff' }}>
                    <IconButton name="share" />
                  </CardMenu>
                </Card>




              </div>
                );
  }
  else if(this.state.ActiveTab === 2){
    return(
      <div>
        <div className="project-grid">
          <Card shadow={5} style={{
            minWidth:'950' ,
            margin: 'auto'

          }}>
            <CardTitle style={{color :'#fff', height:'178px' , background :'url(https://adobe99u.files.wordpress.com/2016/10/how-to-fix-design-01.jpg?quality=100&resize=1240%2C920&strip) center / cover' }}></CardTitle>
            <CardText>Designer</CardText>
            <CardActions border>
              <a href="https://drive.google.com/file/d/1OzpkYk30IipA7OLsrkHFnRhTuRMMcRvg/view" target="_blank"><Button colored >Google Drive</Button></a>

            </CardActions>
            <CardMenu style={{color:'#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{
            minWidth:'950' ,
            margin: 'auto'

          }}>
            <CardTitle style={{color :'#fff', height:'178px' , background :'url(https://adobe99u.files.wordpress.com/2016/10/how-to-fix-design-01.jpg?quality=100&resize=1240%2C920&strip) center / cover' }}></CardTitle>
            <CardText>Minimal</CardText>
            <CardActions border>
              <a href="" target="_blank"><Button colored >Google Drive</Button></a>

            </CardActions>
            <CardMenu style={{color:'#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{
            minWidth:'950' ,
            margin: 'auto'

          }}>
            <CardTitle style={{color :'#fff', height:'178px' , background :'url(https://adobe99u.files.wordpress.com/2016/10/how-to-fix-design-01.jpg?quality=100&resize=1240%2C920&strip) center / cover' }}></CardTitle>
            <CardText>Keep it Simple</CardText>
            <CardActions border>
              <a href="https://drive.google.com/file/d/1VZADpA2eDqIbMrrXpQCXx94btkL3j8nF/view" target="_blank"><Button colored >Google Drive</Button></a>

            </CardActions>
            <CardMenu style={{color:'#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          <Card shadow={5} style={{
            minWidth:'950' ,
            margin: 'auto'

          }}>
            <CardTitle style={{color :'#fff', height:'178px' , background :'url(https://adobe99u.files.wordpress.com/2016/10/how-to-fix-design-01.jpg?quality=100&resize=1240%2C920&strip) center / cover' }}></CardTitle>
            <CardText>Text Potrait</CardText>
            <CardActions border>
              <a href="https://drive.google.com/file/d/1S_RLw0WC5U0o0oeNeQMSf4wMp4RYSzbS/view" target="_blank"><Button colored >Google Drive</Button></a>

            </CardActions>
            <CardMenu style={{color:'#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


        </div>
        );
      </div>
    );
  }

 }
  render(){
    return(
      <div className="category-tabs">
        <Tabs ActiveTab={this.state.ActiveTab} onChange={(tabID)=>this.setState({ActiveTab : tabID})} ripple >
          <Tab>React</Tab>
          <Tab>Django</Tab>
          <Tab>Designs</Tab>
        </Tabs>


        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>



      </div>
    );
  }
}

export default Projects
