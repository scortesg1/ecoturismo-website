'use client';

import { useEffect, useId } from 'react';
import { getWompiConfig } from '@/config/wompi.config';
import { getReference, getIntegrity } from '@/utils/transaction.utils';

interface Props {
  amountInCents: number;
  onOpen: () => void;
}

export default function WompiCheckout({ amountInCents, onOpen }: Props) {
  const containerId = useId();

  useEffect(() => {
    const initializeWompi = async () => {
      try {
        const wompiConfig = getWompiConfig();
        const reference = getReference();
        const amount = (amountInCents*100).toString();
        const currency = wompiConfig.currency;
        const publicKey = wompiConfig.publicKey;
        const secret = wompiConfig.Integridad;

        const integrity = await getIntegrity(reference, amount, currency, secret);

        const script = document.createElement('script');
        script.src = wompiConfig.widgetUrl;
        script.setAttribute('data-render', 'button');
        script.setAttribute('data-public-key', publicKey);
        script.setAttribute('data-currency', currency);
        script.setAttribute('data-amount-in-cents', amount);
        script.setAttribute('data-reference', reference);
        script.setAttribute('data-signature:integrity', integrity);

        const container = document.getElementById(containerId);
        if (container) {
          container.innerHTML = '';
          container.appendChild(script);
        }
        
      } catch (error) {
        console.error('Error initializing Wompi: ', error);
      }
    };

    initializeWompi();
  }, [amountInCents, containerId,]);

  return (
    <button onClick={onOpen} className="">
    <div className="z-50 relative">
      <form className="z-50 relative">
        <div className="z-50 relative" id={containerId} />
      </form>
    </div>
    </button>
  );
  

}
