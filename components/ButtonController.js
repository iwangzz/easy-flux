import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'
import itemStore from '../stores/ItemStore'
import ButtonActions from '../actions/ButtonActions'

let buttonActions = new ButtonActions();

export default class ButtonController extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }

        this._onChange = this._onChange.bind(this)
    }

    componentWillMount() {
        // console.log('will mount');
    }

    componentDidMount() {
        // console.log('did mount');
        itemStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        itemStore.removeChangeListener(this._onChange);
    }

    addNewItem() {
        buttonActions.addNewItem('new item');
    }

    _onChange() {
        this.setState({
            items: itemStore.getAll()
        })
    }

    render() {
        return (
            <Button items={this.state.items} onClick={this.addNewItem} />
        )
    }   
}