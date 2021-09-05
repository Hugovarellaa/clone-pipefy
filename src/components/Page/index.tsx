import { ModelSection, ModelWrapper } from "../Model";
import DefaultOverlayContent from "../DefaultOverlayContent";
import { Container } from "./styles";

function Page() {
  return (
    <Container>
      <ModelWrapper>
        <div>
          {[
            'Model One',
            // 'Model Two',
            // 'Model Three',
            // 'Model Four',
            // 'Model Five',
            // 'Model Six',
            // 'Model Seven',
          ].map(modelName => (
            <ModelSection
            key={modelName}
            className="colored"
            modelName={modelName}
            overlayNode={
              <DefaultOverlayContent
                label={modelName}
                description="Order Online for Delivery"
              />
            }
          />
          ))}
          
        </div>
      </ModelWrapper>
    </Container>
  );
}

export default Page;
