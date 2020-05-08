import React, { Component } from 'react';
import firebase from './firebase';

export class GuestBook extends Component {
    constructor() {
        super();
        this.state = {
          username: '',
          description: '',
          message: '',
          viewable: '',
          email: '',
          private: null,
          time: null,
          items: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
    }
    handleValidation(){
      let formIsValid = true;
      if(this.state.username === ''){
         formIsValid = false;
         alert("Username cannot be empty.");
         return formIsValid;
      }
      if(this.state.username.length < 5){
          formIsValid = false;
          alert("Username must be longer than 5 letters.");
          return formIsValid;
      }
      if(this.state.username.length > 20){
          formIsValid = false;
          alert("Username must be shorter than 20 letters.");
          return formIsValid;
      }
      if(this.state.description.length > 99){
        formIsValid = false;
        alert("Username must be shorter than 100 letters.");
        return formIsValid;
    }
      if(this.state.message === ''){
         formIsValid = false;
         alert("Message cannot be empty.");
         return formIsValid;
      }
      if(this.state.message.length < 15){
          formIsValid = false;
          alert("Message must be longer than 15 characters.");
          return formIsValid;
      }
      if(this.state.message.length > 500){
          formIsValid = false;
          alert("Message must be shorter than 500 characters.");
          return formIsValid;
      }
      if(this.state.private === null) {
        formIsValid = false;
        alert("Choose whether message will be private or public.")
        return formIsValid;
      }
     return formIsValid;
 }
    handleSubmit(e) {
        e.preventDefault();
        if(this.handleValidation()){
        const itemsRef = firebase.database().ref('items');
        const item = {
          user: this.state.username,
          des: this.state.description,
          mes: this.state.message,
          pri: this.state.private,
          em: this.state.email,
          tm: Date(firebase.database.ServerValue.TIMESTAMP)
        }
        itemsRef.push(item);
        this.setState({
          username: '',
          description: '',
          message: '',
          email: '',
          time : null,
        });
        alert("Message Sent");
    }
  }
    componentDidMount() {
      var scrollComponent = this;
        document.addEventListener("scroll",function(e){
          scrollComponent.scrollFunction();
        });
      const itemsRef = firebase.database().ref('items');
      itemsRef.on('value', (snapshot) => {
        let items = snapshot.val();
        let newState = [];
        for (let item in items) {
          newState.push({
            id: item,
            user: items[item].user,
            des: items[item].des,
            mes: items[item].mes,
            em: items[item].em,
            tm: items[item].tm,
            pri: items[item].pri
          });
        }
        this.setState({
          items: newState
        });
      });
    }
    
    scrollFunction(){
      var topbutton = document.getElementById("topBut");
          if(document.documentElement.scrollTop > document.documentElement.clientHeight/4){
              topbutton.style.display = "block";
          }else{
              topbutton.style.display = "none";
          }
    }
    topFunction = () =>{
        document.documentElement.scrollTop=0;
    }
    render() {
        return (
          <div className='app'>
            <button onClick={this.topFunction} id="topBut" title="Go up">Top</button>
            <header>
                <div className='wrapper'>
                  <h1>Leave a message!</h1>
                  
                </div>
            </header>
            <div className='container'>
              <section className='add-item'>
                  <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" placeholder="What's your name?" onChange={this.handleChange} value={this.state.username} />
                    <input type="text" name="description" placeholder="Describe yourself*" onChange={this.handleChange} value={this.state.description}/>
                    <input type="text" name="message" placeholder="What's your message?" onChange={this.handleChange} value={this.state.message}/>
                    <p>Message viewable to others?</p>
                    <input type="radio" id="yes" name="private" onChange={this.handleChange} value={true}/>
                    <label for="yes">Yes</label>
							      <input type="radio" id="no" name="private" onChange={this.handleChange} value={false}/>
							      <label for="no">No</label>
                    <input type="text" name="email" placeholder="Email?*" onChange={this.handleChange} value={this.state.email}/>
                    <button id="submitBut">Submit</button>
                  </form>
              </section>
              <section className='display-item'>
                <div className='wrapper'>
                  <ul>
                  {this.state.items.map((item) => {
                    if(item.pri === "true"){
                    return (
                      <li key={item.id}>
                        <h4>{item.tm}</h4>
                        <h3>{item.user}</h3>
                        <h5>{item.des}</h5>
                        <h3>{item.mes}</h3>
                      </li>
                    )
                    }})}
                  </ul>
                </div>
              </section>
            </div>
          </div>
        );
      }
    }

export default GuestBook;