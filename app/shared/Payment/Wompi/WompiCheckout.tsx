'use client';

import { useEffect, useRef, useState } from 'react';
import { getWompiConfig } from '@/config/wompi.config';
import { getReference, getIntegrity } from '@/utils/transaction.utils';

interface Props {
  amountInCents: number;
  onOpen: () => void;
  onError?: (error: Error) => void;
}

export default function WompiCheckout({ amountInCents, onOpen, onError }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const initializeWompi = async () => {
      if (!containerRef.current) return;
      
      setIsLoading(true);
      
      try {
        // Clear any existing content
        containerRef.current.innerHTML = '';
        
        const wompiConfig = getWompiConfig();
        const reference = getReference();
        const amount = Math.round(amountInCents * 100).toString(); // Ensure whole number
        const currency = wompiConfig.currency;
        const publicKey = wompiConfig.publicKey;
        const secret = wompiConfig.Integridad;

        const integrity = await getIntegrity(reference, amount, currency, secret);

        // Create container div for the button
        const buttonContainer = document.createElement('div');
        buttonContainer.id = `wompi-button-${reference}`;
        containerRef.current.appendChild(buttonContainer);

        // Create and configure script
        const script = document.createElement('script');
        script.src = wompiConfig.widgetUrl;
        script.async = true;
        
        // Add script load error handling
        script.onerror = (error) => {
          console.error('Failed to load Wompi widget script:', error);
          onError?.(new Error('Failed to load Wompi payment widget'));
        };

        // Configure Wompi attributes
        script.setAttribute('data-render', 'button');
        script.setAttribute('data-public-key', publicKey);
        script.setAttribute('data-currency', currency);
        script.setAttribute('data-amount-in-cents', amount);
        script.setAttribute('data-reference', reference);
        script.setAttribute('data-signature:integrity', integrity);

        // Add script to button container
        if (isMounted) {
          buttonContainer.appendChild(script);
        }

      } catch (error) {
        console.error('Error initializing Wompi:', error);
        onError?.(error instanceof Error ? error : new Error('Failed to initialize payment'));
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    initializeWompi();

    // Cleanup function
    return () => {
      isMounted = false;
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [amountInCents, onError]);

  return (
    <div className="relative h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
        </div>
      )}
      <div 
        ref={containerRef}
        className="relative z-10"
        role="button"
        onClick={onOpen}
      />
    </div>
  );
}