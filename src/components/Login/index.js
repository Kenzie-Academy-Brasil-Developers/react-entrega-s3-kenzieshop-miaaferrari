import { Button } from '../Button/index';
import { Container } from './style';

export const LoginComponent = () => {

    return (
        <Container>
            <form>
                <h1>Login</h1>
                <div>
                    <label for='email'>E-mail</label>                        
                    <input 
                        placeholder='your email' 
                        name='email'
                    />
                </div>
                <div>
                    <label for='password'>Password</label>
                    <input 
                        label='Senha'  
                        placeholder='your password' 
                        type='password' 
                        name='password'
                    />
                </div>
                <Button name='Login' type='submit'></Button>
            </form>
        </Container>
    )
}

