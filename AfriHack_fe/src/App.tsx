import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRouter";
import { Provider } from "react-redux";
import { store } from "./global/state";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={mainRouter} />
      </Provider>
    </div>
  );
};

export default App;
