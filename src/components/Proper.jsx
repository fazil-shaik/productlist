import React from 'react';

function Proper(props) {
   return <>
   <h2>I am a { props.brand }!</h2>
    <h1>Having name {props.name}</h1>
    </>
}

function Garage() {
  return (
    <>
	    <h1>Who lives in my garage?</h1>
	    <Proper brand="Ford" />
	    <Proper name="shaik" brand="ferari"/>
    </>
  );
}

export default Proper;
