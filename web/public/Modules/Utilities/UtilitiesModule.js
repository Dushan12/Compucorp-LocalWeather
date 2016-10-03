(function(utilities, $, undefined) {

	utilities.isDefined = function(input) {
		if(input) return true;
		return false;
	};
	utilities.isNumber = function(input) {
		return !isNaN(input);
	};
	utilities.isNumberBetween = function(value, min, max) {
		return value >= min & value <= max;
	};

	utilities.appendArray = function(array, newArray) {
		array.constructor.prototype.push.apply(array, newArray);
    };

    utilities.moveElement = function(array, fromIndex, toIndex) {
    	if(utilities.isNumberBetween(fromIndex, 0, array.length) && 
    		utilities.isNumberBetween(toIndex, 0, array.length)) {
    		var element = array[fromIndex];
    		array.splice(fromIndex, 1);
    		array.splice(toIndex, 0, element);
    	}
    };

    utilities.validateEmail = function(email) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}


	utilities.uniq = function(a) {
	    var prims = {"boolean":{}, "number":{}, "string":{}}, objs = [];

	    return a.filter(function(item) {
	        var type = typeof item;
	        if(type in prims)
	            return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
	        else
	            return objs.indexOf(item) >= 0 ? false : objs.push(item);
	    });
	}

    utilities.clean = function(array, deleteValue) {
		for(var i = 0; i < array.length; i++) {
			if(array[i] == deleteValue) {         
				array.splice(i, 1);
				i--;
			}
		}
		return array;
	};

	utilities.shortenString = function(trimString, n, useWordBoundary){
		if(trimString != undefined) {
	        var toLong = trimString.length > n;
	        if(toLong && !useWordBoundary) {
	            trimString = toLong ? trimStringsubstr(0, n - 1) : trimString;
	        }
	        if(toLong && useWordBoundary) {
	            trimString = useWordBoundary && toLong ? trimString.substr(0,trimString.lastIndexOf(' ')) : trimString;
	        }
	        return  toLong ? trimString + '&hellip;' : trimString;   
	    }
	};

	utilities.pad = function(val, len) {
	    val = String(val);
	    len = len || 2;
	    while (val.length < len) {
	    	val = "0" + val;
	    }
	    return val;
	};

	utilities.formatDate = function(dateInFunction, dateSeparator, timeSeparator) {
	    let inputDate = new Date(dateInFunction),
	    	currYear = inputDate.getFullYear(),
	    	currMonth = inputDate.getMonth() + 1,
	    	currDay = inputDate.getDate(),
	    	currHours = inputDate.getHours(),
	    	currMinutes = inputDate.getMinutes(),
	    	currSeconds = inputDate.getSeconds();

	    if(!dateSeparator) dateSeparator = '-';
	    if(!timeSeparator) timeSeparator = ':';

	    return  currYear + dateSeparator + 
	    			utilities.pad(currMonth,0) + dateSeparator + 
	    			utilities.pad(currDay,2) + "  " + 
	    			utilities.pad(currHours,2) + timeSeparator + 
	    			utilities.pad(currMinutes,2) + timeSeparator + 
	    			utilities.pad(currSeconds,2);
	};

	utilities.formatDatePad = function(date, separator) {
	    let yearStr = date.getUTCFullYear().toString(),
	    	month = date.getUTCMonth() + 1,
	    	monthStr = "",
	    	day = date.getUTCDate(),
	    	dayStr = "";

	    if(month < 10) {
	        monthStr = "0" + month.toString();
	    } else {
	        monthStr = month.toString();
	    }

	    if(day < 10) {
	        dayStr = "0" + day.toString();
	    } else {
	        dayStr = day.toString();
	    }

	    if(!separator) separator = '-';

	    return yearStr + separator + monthStr + separator + dayStr;
	};	

	utilities.formatDatePadEur = function(date, separator) {
	    let yearStr = date.getUTCFullYear().toString(),
	    	month = date.getUTCMonth() + 1,
	    	monthStr = "",
	    	day = date.getUTCDate(),
	    	dayStr = "";

	    if(month < 10) {
	        monthStr = "0" + month.toString();
	    } else {
	        monthStr = month.toString();
	    }

	    if(day < 10) {
	        dayStr = "0" + day.toString();
	    } else {
	        dayStr = day.toString();
	    }

	    if(!separator) separator = '-';

	    return dayStr + separator + monthStr + separator + yearStr;
	};

	utilities.parseDateEur = function(dateString, separator) {
		if(!separator) separator = '-';
	    var from = dateString.split(separator);
	    var f = new Date(from[2], from[1] - 1, from[0]);    
	    return f;
	};

	utilities.formatDateFundamentals = function(dateInFunction) {	    
	    var inputDate = new Date(dateInFunction);
	    
	    var currYear = inputDate.getFullYear();
	    var currMonth = inputDate.getMonth();
	    currMonth = currMonth + 1;
	    var currDay = inputDate.getDate();
	    currDay = currDay + 1;

	    var currHours = inputDate.getHours();
	    var currMinutes = inputDate.getMinutes();
	    var currSeconds = inputDate.getSeconds();

	    var ret = currMonth + "/" + currDay + "/" + currYear;
	    return ret;
	};

	utilities.formatDateStr = function(dateIn) {
	    var currYear = dateIn.getFullYear();
	    var currMonth = dateIn.getMonth();
	    currMonth = currMonth + 1;
	    var currDay = dateIn.getDate();
	    
	    var ret = pad(currMonth,0) + "/" + pad(currDay,2) + "/" + currYear;
	    return ret;
	};

	utilities.infoMessage = function(messageText, palerttype) {
	    var alertType = 'info'; 
	    if(palerttype == 2) {
	        alertType = 'warning';   
	    }
	    if(palerttype == 3) {
	        alertType = 'danger';
	    }
	    $.notify(
	    	{
	        	message: messageText        
	        }, 
	        {
	            type: alertType
	        }
	    );
	};

	utilities.COGNISMUTIL = {
	    filterFloat : function (value) {
	        value = value.replace(/,/g , "");
	        if(/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
	          .test(value))
	          return Number(value);
	      return NaN;
	    },
	    enterToTab : function(myEvent) {
	        if (myEvent.keyCode == 13) {
	            $(this).blur();
	        }
	    },
	    setCookie : function(cname, cvalue, exdays) {
	        var d = new Date();
	        d.setTime(d.getTime() + (exdays*24*60*60*1000));
	        var expires = "expires="+d.toUTCString();       
	        var path = "path=/"
	        document.cookie = cname + "=" + cvalue + "; " + expires + ";" + path;
	    },

	    getCookie : function(cname) {
	        var name = cname + "=";
	        var ca = document.cookie.split(';');
	        for(var i=0; i<ca.length; i++) {
	            var c = ca[i];
	            while (c.charAt(0)==' ') c = c.substring(1);
	            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	        }
	        return "";
	    }
	};

	utilities.openDialog = function(uri, name, options, closeCallback) {
	    var win = window.open(uri, name, options);
	    var interval = window.setInterval(function() {
	        try {
	            if (win == null || win.closed) {
	                window.clearInterval(interval);
	                closeCallback(win);
	            }
	        }
	        catch (e) {
	        }
	    }, 500);
	    return win;
	};

	utilities.subtractDates = function(dateFrom, dateTo, returnFormat) {
		var diff = Math.abs(dateTo.getTime() - dateFrom.getTime());
		if(returnFormat === 'years') return Math.ceil(diff / (1000 * 3600 * 24 * 365));
		if(returnFormat === 'months') return Math.ceil(diff / (1000 * 3600 * 24 * 12));
		if(returnFormat === 'days') return Math.ceil(diff / (1000 * 3600 * 24));
		if(returnFormat === 'hours') return Math.ceil(diff / (1000 * 3600));
		if(returnFormat === 'seconds') return Math.ceil(diff / 1000);
		if(returnFormat === 'milliseconds') return Math.ceil(diff);
		return null;
	};

	utilities.capitalizeFirstLetter = function(input) {
		return input[0].toUpperCase() + input.slice(1);
	};

	utilities.parseNgTagsInputList = function(tagList) {
		var result = '';
		for(var i = 0; i < tagList.length; i++) {
			result += tagList[i].name + '|';
		}
		return result.substring(0, result.length - 1);
	};

	utilities.displayNgTagsInputList = function(tagList) {
		var resultArray = [];
		for(var i = 0; i < (a = tagList.split('|')).length; i++) {
			resultArray.push({
				_id: Math.random() * 1000000,
				name: a[i],
				canonical: a[i]
			});
		}
		return resultArray;
	};
	
	utilities.sort = function(array) {
		return array.sort(function(e1, e2) {
			if(e1 > e2) return 1;
			if(e1 < e2) return -1;
			return 0;
		});
	};

	utilities.sortByName = function(array) {
		return array.sort(function(e1, e2) {
			if(e1.name > e2.name) return 1;
			if(e1.name < e2.name) return -1;
			return 0
		});
	};

	utilities.sortByPosition = function(array) {
		return array.sort(function(e1, e2) {
			if(e1.pos > e2.pos) return 1;
			if(e1.pos < e2.pos) return -1;
			return 0;
		});
	};

	utilities.isPageVisibleForUser = function(user) {
		return COGNISMAPP.organisation() == user.OrganizationName;
	};

	utilities.removeProtocolFromUrl = function(url) {
		if(url == undefined)
			return ""
		return url.replace(/.*?:\/\//g, "");
	}

}(window.utilities = window.utilities || {}, jQuery));