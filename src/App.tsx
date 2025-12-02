import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Layout>
      <h1 className="mb-8 text-3xl font-bold text-gray-900">
        Tailwind CSS Demo
      </h1>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Buttons</h2>
        <div className="flex gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Cards</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card title="Card 1" description="This is the first card" />
          <Card title="Card 2" description="This is the second card" />
          <Card title="Card 3" description="This is the third card" />
        </div>
      </section>
    </Layout>
  );
}

export default App;
