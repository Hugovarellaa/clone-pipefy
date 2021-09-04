import { useCallback, useRef, useState } from "react";
import { CarModel } from "../../ModelsContext";
import { Container } from "./styles";

const ModelWrapper: React.FC = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([]);

  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels(state => [...state, model ]);
  }, []);

  return <Container ref={wrapperRef}>{children}</Container>;
};
export default ModelWrapper;
