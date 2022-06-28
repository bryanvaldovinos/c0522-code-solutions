/* exported titleCase */
function titleCase(title) {
  var ignore = ['Of', 'An', 'A', 'The', 'And', 'In', 'On', 'For', 'To'];
  title = title.toLowerCase().split(' ');
  for (var i = 0; i < title.length; i++) {
    title[i] = title[i].charAt(0).toUpperCase() + title[i].slice(1);
  }

  for (var j = 0; j < ignore.length; j++) {
    if (title.includes(ignore[j])) {
      for (var k = 0; k < title.length; k++) {
        if (title[k] === ignore[j]) {
          title.splice(k, 1, ignore[j].toLowerCase());
        }
      }
    }
    if (title[0] !== ignore[j]) {
      title[0] = title[0].charAt(0).toUpperCase() + title[0].slice(1);
    }
  }

  for (var h = 0; h < title.length; h++) {
    if (title[h].includes('-')) {
      title[h] = title[h].split('');
      for (var p = 0; p < title[h].length; p++) {
        if (title[h][p] === '-') {
          title[h][p + 1] = title[h][p + 1].toUpperCase();
        }
      }
      title[h] = title[h].join('');
    }
    if (title[h].includes(':')) {
      title[h + 1] = title[h + 1].charAt(0).toUpperCase() + title[h + 1].slice(1);
    }
  }

  for (var l = 0; l < title.length; l++) {
    if (title[l] === 'Javascript') {
      title[l] = 'JavaScript';
    }
    if (title[l] === 'Javascript:') {
      title[l] = 'JavaScript:';
    }
    if (title[l] === 'Api') {
      title[l] = 'API';
    }
  }

  return title.join(' ');
}

// must return title with words titlecased in APA style
// consider minor words, special cases, and colons/hyphens
// assign an array of minor words to ignore to a var
// then simply titlecase first letter of each word
// run a loop through ignore arr and check to see if title includes any
// of those words
// if so, then lowercase that element/word of title
// set conditional to ignore previous code if ignored word is at start of title
// form loop to run to check for hyphen or colon
// for length of title if at any index a hyphen is included then
// capitalize the first letter of the word immediately following hyphen
// same w colon
// split and join methods will be used to make working w chars of title easier
// finally hard code exceptions such as JS and API
// return title joined;
