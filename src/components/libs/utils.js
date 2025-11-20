/**
 * Truncates text to a specified length and adds ellipsis
 */
export const truncateText = (text, maxLength = 50, suffix = "...") => {
  if (!text || typeof text !== "string") return "";
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - suffix.length) + suffix;
};

/**
 * Truncates an address, showing the beginning and end parts
 */
export const truncateAddress = (
  address,
  startLength = 6,
  endLength = 4,
  separator = "..."
) => {
  if (!address || typeof address !== "string") return "";
  if (address.length <= startLength + endLength) return address;
  return (
    address.substring(0, startLength) +
    separator +
    address.substring(address.length - endLength)
  );
};

/**
 * Formats a number with commas and optional decimal places
 */
export const formatNumber = (number, decimals = 0, locale = "en-US") => {
  if (number === null || number === undefined || isNaN(Number(number)))
    return "0";
  return Number(number).toLocaleString(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

/**
 * Formats a number as currency
 * @param {number|string} amount - The amount to format
 * @param {string|number} currencyOrDecimals - Currency code (e.g., 'USD') or number of decimals
 * @param {string} locale - Locale string (default: 'en-US')
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (
  amount,
  currencyOrDecimals = "USD",
  locale = "en-US"
) => {
  if (amount === null || amount === undefined || isNaN(Number(amount)))
    return "$0.00";

  // If second parameter is a number, treat it as decimals and use default USD
  if (typeof currencyOrDecimals === "number") {
    const decimals = currencyOrDecimals;
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(Number(amount));
  }

  // Otherwise, treat it as currency code
  const currency = currencyOrDecimals || "USD";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(Number(amount));
};

/**
 * Formats a number with K, M, B suffixes (e.g., 1.5K, 2.3M)
 */
export const formatNumberCompact = (number, decimals = 1) => {
  if (number === null || number === undefined || isNaN(Number(number)))
    return "0";
  const num = Number(number);
  const absNum = Math.abs(num);
  const sign = num < 0 ? "-" : "";

  if (absNum >= 1000000000) {
    return sign + (absNum / 1000000000).toFixed(decimals) + "B";
  }
  if (absNum >= 1000000) {
    return sign + (absNum / 1000000).toFixed(decimals) + "M";
  }
  if (absNum >= 1000) {
    return sign + (absNum / 1000).toFixed(decimals) + "K";
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
