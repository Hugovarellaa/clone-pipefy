import { Container, Headding, Buttons } from "./styles";

interface Props {
  label: string;
  description: string;
}

const DefaultOverlayContent: React.FC<Props> = ({label, description}) => {
  return (
    <Container>
      <Headding>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Headding>

      <Buttons>
        <button type="button">Custom Order</button>
        <button type="button">Existing Inventory</button>
      </Buttons>
    </Container>
  )
}

export default DefaultOverlayContent;