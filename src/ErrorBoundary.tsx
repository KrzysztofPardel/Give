import { Component, ErrorInfo, ReactNode } from "react";
import Error400 from "./Errors/Error400";
import Error401 from "./Errors/Error401";
import Error403 from "./Errors/Error403";
import Error405 from "./Errors/Error405";
import Error500 from "./Errors/Error500";
import DefaultError from "./Errors/DefaultError";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  errorType?: string;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorType: "string"
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    if (error.message.includes("400")) {
      return { hasError: true, errorType: "error400" };
    } else if (error.message.includes("401")) {
      return { hasError: true, errorType: "error401" };
    } else if (error.message.includes("403")) {
      return { hasError: true, errorType: "error403" };
    } else if (error.message.includes("405")) {
      return { hasError: true, errorType: "error405" };
    } else if (error.message.includes("500")) {
      return { hasError: true, errorType: "error500" };
    } else {
      return { hasError: true, errorType: undefined };
    }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      switch (this.state.errorType) {
        case "error400":
          return <Error400 />;
        case "error401":
          return <Error401 />;
        case "error403":
          return <Error403 />;
        case "error405":
          return <Error405 />;
        case "error500":
          return <Error500 />;
        default:
          return <DefaultError />;
      }
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
