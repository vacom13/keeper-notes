import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Note from "../Note/Note";
// import notes from "../../notes";
import CreateArea from "../CreateArea/CreateArea";
import { useState } from "react";

function note(prop){
    return (
        <Note key={prop.key} id={prop.key} title={prop.title} content={prop.content} deleteNote={prop.deleteNote} />
    );
};

export default function App(){
    const [listNotes, setNotes] = useState([]);

    function addNote(note){
        setNotes((old) => [...old, note]);
    }
    function deleteNote(id){
        setNotes((old)=>{
            return old.filter((element,index) => {
                if(index !== id){
                    console.log(index);
                    return element;
                }
                return null;
            })
        })
    }
    return(
        <>
            <Header />
            <CreateArea addNote={addNote}/>
            {listNotes.map((n, index) => {

                n.key=index;
                n.deleteNote =deleteNote;
                return note(n);
                }
                )}
            <Footer />
        </>
    );
};

