module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'project name is?',
    default: 'vue-piece-h5'
  },
  {
    type: 'input',
    name: 'version',
    message: 'project version is?',
    default: '1.0.0'
  },
  {
    type: 'input',
    name: 'description',
    message: 'description?',
    default: 'this is a h5 template project'
  },
  {
    type: 'input',
    name: 'author',
    message: 'author?',
    default: 'changjun'
  },
  {
    type: 'confirm',
    name: 'private',
    message: 'this resgistery is private?'
  },
  {
    type: 'input',
    name: 'license',
    message: 'license?',
    default: 'ISC'
  }
]
