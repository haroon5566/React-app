import React,{useState} from 'react' 

export default function TextForm(props) {
     const [text, settext] = useState(''); 
     const handleUpClick= () => {
        // console.log('UpperCase was clicked');  
        let newtext= text.toUpperCase();
        settext(newtext)
     }
          const handleLoClick= () => {
        // console.log('UpperCase was clicked');  
        let newtext= text.toLowerCase();
        settext(newtext)
     }
        const handleClearClick= () => {
        // console.log('UpperCase was clicked');  
        let newtext= "";
        settext(newtext)
     }
        const handleOnChange= (event) => {
        // console.log('OnChange'); 
        settext(event.target.value);
     }
  return (
    <>
    <div className="container " style={{color:props.mode==='dark'?'white':'#042743'}}/>
      
<div className="container mb-3">
    <h1 style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>{props.heading}</h1>

  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<div className='container'>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}> Convert to Uppercase </button> 
  <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLoClick}> Convert to Lowercase </button> 
    <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleClearClick}> Clear Text </button> 
</div>
  <div className="container my-2"style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h2>Your text summary</h2>
    <p>{text.split("").length} words and {text.length} charcaters</p>
    <p>{0.008 * text.split("").length } Minutes read</p>
    <h2>preview</h2>
    <p>{text.length>0?text:"Nothing to preview!"} </p>
  </div>
</>
  )
}