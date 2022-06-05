import { appConfigs } from './configs/index'
import { HtmlClassListActions } from './enums/index'
import {
  addEvtListener,
  createElement,
  getElement,
  request,
  toggleClassList,
} from './helpers/index'

const getCountriesList = async function () {
  const { URL_ALL } = appConfigs()
  return await request(URL_ALL)
}

const renderList = function (list: []) {
  const listContainer = getElement('list-container')

  if (listContainer) listContainer.innerHTML = ''

  for (let item = 0; item < list.length; item++) {
    listContainer?.appendChild(
      createElement('div', list[item]['name']['common'], 'item-shadow', [
        { name: 'value', value: list[item]['name']['common'] },
      ]),
    )
  }
}

const chnageHandler = async function (query: string) {
  const { URL_BY_NAME, URL_ALL } = appConfigs()

  const loadingIndicator = toggleClassList(getElement('loading-indicator'))

  let result
  loadingIndicator(HtmlClassListActions.add, 'loader')

  if (query === '') {
    result = await request(URL_ALL)
  } else {
    result = await request(`${URL_BY_NAME}/name/${query}`)
  }

  loadingIndicator(HtmlClassListActions.remove, 'loader')

  renderList(result)
}

const itemOnClickHandler = function (value: string) {}

async function init() {
  addEvtListener(getElement('inp'), 'input', chnageHandler)

  const list = await getCountriesList()
  renderList(list)

  const items = document.getElementsByClassName(
    'item-shadow',
  ) as HTMLCollectionOf<HTMLElement>

  // I have performance issue,  i`ll think about that
  for (let element of items) {
    addEvtListener(element, 'click', () =>
      itemOnClickHandler(element.getAttribute('value')),
    )
  }
}

init()
