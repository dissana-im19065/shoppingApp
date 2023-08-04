import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <body> 
    <div class="container">
      <div class="text">
         Contact us Form
      </div>
      <form action="#">
         <div class="form-row">
            <div class="input-data">
               <input type="text" required/>
               <div class="underline"></div>
               <label for="">First Name</label>
            </div>
            <div class="input-data">
               <input type="text" required />
               <div class="underline"></div>
               <label for="">Last Name</label>
            </div>
         </div>
         <div class="form-row">
            <div class="input-data">
               <input type="text" required />
               <div class="underline"></div>
               <label for="">Email Address</label>
            </div>
            <div class="input-data">
               <input type="text" required />
               <div class="underline"></div>
               <label for="">Website Name</label>
            </div>
         </div>
         <div class="form-row">
         <div class="input-data textarea">
            <textarea rows="8" cols="80" required></textarea>
            <br />
            <div class="underline"></div>
            <label for="">Write your message</label>
            <br />
            <div class="form-row submit-btn">
               <div class="input-data">
                  <div class="inner"></div>
                  <input type="submit" value="submit"/>
               </div>
            </div>
      </form>
      </div>
    /</body>
);
