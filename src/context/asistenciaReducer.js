import { types } from "../types/types";

const initialState = {
    employees: [],
    allRegisters: [],
    activeRegister: {}
}

export const asistenciaReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.setRegisterToday:
            return {
                ...state,
                ...action.payload
            };
    
        case types.setRegister:
            return {
                ...state,
                employees: state.employees.map(
                    employee => employee._id === action.payload._id 
                        ? {...employee, ...action.payload}
                        : employee
                )
            }

        case types.setRegisterActive:
            return {
                ...state,
                activeRegister: {
                    ...action.payload
                }
            }

        case types.updateRegisters:
            return {
                ...state,
                employees: state.employees.map(
                    e => (e._id === action.payload._id)
                                    ? action.payload
                                    : e
                )
            }
        case types.setAllRegister: 
            return {
                ...state,
                ...action.payload
            }

        case types.setEmployees:
            return {
                ...state,
                allRegisters: state.allRegisters.map(
                    e => (e.employeeId === action.payload.employeeId)
                                    ? {...e, ...action.payload.nameFull}
                                    : e
                )
            }

        case types.deleteAsisstance: 
            return {
                ...state,
                allRegisters: state.allRegisters.filter(
                    e => (e._id !== action.payload)
                )
            }
        default:
            return state;
    }
}