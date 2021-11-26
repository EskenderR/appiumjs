describe("Log into the App", () => {
    beforeEach(() => {
        driver.pause(3000);
    })
    after(() => {
        driver.pause(10000)
    })

    it("should tap on Sign In button", () => {
        driver.touchAction({ action: 'tap', x: 1050, y: 2700})
    })

    it("should input email & password", () => {
        $('//android.widget.EditText[1]').addValue("janedoe@gmail.com");
        $('(//android.widget.EditText)[2]').addValue("123123123");
    })

    it("should tap on Continue button", () => {
        driver.touchAction({ action: 'tap', x: 700, y: 1500})
    })

    it('should close announcement popup', () => {
        // wait for the Add Button to appear
        driver.pause(7500);
        // close the announcement popup
        driver.touchAction({ action: 'tap', x: 1280, y: 2610 })
    })

    it("should create an Item", () => {
        driver.pause(5000)
        //tap on + Button
        driver.touchAction({ action: 'tap', x: 1276, y: 2425 })
        //tap on Add Item Button
        driver.touchAction({ action: 'tap', x: 500, y: 2500 })
        //enter Item name
        $('//android.widget.EditText[@text="Enter Item Name"]').addValue('Test Item');
        //enter quantity
        $('//android.widget.EditText[@text="1"]').addValue('10');

        // locate price, locate price input, add value 5
        // const priceContainer = $('new UiSelector().resourceId("com.sortly.mythings.staging:id/priceContainer")');
        // const priceInput = $(`new UiSelector().fromParent(${priceContainer}).resourceId("com.sortly.mythings.staging:id/edtInput")`)
        // priceInput.addValue("5");
        driver.touchAction({ action: 'tap', x: 110, y: 1405 })
    })

    it("should save the item", () => {
        driver.touchAction({ action: 'tap', x: 1175, y: 260 })
    })
})