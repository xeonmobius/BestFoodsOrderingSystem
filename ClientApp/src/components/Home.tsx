import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';


const Home = () => {

    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");

    const submitHandler = (event: MouseEvent) => {
        event.preventDefault();
    }

    return (
        <Container>
            <h1>Hello!</h1>
            <p>Welcome to Best Food Ordering System!</p>
            <p>Please login to start making an order.</p>
            <div>
                {/*Login form for auth*/}
                <Form>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="example@example.com" onChange={(e) => setEmail(e.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="Password" onChange={(e) => setPassword(e.target.value)}/>
                    </FormGroup>
                    <Button block size="lg" type="submit" onclick={submitHandler}>Login</Button>
                </Form>
            </div>
        </Container>
    )
}

export default connect()(Home);
