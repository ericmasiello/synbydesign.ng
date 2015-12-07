export default class DetailController {
  constructor(portfolioDetail) {
    if( portfolioDetail.length == 0 ){
      return;
    }

    this.model = {
      detail: portfolioDetail[0]
    }
  }
}

DetailController.$inject = ['portfolioDetail'];
