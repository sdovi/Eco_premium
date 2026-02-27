import { createContext, useContext, useReducer } from 'react';

const AppContext = createContext(null);

const CABINET_STORAGE_KEY = 'eco_premium_order';

function loadSavedOrder() {
  try {
    const raw = localStorage.getItem(CABINET_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

const initialState = {
  step: 1,
  name: '',
  phone: '',
  tariff: null,
  paymentMethod: null,
  address: '',
  rulesAccepted: false,
  submitStatus: 'idle',
  view: 'wizard', // 'wizard' | 'cabinet'
  savedOrder: loadSavedOrder(), // последняя сохранённая заявка для личного кабинета
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
    case 'GO_TO_CABINET': {
      const order = {
        name: state.name,
        phone: state.phone,
        tariff: state.tariff,
        paymentMethod: state.paymentMethod,
        address: state.address,
        date: new Date().toISOString(),
      };
      try {
        localStorage.setItem(CABINET_STORAGE_KEY, JSON.stringify(order));
      } catch {}
      return { ...state, savedOrder: order, view: 'cabinet', submitStatus: 'success' };
    }
    case 'SET_VIEW':
      return { ...state, view: action.payload };
    case 'RESET':
      return { ...initialState, savedOrder: state.savedOrder, view: 'wizard' };
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

