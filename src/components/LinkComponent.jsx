import React from 'react';

class LinkComponent extends React.Component {
  render() {
    return (
      <div className='item'>
        <a href={this.props.link.url}><i className={this.props.link.icon}></i>{this.props.link.title}</a>
      </div>
    )
  }
}

export default LinkComponent;