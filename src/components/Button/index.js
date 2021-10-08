import { Container } from './style';

export const Button = ({ name, icon, onClick, type, ...rest }) => {

    return <Container onClick={onClick} type={type} {...rest}>{icon}{name}</Container>
}