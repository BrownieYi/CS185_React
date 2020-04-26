import React, { Component } from 'react';
import $ from 'jquery' 
import img1 from "../../src/image/IMG_2083.jpg"

import img3 from "../../src/image/IMG_2120.jpg"
import img4 from "../../src/image/IMG_2146.jpg"
import img5 from "../../src/image/IMG_2152.jpg"
import img6 from "../../src/image/2.jpg"

import img8 from "../../src/image/4.jpg"
import img9 from "../../src/image/5.jpg"


import img12 from "../../src/image/8.jpg"
import img13 from "../../src/image/9.jpg"
import img14 from "../../src/image/10.jpg"

export class Images extends Component {
	//赋值变量
  constructor(props) {
    super(props);
	 //定义图像数组变量imglist
    this.state = {
	  imglist:[img1,img3,img4,img5,img6,img8,img9,img12,img13,img14]
    };
  }

  handleClick =(imgId)=> {
	   //根据传来序号可以确定需要显示的图像，然后从imglist数值中根据序号获取对于图像进行显示 
	  $(".n").attr('src',this.state.imglist[imgId]); //利用js函数改变img标签的src，从而动态显示不同的图像
	  document.getElementById("myModal").style.display="block"; 
  }
	
  //点击图片控制函数
	handleMouseDown = (event) => {
    let target = event.target 
    target.onmouseup = () => {
        //e表示你当前点击的对象
	   var targetTag = $(".n");   // 首先设置目标区域 为你的图片对象  也就是class=n
	   //判断你点击的对象如果不是图像就执行关闭图像操作
		if (!targetTag.is(target)) {
			document.getElementById("myModal").style.display="none";
		}
      document.onmousemove = null
      target.onmouseup = null
    }
  }
  
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
	//利用react数组循环生成图像列表，同时每个img附带一个handleClic点击事件函数，函数参数为点击的图像标签序号
       const listItems = this.state.imglist.map((item,index) =>
       <div><img onClick={this.handleClick.bind(this,index)} src={item} alt=""/></div>
       );
        return (
          <div>
            <button onClick={this.topFunction} id="topBut" title="Go up">Top</button>
            <div>
              <p>
              These are some of the pictures I took during my recent travel.
              </p>
            </div>				
            <div className="gallery">
              {listItems}
            </div>
				    <div id="myModal" className ="modal" onMouseDown={(e) => this.handleMouseDown(e)}>
				      <div id="mc" className ="modal-content">
					      <div className="m" >
						      <img className="n" src={img1} alt=""/>
				        </div>
				      </div>
			      </div>	
          </div>
        );
    }
}

export default Images;