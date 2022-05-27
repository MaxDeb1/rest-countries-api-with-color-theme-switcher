const DARK_MODE_KEY = 'dark';
const INHERIT_SYSTEM_KEY = 'theme.inherit_system';

const DarkMode = __themeSettingFactory__(DARK_MODE_KEY);
const InheritSystem = __themeSettingFactory__(INHERIT_SYSTEM_KEY);

function __themeSettingFactory__(settingKey) {
  return ({
    getSetting: function () {
      try {
        return JSON.parse(window.localStorage.getItem(settingKey)) === true;
      } catch (e) { return false; }
    },

    updateSetting: function (value) {
      try {
        window.localStorage.setItem(settingKey, JSON.stringify(value === true));
      } catch (e) { }
    }
  });
}

export { DarkMode, InheritSystem };