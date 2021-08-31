import React from 'react'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux'
import { StaticRouter } from 'react-router-dom';
import { addNewNote, startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const {active, id} = useSelector(state => state.notes)
    
    const {date} = useSelector(state => state.notes.active)    
    /*const {active, id} = useSelector(state => state.notes) */

    // const activeNoteDate = moment(date)

    const dateObject = new Date(date);

    const dateObjectTransformed = dateObject.toLocaleDateString()

    console.log(dateObjectTransformed)

    const handleSave = () => {
        dispatch(startSaveNote(active));
        
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if(file) {
            dispatch(startUploading(file))
        }
    }

    return (
        <div className='notes__appbar'>
            <span>{dateObjectTransformed}</span>

            <input
                id='fileSelector'
                type='file'
                name='file'
                style={{display: 'none'}}
                onChange={handleFileChange}
            />

            <div>
                <button className='btn' onClick={handlePictureClick}>Picture</button>
                <button className='btn' onClick={handleSave}>Save</button>
            </div>

        </div>
    )
}
