const colors = require('colors/safe');

/**
 * Return the name of the school
 * @return {string}
 */
function school() {
  return 'paintier lowschool';
}

/**
 * Return an accurate representation of homework
 * @return {string}
 */
function homework() {
  return colors.zalgo('homework homework homework homework homework homework');
}

module.exports = {
  school: school,
  homework: homework,
};
