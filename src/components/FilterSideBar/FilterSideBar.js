import React from 'react'
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

const FilterSideBar = (props) => {
    // handleInputChange(event) {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;
    
    //     this.setState({
    //       [name]: value
    //     });
    //   }
    return (
        <div>
            <label>Category 2</label>
            <input
            name="catFilter"
            type="checkbox"
            checked={props.isChecked}
            onChange={() => props.handleInputChange("Cat2")} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isChecked: state.pumpsReducer.isChecked
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange: (cat) => dispatch(actionCreators.handleInputChange(cat))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterSideBar)