import "./App.css";
import UserProfile from "./components/UserProfile";
import Button from "./components/Button";
import NewsCard from "./components/NewsComponent";
import ProductGrid from "./components/notebook2/question1";

function App() {
  return (
    <>
      {/* <h1 className='text-2xl font-bold underline bg-background'>Hello World!</h1> */}
      <UserProfile />
      <div className="text-center mt-5">
        <h2>Button Components</h2>
        <div className="flex flex-col max-w-[480px] p-4 items-center mx-auto border gap-5 justify-center">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="success">Success Button</Button>
          <Button variant="danger">Danger Button</Button>
        </div>
      </div>
      <NewsCard />
      <ProductGrid />
    </>
  );
}

export default App;
