import react from 'react'
export default class HelloWorld extends react.Component{
    constructor(props){
        super(props);
        console.log(this);
    }

    render(){
        return (
          <div>
              hello world
          </div>
        )
    }
}