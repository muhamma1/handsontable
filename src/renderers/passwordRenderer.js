import {fastInnerHTML} from './../helpers/dom/element';
import {getRenderer, registerRenderer} from './../renderers';
import {rangeEach} from './../helpers/number';

/**
 * @private
 * @renderer PasswordRenderer
 * @param instance
 * @param TD
 * @param row
 * @param col
 * @param prop
 * @param value
 * @param cellProperties
 */
function passwordRenderer(instance, TD, row, col, prop, value, cellProperties) {
  getRenderer('text').apply(this, arguments);

  value = TD.innerHTML;

  const hashLength = cellProperties.hashLength || value.length;
  const hashSymbol = cellProperties.hashSymbol || '*';

  let hash = '';

  rangeEach(hashLength - 1, () => {
    hash += hashSymbol;
  });
  fastInnerHTML(TD, hash);
}

registerRenderer('password', passwordRenderer);

export default passwordRenderer;
