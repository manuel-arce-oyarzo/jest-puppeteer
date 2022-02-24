export default class BasePage {

  async getTitle() {
    return await page.getTitle()
  }

  async getUrl() {
    return await page.url()
  }

  async getText(selector) {
    try {
      await page.waitForSelector(selector)
      return await page.$eval(selector, (el) => el.textContent)
    } catch (e) {
      throw new Error(`Error al Obtener el texto del selector ${selector}`)
    }
  }

  async getAttribute(selector, attribute) {
    try {
      await page.waitForSelector(selector)
      return await page.$eval(selector, (el) => el.getAttribute(attribute))
    } catch (e) {
      throw new Error(`Error al Obtener el atributo del selector ${selector}`)
    }
  }


  async getValue(selector) {
    try {
      await page.waitForSelector(selector)
      return await page.$eval(selector, (el) => el.value)
    } catch (e) {
      throw new Error(`Error al Obtener el valor del selector ${selector}`)
    }
  }


  async getCount(selector) {
    try {
      await page.waitForSelector(selector)
      return await page.$$eval(selector, (el) => el.length)
    } catch (e) {
      throw new Error(`Error al Obtener el numero de elementos del selector ${selector}`)
    }
  }


  async getCount(selector) {
    try {
      await page.waitForSelector(selector)
      return await page.$$eval(selector, (el) => el.length)
    } catch (e) {
      throw new Error(`Error al Obtener el numero de elementos del selector ${selector}`)
    }
  }


  async click(selector) {
    try {
      await page.waitForSelector(selector)
      await page.click(selector)
    }
    catch (e) {
      try {
        const element = await page.waitForXPath(selector)
        await element.click()
      }
      catch (e) {
        throw new Error(`Error al dar click al selector ${selector}`)
      }
    }
  }

  async doubleClick(selector) {
    try {
      await page.waitForSelector(selector)
      await page.click(selector, { clickCount: 2 })
    } catch (e) {
      throw new Error(`Error al dar doble click al selector ${selector}`)
    }
  }

  async type(selector, text, opts = {}) {
    try {
      // await page.waitForSelector(selector)
      await page.type(selector, text, opts)
    } catch (e) {
      throw new Error(`Error al escribir en al selector ${selector}`)
    }
  }

  async wait(time) {
    return page.waitForTimeout(time)
  }

}