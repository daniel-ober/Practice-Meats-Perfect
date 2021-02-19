import React { Component } from 'react'
import Slip from './Slip'

class Slips extends Slip {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return (
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Slip/>
                    </div>
                    <div className='col-md-4'>
                        <Slip/>
                    </div>
                    <div className='col-md-4'>
                        <Slip/>
                    </div>
                    <div className='col-md-4'>
                        <Slip/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slips