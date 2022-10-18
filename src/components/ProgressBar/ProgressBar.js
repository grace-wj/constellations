import './Progress.css';

function ProgressBar(props) {
    const { progress } = props;
    console.log("progress: ", progress);

    return (
        <div className='progress-bar'>
            <div className='progress-container'>
                <div className='progress-status' style={{ width: `${progress}%`}} />
                <div className='progress-background' style={{ width: `${100 - progress}%`}} />
            </div>
            <span className='progress-label'>{`${Math.ceil(progress)}%`}</span>
        </div>
    )  
}

export default ProgressBar;
