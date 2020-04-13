import { makeNews, changeText } from "../actions";
import App from "../components/App";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    news: state.news,
    filterText: state.filterText
  };
}
const mapDispatchToProps = {
  makeNews,
  changeText
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
