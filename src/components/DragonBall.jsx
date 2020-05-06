import React from 'react';
import Axios from 'axios';


class DragonBall extends React.Component {
    state = {
        caracters: []
    }

    componentDidMount() {
        Axios.get('https://rickandmortyapi.com/api/character/')
            .then(response => response.data.results)
            .then(results => this.setState({ caracters: results }))
    }

    render() {
        console.log(this.state.caracters)
        return (
            <div className="container bg-dark text-white">
                <div className="row">
                    {this.state.caracters ? this.state.caracters.map((caracter, i) =>
                        <div className="col-4 my-4">
                            <div className="card">
                                <img src={caracter.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{caracter.name}</h5>
                                        <p className="card-text text-dark">Origin : {caracter.origin.name}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>
                        </div>
                    ) : ''
                    }
                </div>
            </div>
                )
            }
        }
        
export default DragonBall;