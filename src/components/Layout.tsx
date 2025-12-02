interface LayoutProps {
  children: React.ReactNode;
}

// Good layout with proper Tailwind classes
export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <h1 className="text-xl font-bold text-gray-900">Demo App</h1>
          <nav className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}

// Bad grid with conflicts
export function BadGrid() {
  return (
    <div className="grid grid-cols-3 grid-cols-2 gap-4 gap-6 p-4">
      <div className="bg-blue-100 bg-blue-200 p-4">Item 1</div>
      <div className="bg-blue-100 p-4 p-4">Item 2</div>
      <div className="bg-blue-100 p-4">Item 3</div>
    </div>
  );
}

// Bad flexbox with conflicting alignment
export function BadFlex() {
  return (
    <div className="flex justify-center justify-between items-start items-center flex-col flex-row">
      <span>Left</span>
      <span>Right</span>
    </div>
  );
}

// Bad responsive with conflicts at breakpoints
export function BadResponsive() {
  return (
    <div className="w-full md:w-1/2 md:w-1/3 lg:w-1/4 lg:w-1/3 p-2 p-4 md:p-4 md:p-6">
      Responsive container with issues
    </div>
  );
}

// Good responsive layout
export function GoodResponsive() {
  return (
    <div className="w-full p-2 md:w-1/2 md:p-4 lg:w-1/3 lg:p-6">
      Clean responsive container
    </div>
  );
}
