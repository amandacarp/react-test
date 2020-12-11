import React from 'react'
import Button from './components/Button'
class App extends React.Component{
    
    pizza(){
        alert('I LOVE PIZZA');
    }

    books(){
        alert('COUNT OF MONTE CRISTO')
    }
    
    
    render(){
        return(
            <>
                <h1>Hello World!</h1>
                <Button name='hello there' water= {this.pizza} />
                <Button name='YO' water= {this.books}/>
            </>
        )
    }
}

export default App