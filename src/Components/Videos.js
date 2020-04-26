import React, { Component } from 'react';
import YouTube from 'react-youtube-embed';

export class Videos extends Component {
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
				    <p>
				    These are some of the youtube videos I enjoy watching.
				    </p>
			    </div>
			    <div class="videos">
				    <YouTube id='iFxpiSeMp0Q' />
                    <YouTube id='2juKkLxdQo0&t=6s'/>
			    </div>
		    </div>
        );
    }
}

export default Videos;