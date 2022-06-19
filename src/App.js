
import { Form, Checkbox, Button, Grid, Container, Card, Segment, Image, GridColumn, Message } from "semantic-ui-react";


function App() {
  return (
    <div>

      <Grid columns='equal' style={{ marginTop: '20px' }} >
        <Grid.Row textAlign='center'>

          <Grid.Column>
            <Image src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' size='mini' verticalAlign='middle' spaced />
            <span style={{ fontSize: '20px', fontWeight: 'bolder', color: 'rgb(38, 229, 243)' }}>Member Login</span>
          </Grid.Column>

        </Grid.Row>
        <Grid.Row textAlign='center'>
          <Grid.Column>
          </Grid.Column>
          <Card>
            <Card.Content>
              <Grid.Column width={7}>
                <Form>
                  <Form.Field>
                    <label>Username</label>
                    <Form.Input placeholder='usernama' type={'text'} icon='user'
                      iconPosition='left' />
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <Form.Input placeholder='Password' type={'password'} icon='lock'
                      iconPosition='left' />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                  </Form.Field>
                  <Button type='submit' color="teal" fluid>Login</Button>
                </Form>
              </Grid.Column>
              <Message style={{position:'absolute',marginTop:'45px', paddingRight:'27px', paddingLeft:'27px'}} fluid>
                  <p>
                    Tidak punya akun? Silahkan <a href="#">register</a>
                  </p>
                </Message>
            </Card.Content>
          </Card>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>

      </Grid>




    </div>
  );
}

export default App;
