import React, { useState } from 'react'
import styles from './main.module.css'

const Main = () => {
   const [text, setText] = useState('')
   const [myStyle, setmyStyle] = useState({ color: "#041D37", backgroundColor: '#133253' })
   const [btntext, setBtntext] = useState('Enable Dark Mode')
   const toggleStyle = () => {
      if (myStyle.color === "#041D37") {
         setmyStyle({ color: '#133253', backgroundColor: '#041D37' })
         setBtntext('Enable Light Mode')
      }
      else {

         setmyStyle({ color: '#041D37', backgroundColor: '#133253' })

         setBtntext('Enable Dark Mode')
      }
   }
   const handleClick = (e) => {
      setText(e.target.value)
   }
   const handleUpCase = () => {
      const newtext = text.toUpperCase()
      setText(newtext)
   }
   const handleLoCase = () => {
      const newtext = text.toLowerCase()
      setText(newtext)
   }
   const handleClear = () => {
      const clear = ""
      setText(clear)
   }
   const handleCopy = (text) => {
      navigator.clipboard.writeText(text)
   }
   const handleSentence = () => {
   const sentext =text.split('. ').map(sentence =>sentence.charAt(0).toUpperCase()+sentence.slice(1).toLowerCase()).join('. ')
      setText(sentext);
}
const handleWord = () => {
   const wortext =text.split(' ').map(word =>word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()).join(' ')
      setText(wortext);
}
   return (
      <div className={styles.container}style={myStyle}>
         <header className={styles.head}>
            <h1>WORD COUNTER</h1>
            <button className={styles.navbtn} onClick={toggleStyle}>{btntext}</button>
         </header>
         <textarea className={styles.content} name="text" id="text" value={text} onChange={handleClick}></textarea>
         <div className={styles.btn}>
            <button className={styles.btnitem} onClick={handleUpCase}>To upper Case</button>
            <button className={styles.btnitem} onClick={handleClear}>Clear</button>
            <button className={styles.btnitem} onClick={handleLoCase}>Lower Case</button>
            <button className={styles.btnitem} onClick={handleSentence}>Sentence Case</button>
            <button className={styles.btnitem} onClick={handleWord}>Capitilize Word</button>
            <button className={styles.btnitem} onClick={()=>handleCopy(text)}>Copy Text</button>

         </div>
         <div className={styles.summary}>
            <h1 >Summary</h1>
            <p >{text.split(' ').length } words and {text.length} characters</p>
            <p >{0.008 * text.split(' ').length} Minutes Read</p>
            <h2>preview</h2>
            <p className={styles.para}>{text}</p>
         </div>
      </div>
   )
}

export default Main
