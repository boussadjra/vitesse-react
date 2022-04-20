
import {GET_USERNAME,SET_USERNAME}  from '../types/user'

export interface getUserNameAction{
    type:typeof GET_USERNAME
    
}

export interface setUserNameAction{
    type:typeof SET_USERNAME
    payload:string
}

export function setUserName (name:string) :setUserNameAction {
	return {
		type: SET_USERNAME,
		payload: name,
	};
};

export function getUserName () :getUserNameAction {
	return {
		type: GET_USERNAME
	};
};