class Formatter {
  // Capitalizes the first letter of a string
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Removes all non-alphanumeric characters except dashes, single quotes, and spaces
  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  // Capitalizes every word except specific exceptions, always capitalizes the first word
  static titleize(sentence) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = sentence.split(' ');

    return words
      .map((word, index) => {
        if (index === 0 || !exceptions.includes(word.toLowerCase())) {
          return this.capitalize(word);
        } else {
          return word.toLowerCase();
        }
      })
      .join(' ');
  }
}
