import { LanguageProvider } from './i18n/LanguageContext';
import { AppProvider, useAppState } from './context/AppContext.jsx';
import StepIndicator from './components/StepIndicator.jsx';
import AuthStep from './steps/AuthStep.jsx';
import VerifyStep from './steps/VerifyStep.jsx';
import TariffStep from './steps/TariffStep.jsx';
import PaymentStep from './steps/PaymentStep.jsx';
import LocationStep from './steps/LocationStep.jsx';
import SubmitStep from './steps/SubmitStep.jsx';

const STEPS = [AuthStep, VerifyStep, TariffStep, PaymentStep, LocationStep, SubmitStep];

function AppContent() {
  const { state } = useAppState();
  const CurrentStep = STEPS[state.step - 1] || STEPS[0];

  return (
    <div className="min-h-screen bg-[color:var(--tg-theme-bg-color,#f9fafb)] text-[color:var(--tg-theme-text-color,#111827)]">
      <StepIndicator />
      <CurrentStep />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </LanguageProvider>
  );
}

export default App;
