import './Header.css';

function Header(props) {
    const {back, next} = props;
    return (
        <div className='header'>
            <h3 onClick={back}>back</h3>
            <h3 onClick={next}>next</h3>
        </div>
    )
}

export default Header;
