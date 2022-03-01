import React, { useEffect, useState } from 'react'
import Hoc from './Change'
import Home from './Home'


class App extends React.Component{
    constructor(props){
       super(props)
       this.state={compo:""}
    }
    componentDidMount(){
        this.setState({
          compo:<Home/>
        })
    }
    static getDerivedStateFromProps(props,state){
        
    }
    render(){
      return(
         <div className='container'>
             
         </div>
      )
    }
}

export default App
