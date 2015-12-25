import angular from 'angular';
import extractor from 'extract-image-props-from-html-string';

export default function PortfolioHelperFns(){
  'use strict';

  var containsCategory = function containsCategory(categories){
    return (function(item){
      return item.terms.category.reduce(function(previousValue, currentValue){
        return previousValue || (categories.indexOf(currentValue.slug) >= 0);
      }, false);
    });
  };

  return {
    filterByWeb(list){
      'use strict';
      return list.filter(containsCategory(['web']));
    },

    filterByDesign(list){
      'use strict';
      return list.filter(containsCategory(['logos','illustration','flyers','business-cards']));
    },

    filterByOther(list){
      'use strict';
      return list.filter(containsCategory(['other']));
    },

    simplifyModelForDisplay(list){
      return list.map(function(item){
        const {ID, content, featured_image, slug, title, terms} = item;
        return {
          ID,
          content,
          full_size_image: extractor.getSource(content),
          alt_text: extractor.getAltText(content),
          max_width: extractor.getWidth(content),
          max_height: extractor.getHeight(content),
          featured_image: featured_image.source,
          slug,
          title,
          post_tag: Array.isArray(terms.post_tag) ? terms.post_tag.map(function(tag){
            return tag.name;
          }) : []
        };
      });
    }
  };
};