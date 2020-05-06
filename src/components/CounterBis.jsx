import React from 'react';

class CounterBis extends React.Component {
    state = {
        count : 0
    }
    
    render() {
        return( 
        <div>
           {this.state.count}
           <input type="button" value="-1" onClick={() => { this.setState({count : this.state.count - 1}) }}/>
            <input type="button" value="+1" onClick={() => { this.setState({count : this.state.count + 1}) }}/>
        </div>
         ) 
    }
}

export default CounterBis;