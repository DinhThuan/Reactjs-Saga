import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Message from "../components/Message";
class MessageContainer extends React.Component {
   render() {
      let { message } = this.props;
      return <Message message={message}></Message>;
   }
}

MessageContainer.propTypes = {
   message: PropTypes.string.isRequired
};

const mapStateToProps = state => {
   return {
      message: state.message
   };
};

const mapDispatchToProps = (dispatch,props) => {
   return {

   };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);
