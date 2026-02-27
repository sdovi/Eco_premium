import { createContext, useContext, useReducer } from 'react';

const AppContext = createContext(null);

const initialState = {
  step: 1,
  name: '',
  phone: '',
  tariff: null, // { id, title, price }
  paymentMethod: null, // 'payme' | 'click' | 'cash'
  address: '',
  rulesAccepted: false,
  submitStatus: 'idle', // 'idle' | 'loading' | 'success' | 'error'
};

function appReducer(state, action) {
  switch (action.type) {
    case 'NEXT_STEP':
      return { ...state, step: Math.min(state.step + 1, 6) };
    case 'PREV_STEP':
      return { ...state, step: Math.max(state.step - 1, 1) };
    case 'SET_STEP':
      return { ...state, step: action.payload };
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_PHONE':
      return { ...state, phone: action.payload };
    case 'SET_TARIFF':
      return { ...state, tariff: action.payload };
    case 'SET_PAYMENT_METHOD':
      return { ...state, paymentMethod: action.payload };
    case 'SET_ADDRESS':
      return { ...state, address: action.payload };
    case 'SET_RULES_ACCEPTED':
      return { ...state, rulesAccepted: action.payload };
    case 'SET_SUBMIT_STATUS':
      return { ...state, submitStatus: action.payload };
    case 'RESET':
      return { ...initialState };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppState() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useAppState must be used within AppProvider');
  }
  return ctx;
}

