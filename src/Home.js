import React,{component} from 'react'
import axios from 'axios'
import question from './mcq-api/question'
import style from './style.css'

class Welcome extends React.Component{
    constructor(props){
        super(props)
        this.state={allQuesyions:question,count:0}
    }
    componentDidUpdate(){
       
    }
    handleMacq(qid,selctedOption){
        const updatedMcq=this.state.allQuesyions.map((question)=>{
            if(question.qid === qid){
                question.isRight=true
            }
            if(question.rightAnswer === selctedOption){
                this.setState((prev)=>({
                     count:prev.count+1
                }))
            }
            return question
        })
        this.setState({allQuesyions:updatedMcq})
    }
    render(){
        const wrongAnswer={backgroundColor:"#840808",color:"white",transition:"0.5s"}
        const correctAnswer={backgroundColor:"#0ece6d",color:"white",transition:"0.5s"}
        const defaultAnswer={backgroundColor:"#eee",color:"black",transition:"0.5s"}
        return (
            <div className='container'>
                  <div className='score-box'>
                         <h2>Your Score is : {this.state.count}</h2>
                  </div>
                  {
                      this.state.allQuesyions.map((quesion)=>{
                          return <div className='question-option-container' key={quesion.qid}>
                                          <div className='question'>
                                               <h4>{quesion.qname}</h4>
                                          </div>
                                          <div className='option' style={quesion.option1 === quesion.rightAnswer && quesion.isRight ? correctAnswer : quesion.isRight?wrongAnswer:defaultAnswer}>
                                              <div className='input-container'>
                                                  <input  disabled={quesion.isRight && "true"} type="radio"  name={quesion.qid} value={quesion.option1} onChange={()=>this.handleMacq(quesion.qid,quesion.option1)}/>
                                              </div>
                                              <div className='option-container'>
                                                   <h4>{quesion.option1}</h4>
                                              </div>
                                          </div>
                                          <div className='option' style={quesion.option2 === quesion.rightAnswer && quesion.isRight ? correctAnswer: quesion.isRight?wrongAnswer:defaultAnswer}>
                                              <div className='input-container'>
                                                  <input type="radio" disabled={quesion.isRight && "true"} name={quesion.qid} value={quesion.option2} onChange={()=>this.handleMacq(quesion.qid,quesion.option2)}/>
                                              </div>
                                              <div className='option-container'>
                                                   <h4>{quesion.option2}</h4>
                                              </div>
                                          </div>
                                          <div className='option' style={quesion.option3 === quesion.rightAnswer && quesion.isRight ? correctAnswer:quesion.isRight?wrongAnswer:defaultAnswer}>
                                              <div className='input-container'>
                                                  <input type="radio" disabled={quesion.isRight && "true"} name={quesion.qid} value={quesion.option3} onChange={()=>this.handleMacq(quesion.qid,quesion.option3)}/>
                                              </div>
                                              <div className='option-container'>
                                                   <h4>{quesion.option3}</h4>
                                              </div>
                                          </div>
                                          <div className='option' style={quesion.option4 === quesion.rightAnswer && quesion.isRight ? correctAnswer:quesion.isRight?wrongAnswer:defaultAnswer}>
                                              <div className='input-container'>
                                                  <input type="radio" disabled={quesion.isRight && "true"} name={quesion.qid} value={quesion.option4} onChange={()=>this.handleMacq(quesion.qid,quesion.option4)}/>
                                              </div>
                                              <div className='option-container'>
                                                   <h4>{quesion.option4}</h4>
                                              </div>
                                          </div>
                                </div>
                       })
                  }
            </div>
        )
    }
}
export default Welcome