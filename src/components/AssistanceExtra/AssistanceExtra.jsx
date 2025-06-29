import {
  Section,
  Container,
  Title,
  Subtitle,
  CardsRow,
  Card,
  Icon,
  Label,
  ButtonWrapper,
  Button
} from './AssistanceExtra.styles';
import { assistanceExtra } from '../../data/assistanceExtra';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default function AssistanceExtra() {
  return (
    <Section>
      <Container>
        <Title>Más asistencias en tu seguro de salud</Title>
        <Subtitle>
          Te acompañamos desde la prevención<br/>
          No esperes a que te pase algo para usar todos los beneficios que tenemos
        </Subtitle>

        <CardsRow>
          {assistanceExtra.map(item => (
            <Card key={item.id}>
              <Icon src={item.icon} alt={item.label} />
              <Label>{item.label}</Label>
            </Card>
          ))}
        </CardsRow>

        <ButtonWrapper>
          <Button href="#" target="_blank" rel="noopener">
            <FontAwesomeIcon icon={faHome} />
            Ver PDF completo de asistencias
          </Button>
        </ButtonWrapper>
      </Container>
    </Section>
  );
}
