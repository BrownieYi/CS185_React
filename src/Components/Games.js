import React, { Component } from 'react';
import lol from "../../src/image/league.jpg"
import ss from "../../src/image/sekiro.jpg"
import mhw from "../../src/image/mhw.jpg"

export class Games extends Component {
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
				These are some of the games I currently play.
				</p>
			</div>
			<div>
				<div class="games">
					<div>
						<a href="https://na.leagueoflegends.com/en-us/">
                            <img src={lol} alt="" />

                        </a>
					</div>
					<div>
						<p>
						League of Legends (including TFT)
						</p>
					</div>
				</div>

				<div class="games">
					<div>
						<a href="https://www.sekirothegame.com">
                            <img src={ss} alt="" />
                        </a>
					</div>
					<div>
						<p>
						Sekiro: Shadow Die Twice
						</p>
					</div>
				</div>

				<div class="games">
					<div>
						<a href="https://www.monsterhunterworld.com/us/">
                            <img src={mhw} alt = "" />
                        </a>
					</div>
					<div>
						<p>
						Monster Hunter World
						</p>
					</div>
				</div>
			</div>
		</div>
        );
    }
}

export default Games;