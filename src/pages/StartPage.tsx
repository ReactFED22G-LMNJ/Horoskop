import FormBox from "../components/FormBox";
import HeaderStartPage from "../components/HeaderStartPage";
import ErrorBoundary from "../ErrorBoundry";

function StartPage() {
  return (
    <div>
      <ErrorBoundary>
        <HeaderStartPage />
      </ErrorBoundary>
      <ErrorBoundary>
        <FormBox />
      </ErrorBoundary>
    </div>
  );
}

export default StartPage;
