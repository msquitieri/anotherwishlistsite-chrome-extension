import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    // 	var url = tabs[0].url;
    let url = 'http://www.amazon.com/dp/B00I15SB16/ref=ods_gw_d_h1_eink_bn?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=desktop-hero-kindle-A&pf_rd_r=1A09VP79BRCBSNDSCSFX&pf_rd_t=36701&pf_rd_p=2355674422&pf_rd_i=desktop';
    // route.transitionTo('product', url);
    // });

    return this.store.queryRecord('url', {url: url}).then(url => {
      let product = this.store.createRecord('product');
      product.initializeFromUrl(url);

      return product;
    });
  }
});
