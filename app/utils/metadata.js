// utils/metadata.js

/**
 * Generates metadata for Next.js pages.
 * @param {Object} options
 * @param {string} options.title - The title of the page.
 * @param {string} options.description - The description of the page.
 * @param {string} options.keywords - The keywords for the page.
 * @param {string} options.canonicalUrl - The canonical URL of the page.
 * @returns {import('next').Metadata} - The metadata object.
 */
export function generatePageMetadata({ title, description, keywords, canonicalUrl }) {
    return {
      title,
      description,
        keywords,
      alternates: {
        canonical: canonicalUrl,
      },
    };
  }
  