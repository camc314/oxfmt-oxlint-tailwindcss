interface CardProps {
  title: string;
  description: string;
}

// Good card with proper Tailwind classes
export function Card({ title, description }: CardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

// Bad card with multiple issues - duplicates and conflicts
export function BadCardMessy() {
  return (
    <div className="p-4 p-6 bg-white bg-gray-100 shadow-lg rounded-xl shadow-md">
      <h2 className="text-xl text-2xl font-bold font-bold mb-4">
        Messy Card
      </h2>
      <p className="text-gray-600 text-gray-500">
        This card has many issues
      </p>
    </div>
  );
}

// Bad card with unordered classes - should trigger enforce-consistent-class-order
export function BadCardUnordered() {
  return (
    <div className="hover:bg-gray-100 p-4 bg-white md:p-6 flex rounded-lg shadow-md items-center">
      Unordered classes
    </div>
  );
}

// Good card with properly ordered classes
export function GoodCardOrdered() {
  return (
    <div className="flex items-center rounded-lg bg-white p-4 shadow-md hover:bg-gray-100 md:p-6">
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-gray-900">Clean Card</h3>
        <p className="text-sm text-gray-500">Properly ordered classes</p>
      </div>
    </div>
  );
}
