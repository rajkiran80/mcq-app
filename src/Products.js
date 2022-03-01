import React,{useEffect,useState} from 'react'

class CustomTextInput extends React.Component {
    constructor(props) {
      super(props)
      this.textInput = React.createRef()
      this.state={setValue:""}
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState({
           setValue:this.textInput.current.value
        })
    }
    componentDidUpdate(){
        console.log(this.state.setValue)
    }

    render() {
      return (
        <div className='container' onSubmit={(e)=>this.handleSubmit(e)}>
            <form>
                <input type="text" ref={this.textInput} />
                <input type="submit"/>
            </form>
        </div>
      )
    }
  }
export default CustomTextInput