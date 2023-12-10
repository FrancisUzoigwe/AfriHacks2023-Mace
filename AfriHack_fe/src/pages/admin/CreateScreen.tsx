import { useDispatch } from "react-redux";
import { createChangedToggle } from "../../global/globalState";

const CreateScreen = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="w-full z-[300] h-full absolute "
      onClick={() => {
        dispatch(createChangedToggle());
      }}
      style={{backdropFilter: "blur(4px)"}}
    >
      <div>Create Screen</div>
    </div>
  );
};

export default CreateScreen;
