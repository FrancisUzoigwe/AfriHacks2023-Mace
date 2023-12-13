import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRouter";
import { Provider } from "react-redux";
import { store } from "./global/state";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
// import axios from "axios";
// import { useEffect, useState } from "react";

let persistor = persistStore(store);
// const URL = "https://teammace.onrender.com";

// const view = axios.get(URL).then((res) => {
//   console.log(res);

//   return res;
// });

// const [loading, setLoading]: any = useState();

// useEffect(() => {
//   setLoading(view);
// }, []);

// console.log("This is loading: ", loading);

const App = () => {
  return (
    <>
      <div>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={mainRouter} />
          </PersistGate>
        </Provider>
      </div>
    </>
  );
};

export default App;
