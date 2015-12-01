import portfolioServices from './portfolio.service.js'

describe('Services: Portfolio Model', function () {
  let PortfolioHelperFns;

  const testData = [{
    "ID": 219,
    "title": "EXBC @ BNG (Harry R4NS0M) web promo",
    "status": "publish",
    "type": "post",
    "author": {
      "ID": 1,
      "username": "admin",
      "name": "admin",
      "first_name": "",
      "last_name": "",
      "nickname": "admin",
      "slug": "admin",
      "URL": "",
      "avatar": "http://1.gravatar.com/avatar/d00bed295c719c43bcbfb9171f69d994?s=96",
      "description": "",
      "registered": "2010-07-18T18:12:14+00:00",
      "meta": {
        "links": {
          "self": "http://www.synbydesign.com/wp/wp-json/users/1",
          "archives": "http://www.synbydesign.com/wp/wp-json/users/1/posts"
        }
      }
    },
    "content": "<p><img class=\"alignnone size-full wp-image-220\" src=\"http://www.synbydesign.com/wp/wp-content/uploads/2015/10/exbc_live_promo_2015-10-23.png\" alt=\"EXBC at BNG with Harry Ransom web promo\" width=\"950\" height=\"950\" /></p>\n",
    "parent": null,
    "link": "http://www.synbydesign.com/wp/exbc-bng-harry-r4ns0m-web-promo/",
    "date": "2015-10-21T20:52:10",
    "modified": "2015-10-21T20:52:10",
    "format": "standard",
    "slug": "exbc-bng-harry-r4ns0m-web-promo",
    "guid": "http://www.synbydesign.com/wp/?p=219",
    "excerpt": null,
    "menu_order": 0,
    "comment_status": "open",
    "ping_status": "open",
    "sticky": false,
    "date_tz": "Etc/GMT-5",
    "date_gmt": "2015-10-22T01:52:10",
    "modified_tz": "Etc/GMT-5",
    "modified_gmt": "2015-10-22T01:52:10",
    "meta": {
      "links": {
        "self": "http://www.synbydesign.com/wp/wp-json/posts/219",
        "author": "http://www.synbydesign.com/wp/wp-json/users/1",
        "collection": "http://www.synbydesign.com/wp/wp-json/posts",
        "replies": "http://www.synbydesign.com/wp/wp-json/posts/219/comments",
        "version-history": "http://www.synbydesign.com/wp/wp-json/posts/219/revisions"
      }
    },
    "featured_image": {
      "ID": 220,
      "title": "EXBC at BNG with Harry Ransom web promo",
      "status": "inherit",
      "type": "attachment",
      "author": {
        "ID": 1,
        "username": "admin",
        "name": "admin",
        "first_name": "",
        "last_name": "",
        "nickname": "admin",
        "slug": "admin",
        "URL": "",
        "avatar": "http://1.gravatar.com/avatar/d00bed295c719c43bcbfb9171f69d994?s=96",
        "description": "",
        "registered": "2010-07-18T18:12:14+00:00",
        "meta": {
          "links": {
            "self": "http://www.synbydesign.com/wp/wp-json/users/1",
            "archives": "http://www.synbydesign.com/wp/wp-json/users/1/posts"
          }
        }
      },
      "content": "<p class=\"attachment\"><a href='http://www.synbydesign.com/wp/wp-content/uploads/2015/10/exbc_live_promo_2015-10-23.png'><img width=\"300\" height=\"300\" src=\"http://www.synbydesign.com/wp/wp-content/uploads/2015/10/exbc_live_promo_2015-10-23-300x300.png\" class=\"attachment-medium\" alt=\"EXBC at BNG with Harry Ransom web promo\" /></a></p>\n",
      "parent": 219,
      "link": "http://www.synbydesign.com/wp/exbc-bng-harry-r4ns0m-web-promo/exbc_live_promo_2015-10-23/",
      "date": "2015-10-21T20:51:35",
      "modified": "2015-10-21T20:51:54",
      "format": "standard",
      "slug": "exbc_live_promo_2015-10-23",
      "guid": "http://www.synbydesign.com/wp/wp-content/uploads/2015/10/exbc_live_promo_2015-10-23.png",
      "excerpt": null,
      "menu_order": 0,
      "comment_status": "open",
      "ping_status": "closed",
      "sticky": false,
      "date_tz": "Etc/GMT-5",
      "date_gmt": "2015-10-22T01:51:35",
      "modified_tz": "Etc/GMT-5",
      "modified_gmt": "2015-10-22T01:51:54",
      "meta": {
        "links": {
          "self": "http://www.synbydesign.com/wp/wp-json/media/220",
          "author": "http://www.synbydesign.com/wp/wp-json/users/1",
          "collection": "http://www.synbydesign.com/wp/wp-json/media",
          "replies": "http://www.synbydesign.com/wp/wp-json/media/220/comments",
          "version-history": "http://www.synbydesign.com/wp/wp-json/media/220/revisions",
          "up": "http://www.synbydesign.com/wp/wp-json/media/219"
        }
      },
      "terms": [],
      "source": "http://www.synbydesign.com/wp/wp-content/uploads/2015/10/exbc_live_promo_2015-10-23.png",
      "is_image": true,
      "attachment_meta": {
        "width": 950,
        "height": 950,
        "file": "2015/10/exbc_live_promo_2015-10-23.png",
        "sizes": {
          "thumbnail": {
            "file": "exbc_live_promo_2015-10-23-150x150.png",
            "width": 150,
            "height": 150,
            "mime-type": "image/png",
            "url": "http://www.synbydesign.com/wp/wp-content/uploads/2015/10/exbc_live_promo_2015-10-23-150x150.png"
          },
          "medium": {
            "file": "exbc_live_promo_2015-10-23-300x300.png",
            "width": 300,
            "height": 300,
            "mime-type": "image/png",
            "url": "http://www.synbydesign.com/wp/wp-content/uploads/2015/10/exbc_live_promo_2015-10-23-300x300.png"
          },
          "post-thumbnail": {
            "file": "exbc_live_promo_2015-10-23-825x510.png",
            "width": 825,
            "height": 510,
            "mime-type": "image/png",
            "url": "http://www.synbydesign.com/wp/wp-content/uploads/2015/10/exbc_live_promo_2015-10-23-825x510.png"
          }
        },
        "image_meta": {
          "aperture": 0,
          "credit": "",
          "camera": "",
          "caption": "",
          "created_timestamp": 0,
          "copyright": "",
          "focal_length": 0,
          "iso": 0,
          "shutter_speed": 0,
          "title": "",
          "orientation": 0
        }
      }
    },
    "terms": {
      "category": [{
        "ID": 34,
        "name": "Flyers",
        "slug": "flyers",
        "description": "",
        "taxonomy": "category",
        "parent": null,
        "count": 14,
        "link": "http://www.synbydesign.com/wp/category/flyers/",
        "meta": {
          "links": {
            "collection": "http://www.synbydesign.com/wp/wp-json/taxonomies/category/terms",
            "self": "http://www.synbydesign.com/wp/wp-json/taxonomies/category/terms/34"
          }
        }
      }]
    }
  }, {
    "ID": 208,
    "title": "EXBC @ BNG (Posers) web promo",
    "status": "publish",
    "type": "post",
    "author": {
      "ID": 1,
      "username": "admin",
      "name": "admin",
      "first_name": "",
      "last_name": "",
      "nickname": "admin",
      "slug": "admin",
      "URL": "",
      "avatar": "http://1.gravatar.com/avatar/d00bed295c719c43bcbfb9171f69d994?s=96",
      "description": "",
      "registered": "2010-07-18T18:12:14+00:00",
      "meta": {
        "links": {
          "self": "http://www.synbydesign.com/wp/wp-json/users/1",
          "archives": "http://www.synbydesign.com/wp/wp-json/users/1/posts"
        }
      }
    },
    "content": "<p><img src=\"http://www.synbydesign.com/wp/wp-content/uploads/2015/06/exbc_live_promo_2015-06-26.png\" alt=\"EXBC @ BNG (Posers) web promo\" width=\"950\" height=\"950\" class=\"alignnone size-full wp-image-211\" /></p>\n",
    "parent": null,
    "link": "http://www.synbydesign.com/wp/exbc-bng-posers-web-promo/",
    "date": "2015-06-22T10:15:54",
    "modified": "2015-06-22T17:30:11",
    "format": "standard",
    "slug": "exbc-bng-posers-web-promo",
    "guid": "http://www.synbydesign.com/wp/?p=208",
    "excerpt": null,
    "menu_order": 0,
    "comment_status": "open",
    "ping_status": "open",
    "sticky": false,
    "date_tz": "Etc/GMT-5",
    "date_gmt": "2015-06-22T15:15:54",
    "modified_tz": "Etc/GMT-5",
    "modified_gmt": "2015-06-22T22:30:11",
    "meta": {
      "links": {
        "self": "http://www.synbydesign.com/wp/wp-json/posts/208",
        "author": "http://www.synbydesign.com/wp/wp-json/users/1",
        "collection": "http://www.synbydesign.com/wp/wp-json/posts",
        "replies": "http://www.synbydesign.com/wp/wp-json/posts/208/comments",
        "version-history": "http://www.synbydesign.com/wp/wp-json/posts/208/revisions"
      }
    },
    "featured_image": {
      "ID": 211,
      "title": "EXBC @ BNG (Posers) web promo",
      "status": "inherit",
      "type": "attachment",
      "author": {
        "ID": 1,
        "username": "admin",
        "name": "admin",
        "first_name": "",
        "last_name": "",
        "nickname": "admin",
        "slug": "admin",
        "URL": "",
        "avatar": "http://1.gravatar.com/avatar/d00bed295c719c43bcbfb9171f69d994?s=96",
        "description": "",
        "registered": "2010-07-18T18:12:14+00:00",
        "meta": {
          "links": {
            "self": "http://www.synbydesign.com/wp/wp-json/users/1",
            "archives": "http://www.synbydesign.com/wp/wp-json/users/1/posts"
          }
        }
      },
      "content": "<p class=\"attachment\"><a href='http://www.synbydesign.com/wp/wp-content/uploads/2015/06/exbc_live_promo_2015-06-26.png'><img width=\"300\" height=\"300\" src=\"http://www.synbydesign.com/wp/wp-content/uploads/2015/06/exbc_live_promo_2015-06-26-300x300.png\" class=\"attachment-medium\" alt=\"EXBC @ BNG (Posers) web promo\" /></a></p>\n",
      "parent": 208,
      "link": "http://www.synbydesign.com/wp/exbc-bng-posers-web-promo/exbc_live_promo_2015-06-26/",
      "date": "2015-06-22T17:29:42",
      "modified": "2015-06-22T17:29:50",
      "format": "standard",
      "slug": "exbc_live_promo_2015-06-26",
      "guid": "http://www.synbydesign.com/wp/wp-content/uploads/2015/06/exbc_live_promo_2015-06-26.png",
      "excerpt": null,
      "menu_order": 0,
      "comment_status": "open",
      "ping_status": "open",
      "sticky": false,
      "date_tz": "Etc/GMT-5",
      "date_gmt": "2015-06-22T22:29:42",
      "modified_tz": "Etc/GMT-5",
      "modified_gmt": "2015-06-22T22:29:50",
      "meta": {
        "links": {
          "self": "http://www.synbydesign.com/wp/wp-json/media/211",
          "author": "http://www.synbydesign.com/wp/wp-json/users/1",
          "collection": "http://www.synbydesign.com/wp/wp-json/media",
          "replies": "http://www.synbydesign.com/wp/wp-json/media/211/comments",
          "version-history": "http://www.synbydesign.com/wp/wp-json/media/211/revisions",
          "up": "http://www.synbydesign.com/wp/wp-json/media/208"
        }
      },
      "terms": [],
      "source": "http://www.synbydesign.com/wp/wp-content/uploads/2015/06/exbc_live_promo_2015-06-26.png",
      "is_image": true,
      "attachment_meta": {
        "width": 950,
        "height": 950,
        "file": "2015/06/exbc_live_promo_2015-06-26.png",
        "sizes": {
          "thumbnail": {
            "file": "exbc_live_promo_2015-06-26-150x150.png",
            "width": 150,
            "height": 150,
            "mime-type": "image/png",
            "url": "http://www.synbydesign.com/wp/wp-content/uploads/2015/06/exbc_live_promo_2015-06-26-150x150.png"
          },
          "medium": {
            "file": "exbc_live_promo_2015-06-26-300x300.png",
            "width": 300,
            "height": 300,
            "mime-type": "image/png",
            "url": "http://www.synbydesign.com/wp/wp-content/uploads/2015/06/exbc_live_promo_2015-06-26-300x300.png"
          },
          "post-thumbnail": {
            "file": "exbc_live_promo_2015-06-26-825x510.png",
            "width": 825,
            "height": 510,
            "mime-type": "image/png",
            "url": "http://www.synbydesign.com/wp/wp-content/uploads/2015/06/exbc_live_promo_2015-06-26-825x510.png"
          }
        },
        "image_meta": {
          "aperture": 0,
          "credit": "",
          "camera": "",
          "caption": "",
          "created_timestamp": 0,
          "copyright": "",
          "focal_length": 0,
          "iso": 0,
          "shutter_speed": 0,
          "title": "",
          "orientation": 0
        }
      }
    },
    "terms": {
      "category": [{
        "ID": 34,
        "name": "Flyers",
        "slug": "flyers",
        "description": "",
        "taxonomy": "category",
        "parent": null,
        "count": 14,
        "link": "http://www.synbydesign.com/wp/category/flyers/",
        "meta": {
          "links": {
            "collection": "http://www.synbydesign.com/wp/wp-json/taxonomies/category/terms",
            "self": "http://www.synbydesign.com/wp/wp-json/taxonomies/category/terms/34"
          }
        }
      }]
    }
  }, {
    "ID": 200,
    "title": "Deinfamous sticker",
    "status": "publish",
    "type": "post",
    "author": {
      "ID": 1,
      "username": "admin",
      "name": "admin",
      "first_name": "",
      "last_name": "",
      "nickname": "admin",
      "slug": "admin",
      "URL": "",
      "avatar": "http://1.gravatar.com/avatar/d00bed295c719c43bcbfb9171f69d994?s=96",
      "description": "",
      "registered": "2010-07-18T18:12:14+00:00",
      "meta": {
        "links": {
          "self": "http://www.synbydesign.com/wp/wp-json/users/1",
          "archives": "http://www.synbydesign.com/wp/wp-json/users/1/posts"
        }
      }
    },
    "content": "<p><img class=\"alignnone size-full wp-image-201\" src=\"http://www.synbydesign.com/wp/wp-content/uploads/2015/05/deinfamous-sticker.jpg\" alt=\"Illustration and sticker for Deinfamous\" width=\"1200\" height=\"1600\" /></p>\n",
    "parent": null,
    "link": "http://www.synbydesign.com/wp/deinfamous-sticker/",
    "date": "2015-05-31T09:11:17",
    "modified": "2015-05-31T09:17:07",
    "format": "standard",
    "slug": "deinfamous-sticker",
    "guid": "http://www.synbydesign.com/wp/?p=200",
    "excerpt": null,
    "menu_order": 0,
    "comment_status": "open",
    "ping_status": "open",
    "sticky": false,
    "date_tz": "Etc/GMT-5",
    "date_gmt": "2015-05-31T14:11:17",
    "modified_tz": "Etc/GMT-5",
    "modified_gmt": "2015-05-31T14:17:07",
    "meta": {
      "links": {
        "self": "http://www.synbydesign.com/wp/wp-json/posts/200",
        "author": "http://www.synbydesign.com/wp/wp-json/users/1",
        "collection": "http://www.synbydesign.com/wp/wp-json/posts",
        "replies": "http://www.synbydesign.com/wp/wp-json/posts/200/comments",
        "version-history": "http://www.synbydesign.com/wp/wp-json/posts/200/revisions"
      }
    },
    "featured_image": {
      "ID": 204,
      "title": "Cropped Illustration and sticker for Deinfamous",
      "status": "inherit",
      "type": "attachment",
      "author": {
        "ID": 1,
        "username": "admin",
        "name": "admin",
        "first_name": "",
        "last_name": "",
        "nickname": "admin",
        "slug": "admin",
        "URL": "",
        "avatar": "http://1.gravatar.com/avatar/d00bed295c719c43bcbfb9171f69d994?s=96",
        "description": "",
        "registered": "2010-07-18T18:12:14+00:00",
        "meta": {
          "links": {
            "self": "http://www.synbydesign.com/wp/wp-json/users/1",
            "archives": "http://www.synbydesign.com/wp/wp-json/users/1/posts"
          }
        }
      },
      "content": "<p class=\"attachment\"><a href='http://www.synbydesign.com/wp/wp-content/uploads/2015/05/deinfamous-sticker-cover-2.jpg'><img width=\"300\" height=\"300\" src=\"http://www.synbydesign.com/wp/wp-content/uploads/2015/05/deinfamous-sticker-cover-2-300x300.jpg\" class=\"attachment-medium\" alt=\"Cropped Illustration and sticker for Deinfamous\" /></a></p>\n",
      "parent": 200,
      "link": "http://www.synbydesign.com/wp/deinfamous-sticker/deinfamous-sticker-cover-2/",
      "date": "2015-05-31T09:16:48",
      "modified": "2015-05-31T09:17:02",
      "format": "standard",
      "slug": "deinfamous-sticker-cover-2",
      "guid": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/deinfamous-sticker-cover-2.jpg",
      "excerpt": null,
      "menu_order": 0,
      "comment_status": "open",
      "ping_status": "open",
      "sticky": false,
      "date_tz": "Etc/GMT-5",
      "date_gmt": "2015-05-31T14:16:48",
      "modified_tz": "Etc/GMT-5",
      "modified_gmt": "2015-05-31T14:17:02",
      "meta": {
        "links": {
          "self": "http://www.synbydesign.com/wp/wp-json/media/204",
          "author": "http://www.synbydesign.com/wp/wp-json/users/1",
          "collection": "http://www.synbydesign.com/wp/wp-json/media",
          "replies": "http://www.synbydesign.com/wp/wp-json/media/204/comments",
          "version-history": "http://www.synbydesign.com/wp/wp-json/media/204/revisions",
          "up": "http://www.synbydesign.com/wp/wp-json/media/200"
        }
      },
      "terms": [],
      "source": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/deinfamous-sticker-cover-2.jpg",
      "is_image": true,
      "attachment_meta": {
        "width": 1000,
        "height": 1000,
        "file": "2015/05/deinfamous-sticker-cover-2.jpg",
        "sizes": {
          "thumbnail": {
            "file": "deinfamous-sticker-cover-2-150x150.jpg",
            "width": 150,
            "height": 150,
            "mime-type": "image/jpeg",
            "url": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/deinfamous-sticker-cover-2-150x150.jpg"
          },
          "medium": {
            "file": "deinfamous-sticker-cover-2-300x300.jpg",
            "width": 300,
            "height": 300,
            "mime-type": "image/jpeg",
            "url": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/deinfamous-sticker-cover-2-300x300.jpg"
          },
          "post-thumbnail": {
            "file": "deinfamous-sticker-cover-2-825x510.jpg",
            "width": 825,
            "height": 510,
            "mime-type": "image/jpeg",
            "url": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/deinfamous-sticker-cover-2-825x510.jpg"
          }
        },
        "image_meta": {
          "aperture": 0,
          "credit": "",
          "camera": "",
          "caption": "",
          "created_timestamp": 0,
          "copyright": "",
          "focal_length": 0,
          "iso": 0,
          "shutter_speed": 0,
          "title": "",
          "orientation": 0
        }
      }
    },
    "terms": {
      "category": [{
        "ID": 31,
        "name": "Illustration",
        "slug": "illustration",
        "description": "",
        "taxonomy": "category",
        "parent": null,
        "count": 1,
        "link": "http://www.synbydesign.com/wp/category/illustration/",
        "meta": {
          "links": {
            "collection": "http://www.synbydesign.com/wp/wp-json/taxonomies/category/terms",
            "self": "http://www.synbydesign.com/wp/wp-json/taxonomies/category/terms/31"
          }
        }
      }]
    }
  }, {
    "ID": 53,
    "title": "Anarchostar",
    "status": "publish",
    "type": "post",
    "author": {
      "ID": 1,
      "username": "admin",
      "name": "admin",
      "first_name": "",
      "last_name": "",
      "nickname": "admin",
      "slug": "admin",
      "URL": "",
      "avatar": "http://1.gravatar.com/avatar/d00bed295c719c43bcbfb9171f69d994?s=96",
      "description": "",
      "registered": "2010-07-18T18:12:14+00:00",
      "meta": {
        "links": {
          "self": "http://www.synbydesign.com/wp/wp-json/users/1",
          "archives": "http://www.synbydesign.com/wp/wp-json/users/1/posts"
        }
      }
    },
    "content": "<p><a href=\"http://www.synbydesign.com/wp/wp-content/uploads/2015/02/anarchostar.jpg\"><img class=\"alignright size-full wp-image-57\" src=\"http://www.synbydesign.com/wp/wp-content/uploads/2015/02/anarchostar.jpg\" alt=\"anarchostar\" width=\"1400\" height=\"4704\" /></a></p>\n",
    "parent": null,
    "link": "http://www.synbydesign.com/wp/anarchostar/",
    "date": "2015-05-18T21:07:58",
    "modified": "2015-05-19T05:31:48",
    "format": "standard",
    "slug": "anarchostar",
    "guid": "http://www.synbydesign.com/wp/?p=53",
    "excerpt": null,
    "menu_order": 0,
    "comment_status": "open",
    "ping_status": "open",
    "sticky": false,
    "date_tz": "Etc/GMT-5",
    "date_gmt": "2015-05-19T02:07:58",
    "modified_tz": "Etc/GMT-5",
    "modified_gmt": "2015-05-19T10:31:48",
    "meta": {
      "links": {
        "self": "http://www.synbydesign.com/wp/wp-json/posts/53",
        "author": "http://www.synbydesign.com/wp/wp-json/users/1",
        "collection": "http://www.synbydesign.com/wp/wp-json/posts",
        "replies": "http://www.synbydesign.com/wp/wp-json/posts/53/comments",
        "version-history": "http://www.synbydesign.com/wp/wp-json/posts/53/revisions"
      }
    },
    "featured_image": {
      "ID": 71,
      "title": "Anarchostar",
      "status": "inherit",
      "type": "attachment",
      "author": {
        "ID": 1,
        "username": "admin",
        "name": "admin",
        "first_name": "",
        "last_name": "",
        "nickname": "admin",
        "slug": "admin",
        "URL": "",
        "avatar": "http://1.gravatar.com/avatar/d00bed295c719c43bcbfb9171f69d994?s=96",
        "description": "",
        "registered": "2010-07-18T18:12:14+00:00",
        "meta": {
          "links": {
            "self": "http://www.synbydesign.com/wp/wp-json/users/1",
            "archives": "http://www.synbydesign.com/wp/wp-json/users/1/posts"
          }
        }
      },
      "content": "<p class=\"attachment\"><a href='http://www.synbydesign.com/wp/wp-content/uploads/2015/02/anarchostar1.jpg'><img width=\"300\" height=\"200\" src=\"http://www.synbydesign.com/wp/wp-content/uploads/2015/02/anarchostar1-300x200.jpg\" class=\"attachment-medium\" alt=\"Anarchostar\" /></a></p>\n",
      "parent": 65,
      "link": "http://www.synbydesign.com/wp/catherine-anne-design/anarchostar-4/",
      "date": "2015-03-10T05:12:46",
      "modified": "2015-03-10T05:12:52",
      "format": "standard",
      "slug": "anarchostar-4",
      "guid": "http://www.synbydesign.com/wp/wp-content/uploads/2015/02/anarchostar1.jpg",
      "excerpt": null,
      "menu_order": 0,
      "comment_status": "open",
      "ping_status": "open",
      "sticky": false,
      "date_tz": "Etc/GMT-5",
      "date_gmt": "2015-03-10T10:12:46",
      "modified_tz": "Etc/GMT-5",
      "modified_gmt": "2015-03-10T10:12:52",
      "meta": {
        "links": {
          "self": "http://www.synbydesign.com/wp/wp-json/media/71",
          "author": "http://www.synbydesign.com/wp/wp-json/users/1",
          "collection": "http://www.synbydesign.com/wp/wp-json/media",
          "replies": "http://www.synbydesign.com/wp/wp-json/media/71/comments",
          "version-history": "http://www.synbydesign.com/wp/wp-json/media/71/revisions",
          "up": "http://www.synbydesign.com/wp/wp-json/media/65"
        }
      },
      "terms": [],
      "source": "http://www.synbydesign.com/wp/wp-content/uploads/2015/02/anarchostar1.jpg",
      "is_image": true,
      "attachment_meta": {
        "width": 440,
        "height": 293,
        "file": "2015/02/anarchostar1.jpg",
        "sizes": {
          "thumbnail": {
            "file": "anarchostar1-150x150.jpg",
            "width": 150,
            "height": 150,
            "mime-type": "image/jpeg",
            "ewww_image_optimizer": "Reduced by 7.5% (1,014&nbsp;B) - Previously Optimized",
            "url": "http://www.synbydesign.com/wp/wp-content/uploads/2015/02/anarchostar1-150x150.jpg"
          },
          "medium": {
            "file": "anarchostar1-300x200.jpg",
            "width": 300,
            "height": 200,
            "mime-type": "image/jpeg",
            "ewww_image_optimizer": "Reduced by 7.9% (2.4&nbsp;kB) - Previously Optimized",
            "url": "http://www.synbydesign.com/wp/wp-content/uploads/2015/02/anarchostar1-300x200.jpg"
          }
        },
        "image_meta": {
          "aperture": 0,
          "credit": "",
          "camera": "",
          "caption": "",
          "created_timestamp": 0,
          "copyright": "",
          "focal_length": 0,
          "iso": 0,
          "shutter_speed": 0,
          "title": "",
          "orientation": 1
        },
        "ewww_image_optimizer": "Reduced by 38.7% (34.9&nbsp;kB) - Previously Optimized"
      }
    },
    "terms": {
      "post_tag": [{
        "ID": 13,
        "name": "HTML5 Audio",
        "slug": "html5-audio",
        "description": "",
        "taxonomy": "post_tag",
        "parent": null,
        "count": 1,
        "link": "http://www.synbydesign.com/wp/tag/html5-audio/",
        "meta": {
          "links": {
            "collection": "http://www.synbydesign.com/wp/wp-json/taxonomies/post_tag/terms",
            "self": "http://www.synbydesign.com/wp/wp-json/taxonomies/post_tag/terms/13"
          }
        }
      }, {
        "ID": 15,
        "name": "Mobile/Responsive Design",
        "slug": "mobileresponsive-design",
        "description": "",
        "taxonomy": "post_tag",
        "parent": null,
        "count": 5,
        "link": "http://www.synbydesign.com/wp/tag/mobileresponsive-design/",
        "meta": {
          "links": {
            "collection": "http://www.synbydesign.com/wp/wp-json/taxonomies/post_tag/terms",
            "self": "http://www.synbydesign.com/wp/wp-json/taxonomies/post_tag/terms/15"
          }
        }
      }, {
        "ID": 22,
        "name": "Parallax",
        "slug": "parallax",
        "description": "",
        "taxonomy": "post_tag",
        "parent": null,
        "count": 1,
        "link": "http://www.synbydesign.com/wp/tag/parallax/",
        "meta": {
          "links": {
            "collection": "http://www.synbydesign.com/wp/wp-json/taxonomies/post_tag/terms",
            "self": "http://www.synbydesign.com/wp/wp-json/taxonomies/post_tag/terms/22"
          }
        }
      }, {
        "ID": 14,
        "name": "Wordpress Custom Theme",
        "slug": "wordpress-custom-theme",
        "description": "",
        "taxonomy": "post_tag",
        "parent": null,
        "count": 6,
        "link": "http://www.synbydesign.com/wp/tag/wordpress-custom-theme/",
        "meta": {
          "links": {
            "collection": "http://www.synbydesign.com/wp/wp-json/taxonomies/post_tag/terms",
            "self": "http://www.synbydesign.com/wp/wp-json/taxonomies/post_tag/terms/14"
          }
        }
      }, {
        "ID": 21,
        "name": "Wordpress Plugin",
        "slug": "wordpress-plugin",
        "description": "",
        "taxonomy": "post_tag",
        "parent": null,
        "count": 3,
        "link": "http://www.synbydesign.com/wp/tag/wordpress-plugin/",
        "meta": {
          "links": {
            "collection": "http://www.synbydesign.com/wp/wp-json/taxonomies/post_tag/terms",
            "self": "http://www.synbydesign.com/wp/wp-json/taxonomies/post_tag/terms/21"
          }
        }
      }],
      "category": [{
        "ID": 11,
        "name": "Web",
        "slug": "web",
        "description": "",
        "taxonomy": "category",
        "parent": null,
        "count": 8,
        "link": "http://www.synbydesign.com/wp/category/web/",
        "meta": {
          "links": {
            "collection": "http://www.synbydesign.com/wp/wp-json/taxonomies/category/terms",
            "self": "http://www.synbydesign.com/wp/wp-json/taxonomies/category/terms/11"
          }
        }
      }]
    }
  }, {
    "ID": 187,
    "title": "Just 4 Heads flyer",
    "status": "publish",
    "type": "post",
    "author": {
      "ID": 1,
      "username": "admin",
      "name": "admin",
      "first_name": "",
      "last_name": "",
      "nickname": "admin",
      "slug": "admin",
      "URL": "",
      "avatar": "http://1.gravatar.com/avatar/d00bed295c719c43bcbfb9171f69d994?s=96",
      "description": "",
      "registered": "2010-07-18T18:12:14+00:00",
      "meta": {
        "links": {
          "self": "http://www.synbydesign.com/wp/wp-json/users/1",
          "archives": "http://www.synbydesign.com/wp/wp-json/users/1/posts"
        }
      }
    },
    "content": "<p><img src=\"http://www.synbydesign.com/wp/wp-content/uploads/2015/05/Just4Heads-color.png\" alt=\"Just 4 Heads flyer\" width=\"1000\" height=\"1000\" class=\"alignnone size-full wp-image-188\" /></p>\n",
    "parent": null,
    "link": "http://www.synbydesign.com/wp/just-4-heads-flyer/",
    "date": "2015-05-17T18:31:07",
    "modified": "2015-05-17T18:31:07",
    "format": "standard",
    "slug": "just-4-heads-flyer",
    "guid": "http://www.synbydesign.com/wp/?p=187",
    "excerpt": null,
    "menu_order": 0,
    "comment_status": "open",
    "ping_status": "open",
    "sticky": false,
    "date_tz": "Etc/GMT-5",
    "date_gmt": "2015-05-17T23:31:07",
    "modified_tz": "Etc/GMT-5",
    "modified_gmt": "2015-05-17T23:31:07",
    "meta": {
      "links": {
        "self": "http://www.synbydesign.com/wp/wp-json/posts/187",
        "author": "http://www.synbydesign.com/wp/wp-json/users/1",
        "collection": "http://www.synbydesign.com/wp/wp-json/posts",
        "replies": "http://www.synbydesign.com/wp/wp-json/posts/187/comments",
        "version-history": "http://www.synbydesign.com/wp/wp-json/posts/187/revisions"
      }
    },
    "featured_image": {
      "ID": 188,
      "title": "Just 4 Heads flyer",
      "status": "inherit",
      "type": "attachment",
      "author": {
        "ID": 1,
        "username": "admin",
        "name": "admin",
        "first_name": "",
        "last_name": "",
        "nickname": "admin",
        "slug": "admin",
        "URL": "",
        "avatar": "http://1.gravatar.com/avatar/d00bed295c719c43bcbfb9171f69d994?s=96",
        "description": "",
        "registered": "2010-07-18T18:12:14+00:00",
        "meta": {
          "links": {
            "self": "http://www.synbydesign.com/wp/wp-json/users/1",
            "archives": "http://www.synbydesign.com/wp/wp-json/users/1/posts"
          }
        }
      },
      "content": "<p class=\"attachment\"><a href='http://www.synbydesign.com/wp/wp-content/uploads/2015/05/Just4Heads-color.png'><img width=\"300\" height=\"300\" src=\"http://www.synbydesign.com/wp/wp-content/uploads/2015/05/Just4Heads-color-300x300.png\" class=\"attachment-medium\" alt=\"Just 4 Heads flyer\" /></a></p>\n",
      "parent": 187,
      "link": "http://www.synbydesign.com/wp/just-4-heads-flyer/just4heads-color/",
      "date": "2015-05-17T18:30:44",
      "modified": "2015-05-17T18:30:58",
      "format": "standard",
      "slug": "just4heads-color",
      "guid": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/Just4Heads-color.png",
      "excerpt": null,
      "menu_order": 0,
      "comment_status": "open",
      "ping_status": "open",
      "sticky": false,
      "date_tz": "Etc/GMT-5",
      "date_gmt": "2015-05-17T23:30:44",
      "modified_tz": "Etc/GMT-5",
      "modified_gmt": "2015-05-17T23:30:58",
      "meta": {
        "links": {
          "self": "http://www.synbydesign.com/wp/wp-json/media/188",
          "author": "http://www.synbydesign.com/wp/wp-json/users/1",
          "collection": "http://www.synbydesign.com/wp/wp-json/media",
          "replies": "http://www.synbydesign.com/wp/wp-json/media/188/comments",
          "version-history": "http://www.synbydesign.com/wp/wp-json/media/188/revisions",
          "up": "http://www.synbydesign.com/wp/wp-json/media/187"
        }
      },
      "terms": [],
      "source": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/Just4Heads-color.png",
      "is_image": true,
      "attachment_meta": {
        "width": 1000,
        "height": 1000,
        "file": "2015/05/Just4Heads-color.png",
        "sizes": {
          "thumbnail": {
            "file": "Just4Heads-color-150x150.png",
            "width": 150,
            "height": 150,
            "mime-type": "image/png",
            "ewww_image_optimizer": "Reduced by 30.2% (2.7&nbsp;kB)",
            "url": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/Just4Heads-color-150x150.png"
          },
          "medium": {
            "file": "Just4Heads-color-300x300.png",
            "width": 300,
            "height": 300,
            "mime-type": "image/png",
            "ewww_image_optimizer": "Reduced by 39.3% (9.6&nbsp;kB)",
            "url": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/Just4Heads-color-300x300.png"
          },
          "post-thumbnail": {
            "file": "Just4Heads-color-825x510.png",
            "width": 825,
            "height": 510,
            "mime-type": "image/png",
            "ewww_image_optimizer": "Reduced by 28.3% (52.6&nbsp;kB)",
            "url": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/Just4Heads-color-825x510.png"
          }
        },
        "image_meta": {
          "aperture": 0,
          "credit": "",
          "camera": "",
          "caption": "",
          "created_timestamp": 0,
          "copyright": "",
          "focal_length": 0,
          "iso": 0,
          "shutter_speed": 0,
          "title": "",
          "orientation": 0
        },
        "ewww_image_optimizer": "Reduced by 2.8% (921.0&nbsp;B)"
      }
    },
    "terms": {
      "category": [{
        "ID": 34,
        "name": "Flyers",
        "slug": "flyers",
        "description": "",
        "taxonomy": "category",
        "parent": null,
        "count": 14,
        "link": "http://www.synbydesign.com/wp/category/flyers/",
        "meta": {
          "links": {
            "collection": "http://www.synbydesign.com/wp/wp-json/taxonomies/category/terms",
            "self": "http://www.synbydesign.com/wp/wp-json/taxonomies/category/terms/34"
          }
        }
      }]
    }
  }, {
    "ID": 170,
    "title": "Petrol V.I.V.I.K flyer",
    "status": "publish",
    "type": "post",
    "author": {
      "ID": 1,
      "username": "admin",
      "name": "admin",
      "first_name": "",
      "last_name": "",
      "nickname": "admin",
      "slug": "admin",
      "URL": "",
      "avatar": "http://1.gravatar.com/avatar/d00bed295c719c43bcbfb9171f69d994?s=96",
      "description": "",
      "registered": "2010-07-18T18:12:14+00:00",
      "meta": {
        "links": {
          "self": "http://www.synbydesign.com/wp/wp-json/users/1",
          "archives": "http://www.synbydesign.com/wp/wp-json/users/1/posts"
        }
      }
    },
    "content": "<p><img src=\"http://www.synbydesign.com/wp/wp-content/uploads/2015/05/petrol-vivek.jpg\" alt=\"petrol-vivek\" width=\"1000\" height=\"1000\" class=\"alignnone size-full wp-image-171\" /></p>\n",
    "parent": null,
    "link": "http://www.synbydesign.com/wp/petrol-v-i-v-i-k-flyer/",
    "date": "2015-05-17T17:48:34",
    "modified": "2015-05-17T17:48:34",
    "format": "standard",
    "slug": "petrol-v-i-v-i-k-flyer",
    "guid": "http://www.synbydesign.com/wp/?p=170",
    "excerpt": null,
    "menu_order": 0,
    "comment_status": "open",
    "ping_status": "open",
    "sticky": false,
    "date_tz": "Etc/GMT-5",
    "date_gmt": "2015-05-17T22:48:34",
    "modified_tz": "Etc/GMT-5",
    "modified_gmt": "2015-05-17T22:48:34",
    "meta": {
      "links": {
        "self": "http://www.synbydesign.com/wp/wp-json/posts/170",
        "author": "http://www.synbydesign.com/wp/wp-json/users/1",
        "collection": "http://www.synbydesign.com/wp/wp-json/posts",
        "replies": "http://www.synbydesign.com/wp/wp-json/posts/170/comments",
        "version-history": "http://www.synbydesign.com/wp/wp-json/posts/170/revisions"
      }
    },
    "featured_image": {
      "ID": 171,
      "title": "Petrol V.I.V.I.K flyer",
      "status": "inherit",
      "type": "attachment",
      "author": {
        "ID": 1,
        "username": "admin",
        "name": "admin",
        "first_name": "",
        "last_name": "",
        "nickname": "admin",
        "slug": "admin",
        "URL": "",
        "avatar": "http://1.gravatar.com/avatar/d00bed295c719c43bcbfb9171f69d994?s=96",
        "description": "",
        "registered": "2010-07-18T18:12:14+00:00",
        "meta": {
          "links": {
            "self": "http://www.synbydesign.com/wp/wp-json/users/1",
            "archives": "http://www.synbydesign.com/wp/wp-json/users/1/posts"
          }
        }
      },
      "content": "<p class=\"attachment\"><a href='http://www.synbydesign.com/wp/wp-content/uploads/2015/05/petrol-vivek.jpg'><img width=\"300\" height=\"300\" src=\"http://www.synbydesign.com/wp/wp-content/uploads/2015/05/petrol-vivek-300x300.jpg\" class=\"attachment-medium\" alt=\"Petrol V.I.V.I.K flyer\" /></a></p>\n",
      "parent": 170,
      "link": "http://www.synbydesign.com/wp/petrol-v-i-v-i-k-flyer/petrol-vivek/",
      "date": "2015-05-17T17:48:14",
      "modified": "2015-05-17T17:48:30",
      "format": "standard",
      "slug": "petrol-vivek",
      "guid": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/petrol-vivek.jpg",
      "excerpt": null,
      "menu_order": 0,
      "comment_status": "open",
      "ping_status": "open",
      "sticky": false,
      "date_tz": "Etc/GMT-5",
      "date_gmt": "2015-05-17T22:48:14",
      "modified_tz": "Etc/GMT-5",
      "modified_gmt": "2015-05-17T22:48:30",
      "meta": {
        "links": {
          "self": "http://www.synbydesign.com/wp/wp-json/media/171",
          "author": "http://www.synbydesign.com/wp/wp-json/users/1",
          "collection": "http://www.synbydesign.com/wp/wp-json/media",
          "replies": "http://www.synbydesign.com/wp/wp-json/media/171/comments",
          "version-history": "http://www.synbydesign.com/wp/wp-json/media/171/revisions",
          "up": "http://www.synbydesign.com/wp/wp-json/media/170"
        }
      },
      "terms": [],
      "source": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/petrol-vivek.jpg",
      "is_image": true,
      "attachment_meta": {
        "width": 1000,
        "height": 1000,
        "file": "2015/05/petrol-vivek.jpg",
        "sizes": {
          "thumbnail": {
            "file": "petrol-vivek-150x150.jpg",
            "width": 150,
            "height": 150,
            "mime-type": "image/jpeg",
            "ewww_image_optimizer": "Reduced by 8.9% (779.0&nbsp;B)",
            "url": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/petrol-vivek-150x150.jpg"
          },
          "medium": {
            "file": "petrol-vivek-300x300.jpg",
            "width": 300,
            "height": 300,
            "mime-type": "image/jpeg",
            "ewww_image_optimizer": "Reduced by 6.5% (1.5&nbsp;kB)",
            "url": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/petrol-vivek-300x300.jpg"
          },
          "post-thumbnail": {
            "file": "petrol-vivek-825x510.jpg",
            "width": 825,
            "height": 510,
            "mime-type": "image/jpeg",
            "ewww_image_optimizer": "Reduced by 5.4% (4.4&nbsp;kB)",
            "url": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/petrol-vivek-825x510.jpg"
          }
        },
        "image_meta": {
          "aperture": 0,
          "credit": "",
          "camera": "",
          "caption": "",
          "created_timestamp": 0,
          "copyright": "",
          "focal_length": 0,
          "iso": 0,
          "shutter_speed": 0,
          "title": "",
          "orientation": 0
        },
        "ewww_image_optimizer": "No savings"
      }
    },
    "terms": {
      "category": [{
        "ID": 34,
        "name": "Flyers",
        "slug": "flyers",
        "description": "",
        "taxonomy": "category",
        "parent": null,
        "count": 14,
        "link": "http://www.synbydesign.com/wp/category/flyers/",
        "meta": {
          "links": {
            "collection": "http://www.synbydesign.com/wp/wp-json/taxonomies/category/terms",
            "self": "http://www.synbydesign.com/wp/wp-json/taxonomies/category/terms/34"
          }
        }
      }]
    }
  }, {
    "ID": 167,
    "title": "EXBC web promo",
    "status": "publish",
    "type": "post",
    "author": {
      "ID": 1,
      "username": "admin",
      "name": "admin",
      "first_name": "",
      "last_name": "",
      "nickname": "admin",
      "slug": "admin",
      "URL": "",
      "avatar": "http://1.gravatar.com/avatar/d00bed295c719c43bcbfb9171f69d994?s=96",
      "description": "",
      "registered": "2010-07-18T18:12:14+00:00",
      "meta": {
        "links": {
          "self": "http://www.synbydesign.com/wp/wp-json/users/1",
          "archives": "http://www.synbydesign.com/wp/wp-json/users/1/posts"
        }
      }
    },
    "content": "<p><img src=\"http://www.synbydesign.com/wp/wp-content/uploads/2015/05/exbc-promo.jpg\" alt=\"EXBC Web Promo\" width=\"800\" height=\"800\" class=\"alignnone size-full wp-image-168\" /></p>\n",
    "parent": null,
    "link": "http://www.synbydesign.com/wp/exbc-web-promo/",
    "date": "2015-05-17T17:47:52",
    "modified": "2015-05-17T18:27:49",
    "format": "standard",
    "slug": "exbc-web-promo",
    "guid": "http://www.synbydesign.com/wp/?p=167",
    "excerpt": null,
    "menu_order": 0,
    "comment_status": "open",
    "ping_status": "open",
    "sticky": false,
    "date_tz": "Etc/GMT-5",
    "date_gmt": "2015-05-17T22:47:52",
    "modified_tz": "Etc/GMT-5",
    "modified_gmt": "2015-05-17T23:27:49",
    "meta": {
      "links": {
        "self": "http://www.synbydesign.com/wp/wp-json/posts/167",
        "author": "http://www.synbydesign.com/wp/wp-json/users/1",
        "collection": "http://www.synbydesign.com/wp/wp-json/posts",
        "replies": "http://www.synbydesign.com/wp/wp-json/posts/167/comments",
        "version-history": "http://www.synbydesign.com/wp/wp-json/posts/167/revisions"
      }
    },
    "featured_image": {
      "ID": 168,
      "title": "EXBC Web Promo",
      "status": "inherit",
      "type": "attachment",
      "author": {
        "ID": 1,
        "username": "admin",
        "name": "admin",
        "first_name": "",
        "last_name": "",
        "nickname": "admin",
        "slug": "admin",
        "URL": "",
        "avatar": "http://1.gravatar.com/avatar/d00bed295c719c43bcbfb9171f69d994?s=96",
        "description": "",
        "registered": "2010-07-18T18:12:14+00:00",
        "meta": {
          "links": {
            "self": "http://www.synbydesign.com/wp/wp-json/users/1",
            "archives": "http://www.synbydesign.com/wp/wp-json/users/1/posts"
          }
        }
      },
      "content": "<p class=\"attachment\"><a href='http://www.synbydesign.com/wp/wp-content/uploads/2015/05/exbc-promo.jpg'><img width=\"300\" height=\"300\" src=\"http://www.synbydesign.com/wp/wp-content/uploads/2015/05/exbc-promo-300x300.jpg\" class=\"attachment-medium\" alt=\"EXBC Web Promo\" /></a></p>\n",
      "parent": 167,
      "link": "http://www.synbydesign.com/wp/exbc-web-promo/exbc-promo/",
      "date": "2015-05-17T17:47:39",
      "modified": "2015-05-17T17:47:45",
      "format": "standard",
      "slug": "exbc-promo",
      "guid": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/exbc-promo.jpg",
      "excerpt": null,
      "menu_order": 0,
      "comment_status": "open",
      "ping_status": "open",
      "sticky": false,
      "date_tz": "Etc/GMT-5",
      "date_gmt": "2015-05-17T22:47:39",
      "modified_tz": "Etc/GMT-5",
      "modified_gmt": "2015-05-17T22:47:45",
      "meta": {
        "links": {
          "self": "http://www.synbydesign.com/wp/wp-json/media/168",
          "author": "http://www.synbydesign.com/wp/wp-json/users/1",
          "collection": "http://www.synbydesign.com/wp/wp-json/media",
          "replies": "http://www.synbydesign.com/wp/wp-json/media/168/comments",
          "version-history": "http://www.synbydesign.com/wp/wp-json/media/168/revisions",
          "up": "http://www.synbydesign.com/wp/wp-json/media/167"
        }
      },
      "terms": [],
      "source": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/exbc-promo.jpg",
      "is_image": true,
      "attachment_meta": {
        "width": 800,
        "height": 800,
        "file": "2015/05/exbc-promo.jpg",
        "sizes": {
          "thumbnail": {
            "file": "exbc-promo-150x150.jpg",
            "width": 150,
            "height": 150,
            "mime-type": "image/jpeg",
            "ewww_image_optimizer": "Reduced by 11.5% (766.0&nbsp;B)",
            "url": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/exbc-promo-150x150.jpg"
          },
          "medium": {
            "file": "exbc-promo-300x300.jpg",
            "width": 300,
            "height": 300,
            "mime-type": "image/jpeg",
            "ewww_image_optimizer": "Reduced by 11.2% (2.0&nbsp;kB)",
            "url": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/exbc-promo-300x300.jpg"
          },
          "post-thumbnail": {
            "file": "exbc-promo-800x510.jpg",
            "width": 800,
            "height": 510,
            "mime-type": "image/jpeg",
            "ewww_image_optimizer": "Reduced by 11.7% (6.6&nbsp;kB)",
            "url": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/exbc-promo-800x510.jpg"
          }
        },
        "image_meta": {
          "aperture": 0,
          "credit": "",
          "camera": "",
          "caption": "",
          "created_timestamp": 0,
          "copyright": "",
          "focal_length": 0,
          "iso": 0,
          "shutter_speed": 0,
          "title": "",
          "orientation": 0
        },
        "ewww_image_optimizer": "No savings"
      }
    },
    "terms": {
      "category": [{
        "ID": 34,
        "name": "Flyers",
        "slug": "flyers",
        "description": "",
        "taxonomy": "category",
        "parent": null,
        "count": 14,
        "link": "http://www.synbydesign.com/wp/category/flyers/",
        "meta": {
          "links": {
            "collection": "http://www.synbydesign.com/wp/wp-json/taxonomies/category/terms",
            "self": "http://www.synbydesign.com/wp/wp-json/taxonomies/category/terms/34"
          }
        }
      }]
    }
  }, {
    "ID": 164,
    "title": "Petrol Distal flyer",
    "status": "publish",
    "type": "post",
    "author": {
      "ID": 1,
      "username": "admin",
      "name": "admin",
      "first_name": "",
      "last_name": "",
      "nickname": "admin",
      "slug": "admin",
      "URL": "",
      "avatar": "http://1.gravatar.com/avatar/d00bed295c719c43bcbfb9171f69d994?s=96",
      "description": "",
      "registered": "2010-07-18T18:12:14+00:00",
      "meta": {
        "links": {
          "self": "http://www.synbydesign.com/wp/wp-json/users/1",
          "archives": "http://www.synbydesign.com/wp/wp-json/users/1/posts"
        }
      }
    },
    "content": "<p><img src=\"http://www.synbydesign.com/wp/wp-content/uploads/2015/05/petrol-distal.jpg\" alt=\"Petrol Distal flyer\" width=\"1000\" height=\"1000\" class=\"alignnone size-full wp-image-165\" /></p>\n",
    "parent": null,
    "link": "http://www.synbydesign.com/wp/petrol-distal-flyer/",
    "date": "2015-05-17T17:47:25",
    "modified": "2015-05-17T17:47:25",
    "format": "standard",
    "slug": "petrol-distal-flyer",
    "guid": "http://www.synbydesign.com/wp/?p=164",
    "excerpt": null,
    "menu_order": 0,
    "comment_status": "open",
    "ping_status": "open",
    "sticky": false,
    "date_tz": "Etc/GMT-5",
    "date_gmt": "2015-05-17T22:47:25",
    "modified_tz": "Etc/GMT-5",
    "modified_gmt": "2015-05-17T22:47:25",
    "meta": {
      "links": {
        "self": "http://www.synbydesign.com/wp/wp-json/posts/164",
        "author": "http://www.synbydesign.com/wp/wp-json/users/1",
        "collection": "http://www.synbydesign.com/wp/wp-json/posts",
        "replies": "http://www.synbydesign.com/wp/wp-json/posts/164/comments",
        "version-history": "http://www.synbydesign.com/wp/wp-json/posts/164/revisions"
      }
    },
    "featured_image": {
      "ID": 165,
      "title": "Petrol Distal flyer",
      "status": "inherit",
      "type": "attachment",
      "author": {
        "ID": 1,
        "username": "admin",
        "name": "admin",
        "first_name": "",
        "last_name": "",
        "nickname": "admin",
        "slug": "admin",
        "URL": "",
        "avatar": "http://1.gravatar.com/avatar/d00bed295c719c43bcbfb9171f69d994?s=96",
        "description": "",
        "registered": "2010-07-18T18:12:14+00:00",
        "meta": {
          "links": {
            "self": "http://www.synbydesign.com/wp/wp-json/users/1",
            "archives": "http://www.synbydesign.com/wp/wp-json/users/1/posts"
          }
        }
      },
      "content": "<p class=\"attachment\"><a href='http://www.synbydesign.com/wp/wp-content/uploads/2015/05/petrol-distal.jpg'><img width=\"300\" height=\"300\" src=\"http://www.synbydesign.com/wp/wp-content/uploads/2015/05/petrol-distal-300x300.jpg\" class=\"attachment-medium\" alt=\"Petrol Distal flyer\" /></a></p>\n",
      "parent": 164,
      "link": "http://www.synbydesign.com/wp/petrol-distal-flyer/petrol-distal/",
      "date": "2015-05-17T17:47:09",
      "modified": "2015-05-17T17:47:18",
      "format": "standard",
      "slug": "petrol-distal",
      "guid": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/petrol-distal.jpg",
      "excerpt": null,
      "menu_order": 0,
      "comment_status": "open",
      "ping_status": "open",
      "sticky": false,
      "date_tz": "Etc/GMT-5",
      "date_gmt": "2015-05-17T22:47:09",
      "modified_tz": "Etc/GMT-5",
      "modified_gmt": "2015-05-17T22:47:18",
      "meta": {
        "links": {
          "self": "http://www.synbydesign.com/wp/wp-json/media/165",
          "author": "http://www.synbydesign.com/wp/wp-json/users/1",
          "collection": "http://www.synbydesign.com/wp/wp-json/media",
          "replies": "http://www.synbydesign.com/wp/wp-json/media/165/comments",
          "version-history": "http://www.synbydesign.com/wp/wp-json/media/165/revisions",
          "up": "http://www.synbydesign.com/wp/wp-json/media/164"
        }
      },
      "terms": [],
      "source": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/petrol-distal.jpg",
      "is_image": true,
      "attachment_meta": {
        "width": 1000,
        "height": 1000,
        "file": "2015/05/petrol-distal.jpg",
        "sizes": {
          "thumbnail": {
            "file": "petrol-distal-150x150.jpg",
            "width": 150,
            "height": 150,
            "mime-type": "image/jpeg",
            "ewww_image_optimizer": "Reduced by 8.4% (795.0&nbsp;B)",
            "url": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/petrol-distal-150x150.jpg"
          },
          "medium": {
            "file": "petrol-distal-300x300.jpg",
            "width": 300,
            "height": 300,
            "mime-type": "image/jpeg",
            "ewww_image_optimizer": "Reduced by 8.2% (2.2&nbsp;kB)",
            "url": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/petrol-distal-300x300.jpg"
          },
          "post-thumbnail": {
            "file": "petrol-distal-825x510.jpg",
            "width": 825,
            "height": 510,
            "mime-type": "image/jpeg",
            "ewww_image_optimizer": "Reduced by 9.0% (8.2&nbsp;kB)",
            "url": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/petrol-distal-825x510.jpg"
          }
        },
        "image_meta": {
          "aperture": 0,
          "credit": "",
          "camera": "",
          "caption": "",
          "created_timestamp": 0,
          "copyright": "",
          "focal_length": 0,
          "iso": 0,
          "shutter_speed": 0,
          "title": "",
          "orientation": 0
        },
        "ewww_image_optimizer": "No savings"
      }
    },
    "terms": {
      "category": [{
        "ID": 34,
        "name": "Flyers",
        "slug": "flyers",
        "description": "",
        "taxonomy": "category",
        "parent": null,
        "count": 14,
        "link": "http://www.synbydesign.com/wp/category/flyers/",
        "meta": {
          "links": {
            "collection": "http://www.synbydesign.com/wp/wp-json/taxonomies/category/terms",
            "self": "http://www.synbydesign.com/wp/wp-json/taxonomies/category/terms/34"
          }
        }
      }]
    }
  }, {
    "ID": 161,
    "title": "Petrol Goth-Trad flyer",
    "status": "publish",
    "type": "post",
    "author": {
      "ID": 1,
      "username": "admin",
      "name": "admin",
      "first_name": "",
      "last_name": "",
      "nickname": "admin",
      "slug": "admin",
      "URL": "",
      "avatar": "http://1.gravatar.com/avatar/d00bed295c719c43bcbfb9171f69d994?s=96",
      "description": "",
      "registered": "2010-07-18T18:12:14+00:00",
      "meta": {
        "links": {
          "self": "http://www.synbydesign.com/wp/wp-json/users/1",
          "archives": "http://www.synbydesign.com/wp/wp-json/users/1/posts"
        }
      }
    },
    "content": "<p><img src=\"http://www.synbydesign.com/wp/wp-content/uploads/2015/05/petrol-gothtrad.jpg\" alt=\"Petrol Goth-Trad flyer\" width=\"1000\" height=\"1000\" class=\"alignnone size-full wp-image-162\" /></p>\n",
    "parent": null,
    "link": "http://www.synbydesign.com/wp/petrol-goth-trad-flyer/",
    "date": "2015-05-17T17:46:51",
    "modified": "2015-05-17T17:46:51",
    "format": "standard",
    "slug": "petrol-goth-trad-flyer",
    "guid": "http://www.synbydesign.com/wp/?p=161",
    "excerpt": null,
    "menu_order": 0,
    "comment_status": "open",
    "ping_status": "open",
    "sticky": false,
    "date_tz": "Etc/GMT-5",
    "date_gmt": "2015-05-17T22:46:51",
    "modified_tz": "Etc/GMT-5",
    "modified_gmt": "2015-05-17T22:46:51",
    "meta": {
      "links": {
        "self": "http://www.synbydesign.com/wp/wp-json/posts/161",
        "author": "http://www.synbydesign.com/wp/wp-json/users/1",
        "collection": "http://www.synbydesign.com/wp/wp-json/posts",
        "replies": "http://www.synbydesign.com/wp/wp-json/posts/161/comments",
        "version-history": "http://www.synbydesign.com/wp/wp-json/posts/161/revisions"
      }
    },
    "featured_image": {
      "ID": 162,
      "title": "Petrol Goth-Trad flyer",
      "status": "inherit",
      "type": "attachment",
      "author": {
        "ID": 1,
        "username": "admin",
        "name": "admin",
        "first_name": "",
        "last_name": "",
        "nickname": "admin",
        "slug": "admin",
        "URL": "",
        "avatar": "http://1.gravatar.com/avatar/d00bed295c719c43bcbfb9171f69d994?s=96",
        "description": "",
        "registered": "2010-07-18T18:12:14+00:00",
        "meta": {
          "links": {
            "self": "http://www.synbydesign.com/wp/wp-json/users/1",
            "archives": "http://www.synbydesign.com/wp/wp-json/users/1/posts"
          }
        }
      },
      "content": "<p class=\"attachment\"><a href='http://www.synbydesign.com/wp/wp-content/uploads/2015/05/petrol-gothtrad.jpg'><img width=\"300\" height=\"300\" src=\"http://www.synbydesign.com/wp/wp-content/uploads/2015/05/petrol-gothtrad-300x300.jpg\" class=\"attachment-medium\" alt=\"Petrol Goth-Trad flyer\" /></a></p>\n",
      "parent": 161,
      "link": "http://www.synbydesign.com/wp/petrol-goth-trad-flyer/petrol-gothtrad/",
      "date": "2015-05-17T17:46:30",
      "modified": "2015-05-17T17:46:39",
      "format": "standard",
      "slug": "petrol-gothtrad",
      "guid": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/petrol-gothtrad.jpg",
      "excerpt": null,
      "menu_order": 0,
      "comment_status": "open",
      "ping_status": "open",
      "sticky": false,
      "date_tz": "Etc/GMT-5",
      "date_gmt": "2015-05-17T22:46:30",
      "modified_tz": "Etc/GMT-5",
      "modified_gmt": "2015-05-17T22:46:39",
      "meta": {
        "links": {
          "self": "http://www.synbydesign.com/wp/wp-json/media/162",
          "author": "http://www.synbydesign.com/wp/wp-json/users/1",
          "collection": "http://www.synbydesign.com/wp/wp-json/media",
          "replies": "http://www.synbydesign.com/wp/wp-json/media/162/comments",
          "version-history": "http://www.synbydesign.com/wp/wp-json/media/162/revisions",
          "up": "http://www.synbydesign.com/wp/wp-json/media/161"
        }
      },
      "terms": [],
      "source": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/petrol-gothtrad.jpg",
      "is_image": true,
      "attachment_meta": {
        "width": 1000,
        "height": 1000,
        "file": "2015/05/petrol-gothtrad.jpg",
        "sizes": {
          "thumbnail": {
            "file": "petrol-gothtrad-150x150.jpg",
            "width": 150,
            "height": 150,
            "mime-type": "image/jpeg",
            "ewww_image_optimizer": "Reduced by 14.3% (1.2&nbsp;kB)",
            "url": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/petrol-gothtrad-150x150.jpg"
          },
          "medium": {
            "file": "petrol-gothtrad-300x300.jpg",
            "width": 300,
            "height": 300,
            "mime-type": "image/jpeg",
            "ewww_image_optimizer": "Reduced by 14.5% (3.4&nbsp;kB)",
            "url": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/petrol-gothtrad-300x300.jpg"
          },
          "post-thumbnail": {
            "file": "petrol-gothtrad-825x510.jpg",
            "width": 825,
            "height": 510,
            "mime-type": "image/jpeg",
            "ewww_image_optimizer": "Reduced by 17.5% (12.3&nbsp;kB)",
            "url": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/petrol-gothtrad-825x510.jpg"
          }
        },
        "image_meta": {
          "aperture": 0,
          "credit": "",
          "camera": "",
          "caption": "",
          "created_timestamp": 0,
          "copyright": "",
          "focal_length": 0,
          "iso": 0,
          "shutter_speed": 0,
          "title": "",
          "orientation": 0
        },
        "ewww_image_optimizer": "No savings"
      }
    },
    "terms": {
      "category": [{
        "ID": 34,
        "name": "Flyers",
        "slug": "flyers",
        "description": "",
        "taxonomy": "category",
        "parent": null,
        "count": 14,
        "link": "http://www.synbydesign.com/wp/category/flyers/",
        "meta": {
          "links": {
            "collection": "http://www.synbydesign.com/wp/wp-json/taxonomies/category/terms",
            "self": "http://www.synbydesign.com/wp/wp-json/taxonomies/category/terms/34"
          }
        }
      }]
    }
  }, {
    "ID": 158,
    "title": "Deep Foc.us Takeover at Sonic Butter flyer",
    "status": "publish",
    "type": "post",
    "author": {
      "ID": 1,
      "username": "admin",
      "name": "admin",
      "first_name": "",
      "last_name": "",
      "nickname": "admin",
      "slug": "admin",
      "URL": "",
      "avatar": "http://1.gravatar.com/avatar/d00bed295c719c43bcbfb9171f69d994?s=96",
      "description": "",
      "registered": "2010-07-18T18:12:14+00:00",
      "meta": {
        "links": {
          "self": "http://www.synbydesign.com/wp/wp-json/users/1",
          "archives": "http://www.synbydesign.com/wp/wp-json/users/1/posts"
        }
      }
    },
    "content": "<p><img src=\"http://www.synbydesign.com/wp/wp-content/uploads/2015/05/deep-focus-sonic-butter-takeover.jpg\" alt=\"Deep Foc.us Takeover at Sonic Butter flyer\" width=\"600\" height=\"600\" class=\"alignnone size-full wp-image-159\" /></p>\n",
    "parent": null,
    "link": "http://www.synbydesign.com/wp/deep-foc-us-takeover-at-sonic-butter-flyer/",
    "date": "2015-05-17T17:45:57",
    "modified": "2015-05-17T17:45:57",
    "format": "standard",
    "slug": "deep-foc-us-takeover-at-sonic-butter-flyer",
    "guid": "http://www.synbydesign.com/wp/?p=158",
    "excerpt": null,
    "menu_order": 0,
    "comment_status": "open",
    "ping_status": "open",
    "sticky": false,
    "date_tz": "Etc/GMT-5",
    "date_gmt": "2015-05-17T22:45:57",
    "modified_tz": "Etc/GMT-5",
    "modified_gmt": "2015-05-17T22:45:57",
    "meta": {
      "links": {
        "self": "http://www.synbydesign.com/wp/wp-json/posts/158",
        "author": "http://www.synbydesign.com/wp/wp-json/users/1",
        "collection": "http://www.synbydesign.com/wp/wp-json/posts",
        "replies": "http://www.synbydesign.com/wp/wp-json/posts/158/comments",
        "version-history": "http://www.synbydesign.com/wp/wp-json/posts/158/revisions"
      }
    },
    "featured_image": {
      "ID": 159,
      "title": "Deep Foc.us Takeover at Sonic Butter flyer",
      "status": "inherit",
      "type": "attachment",
      "author": {
        "ID": 1,
        "username": "admin",
        "name": "admin",
        "first_name": "",
        "last_name": "",
        "nickname": "admin",
        "slug": "admin",
        "URL": "",
        "avatar": "http://1.gravatar.com/avatar/d00bed295c719c43bcbfb9171f69d994?s=96",
        "description": "",
        "registered": "2010-07-18T18:12:14+00:00",
        "meta": {
          "links": {
            "self": "http://www.synbydesign.com/wp/wp-json/users/1",
            "archives": "http://www.synbydesign.com/wp/wp-json/users/1/posts"
          }
        }
      },
      "content": "<p class=\"attachment\"><a href='http://www.synbydesign.com/wp/wp-content/uploads/2015/05/deep-focus-sonic-butter-takeover.jpg'><img width=\"300\" height=\"300\" src=\"http://www.synbydesign.com/wp/wp-content/uploads/2015/05/deep-focus-sonic-butter-takeover-300x300.jpg\" class=\"attachment-medium\" alt=\"Deep Foc.us Takeover at Sonic Butter flyer\" /></a></p>\n",
      "parent": 158,
      "link": "http://www.synbydesign.com/wp/deep-foc-us-takeover-at-sonic-butter-flyer/deep-focus-sonic-butter-takeover/",
      "date": "2015-05-17T17:45:37",
      "modified": "2015-05-17T17:45:48",
      "format": "standard",
      "slug": "deep-focus-sonic-butter-takeover",
      "guid": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/deep-focus-sonic-butter-takeover.jpg",
      "excerpt": null,
      "menu_order": 0,
      "comment_status": "open",
      "ping_status": "open",
      "sticky": false,
      "date_tz": "Etc/GMT-5",
      "date_gmt": "2015-05-17T22:45:37",
      "modified_tz": "Etc/GMT-5",
      "modified_gmt": "2015-05-17T22:45:48",
      "meta": {
        "links": {
          "self": "http://www.synbydesign.com/wp/wp-json/media/159",
          "author": "http://www.synbydesign.com/wp/wp-json/users/1",
          "collection": "http://www.synbydesign.com/wp/wp-json/media",
          "replies": "http://www.synbydesign.com/wp/wp-json/media/159/comments",
          "version-history": "http://www.synbydesign.com/wp/wp-json/media/159/revisions",
          "up": "http://www.synbydesign.com/wp/wp-json/media/158"
        }
      },
      "terms": [],
      "source": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/deep-focus-sonic-butter-takeover.jpg",
      "is_image": true,
      "attachment_meta": {
        "width": 600,
        "height": 600,
        "file": "2015/05/deep-focus-sonic-butter-takeover.jpg",
        "sizes": {
          "thumbnail": {
            "file": "deep-focus-sonic-butter-takeover-150x150.jpg",
            "width": 150,
            "height": 150,
            "mime-type": "image/jpeg",
            "ewww_image_optimizer": "Reduced by 4.6% (494.0&nbsp;B)",
            "url": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/deep-focus-sonic-butter-takeover-150x150.jpg"
          },
          "medium": {
            "file": "deep-focus-sonic-butter-takeover-300x300.jpg",
            "width": 300,
            "height": 300,
            "mime-type": "image/jpeg",
            "ewww_image_optimizer": "Reduced by 5.7% (2.2&nbsp;kB)",
            "url": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/deep-focus-sonic-butter-takeover-300x300.jpg"
          },
          "post-thumbnail": {
            "file": "deep-focus-sonic-butter-takeover-600x510.jpg",
            "width": 600,
            "height": 510,
            "mime-type": "image/jpeg",
            "ewww_image_optimizer": "Reduced by 7.7% (8.6&nbsp;kB)",
            "url": "http://www.synbydesign.com/wp/wp-content/uploads/2015/05/deep-focus-sonic-butter-takeover-600x510.jpg"
          }
        },
        "image_meta": {
          "aperture": 0,
          "credit": "",
          "camera": "",
          "caption": "",
          "created_timestamp": 0,
          "copyright": "",
          "focal_length": 0,
          "iso": 0,
          "shutter_speed": 0,
          "title": "",
          "orientation": 0
        },
        "ewww_image_optimizer": "Reduced by 0.9% (1.0&nbsp;kB)"
      }
    },
    "terms": {
      "category": [{
        "ID": 34,
        "name": "Other",
        "slug": "other",
        "description": "",
        "taxonomy": "category",
        "parent": null,
        "count": 14,
        "link": "http://www.synbydesign.com/wp/category/other/",
        "meta": {
          "links": {
            "collection": "http://www.synbydesign.com/wp/wp-json/taxonomies/category/terms",
            "self": "http://www.synbydesign.com/wp/wp-json/taxonomies/category/terms/34"
          }
        }
      }]
    }
  }];

  beforeEach(angular.mock.module(portfolioServices));
  beforeEach(inject((_PortfolioHelperFns_) => {
    PortfolioHelperFns = _PortfolioHelperFns_;
  }));

  afterEach(()=> {
    "use strict";
    PortfolioHelperFns = undefined;
  });

  it('should have methods', () => {

    expect(PortfolioHelperFns.filterByWeb).toBeDefined();
    expect(PortfolioHelperFns.filterByDesign).toBeDefined();
    expect(PortfolioHelperFns.filterByOther).toBeDefined();
    expect(PortfolioHelperFns.simplifyModelForDisplay).toBeDefined();
  });

  it('should filter by web', () => {
    "use strict";

    expect(PortfolioHelperFns.filterByWeb(testData).length).toBe(1);

  });

  it('should filter by design', () => {
    "use strict";

    expect(PortfolioHelperFns.filterByDesign(testData).length).toBe(8);
  });

  it('should filter by other', () => {
    "use strict";

    expect(PortfolioHelperFns.filterByOther(testData).length).toBe(1);
  });

  it('should simplify the model for display', () => {
    "use strict";

    const results = PortfolioHelperFns.simplifyModelForDisplay(testData);
    const anarchostar = results[3];

    expect(results.length).toBe(testData.length);
    expect(anarchostar.ID).toBe(53);
    expect(anarchostar.content).toBeDefined();
    expect(anarchostar.featured_image).toBe('http://www.synbydesign.com/wp/wp-content/uploads/2015/02/anarchostar1.jpg');
    expect(anarchostar.slug).toBe('anarchostar');
    expect(anarchostar.title).toBe('Anarchostar');
    expect(anarchostar.post_tag).toBeDefined();
    expect(anarchostar.post_tag.length).toBe(5);
    expect(anarchostar.post_tag[0]).toBe('HTML5 Audio');
  });
});
