import { Container, Heading, Buttons } from "../DefaultOverlayContent/styles";

interface Props {
  label: string;
  description: string;
}

const DefaultOverlayContent: React.FC<Props> = (label, description) => {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Heading>

      <Buttons>
        <button>Custom Order</button>
        <button className="white">existing Inventory</button>
      </Buttons>
    </Container>
  );
};

export default DefaultOverlayContent;
