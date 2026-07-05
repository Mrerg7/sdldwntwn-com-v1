export const SITE = {
  name: 'sdldwntwn.com',
  title: 'sdldwntwn.com | Premium Domain for Downtown Scottsdale, AZ • Old Town Scottsdale',
  description:
    'sdldwntwn.com — The premier short, memorable domain for everything Downtown Scottsdale (Old Town Scottsdale). Ideal for real estate, events, tourism, local directory, or lifestyle brand focused on Scottsdale\'s vibrant historic heart.',
  url: 'https://sdldwntwn.com/',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'Scottsdale, Arizona',
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: 'b1b5bf62-d36b-41b4-3934-2c498f2cf300',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('sdldwntwn.com Domain Acquisition Inquiry')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring sdldwntwn.com.\n\nIntended use:\nBudget range:\n\nThank you.')}`;

export const DISCLAIMER =
  'This website is for demonstration and informational purposes only. It does not constitute an offer of services, a commitment to deploy, or a guarantee of outcomes. All statistics, projections, and references to specific technologies are based on publicly available information as of July 5, 2026 and are subject to change.';
