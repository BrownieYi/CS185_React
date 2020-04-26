import React, { Component } from 'react';
import homeimg from "../image/image.jpg"


export class Home extends Component {
    componentDidMount(){
        var scrollComponent = this;
        document.addEventListener("scroll",function(e){
          scrollComponent.scrollFunction();
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
            <div>
                <button onClick={this.topFunction} id="topBut" title="Go up">Top</button>
                <div>
                <h1>Welcome To My Website</h1>
                </div>
                <div className = "home-body">
                    <div>
                    <img src={homeimg} alt=""/>
                    </div>
                    <div>
				    <p>
				    Hi, my name is Mingyu Xie, I was born in June 1st, 2000 and I am from Wuhan, China. I am a second year Computer Science major undergraduate of UCSB.
				    </p>
			        </div>
                </div>
            </div>
           

        );
    }
}

export default Home;