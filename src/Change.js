import React,{Component} from 'react'

const Change=(HocComponent)=>{
    return class extends Component{
        render(){
            return(
                <div>
                    <HocComponent></HocComponent>
                </div>
            )
        }
    }
}
export default Change