const { default: $ } = require("webdriverio/build/commands/browser/$");

class Login {
  //Define elements
  get loginBtn() {
    return $('//android.widget.TextView[@text="Sign In"]');
  }

  get userNameField() {
    return $(
      '//android.widget.TextView[@elementId="00000000-0000-009d-ffff-ffff0000005b"]'
    );
  }

  get passwordField() {
    return $(
      '//android.widget.TextView[@elementId="00000000-0000-009d-ffff-ffff0000006b"]'
    );
  }

  get continueBtn() {
    return $(
      '//android.widget.TextView[@elementId="00000000-0000-00c5-ffff-ffff00000074"]'
    );
  }

}

module.exports = new Login();
