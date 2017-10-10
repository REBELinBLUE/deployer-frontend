let messages = {};
let currentLocale;

function applyReplacements(message, replacements) {
  let result = message;

  if (replacements && Object.keys(replacements).length > 0) {
    Object.entries(replacements).forEach(([token, replacement]) => {
      result = result.replace(new RegExp(`:${token}`, 'g'), replacement);
    });
  }

  return result;
}

function addMessages(newMessages) {
  messages = {
    ...messages,
    ...newMessages,
  };
  //
  // for (var key in _messages) {
  //   messages[key] = _messages[key];
  // }
}

function has(messageKey) {
  return typeof messages[currentLocale][messageKey] !== 'undefined';
}

function setLocale(localeId) {
  if (!messages[localeId]) {
    throw new Error(`No messages defined for locale: "${localeId}".`);
  }

  currentLocale = localeId;
}

function locale() {
  return currentLocale;
}

export function trans(messageKey, replacements) {
  if (typeof messages[currentLocale][messageKey] === 'undefined') {
    const result = {};
    Object.keys(messages[currentLocale]).forEach((prop) => {
      const prefix = `${messageKey}.`;

      if (prop.indexOf(prefix) > -1) {
        result[prop.replace(prefix, '')] = messages[currentLocale][prop];
      }
    });

    if (Object.keys(result).length > 0) {
      return result;
    }

    return messageKey;
  }

  return applyReplacements(messages[currentLocale][messageKey], replacements);
}

export function transChoice(messageKey, count, replacements) {
  if (typeof messages[currentLocale][messageKey] === 'undefined') {
    return messageKey;
  }

  const parts = messages[currentLocale][messageKey].split('|');

  if (count === 1) {
    return applyReplacements(parts[0], replacements);
  }

  return applyReplacements(parts[1], replacements);
}

export default {
  get: trans,
  choice: transChoice,
  addMessages,
  has,
  setLocale,
  locale,
};

