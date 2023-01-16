import './App.css';
import { lazy, Suspense } from "react";
import { useQueryErrorResetBoundary } from "react-query";
import { ErrorBoundary } from "react-error-boundary";
import RefreshButton from "./components/RefreshButton";
import { Vortex } from "react-loader-spinner";

// Lazy import TodooList
const TodoList = lazy(() => import("./components/TodoList"));

// Loading component
const Loading = () => (
    <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{
            position: "fixed",
            top: "50%",
            left: "50%"
        }}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
    />
);

// A component to be shown when there is an error
// @param resetErrorBoundary - A function that is passed from ErrorBoundaray component
const ErrorFallback = ({ error, resetErrorBoundary }) => (
    <div>
        <h1>An error had occured</h1>
        <RefreshButton onClick={resetErrorBoundary}>Try again</RefreshButton>
        <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
    </div>
);

function App() {
    const { reset } = useQueryErrorResetBoundary(); // Refresh from reset-query
    return (
        <ErrorBoundary onReset={reset} fallbackRender={ErrorFallback}>
            <Suspense fallback={<Loading />}>
                <TodoList />
            </Suspense>
        </ErrorBoundary>
    );
}

export default App;
