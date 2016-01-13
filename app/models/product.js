import DS from 'ember-data';

export default DS.Model.extend({
  name : DS.attr('string'),
  url  : DS.attr('string'),
  image: DS.attr('string'),

  initializeFromUrl(url) {
    this.set('name', url.get('title'));
    this.set('images', url.get('images'));
    this.set('url', url.get('url'));
  }
});
