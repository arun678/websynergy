import React from 'react'
import Pumps from '../pumps/Pumps'
import { connect } from 'react-redux';

const PumpProperties = (props) => {
    const { selectedPump } = props;
    return (
        <Pumps list={selectedPump}></Pumps>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedPump: state.pumpsReducer.selectedPump
    }
}

export default connect(mapStateToProps, null)(PumpProperties)
