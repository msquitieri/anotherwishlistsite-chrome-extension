import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		// chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
		// 	var url = tabs[0].url;
			let url = 'http://www.urbanoutfitters.com/urban/catalog/productdetail.jsp?id=25956756%26category=GIFT-BOHO';
			// route.transitionTo('product', url);
		// });

		return this.store.queryRecord('url', { url: url }).then((url) => {
			let product = this.store.createRecord('product');
			product.initializeFromUrl(url);

			return product;
		});
	}
});
