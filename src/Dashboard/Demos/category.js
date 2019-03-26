import React, { Component } from 'react';
// import { Menu, Dropdown, Icon, Header as Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';


import * as categoryActions from '../../Action/category';

class Header extends Component {

    componentWillMount = () => {
        this.props.getCategory();
    }
    // handleSignInClick = () => {
    //     this.props.history.push('/sign-in')
    // }
    // handleSignOutClick = () => {
    //     this.props.signOutAction()
    //     this.props.history.push('/home')
    // }
    showCourseById(id) {
        this.props.history.push(`/category/?Cate_id=${Cate_id}`)
    }
    render() {
        return (
            <div style={{ marginBottom: '15px' }}>
                {this.props.auth.token === '' ?
                    <Menu color='black' inverted>
                        <Menu.Item
                            name='Home'
                            onClick={() => this.props.history.push('/Dashboard')}
                        >
                            Home
                        </Menu.Item>
                        <Dropdown text='Categories' pointing className='link item'>
                            <Dropdown.Menu>
                                {this.props.category.categories.length > 0 ? this.props.category.categories.map(category => (
                                    <Dropdown.Item key={category.Cate_id} onClick={() => this.showCourseById(category.Cate_id)}>{category.Category_name}</Dropdown.Item>
                                )) : <Message size='small' color='red'>Could not load</Message>}
                            </Dropdown.Menu>
                        </Dropdown>
                        
                        
                    </Menu> :
                    <Menu color='black' inverted>
                        <Menu.Item
                            name='Home'
                            onClick={() => this.props.history.push('/Dashboard')}
                        >
                            Home
                        </Menu.Item>
                        <Dropdown text='Categories' pointing className='link item'>
                            <Dropdown.Menu>
                                {this.props.category.categories.length > 0 ? this.props.category.categories.map(category => (
                                    <Dropdown.Item key={category.Cate_id} onClick={() => this.showCourseById(category.Cate_id)}>{category.Category_name}</Dropdown.Item>
                                )) : <Message size='small' color='red'>Could not load</Message>}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Menu.Item
                            position='right'
                            name='MobileList'
                            onClick={() => this.props.history.push('/MobileList')}
                        >
                            <Icon name='user' />
                        </Menu.Item>
                        {/* <Menu.Item
                            name='signOut'
                            onClick={this.handleSignOutClick}
                        >
                            Sign Out
                        </Menu.Item> */}
                    </Menu>}
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        auth: state.auth,
        category: state.category
    }
}
const mapDispatch = (dispatch) => {
    return {
        // signOutAction: bindActionCreators(authActions.signOutAction, dispatch),
        getCategory: bindActionCreators(categoryActions.getCategory, dispatch)
    }
}
export default withRouter(connect(mapState, mapDispatch)(Header));