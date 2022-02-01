import React, { Component } from 'react';


export default class ClassList extends Component {
    constructor(props){
        console.log('Component Constructed')
        super(props);
        this.state = {
            kekambas_class: []
        }
    }

    componentDidMount(){
        console.log('Component Mounted')
        fetch('https://kekambas-bs.herokuapp.com/kekambas')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    kekambas_class: data
                })
            })
    }

    render() {
        console.log('Component Rendered')
        return (
            <>
                <h1>Kekambas-79 class list</h1>
                <ol>
                    {this.state.kekambas_class.map((k) => <li>{k.first_name} {k.last_name}</li>)}
                </ol>

            </>
        )
    }
}