import type {ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useThemeConfig} from '@docusaurus/theme-common';
import ThemedImage from '@theme/ThemedImage';

export default function NavbarLogo(): ReactNode {
  const {
    navbar: {logo},
  } = useThemeConfig();
  const light = useBaseUrl(logo?.src ?? '');
  const dark = useBaseUrl(logo?.srcDark || logo?.src || '');

  if (!logo) {
    return null;
  }

  return (
    <span className="navbar__brand">
      <span className="navbar__logo">
        <ThemedImage
          sources={{light, dark}}
          height={logo.height}
          width={logo.width}
          alt={logo.alt ?? ''}
          style={logo.style}
        />
      </span>
    </span>
  );
}
