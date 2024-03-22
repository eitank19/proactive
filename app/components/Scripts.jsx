import React, { useEffect } from 'react';

const Scripts = () => {
  useEffect(() => {
    // GTM script code
    const script = document.createElement('script');
    script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id=GTM-NQXDVMKB'+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NQXDVMKB');`;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}

export default Scripts;
