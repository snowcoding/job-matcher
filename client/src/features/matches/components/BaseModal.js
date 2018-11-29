import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import PropTypes from "prop-types";

class BaseModal extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={this.props.toggleJobModal}
        className="modal-lg"
      >
        <ModalHeader toggle={this.props.toggleJobModal}>
          {this.props.data.name}
        </ModalHeader>

        <ModalBody>
          {this.props.data.title}
          {this.props.data.summary}
        </ModalBody>

        <ModalFooter>
          <Button color="secondary" onClick={this.props.toggleJobModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default BaseModal;

BaseModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired
  })
};
BaseModal.defaultProps = {
  isOpen: false,
  toggle: () => {
    console.log("toggle modal");
  },
  data: {
    name: "fetching name",
    title: "fetching title",
    summary: "fetching summary"
  }
};
