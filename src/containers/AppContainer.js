import { makeNews, changeText, errorMessage} from "../actions";
import App from "../components/App";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    news: state.news,
    filterText: state.filterText,
    errorText: state.errorText
  };
}
const mapDispatchToProps = {
  makeNews,
  changeText,
  errorMessage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
