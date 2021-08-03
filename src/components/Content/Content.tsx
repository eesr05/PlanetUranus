import {Container} from './styles'
import planetImg from '../../planeta.png'
export function Content(){
  return(
    <>
    <Container>
    <p>Planeta</p>
    <img src={planetImg} alt="Foto do planeta Urano" />

    <div>
      <strong>Uranus</strong>
    </div>
    </Container>
    </>
  )
}