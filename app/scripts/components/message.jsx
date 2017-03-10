var React = require('react');

var Message = require('../models/messages.js').Message;
var MessageCollection = require('../models/messages.js').MessageCollection;



class ChatContainer extends React.Component{
  constructor(props){
    super(props);
    var user =  JSON.parse(localStorage.getItem('user')).username;

    this.state = {
      messageCollection: new MessageCollection(),
      message: '',
      user: JSON.parse(localStorage.getItem('user')).username
    }
  }

  componentWillMount(){
    var self = this;
    this.state.messageCollection.fetch().then(function(data){
      self.state.messageCollection.add(data.results)
      self.forceUpdate();
    });
  }

  handleInput(e) {
    this.setState({message: e.target.value});
  }

  postMessage(e){
    e.preventDefault();
    this.state.messageCollection.create({
      message: this.state.message,
      user: this.state.user
    })
    this.setState({message: ''});
    // var message = new Message({
    //   message: this.state.chat,
    //   user: JSON.parse(localStorage.getItem('user')).username
    // });
  }

  render(){
    return(
      <form onSubmit={this.postMessage.bind(this)}>
        <div>
          <h1 className="well header">Secure Chat Room</h1>
        </div>
        <div className="form-group">
          <label htmlFor="chatbox">Sketchy chat box</label>
          <input value={this.state.message} onChange={this.handleInput.bind(this)} type="chat" className="form-control" id="chatbox1" placeholder="Be discreet..." />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </div>

        <br/>
        { this.state.messageCollection.length != 0 ? <MessageList collection={this.state.messageCollection} /> : null }
      </form>
    )
  }
};
{/* render the messages from the endpoint https://tiny-parse-server.herokuapp.com/classes/Message using a map function on the messages.*/}
class MessageList extends React.Component{
  render(){
    // console.log(this.props.collection);
    var messages = this.props.collection.map(function(message){
      return (
        <li key={message.cid}>
          <span>{message.get('user') + ' ::'}</span>
          <span>{message.get('message')}</span>
        </li>
      )
    })
    return(
      <div className="col-md-12 messageList">
        <h2>-Secure Messages-</h2>
        <ul>
        {messages}
        </ul>
      </div>
    )
  }
}



module.exports = {
  ChatContainer
};
