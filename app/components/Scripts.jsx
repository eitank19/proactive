import React, { useEffect } from 'react';

const Scripts = () => {
  useEffect(() => {
    // GTM script code
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id=GTM-NQXDVMKB'+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NQXDVMKB');`;

    document.head.appendChild(gtmScript);

    // Enable script code
    const enableScript = document.createElement('script');
    enableScript.src = 'https://cdn.enable.co.il/licenses/enable-L2521757f2doiqut-0324-57225/init.js';
    enableScript.async = true;

    document.body.appendChild(enableScript);

    return () => {
      document.head.removeChild(gtmScript);
      document.body.removeChild(enableScript);
    };
  }, []);

  return null;
}

export default Scripts;
