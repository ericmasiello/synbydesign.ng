import appConsts from '../../consts/appConsts.js';

export default class DetailController {
  constructor(portfolioDetail) {
    if( portfolioDetail.length == 0 ){
      return;
    }

    this.model = {
      showNav: false,
      mastheadId: appConsts.UIID.masthead,
      logoId: appConsts.UIID.logo,
      detail: portfolioDetail[0]
    }
  }
}

DetailController.$inject = ['portfolioDetail'];
