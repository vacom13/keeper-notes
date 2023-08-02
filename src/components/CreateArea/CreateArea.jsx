import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from "@mui/material";
import { Zoom } from '@mui/material';

function CreateArea(props) {
    const [t,setTitle] = useState('');
    const [c, setContent] = useState('');
    const [expandView, setExpandView] = useState(false);
    function handleChangeTitle(e){
        const {value} = e.target;
        setTitle(value);
    }
    function handleContent(e){
        const {value} = e.target;
        setContent(value);
    }
    function expandV(){
      setExpandView(true);
    }
    return (
      <div>
        <form className="create-note">
          <input type={expandView?"text":"hidden"} onChange={handleChangeTitle} id="title" name="title" placeholder="Title" value={t}/>
          <textarea onFocus={expandV} onChange={handleContent} id="note" name="content" placeholder="Take a note..." rows={(expandView)?"3":"1"} value={c}/>
          {(expandView) && <Zoom in={true}>
          <Fab type="submit"
          onClick={(e) =>{
            if(t.length > 0 && c.length > 0){
                props.addNote({title: t, content: c});
                setTitle("");
                setContent("");
            }
            e.preventDefault();
          }}><AddIcon/></Fab>
          </Zoom>}
        </form>
      </div>
    );
  }
  
  export default CreateArea;