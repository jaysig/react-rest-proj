import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Blaze } from 'meteor/blaze';
import { Template } from 'meteor/templating'


export default class AccountsUI extends Component {
  componentDidMount(){
    this.view = Blaze.render(Template.loginButtons,
      ReactDom.findDOMNode(this.refs.container));
  }

  componentWillUnmount(){
    Blaze.remove(this.view);
  }

  render() {
    return <span ref="container" />
  }
}
