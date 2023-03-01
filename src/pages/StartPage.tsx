import FormBox from "../components/FormBox";
import HeaderStartPage from "../components/HeaderStartPage";
import ErrorBoundary from "../ErrorBoundry";
const handleSubmit = (name: string) => {
  console.log(`The submitted name is: ${name}`);
};
function StartPage() {
    return (
      <div>
      <ErrorBoundary>
        <HeaderStartPage />
      </ErrorBoundary>
      <ErrorBoundary>
        <FormBox onSubmit={handleSubmit} />
      </ErrorBoundary>
    </div>
    );
}

export default StartPage;
