import React,{Component} from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class SignIn extends Component {
    render(){
        return(
            <div >
              <Form>
                <FormGroup>
                  <Label for="email">Email :</Label>
                  <Input type="text" name="email" placeholder="abc@cool.com"></Input>
                </FormGroup>
                <FormGroup>
                  <Label for="password">password :</Label>
                  <Input type="password" name="password" placeholder="don't ask"></Input>
                </FormGroup>
                <Button>Submit</Button>
              </Form>
            </div>
        )
    }
}

export default SignIn;