import React, {useState} from 'react';
import {Button} from '@/components/ui/button';

const steps = ['Select Role', 'Add Skills', 'Profile Info'];

export function OnboardingStepper() {
  // TODO: Integrate with backend onboarding
  // TODO: Implement step logic and validation
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center gap-4 mb-4">
        {steps.map((step, idx) => (
          <div
            key={step}
            className={`flex flex-col items-center ${
              idx === currentStep ? 'font-bold text-primary' : 'text-zinc-400'
            }`}
          >
            <div
              className={`size-6 rounded-full border-2 ${
                idx === currentStep ? 'border-primary' : 'border-zinc-300'
              } flex items-center justify-center mb-1`}
            >
              {idx + 1}
            </div>
            <span className="text-xs">{step}</span>
          </div>
        ))}
      </div>
      <div className="min-h-[120px] flex items-center justify-center bg-zinc-50 rounded-md p-6">
        {/* TODO: Replace with real step content */}
        <span className="text-zinc-500">
          Step {currentStep + 1}: {steps[currentStep]}
        </span>
      </div>
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 0}
        >
          Back
        </Button>
        {currentStep < steps.length - 1 ? (
          <Button onClick={handleNext}>Next</Button>
        ) : (
          <Button type="submit" className="bg-primary text-white">
            Finish
          </Button>
        )}
      </div>
    </div>
  );
}

export default OnboardingStepper;
