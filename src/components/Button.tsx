interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  onClick?: () => void;
}

// Good button with proper Tailwind classes
export function Button({ children, variant = "primary", onClick }: ButtonProps) {
  const baseClasses = "rounded-lg px-4 py-2 font-medium transition-colors focus:outline-none focus:ring-2";
  
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-300",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// Bad button with duplicate classes - should trigger no-duplicate-classes
export function BadButtonDuplicates() {
  return (
    <button className="bg-blue-500 text-white p-4 bg-blue-500 rounded-lg hover:bg-blue-600">
      Duplicate classes
    </button>
  );
}

// Bad button with conflicting classes - should trigger no-conflicting-classes
export function BadButtonConflicts() {
  return (
    <button className="text-red-500 text-blue-500 p-2 p-4 mt-4 mt-8">
      Conflicting styles
    </button>
  );
}

// Bad button with unnecessary whitespace - should trigger no-unnecessary-whitespace
export function BadButtonWhitespace() {
  return (
    <button className="  bg-green-500    text-white   p-4  rounded  ">
      Extra spaces
    </button>
  );
}

// Bad button with unregistered classes - should trigger no-unregistered-classes
export function BadButtonInvalid() {
  return (
    <button className="bg-blue-500 invalid-class-name fake-utility not-a-real-class">
      Invalid classes
    </button>
  );
}
