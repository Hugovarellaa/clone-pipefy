import DefaultOverlayContent from "../DefaultOverlayContent";
import { Container } from "./styles";
import { ModelSection, ModelsWrapper } from "../Model";


const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          <ModelSection
          className="colored"
            modelName="Model One"
            overlayNode={
              <DefaultOverlayContent
                label="Model One"
                description="Order Online for Delivery"
              />
            }
          />
        </div>
      </ModelsWrapper>
    </Container>
  );
};
export default Page;
