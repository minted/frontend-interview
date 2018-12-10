import React, { Component } from 'react';
import { cloneDeep } from 'lodash';

import { sendMessage } from './utils';

// TODO fix all bugs in the Bugs.org file

const isValidEmail = (email) => {
  return !!email.match(/^\w+@.+(\..+)+$/);
};

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      disabled: false,
      toastVisibility: {
        sent: false,
        error: false,
      },
      errors: {
        name: {
          hasError: false,
          message: '',
        },
        email: {
          hasError: false,
          message: '',
        },
      },
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      errors: {
        name: {
          hasError: false,
          message: '',
        },
        email: {
          hasError: false,
          message: '',
        },
      },
    });

    const { name, email, message } = this.props;

    if (email && !isValidEmail(email)) {
      this.showToast('error');
      this.setState({
        errors:  'Please enter a valid email address.',
      });
      return;
    }

    // disable form fields
    this.setState({ disabled: true });

    sendMessage(name, email, message).then(() => {
      // clear out the form
      this.setState({
        name: '',
        email: '',
        message: '',
      });
      this.setState({ disabled: false });
    });

    // display a "Message sent" toast and enable form fields
    this.showToast('sent');
  }

  handleChange = (field, event) => {
    this.setState({
      [field]: event.target.value
    });
  }

  handleClear(event) {
    event.preventDefault();

    this.setState({
      name: '',
      email: '',
      message: '',
    });
  }

  showToast = (name) => {
    // displays for 3 seconds
    const toastVisibility = cloneDeep(this.state.toastVisibility);
    toastVisibility[name] = true;
    this.setState({ toastVisibility });

    setTimeout(() => {
      const toastVisibility = cloneDeep(this.state.toastVisibility);
      toastVisibility[name] = false;
      this.setState({ toastVisibility })
    }, 3000);
  }

  render() {
    const {
      name,
      email,
      message,
      disabled,
      toastVisibility,
      errors,
    } = this.state;

    return (
      <div>
        <h1>Contact Form</h1>
        <p><strong>Note: </strong> Check the browser console for outgoing email content.</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Your name<br />
            <input
              value={name}
              disabled={disabled}
              onChange={this.handleChange.bind(this, 'name')}
            />
          </label>

          <label>
            Your email<br />
            <input
              value={email}
              onChange={this.handleChange.bind(this, 'email')}
            />
            {(errors.email.hasError) && (
              <div>
                <small className="error">{errors.email.message}</small>
              </div>
            )}
          </label>

          <label>
            Message<br />
            <textarea
              value={message}
              disabled={disabled}
              onChange={this.handleChange.bind(this, 'message')}
            />
          </label>

          <div>
            <button type="submit" disabled={disabled}>Send</button>
            <button onClick={this.handleClear} disabled={disabled || !(name || email || message)}>Clear</button>
          </div>
        </form>

        {toastVisibility.sent && (
          <div className="toast success">Message sent</div>
        )}

        {toastVisibility.error && (
          <div className="toast error">An error has occurred</div>
        )}
      </div>
    );
  }
}

export default ContactForm;
