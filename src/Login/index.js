import React, { Component, useEffect} from 'react'
import './Loading.css'
import {useDataLayerValue} from '../DataLayer'
import Axios from 'axios'

function Loading(){
    const [{user, password}, dispatch] = useDataLayerValue();
    const top50 = () => {
      Axios.post("http://localhost:3001/top50", {})
      .then((response) => {
        console.log(response)
        dispatch({
          type: "SET_TOP100", 
          top100: response.data
        })
      })
    }
    const register = (elem) => {
      if(elem.key === "Enter") {
        const password = elem.target.value;
        const username = document.getElementById("email").value;
        if(username !== null && password !== null){
          if(username.indexOf("@gmail.com") !== -1 || username.indexOf("@yahoo.com") !== -1 
          || username.indexOf("@hotmail.com") !== -1 ||  username.indexOf("@outlook.com") !== -1){
            //check three cases:
            //case 1: email is not in database - add email and password to database
            //case 2: email is in database and password is the correct Password in database
            //case 3: email is in database and password in incorrect - display error message to retry password
            dispatch({type: "SET_USER", user: username})
            dispatch({type: "SET_PASSWORD", password: password})
            Axios.post("http://localhost:3001/register", {username:username, password:password})
            .then((response) => {
              console.log(response)
            })
          }
          else{
            console.error("Invalid Email entered! Please enter a valid email address.")
          }
        }
      }
    }
    const login = (elem) => {
      if(elem.key === "Enter") {
        Axios.post("http://localhost:3001/top50", {})
        .then((response) => {
          console.log(response)
          dispatch({
            type: "SET_TOP100", 
            top100: response.data
          })
        })
        const password = elem.target.value;
        const username = document.getElementById("emailLog").value;
        if(username !== null && password !== null){
          if(username.indexOf("@gmail.com") !== -1 || username.indexOf("@yahoo.com") !== -1 
          || username.indexOf("@hotmail.com") !== -1 ||  username.indexOf("@outlook.com") !== -1){
            //check three cases:
            //case 1: email is not in database - add email and password to database
            //case 2: email is in database and password is the correct Password in database
            //case 3: email is in database and password in incorrect - display error message to retry password
            dispatch({type: "SET_USER", user: username})
            dispatch({type: "SET_PASSWORD", password: password})
            let id = ""

            Axios.post("http://localhost:3001/login", {username:username, password:password})
            .then((response) => {
              id = response.data[0].id
              console.log("id:", id)
              Axios.post("http://localhost:3001/reviews", {id: id})
              .then((response) => {
                console.log(response)
                dispatch({
                  type: "SET_REVIEWS",
                  reviews: response.data
                })
              })
            })

            Axios.post("http://localhost:3001/reviews", {id: id})
            .then((response) => {
              console.log(response)
              dispatch({
                type: "SET_REVIEWS",
                reviews: response.data
              })
            })
            }
          else{
            console.error("Invalid Email entered! Please enter a valid email address.")
          }
        }
      }
    }
    const open = () => {
      console.log('open')
      dispatch({type: "SET_USER", user: " "})
      Axios.post("http://localhost:3001/top50", {})
      .then((response) => {
        console.log(response)
        dispatch({
          type: "SET_TOP100", 
          top100: response.data
        })
      })
    }
    return (
      <div className="loading">
        <h1 style = {{color:'white'}}>Register</h1>
        <input id= "email" type = "email" placeholder="Email"></input>
        <input type = "password" placeholder="Password" onKeyDown = {(e) => register(e)}></input>
        <h1 style = {{color:'white'}}>Login</h1>
        <input id= "emailLog" type = "email" placeholder="Email"></input>
        <input type = "password" placeholder="Password" onKeyDown = {(e) => login(e)}></input>
        <button
        onClick={() => open()}
        style = {{padding: 20, borderRadius: 99, backgroundColor: '#4B0082',fontWeight: 800, color:'white', textDecoration: 'none' }}
        >Continue without Logging in </button>
      </div>
    )
}


export default Loading;