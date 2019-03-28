import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Card} from 'reactstrap'
import * as categoryActions from './../../Action/category';
// import CourseCards from '../courses/courseCards/courseCards';

class Dashboard extends Component {
    componentWillMount() {
        this.props.getCategory();
    }
    // selectCourse = (course) => {
    //     this.props.history.push(`/course/details/${course.id}`)
    // }
    render() {
        return (
            <div style={{ margin: '15px' }}>
                <Card courses={this.props.getCategory}  />
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        category: state.category.category
    }
}

const mapDispatch = (dispatch) => {
    return {
        getCategory: bindActionCreators(categoryActions.getCategory, dispatch)
    }
}
export default connect(mapState, mapDispatch)(Dashboard)