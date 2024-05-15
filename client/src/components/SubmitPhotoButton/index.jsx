import './styles.css'

export const SubmitPhotoButton = ({ addPhoto }) => {
    return (
        <button onClick={addPhoto} className='SubmitPhotoButton'>Submit</button>
    );
}
