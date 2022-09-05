import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function FeedBack() {
    <h1>feedback Form</h1>
    const[user,setUser]=useState({
        username:"",
        date:"",
        feedback:"",
        message:"",
        category:"",
        gender:""
    });
    const[finalData,setFinalData]=useState([]);
    const inputHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        console.log(name,value);

        setUser({...user,[name]:value})
    }
    const submitForm=(e)=>{
        e.preventDefault();
        const newUser={...user}
        console.log(user);

        setFinalData([...finalData,newUser]);
        setUser({
        username:"",
        date:"",
        feedback:"",
        message:"",
        category:"",
        gender:"",
        })     
    }
  return (
    <>
    <form  style={{textAlign:"center"}}>
        <div  style={{margin:"10px"}}>
            <label htmlFor='username'>Username:</label>
            <input type="text" value={user.username} onChange={inputHandler} name="username" id="username" />
        </div>
        <div style={{margin:"10px"}}>
            <label htmlFor='date'>Date:</label>
            <input type="date" value={user.date} onChange={inputHandler}  name="date" id="date" />
        </div>
        <div style={{margin:"10px"}}>
            <label htmlFor='feedback'>feedback title:</label>
            <input type="text" value={user.feedback} onChange={inputHandler} name="feedback" id="feedback" />
        </div>
        <div style={{margin:"10px"}}>
            <label htmlFor='message'>Message:</label>
            <input type="textfield" value={user.message}onChange={inputHandler}  name="message" id="message" />
        </div>
        <div style={{margin:"10px"}}>
            <h4>Category</h4>
            <label htmlFor='gen'>General</label>
            <input type="checkbox" className='category' value={user.category} onClick={inputHandler}  name="gen" id="gen" />
            <label htmlFor='obc'>OBC</label>
            <input type="checkbox" className='category' value={user.category} onClick={inputHandler}  name="obc" id="obc" />
            <label htmlFor='sc/st'>SC/ST</label>
            <input type="checkbox" className='category' value={user.category} onClick={inputHandler}  name="sc/st" id="sc/st" />
        </div>
        <div style={{margin:"10px"}}>
            <h3>Gender</h3>
            <label htmlFor='male'>Male</label>
            <input type="radio" className='gender' value={user.gender} onClick={inputHandler}  name="gender" id="male" />
            <label htmlFor='female'>Female</label>
            <input type="radio" className='gender' value={user.gender} onClick={inputHandler}  name="gender" id="female" />
            <label htmlFor='other'>Other</label>
            <input type="radio" className='gender' value={user.gender} onClick={inputHandler} name="gender" id="other" />
        </div>
        <Button onClick={submitForm} variant="primary" type="submit">
        Submit
      </Button>
    </form>
    <div>
        {
            finalData.map((cur,id)=>{
                return(
                    <div key={id}>
                        <p>username:{cur.username}</p>
                        <p>Date:{cur.date}</p>
                        <p>feedback:{cur.feedback}</p>
                        <p>message:{cur.message}</p>
                        <p>category:{cur.category}</p>
                        <p>gender:{cur.gender}</p>
                    </div>
                )
            })
        }
    </div>
    </>
  );
}

export default FeedBack;