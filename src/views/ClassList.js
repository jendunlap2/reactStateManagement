import React, { Component } from 'react';

export default class Kekambas extends Component {
    constructor(props){
        console.log('Constructed')
        super(props);
        this.state = {
            kekambas_class: []
        }
        this.getKekambas = this.getKekambas.bind(this);
    }


    getKekambas(){
        fetch('https://kekambas-bs.herokuapp.com/posts')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    kekambas_class: data
                })
            })
    }

    render() {
        console.log('Rendered')
        return (
            <>
                <h1>Kekambas-79 Class</h1>

                    {this.state.kekambas_class.map((k) => (<h3>{k.title}</h3>))}
                    {this.state.kekambas_class.map((k) => (<p>{k.body}</p>))}
                    {this.state.kekambas_class.map((k) => (<h5>{k.user.first_name} {k.user.last_name}</h5>))}


            </>
        );
    }
}
