// Import necessary things from React
import React, { ReactNode } from 'react';

// Define the structure of the component's state
interface State {
  hasError: boolean; // true when an error is caught
}

// Define the expected props — it should wrap children components
interface ErrorBoundaryProps {
  children: ReactNode; // the part of the UI it’s protecting
}

// Create the ErrorBoundary class, extending React.Component
class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    // Start with no error
    this.state = { hasError: false };
  }

  // This method runs automatically if a child component throws an error
  static getDerivedStateFromError(error: Error): State {
    // Update state to show the fallback UI
    return { hasError: true };
  }

  // This lifecycle method is called after an error is caught
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can log the error to a monitoring service here
    console.log({ error, errorInfo });
  }

  // This method determines what is shown on the screen
  render() {
    // If an error was caught, show a fallback UI
    if (this.state.hasError) {
      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again?
          </button>
        </div>
      );
    }

    // If no error, render the child components as usual
    return this.props.children;
  }
}

// Export this component so you can use it to wrap other parts of your app
export default ErrorBoundary;
