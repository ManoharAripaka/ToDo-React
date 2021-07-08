import React from 'react'
class Disp extends React.Component{
    render(){
        return(
            <div className='task'>
                <button onClick={() => this.props.onSelect(this.props.item)}><strong>X</strong></button>
                <li>{this.props.item}</li>
            </div>
            
        )
    }
}
export default Disp