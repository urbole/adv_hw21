import React, { Component } from 'react';
import { ReactComponent as Female } from '../../../assets/svg/female.svg';
import { ReactComponent as Male } from '../../../assets/svg/male.svg';
import { ReactComponent as NoGender } from '../../../assets/svg/noGender.svg';

class Contact extends Component {
  render() {
    return (
      <div className="wrap_contact">
        <div className="contact_icon">
          {
            this.props.contact.gender !== undefined ? (this.props.contact.gender === "female" ? <Female /> : <Male />) : <NoGender />
          }
        </div>
        <div className="wrap_data_contact">
          <div className="wrap_data_contact">
            <p className="contact_data">{this.props.contact.firstName} {this.props.contact.lastName}</p>
            <p className="contact_data">{this.props.contact.phone}</p>
          </div>
        </div>
      </div >
    )
  }
}

export default Contact;