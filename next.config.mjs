import MillionLint from '@million/lint';
import { withHydrationOverlay } from '@builder.io/react-hydration-overlay/next';

/** @type {import('next').NextConfig} */
const nextConfig = {};
export default MillionLint.next({
  rsc: true
})(withHydrationOverlay({
  appRootSelector: 'main'
})(nextConfig));