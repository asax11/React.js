import React from "react"


class MemeGenerator extends React.Component{


    constructor(){
        super()
            this.state={
                topText: "",
                bottomText: "",
                randomImg : "http://i.imgflip.com/1bij.jpg",
                allMemeImeges:[]
            }
            this.handleChnage=this.handleChnage.bind(this)
            this.eventHandled=this.eventHandled.bind(this)

    }

        eventHandled(event){
            event.preventDefault()
            const rand = Math.floor(Math.random()*this.state.allMemeImeges.length)
            const randImg = this.state.allMemeImeges[rand].url

            this.setState({randomImg:randImg})

                
        }

        componentDidMount(){
            fetch("https://api.imgflip.com/get_memes")
            .then(response=>response.json())
            .then(json=>{
                const {memes} = json.data
              
               
                this.setState({allMemeImeges:memes })
            })
        }

        handleChnage(event){
            const {name,value} = event.target
         
            this.setState({[name] : value})
        }

    render(){
        return(
            <div>
                {/* <h1>Hi Meme</h1>
                <h2>{this.state.allMemeImeges.url}</h2> */}
                <form className="meme-form" onSubmit={this.eventHandled}>
                <input type ="text" name = "topText" 
                 placeholder = "Top Text" 
                  value= {this.state.topText} onChange = {this.handleChnage}/>
                <input type ="text" name = "bottomText" 
                 placeholder = "Bottom Text" 
                  value= {this.state.bottomText} onChange = {this.handleChnage}/>

               
                <button >Gen</button>

                </form>
               

                <div className="meme">
                    <img src = {this.state.randomImg} alt=""/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>


                </div>
 </div>

                
        )
    }
}


export default MemeGenerator;