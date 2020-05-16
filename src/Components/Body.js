import React, { Component } from 'react';
import Home from './Home'
import Images from './Images'
import Games from './Games'
import Videos from './Videos'
import GuestBook from './GuestBook'
import Movies from './Movies'

export class Body extends Component {
    displayContent = () => {
        var activeTab = this.props.activeTab
        if(activeTab === 1){
            return <Home/>
        }
        else if(activeTab === 2){
            return <Images/>
        }
        else if(activeTab === 3){
            return <Games/>
        }
        else if(activeTab === 4){
            return <Videos/>
        }
        else if(activeTab === 5){
            return <Movies/>
        }
        else{
            return <GuestBook/>
        }
    }
    render() {
        return (this.displayContent());
    }
}

export default Body;