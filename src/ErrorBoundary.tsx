import { Component, ErrorInfo, ReactNode } from "react";
import Error from "Errors/Error";
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
    const errorElements = {
      error400: {
        type: 400,
        description:
          "The server could not understand the request due to malformed syntax or invalid parameters",
        hint: `Check the data you're sending in the request. Ensure all required parameters are included and properly formatted.`
      },
      error401: {
        type: 401,
        description:
          "The request lacks valid authentication credentials or the provided credentials are insufficient.",
        hint: `Verify that you are using the correct authentication credentials. If
        you don't have access, contact the system administrator.`
      },
      error403: {
        type: 403,
        description:
          " The server understood the request, but you do not have the necessary permissions to access the requested resource.",
        hint: `Make sure you have the appropriate permissions for the requested
        action. If the issue persists, contact the system administrator.`
      },
      error405: {
        type: 405,
        description:
          "The request method is not supported for the requested resource.",
        hint: `Check the HTTP method used in your request. Ensure it aligns with the
        allowed methods for the specific endpoint.`
      },
      error500: {
        type: 500,
        description:
          "The server encountered an unexpected condition that prevented it from fulfilling the request.",
        hint: `This is an internal server issue. While there's nothing you can do on
        your end, you may want to report the issue to the system administrator
        or support team for resolution.`
      }
    };
    if (this.state.hasError) {
      switch (this.state.errorType) {
        case "error400":
          return (
            <Error
              type={errorElements.error400.type}
              description={errorElements.error400.description}
              hint={errorElements.error400.hint}
            />
          );
        case "error401":
          return (
            <Error
              type={errorElements.error401.type}
              description={errorElements.error401.description}
              hint={errorElements.error401.hint}
            />
          );
        case "error403":
          return (
            <Error
              type={errorElements.error403.type}
              description={errorElements.error403.description}
              hint={errorElements.error403.hint}
            />
          );
        case "error405":
          return (
            <Error
              type={errorElements.error405.type}
              description={errorElements.error405.description}
              hint={errorElements.error405.hint}
            />
          );
        case "error500":
          return (
            <Error
              type={errorElements.error500.type}
              description={errorElements.error500.description}
              hint={errorElements.error500.hint}
            />
          );
        default:
          return <DefaultError />;
      }
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
