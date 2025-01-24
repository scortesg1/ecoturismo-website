interface WompiConfig {
    widgetUrl: string;
    publicKey: string;
    currency: string;
    environment: 'test' | 'production';
    Integridad: string;
  }
  
  const wompiConfig: WompiConfig = {
    widgetUrl: 'https://checkout.wompi.co/widget.js',
    publicKey: process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY || '',
    currency: process.env.NEXT_PUBLIC_WOMPI_CURRENCY || 'COP',
    environment: (process.env.NEXT_PUBLIC_WOMPI_ENVIRONMENT as 'test' | 'production') || 'test',
    Integridad: process.env.NEXT_PUBLIC_WOMPI_INTEGRITY || '',
  };
  
  export const getWompiConfig = (): WompiConfig => {
    if (!wompiConfig.publicKey) {
      throw new Error('WOMPI_PUBLIC_KEY is required in environment variables');
    }
  
    if (!wompiConfig.Integridad) {
      throw new Error('WOMPI_INTEGRITY is required in environment variables');
    }

    
    return wompiConfig;
  };

  
