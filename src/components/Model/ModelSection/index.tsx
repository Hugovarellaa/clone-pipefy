import { Container } from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  nodelName: string;
  overlayNode: React.ReactNode;
}

const ModelSection: React.FC<Props> = ({
  nodelName,
  overlayNode,
  children,
  ...props
}) => {
  return <Container {...props}>{children}</Container>;
};

export default ModelSection;
