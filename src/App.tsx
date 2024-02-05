import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as util from "./Samples/util";
import {
    destructureArr,
    destructureObj,
    getArrayFunctionsVal,
    getDefaultParamVal,
    getForLoopVal, getInterfaceVal, getNumericCastingVal,
    getOptionalParamVal, getRestParamsVal
} from "./Samples/util";

function App() {

  const getVariableValues = ():any => {
      const productName = util.getAnyVar().productName;
      return `${util.getNumberVar()}, ${util.getStringVar()}, ${util.getBoolVar()}, ${productName}`
  }

  const getArrayValue = ():any => {
      return `${util.getArrVal()?.[0]}, ${util.getArrVal()?.[1]}, ${util.getArrVal()?.[2]}, ${util.getArrVal()?.[3]}`
  }

  const getEnumValue = ():any => {
      return `${util.getEnumVal()?.[0]}, ${util.getEnumVal()?.[1]}`;
  }

  const getStringValueUsingFunction = ():string => {
      return util.getStringVal();
  }

  const getUnionValue = ():string => {
      return `string: ${util.getUnionVal('shanmy')}, number: ${util.getUnionVal(26)}`;
  }

  const getOperationsValue = ():string => {
      return util.getOperVal(20, 10);
  }

  const getIfElseValue = ():string => {
      return `If value: ${util.getIfElseVal(200)}, Else-if value: ${util.getIfElseVal(99)}, Else value: ${util.getIfElseVal(-1)}`;
  }

  const getSwitchValue = ():string => {
      return `Fiona's grade: ${util.getSwitchVal('A')}, Lip's grade: ${util.getSwitchVal('B')}, Ian's grade: ${util.getSwitchVal('C')}, Frank's grade: ${util.getSwitchVal('D')}`;
  }

  const getWhileLoopValue = ():string => {
      return `Temperature outside is ${util.getWhileLoopVal()} degrees celcius`;
  }

  const validateEmail = ():string => {
      return `shanmyshanmy@email.com is ${util.validateEm('shanmyshanmy@email.com') ? 'valid' : 'invalid'}`;
  }

  const getForLoopValue = ():string => {
      return `value: ${getForLoopVal()}`;
  }

  const getDestructureArray = ():string => {
      return destructureArr();
  }

  const getDestructureObject = ():string => {
      return destructureObj();
  }

  const getArrayFunctionsValue = ():string => {
      return getArrayFunctionsVal();
  }

  const getOptionalParamValue = ():string => {
      return getOptionalParamVal('shanmy', 26);
  }

  const getDefaultParamValue = ():string => {
      return getDefaultParamVal('shanmy', 26);
  }

  const getRestParamsValues = ():string => {
      return getRestParamsVal('shanmy', 26, 'orange');
  }

  const getInterfaceValue = ():string => {
      return getInterfaceVal();
  }

  const getNumericCastingValue = ():number => {
      return getNumericCastingVal('20');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div>Different types: { getVariableValues() }</div>
          <div>Array type: { getArrayValue() }</div>
          <div>Enum type: { getEnumValue() }</div>
          <div>String functions: { getStringValueUsingFunction() }</div>
          <div>Union type: { getUnionValue() }</div>
          <div>Operation: { getOperationsValue() }</div>
          <div>IfElse: { getIfElseValue() }</div>
          <div>Switch Stmt: { getSwitchValue() }</div>
          <div>While Loop value: { getWhileLoopValue() }</div>
          <div>Email Validator: { validateEmail() }</div>
          <div>For Loop: { getForLoopValue() }</div>
          <div>Destructured array value: { getDestructureArray() }</div>
          <div>Destructured object value: { getDestructureObject() }</div>
          <div>Array functions value: { getArrayFunctionsValue() }</div>
          <div>Optional param value: { getOptionalParamValue() }</div>
          <div>Default param value: { getDefaultParamValue() }</div>
          <div>Rest param value: { getRestParamsValues() }</div>
          <div>Interface value: { getInterfaceValue() }</div>
          <div>Numeric Casting value: { getNumericCastingValue() }</div>
      </header>
    </div>
  );
}

export default App;
