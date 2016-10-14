describe('weather app landing page', function() {
  it('should show landing page', function() {
    browser.get('http://localhost:3090/');

    var getWeather = element(by.css('body > div > div > a:nth-child(1)'))
    var inputAddress = element(by.css('body > div > div > a:nth-child(2)'))
    expect(getWeather.isPresent()).toBe(true);
    expect(inputAddress.isPresent()).toBe(true);
    getWeather.getAttribute('ng-href').then(function(attr) {;
        expect(typeof attr).toBe("string");
        expect(attr).toEqual("#/coordinates");
    });
    inputAddress.getAttribute('ng-href').then(function(attr) {;
        expect(typeof attr).toBe("string");
        expect(attr).toEqual("#/input");
    });
  });
});


