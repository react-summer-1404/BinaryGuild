import { useState } from "react";
import PaymentStepper from "./PaymentStepper";
import Finally from "./steps/Finally";
import FirstStage from "./steps/FirstStage";
import SecondStage from "./steps/SecondStage";

const Payment = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="flex flex-wrap gap-2 w-full">
      <div className="w-4/5 m-auto mt-5 flex flex-wrap gap-16">
        <PaymentStepper text={1} active={step === 1} />
        <PaymentStepper text={2} active={step === 2} />
        <PaymentStepper text={3} active={step === 3} />

        {step === 1 && <FirstStage onNext={() => setStep(2)} />}
        {step === 2 && (
          <SecondStage
            onNext={() => setStep(3)}
            onPrevious={() => setStep(1)}
          />
        )}
        {step === 3 && <Finally onPrevious={() => setStep(2)} />}
      </div>
    </div>
  );
};

export default Payment;
