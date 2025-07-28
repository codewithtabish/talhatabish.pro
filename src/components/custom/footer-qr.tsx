'use client';

import { QRCode } from '@/components/ui/kibo-ui/qr-code';
import React from 'react';

type FooterQrProps = {
  locale?: string; // e.g. "en", "ur", "fr", etc.
};

const FooterQr = ({ locale = "en" }: FooterQrProps) => {
  const url =
    locale && locale !== "en"
      ? `https://www.talhatabish.pro/${locale}`
      : `https://www.talhatabish.pro/en`;

  // Memoize the QR code so it only re-renders if the URL changes
  const qr = React.useMemo(
    () => (
      <QRCode
        className="size-48 rounded dark:border my-4 p-4 shadow-xs"
        data={url}
      />
    ),
    [url]
  );

  return qr;
};

export default FooterQr;
