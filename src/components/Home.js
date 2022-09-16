import React from "react";
import { useState } from "react";


const Home = () => {

    const [title, setTitle] = useState('');
    const [noteText, setnoteText] = useState('')
    const addNote = () => {
        if (title === "" || noteText === "") {
            alert(`Title or Notes feilds are empty ! \nKindly provide valid details`)
        } else {
            let notesObject
            let notes = localStorage.getItem('notes')
            if (notes == null) {
                notesObject = [];
            }
            else {
                notesObject = JSON.parse(notes)
            }
            const myObject = {
                title: title,
                notes: noteText
            }
            postApiCall(myObject)
            notesObject.push(myObject)
            localStorage.setItem('notes', JSON.stringify(notesObject));
        }
    }

    const deleteNote = ()=>{

    }

    const postApiCall = async (data) => {
        console.log('inside api call');
        let key = process.env.KEY
        console.log(key);
        JSON.stringify(data)
        console.log(data);
        const response = await fetch('http://localhost:8000/register', {
          method: 'POST',
          body:JSON.stringify({
            notes: data.notes,
            title: data.title
          }), // string or object
          headers: {
            'Content-Type': 'application/json',
            "notes_key": "25037802e1ab943fc38bbc9614e8b647"
          }
        });
        console.log(response);
        if (response.status === 200){
            setTitle("")
            setnoteText("")
        }
      }

    const titleHandle = (event) => {
        setTitle(event.target.value)
    }
    const noteHandle = (event) => {
        setnoteText(event.target.value)
    }
    return (
        <React.Fragment>
            <div id="home1">
                <div className="container" id="home">
                    <div className="card" id="crd-1">
                        <div className="card-body">
                            <form action="">
                                <h5 className="card-title"> Write Title</h5>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1" />
                                    <textarea
                                        className="form-control"
                                        rows={1}
                                        required=""
                                        id="title"
                                        value={title}
                                        onChange={titleHandle}
                                    />
                                </div>
                                <div className="form-group">
                                    <h5 className="card-title">
                                        write note ..
                                        <i className="fa fa-pencil-square-o " />
                                    </h5>
                                    <label htmlFor="exampleFormControlTextarea1" />
                                    <textarea
                                        className="form-control"
                                        id="addtxt"
                                        rows={7}
                                        required=""
                                        value={noteText}
                                        onChange={noteHandle}
                                    />
                                </div>
                                <button type="button" className="btn btn-primary mx-2 my-2" id="addbtn" onClick={addNote}>
                                    add note
                                </button>
                                <button type="button" className="btn btn-primary mx-2 my-2" id="addbtn" onClick={deleteNote}>
                                    delete note
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    )
}


export default Home