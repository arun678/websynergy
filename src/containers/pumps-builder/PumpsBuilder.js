import React, { Component } from 'react';
import Pumps from '../../components/pumps/Pumps';
import Sort from '../../components/sort/Sort';
import './PumpsBuilder.css';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

class PumpsBuilder extends Component {
    state = {
        pumps: []
    }
    componentDidMount() {
        this.props.loadPumps()
    }
    showPumpDetailsHandler = (id) => {
        this.props.selectedPump(id)
        this.props.history.push('/pumps')
    }
    render() {
        const { pumps, isChecked, filteredPumps } = this.props;
        return (
            <div className="product-list-container">
                <Sort sort={(e) => this.props.sortHandler(e.target.value)}></Sort>
                {pumps.length !==0 && <Pumps list={pumps} showPumpDetails={this.showPumpDetailsHandler}></Pumps>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pumps: state.pumpsReducer.pumps,
        isChecked: state.pumpsReducer.isChecked,
        filteredPumps: state.pumpsReducer.filteredPumps
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadPumps: () => dispatch(actionCreators.loadPumps()),
        sortHandler: (value) => dispatch(actionCreators.sortHandler(value)),
        selectedPump: (id) => dispatch(actionCreators.selectedPumpHandler(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PumpsBuilder)
