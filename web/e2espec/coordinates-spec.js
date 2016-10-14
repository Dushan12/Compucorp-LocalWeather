describe('get coordinates from browser', function() {
    beforeEach(function() {
        var mock = require('./mocked-backend')
        browser.addMockModule('httpBackendMock', mock.httpBackendMock);        
        browser.get('http://localhost:3090/#/coordinates');
        
    });


  it('should show input link', function() {
    //browser.get('http://localhost:3090/#/coordinates');
    var inputAddress = element(by.xpath('/html/body/div/div/a'))
    expect(inputAddress).toBeDefined;
    
    inputAddress.getAttribute('ng-href').then(function(attr) {
        expect(typeof attr).toBe("string");
        expect(attr).toEqual("#/input");
    });
  });

  it('should get weather for coordinates when response ok', function() {
    
    

    //var content = element(by.css("body > div > div > div > div > metric-weather-data > div"))
    //var html = content.getOuterHtml()
    //console.log(html)
    browser.pause()
    browser.debugger()
      /*var inputAddress = element(by.css('body > div:nth-child(1) > div > a'))
      inputAddress.getAttribute('ng-href').then(function(attr) {
          expect(typeof attr).toBe("string");
          expect(attr).toEqual("#/input");
      });
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
        */
  });
  
});

