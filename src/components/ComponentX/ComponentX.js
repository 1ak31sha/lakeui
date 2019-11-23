import React from 'react';
import PropTypes from 'prop-types';

/** Password input with integrated label, quality tips, and show password toggle. */
class ComponentX extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false
    }
  }

  toggleShowPassword = event => {
    this.setState(prevState => {
      return { showPassword: !prevState.showPassword };
    });
    if (event) event.preventDefault();
  }

  render() {

    return (
      <input type='button'>asdf</input>
    );
  }
}

ComponentX.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */

  /** Input name. Recommend setting this to match object's property so a single change handler can be used by convention.*/

  /** Password value */
  value: PropTypes.any,

  /** Input label */
  label: PropTypes.string,

  /** Function called when password input value changes */

  /** Max password length accepted */
  maxLength: PropTypes.number,

  /** Placeholder displayed when no password is entered */
  placeholder: PropTypes.string,

  /** Set to true to show the toggle for displaying the currently entered password */
  showVisibilityToggle: PropTypes.bool,

  /** Display password quality visually via ProgressBar, accepts a number between 0 and 100 */
  quality: PropTypes.number,

  /** Validation error to display */
  error: PropTypes.string
};

ComponentX.defaultProps = {
};

export default ComponentX;

