import { useState, useCallback, useRef } from 'react';
import { getAnimationSettings } from '../utils/confetti';

interface AnimationSettings {
  // Define las propiedades que necesita tu función getAnimationSettings
  // Por ejemplo:
  // duration: number;
  // delay: number;
  // ... otros campos necesarios ...
}

interface UseConfettiAnimation {
  getInstance: (instance: any) => void;
  nextTickAnimation: () => void;
  startAnimation: () => void;
  intervalId: number | null;
}

export const useConfettiAnimation = (): UseConfettiAnimation => {
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const refAnimationInstance = useRef<((settings: AnimationSettings) => void) | null>(null);

  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
      refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
    }
  }, []);

  const startAnimation = useCallback(() => {
    if (!intervalId) {
      const newIntervalId = setInterval(nextTickAnimation, 400);
      setIntervalId(newIntervalId);

      setTimeout(() => {
        clearInterval(newIntervalId);
        setIntervalId(null);
      }, 4000);
    }
  }, [intervalId, nextTickAnimation]);

  return {
    getInstance,
    nextTickAnimation,
    startAnimation,
    intervalId
  };
};
