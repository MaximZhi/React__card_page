import React from "react";


const MyCustomForm = ({...props}) => {
    return ( 
<form {...props}>
  <input type="text" name="name" class="question" id="nme" required autocomplete="off" />
  <label for="nme"><span>What's your name?</span></label>
  <textarea name="message" rows="2" class="question" id="msg" required autocomplete="off"></textarea>
  <label for="msg"><span>What's your message?</span></label>
  <input type="submit" value="Submit!" />
</form>
     );
}
 
export default MyCustomForm;