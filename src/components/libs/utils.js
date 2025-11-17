/**
 * Truncates text to a specified length and adds ellipsis
 * @param {string} text - The text to truncate
 * @param {number} maxLength - Maximum length before truncation
 * @param {string} suffix - Suffix to add (default: '...')
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength = 50, suffix = '...') => {
  if (!text || typeof text !== 'string') return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - suffix.length) + suffix;
};

/**
 * Truncates an address, showing the beginning and end parts
 * @param {string} address - The address to truncate
 * @param {number} startLength - Number of characters to show at the start (default: 6)
 * @param {number} endLength - Number of characters to show at the end (default: 4)
 * @param {string} separator - Separator between parts (default: '...')
 * @returns {string} Truncated address
 */
export const truncateAddress = (
  address,
  startLength = 6,
  endLength = 4,
  separator = '...'
) => {
  if (!address || typeof address !== 'string') return '';
  if (address.length <= startLength + endLength) return address;
  return (
    address.substring(0, startLength) +
    separator +
    address.substring(address.length - endLength)
  );
};

/**
 * Formats a number with commas and optional decimal places
 * @param {number|string} number - The number to format
 * @param {number} decimals - Number of decimal places (default: 0)
 * @param {string} locale - Locale string (default: 'en-US')
 * @returns {string} Formatted number
 */
export const formatNumber = (number, decimals = 0, locale = 'en-US') => {
  if (number === null || number === undefined || isNaN(Number(number)))
    return '0';
  return Number(number).toLocaleString(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

/**
 * Formats a number as currency
 * @param {number|string} amount - The amount to format
 * @param {string} currency - Currency code (default: 'USD')
 * @param {string} locale - Locale string (default: 'en-US')
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (
  amount,
  currency = 'USD',
  locale = 'en-US'
) => {
  if (amount === null || amount === undefined || isNaN(Number(amount)))
    return '$0.00';
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(Number(amount));
};

/**
 * Formats a number with K, M, B suffixes (e.g., 1.5K, 2.3M)
 * @param {number|string} number - The number to format
 * @param {number} decimals - Number of decimal places (default: 1)
 * @returns {string} Formatted number with suffix
 */
export const formatNumberCompact = (number, decimals = 1) => {
  if (number === null || number === undefined || isNaN(Number(number)))
    return '0';
  const num = Number(number);
  const absNum = Math.abs(num);
  const sign = num < 0 ? '-' : '';

  if (absNum >= 1000000000) {
    return sign + (absNum / 1000000000).toFixed(decimals) + 'B';
  }
  if (absNum >= 1000000) {
    return sign + (absNum / 1000000).toFixed(decimals) + 'M';
  }
  if (absNum >= 1000) {
    return sign + (absNum / 1000).toFixed(decimals) + 'K';
  }
  return num.toString();
};

// Helper function to get cookie value
export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}