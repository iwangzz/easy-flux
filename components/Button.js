import React, {Component} from 'react'

export default class Button extends Component {
    render() {
        let items = this.props.items;
        return <div>
                <ul>
                {items.map( (v, i) => { return (
                    <li key={i}>{v}</li>
                ) })}
                </ul>
                <button onClick={this.props.onClick}>add new item</button>
            </div>
    }
}