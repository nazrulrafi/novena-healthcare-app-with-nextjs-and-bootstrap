import './globals.css';
import '@/assets/plugins/bootstrap/bootstrap.min.css';
import '@/assets/plugins/icofont/icofont.min.css';
import '@/assets/plugins/slick-carousel/slick/slick.css';
import '@/assets/plugins/slick-carousel/slick/slick-theme.css';
import '@/assets/css/dashboard.css';
import '@/assets/css/style.css';

import Script from 'next/script';

export const metadata = {
  title: 'Your Website Title',
  description: 'Your Description',
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">

      <body>{children}
      <Script src="/assets/plugins/jquery/jquery.js" strategy="afterInteractive" />
      <Script src="/assets/plugins/bootstrap/bootstrap.min.js" strategy="afterInteractive" />
      <Script src="/assets/plugins/slick-carousel/slick/slick.min.js" strategy="afterInteractive" />
      <Script src="/assets/plugins/shuffle/shuffle.min.js" strategy="afterInteractive" />
      <Script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAkeLMlsiwzp6b3Gnaxd86lvakimwGA6UA"
          strategy="afterInteractive"
      />
      <Script src="/assets/plugins/google-map/gmap.js" strategy="afterInteractive" />

      <Script src="/assets/js/script.js" strategy="afterInteractive" />
      </body>
      </html>
  );
}
