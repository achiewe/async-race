import Header from "../header/header";
import Garage from "../pages/garage-page/garage";
import Winners from "../pages/winners-page/winners";
import PageRoute from "../routing/pageRoute";

function App() {
  return (
    <>
      <Header />
      <PageRoute path="#garage">
        <Garage />
      </PageRoute>

      <PageRoute path="#winners">
        <Winners />
      </PageRoute>
    </>
  );
}

export default App;
