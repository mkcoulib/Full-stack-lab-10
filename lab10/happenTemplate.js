var library = (function() {
  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){
			var d = new Date();
			return String(Math.floor(d.getTime()/1000));
		},
		UnixMillisecond: function(){
			var d = new Date();
			return String(d.getTime());
		}
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){
						var d = new Date();
						var hours = d.getHours();
						var minutes = d.getMinutes();
						var seconds = d.getSeconds();
						var ampm = hours >= 12 ? 'PM' : 'AM';
						hours = hours % 12;
						hours = hours ? hours : 12; // the hour '0' should be '12'
						minutes = minutes < 10 ? '0'+minutes : minutes;
						seconds = seconds < 10 ? '0'+seconds : seconds;
						var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
						return strTime;
					},
	   	    WithOutSeconds: function() {
						 var d = new Date();
						var hours = d.getHours();
						var minutes = d.getMinutes();
						var ampm = hours >= 12 ? 'PM' : 'AM';
						hours = hours % 12;
						hours = hours ? hours : 12; // the hour '0' should be '12'
						minutes = minutes < 10 ? '0'+minutes : minutes;
						var strTime = hours + ':' + minutes + ' ' + ampm;
						return strTime;}
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){
					var d = new Date();
					var month = d.getMonth() + 1;
					var day = d.getDate();
					var year = d.getFullYear();
					day = day < 10 ? '0'+day : day;
					var mdy = month + '/' + day + '/' + year;
					return mdy;					

				},
			Name: function(){
				var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
				var d = new Date();
				var day = d.getDate();
				var year = d.getFullYear(); 
				var MDY = monthNames[d.getMonth()] + " " + day + ',' + ' ' + year;
				return MDY;

			}
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){
				var d = new Date();
				return String(d.getSeconds());

			},
			DblDigit: function(){
				var d = new Date();
				if (d.getSeconds() < 10) {
				return 	String(0) + String(d.getSeconds());
			}else { return String(d.getSeconds());
			}
			}
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){
				var d = new Date();
				return String(d.getMinutes());
			},
			DblDigit: function(){
				var d = new Date();
				if (d.getMinutes < 10) {
				return 	String(0) + String(d.getMinutes);
			}else { return String(d.getMinutes());
			}

			}
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {
				var d = new Date();
				return String(d.getHours());
			},
			TwelveHour: function() {
				var d = new Date();
				return String(d.getHours() % 12 || 12);
			},
			AMPM: (function() {
				return {
					UpperCase: function(){
						var d = new Date();
						var hour = d.getHours();
						if (hour >=12 ){
							return "PM";
						} else {
							return "AM"
						};
					},
					LowerCase: function(){
						var d = new Date();
						var hour = d.getHours();
						if (hour >=12 ){
							return "pm";
						} else {
							return "am"
						};
					}
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){
				var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
				var d = new Date();
				return String(days[d.getDay() ]);
			},
			AbrDayOfWeek: function(){
				var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
				var d = new Date();
				return String(days[d.getDay() ]).slice(0,3);
			},
			FirstTwoOfWeek: function(){
				var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
				var d = new Date();
				return String(days[d.getDay() ]).slice(0,2);
				 
			},
			WeekOfYear: function(){}
		}
	})(),
	Month: (function(){
		return {
			DateOfMonth: (function(){
				return {
					Numeral: function(){
						var d = new Date();
						return String(d.getDate());
					},
					Ordinal: function(){
						var d = new Date();
						return String(d.getDate()+'th');},
					DateDblDigit: function(){
						var d = new Date();
						return String(d.getDate());
					}
				}
			})(),
			MonthNumber: function(){
				var d = new Date();
				return  String(d.getMonth()+1) ;
				
			},
		

			MonthNumberDblDigit: function(){
				var d = new Date();
				return String(0) + String(d.getMonth()+1)
			},
			AbrOfCurrentMonth: function(){
			var d = new Date();
			var month = new Array();
			month[0] = "January";
			month[1] = "February";
			month[2] = "March";
			month[3] = "April";
			month[4] = "May";
			month[5] = "June";
			month[6] = "July";
			month[7] = "August";
			month[8] = "September";
			month[9] = "October";
			month[10] = "November";
			month[11] = "December";
 			return  month[d.getMonth()].slice(0,3);
			},
			CurrentMonth: function(){
			var d = new Date();
			var month = new Array();
			month[0] = "January";
			month[1] = "February";
			month[2] = "March";
			month[3] = "April";
			month[4] = "May";
			month[5] = "June";
			month[6] = "July";
			month[7] = "August";
			month[8] = "September";
			month[9] = "October";
			month[10] = "November";
			month[11] = "December";
 			return month[d.getMonth()];
			}
		}
	})(),
	Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){
						var now = new Date();
						var start = new Date(now.getFullYear(), 0, 0);
						var diff = now - start;
						var oneDay = 1000 * 60 * 60 * 24;
						var day = Math.floor(diff / oneDay);
						return String(day);
					},
					Ordinal: function(){
						var now = new Date();
						var start = new Date(now.getFullYear(), 0, 0);
						var diff = now - start;
						var oneDay = 1000 * 60 * 60 * 24;
						var day = Math.floor(diff / oneDay);
						return String(day+'th');
					}
				}
			})(),
			YearFull: function(){
				var d = new Date();
				return String(d.getFullYear());
			},
			YearAbr: function(){
				var d = new Date();
				return String(d.getFullYear()).slice(2,4);
			}
		}
	})(),
	Defaults: function(){
		var d = new Date();
		var year = d.getFullYear();
		var day = d.getDate();
		var month = d.getMonth();
		var hour = d.getHours();
		var min = d.getMinutes();
		var sec = d.getSeconds();
		var mil = d.getMilliseconds;
		
	}
  }
})();