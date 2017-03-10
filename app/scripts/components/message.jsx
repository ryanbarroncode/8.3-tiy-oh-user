var React = require('react');

class ChatContainer extends React.Component{
  constructor(props){
    super(props);

  };

  render(){
    return(
      <form>
        <div>
          <h1 className="well header">Secure Chat Room</h1>
        </div>
        <div className="form-group">
          <label htmlFor="chatbox">Sketchy chat box</label>
          <input  type="chat" className="form-control" id="chatbox1" placeholder="Be discreet..." />
            <button type="submit" className="btn btn-primary">Send Message</button>
        </div>
      </form>
    )
  }
}

module.exports = {
  ChatContainer
};
