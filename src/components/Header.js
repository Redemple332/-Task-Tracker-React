import React from 'react'
import PropTypes from 'prop-types';
import Button from './Button';
const Header = ({title, onAdd, showAdd}) => {
    const onClick = (e) => {
        alert('onClick')
    }
  return (
    <header className='header'>
        <h1>Task Tracker {title}</h1>
        <Button 
            color={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Close' : 'Add'} 
            onClick={onAdd} 
        />
    </header>
  )
}

Header.defaultProps = { 
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const HeadingStyle = {
//     color: 'red'
// }
export default Header
