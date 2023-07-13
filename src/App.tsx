// import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";
function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  // let items = ["New york", "laguna", "tokyo", "london", "paris"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  return (
    <div>
      {/* <Alert text="Hello World" /> */}
      {/* <Alert>
        Hello <strong>World bai</strong>
      </Alert> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisible(true)}>
        My Button
      </Button>
    </div>
    // <div>
    //   <ListGroup
    //     items={items}
    //     heading="Cities"
    //     onSelectItem={handleSelectItem}
    //   />
    // </div>
  );
}

export default App;
