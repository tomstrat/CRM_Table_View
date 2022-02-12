
import React from "react"
import TestToggleContainer from "../../components/TestToggleContainer"

const ScheduleBuilder = () => {
  
  
  
  
  return (
    <>
      <TestToggleContainer 
        buttons={
          [
            {name: "master", currState: true, buttonRole: "master"}, 
            {name: "kid1", currState: false, buttonRole: "child"}, 
            {name: "kid2", currState: false, buttonRole: "child"}, 
            {name: "kid3", currState: false, buttonRole: "child"}
          ]
        }
        groupId={"testgroup"}
      />
      <TestToggleContainer 
        buttons={
          [
            {name: "f0", currState: false, buttonRole: "free"}, 
            {name: "f1", currState: false, buttonRole: "free"},
            {name: "f2", currState: false, buttonRole: "free"}, 
            {name: "f3", currState: false, buttonRole: "free"}, 
            {name: "f4", currState: false, buttonRole: "free"},
            {name: "master", currState: true, buttonRole: "master"}, 
            {name: "kid1", currState: false, buttonRole: "child"}, 
            {name: "kid2", currState: false, buttonRole: "child"}, 
            {name: "kid3", currState: false, buttonRole: "child"}
          ]
        }
        groupId={"testgroup"}
      />
      <TestToggleContainer 
        buttons={
          [
            
            {name: "kid1", currState: false, buttonRole: "child"}, 
            {name: "kid2", currState: false, buttonRole: "child"}, 
            {name: "kid3", currState: false, buttonRole: "child"},
            {name: "master", currState: true, buttonRole: "master"}, 
            {name: "jesus", currState: false, buttonRole: "child"}, 
            {name: "twat", currState: false, buttonRole: "child"}, 
            {name: "test", currState: false, buttonRole: "child"},
            {name: "guitar", currState: false, buttonRole: "child"}, 
            {name: "murder", currState: false, buttonRole: "child"}, 
            {name: "yes", currState: false, buttonRole: "child"}
          ]
        }
        groupId={"testgroup"}
      />
        
      
    </>
  )
}

export default ScheduleBuilder

