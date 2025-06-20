import "./App.css";
import TextInput from "@/components/input/TextInput";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold" data-testid="title">
        Cypress Demo
      </h1>
      <TextInput />
      <Button>Click me</Button>
    </>
  );
}

export default App;
