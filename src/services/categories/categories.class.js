const { Service } = require('feathers-mongodb');

exports.Categories = class Categories extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('categories');
    });
  }
};
