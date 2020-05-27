/**
 * file with db of tests. each test must have its raws
 * @module Test
 */
/**
* read through the current dir and give an array of files
* @callback Test
* @param {string} subject - subject raw
* @param {string}  teacher - teacher raw
* @param {string}  author - author raw
* @param {string}  topic  - topic raw
* @param {integer}  numofquestions  - number of questions
* @param {text}  tasks - tasks of the test
*/
module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define('Test', {
    subject: DataTypes.STRING,
    teacher: DataTypes.STRING,
    author: DataTypes.STRING,
    topic: DataTypes.STRING,
    numofquestions: DataTypes.INTEGER,
    tasks: DataTypes.TEXT
  })

  return Test
}
