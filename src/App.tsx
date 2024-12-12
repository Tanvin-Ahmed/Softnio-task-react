import "./App.css";
import Details from "./components/details";

function App() {
  return (
    <main className="h-full w-full container mx-auto p-5 roboto-regular">
      <div className="lg:grid grid-cols-12 gap-4 space-y-20 lg:space-y-0 relative">
        <section className="col-span-6">
          <img
            src={`/assets/purple.png`}
            className="w-full h-full rounded"
            alt="thumbnail"
          />
        </section>
        <Details />
        <div id="checkout-btn-container"></div>
      </div>
    </main>
  );
}

export default App;
