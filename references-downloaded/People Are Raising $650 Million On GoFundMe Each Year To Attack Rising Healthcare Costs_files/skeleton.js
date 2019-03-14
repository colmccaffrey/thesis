var __IntegralASDiagnosticCall = (function(code, err, config) {
	try {
		var alreadySent = {};
		return function(code, err, config) {
			var contextNode, img;
			try {
				if (!alreadySent[code]) {
					alreadySent[code] = true;
					if (config) {
						// cannot stringify DOM node due to parent-child relationship
						contextNode = config.contextNode;
						config.contextNode = '';
					}

					var url = '//pixel.adsafeprotected.com/jsdiagnostic' +
						'?code:' + code +
						'&err:' + encodeURIComponent(err.message) +
						'&config:' + encodeURIComponent(JSON.stringify(config));

					if (__IASScope.isDomless && __IASOmidVerificationClient && __IASOmidVerificationClient.sendUrl) {
						__IASOmidVerificationClient.sendUrl(url);
					}
					else {
						img = new Image();
						img.src = url;
					}
					//restore after stringification so js can continue
					if (config) {
						config.contextNode = contextNode;
					}
				}
			} catch(err) {}
		};
	} catch(err) {
		return function(){};
	}
})();

try {
	var __IntegralASConfig = {
		jsDoSplit: false,
		debug: "false",
		jsDiag: 'true',
		version: '17.4.175',
		mtCell: 10,
		mtSample: 5,
		trackMouse: "true",
		exchList: {'e1':'nqzryq','e2':'tbbtyrnqf.t.qbhoyrpyvpx','e3':'ehovpbacebwrpg','e4':'chozngvp','e5':'bcrak','e6':'nqoevgr.pbz','e7':'tynz.pbz','e8':'lvryqznantre.pbz','e9':'yvwvg','e10':'nqakf','p11':'ghea.pbz','p12':'zngugnt','p13':'vaivgrzrqvn','p14':'qngnkh','n15':'zrqvn6qrterrf','n16':'dhnagfreir','n17':'esvuho.arg','a18':'napubeserr','a19':'eff2frnepu','a20':'mgfgngvp.pbz','n21':'ovq.npr.nqiregvfvat','e22':'wnfba','v23':'fcbgkpqa','v24':'ogeyy','v25':'yvirenvy','v26':'nqncgi','v27':'nqnc.gi','n29':'qbzqrk.pbz','n30':'ernyih.arg','d31':'cvengronl','d32':'cebklonl','d33':'onlcebkl','d34':'cvengrcebkl','d35':'cebklcvengr','d36':'onlcvengr','n37':'tjnyyrg','p39':'j55p.arg','p40':'c0l.pa','p41':'vcvalbh.pbz','p42':'c0lwferaqre'},
		sp_cdnDomain: 'cdn.adsafeprotected.com',
		sp_cdnScripts: {xsca: "static.adsafeprotected.com/xsca.17.4.85.js", sca: "static.adsafeprotected.com/sca.17.4.95.js", main: "static.adsafeprotected.com/main.17.4.175.js"},
		protocol: 'https',
		jsref: "https:\/\/www.forbes.com\/sites\/carolynmcclanahan\/2018\/08\/13\/using-gofundme-to-attack-health-care-costs\/",
		asid: "9cb1856e-45ce-11e9-997e-98f2b3e8eb24",
		allowViewability: "true",
		jsFeatures: "viewabilityready,consecutive,cachebust:0,forcecocoa:0,rattie,exch,recordalternate:0,usedtdomain,nextcocoa:100,bapiDiag,cookie,postDts:0,unreliabilityDetection,videotwoseconds,getPl,decodePl,resolution,usetpl,tpiLookupURL,hundredpct,jloadDiag:0,blur:0,sendclogs,zeroPing,idMap,offscreen,everySecond:1,sdkdetection,moreAdTalkCalls,slid,fm2:1,largeAd,nextcocoaie:100,usevh,fxdet:0,mmsb:0,bigmon:0,chromeNativeIO:100,oddet:0,ios:100,ancestor:100,avmm:100,avgrn:100,useScreenLocationInfoAdaptor:100,swapids:100,pIntervals:10,firewall_cdn_domain,usesca:40,usexsca:1,bustediframe:100,impFailSafe:100,yieldmo:100,displayCustomView:0,sfdetect,pmdetect:100,novidnodeerr:5,diagnosticCM:0,viewabilityOptimization:100,usehaps:100,customMetric:100,sizmek,celtra,groupmCM,avidPropertiesInImpression,abcAudit,useMraidGeometricMeasurement,mrcAudit:1,BannerStuffingInApp",
		adsafeDomain: "adsafeprotected.com:80",
		minimizeCalls: "false",
		adWidth: "300",
		adHeight: "600",
		forceAppend: "false",
		sp_imp_maxLength: 8000,
		sp_imp_jsInfo_minLength: 200,
		_onInViewMRC15: __IntegralASConfig && __IntegralASConfig.onInViewMRC15,
		_onInViewMRC: __IntegralASConfig && __IntegralASConfig.onInViewMRC,
		_onMeasurable: __IntegralASConfig && __IntegralASConfig.onMeasurable,
		_onAPIResult: __IntegralASConfig && __IntegralASConfig.onAPIResult,
		_onInViewFull: __IntegralASConfig && __IntegralASConfig.onInViewFull,
		_onSuspicious: __IntegralASConfig && __IntegralASConfig.onSuspicious,
		_onInViewMRC5: __IntegralASConfig && __IntegralASConfig.onInViewMRC5,
		reqquery: "",
		mode: "rjss",
		requrl: "",
		dtBaseURL: "https:\/\/dt.adsafeprotected.com\/dt?advEntityId=231602",
		adsafeSrc: "https:\/\/pixel.adsafeprotected.com\/rfw\/st\/231602\/33555133\/skeleton.js",
		tpiLookupURL: "",
		getTpl: "false",
		use100v: false,
		useBapiCallback: "",
		useViewabilityNotification: "",
		scriptUrl: "https:\/\/pixel.adsafeprotected.com\/rjss\/st\/231602\/33555133\/skeleton.js",
		accountForSadImps: '',
		sendCookie: 'true',
		cookieBaseURL: 'sc.iasds01.com\/dtc?advEntityId=231602&pubEnt=33555133',
		fwMonitoring: 'true',
		doNothing: false,
		mn: "app65",
		mobOrTab: false,
		app: false,
		mobFwUrl: "https:\/\/mobile.adsafeprotected.com\/internal\/monitoring\/app\/initial\/231602\/33555133\/",
		anId: '',
		advEntityId: '231602',
		pubEntityId: '33555133',
		videoId: '',
		videoChannel: '',
		rts: {},
		customViewability: [],
		serverSideAppDetection: []
	};
try {
	__IASScope = typeof window !== "undefined" ? window : this;
	__IntegralASConfig.birthdate = new Date().getTime();
	__IntegralASConfig.perfBirth = (typeof __IASScope.performance !== "undefined" && typeof __IASScope.performance.now === 'function') ? __IASScope.performance.now() : null;

	//copy/pasted the contents of the thirdparty OmidVerificationClient.js file here, remove and replace when a new version is received
	//Versions are to be found at tools.iabtechlab.com/omsdk in the "OM SDK JS" tab. We don't build this ourselves, we just take the most recently uploaded file from there.
	//Latest version '1.2.3-iab592' pasted on August 24th 2018 by Derek Davies
	//Locally applied fixes (with original code commented out with "//-----" at the start of the lines):
	//1. "const version" needed to be changed to "var version" for IE < 11
	//2. Commented out initialization and use of this.remoteIntervals_ and this.remoteTimeouts_ because it led to multiple VC instances using the same id.
	//   Replaced with random numbers, like this: var c = ((new Date()).getTime() * 1000000) + (Math.floor(Math.random() * 1000000));
	//   That gets a unique millisecond value for 'now', multiplies it by a million (to get 6 zero digits below the milliseconds
	//   into which a random 6 digit number is added. So it gives us a random number of 1 in a million for each milliseconds (that's fairly unique).

	;(function(omidGlobal, factory, exports) {
		// CommonJS support
		if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
			factory(omidGlobal, exports);

			// If neither AMD nor CommonJS are used, export to a versioned name in the
			// global context.
		} else {
			var exports = {};
//----------const version = '1.2.3-iab592';
			var version = '1.2.3-iab592';
			factory(omidGlobal, exports);

			function deepFreeze(object) {
				for (var key in object) {
					if (object.hasOwnProperty(key)) {
						object[key] = deepFreeze(object[key]);
					}
				}
				return Object.freeze(object);
			}

			// Inject and freeze the exported components of omid.
			for (var key in exports) {
				if (exports.hasOwnProperty(key)) {
					if (Object.getOwnPropertyDescriptor(omidGlobal, key) == null
						|| Object.getOwnPropertyDescriptor(omidGlobal[key], version) == null) {
						// Define the top level property in the global scope
						if (Object.getOwnPropertyDescriptor(omidGlobal, key) == null) {
							Object.defineProperty(omidGlobal, key, {
								value: {},
							});
						}
						// Define the object exports keyed-off versions
						Object.defineProperty(omidGlobal[key], version, {
							get: function () {
								return deepFreeze(exports[key]);
							},
							enumerable: true,
						});
					}
				}
			}
		}
	}(typeof global === 'undefined' ? this : global, function(omidGlobal, omidExports) {
		'use strict';var $jscomp = $jscomp || {};
		$jscomp.scope = {};
		$jscomp.inherits = function(a, b) {
			function c() {
			}
			c.prototype = b.prototype;
			a.superClass_ = b.prototype;
			a.prototype = new c;
			a.prototype.constructor = a;
			for (var d in b) {
				if ("prototype" != d) {
					if (Object.defineProperties) {
						var e = Object.getOwnPropertyDescriptor(b, d);
						e && Object.defineProperty(a, d, e);
					} else {
						a[d] = b[d];
					}
				}
			}
		};
		$jscomp.ASSUME_ES5 = !1;
		$jscomp.ASSUME_NO_NATIVE_MAP = !1;
		$jscomp.ASSUME_NO_NATIVE_SET = !1;
		$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
				a != Array.prototype && a != Object.prototype && (a[b] = c.value);
			};
		$jscomp.getGlobal = function(a) {
			return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a;
		};
		$jscomp.global = $jscomp.getGlobal(this);
		$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
		$jscomp.initSymbol = function() {
			$jscomp.initSymbol = function() {
			};
			$jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
		};
		$jscomp.symbolCounter_ = 0;
		$jscomp.Symbol = function(a) {
			return $jscomp.SYMBOL_PREFIX + (a || "") + $jscomp.symbolCounter_++;
		};
		$jscomp.initSymbolIterator = function() {
			$jscomp.initSymbol();
			var a = $jscomp.global.Symbol.iterator;
			a || (a = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));
			"function" != typeof Array.prototype[a] && $jscomp.defineProperty(Array.prototype, a, {configurable:!0, writable:!0, value:function() {
				return $jscomp.arrayIterator(this);
			}});
			$jscomp.initSymbolIterator = function() {
			};
		};
		$jscomp.arrayIterator = function(a) {
			var b = 0;
			return $jscomp.iteratorPrototype(function() {
				return b < a.length ? {done:!1, value:a[b++]} : {done:!0};
			});
		};
		$jscomp.iteratorPrototype = function(a) {
			$jscomp.initSymbolIterator();
			a = {next:a};
			a[$jscomp.global.Symbol.iterator] = function() {
				return this;
			};
			return a;
		};
		$jscomp.makeIterator = function(a) {
			$jscomp.initSymbolIterator();
			var b = a[Symbol.iterator];
			return b ? b.call(a) : $jscomp.arrayIterator(a);
		};
		$jscomp.arrayFromIterator = function(a) {
			for (var b, c = []; !(b = a.next()).done;) {
				c.push(b.value);
			}
			return c;
		};
		$jscomp.arrayFromIterable = function(a) {
			return a instanceof Array ? a : $jscomp.arrayFromIterator($jscomp.makeIterator(a));
		};
		var module$exports$omid$common$argsChecker = {assertTruthyString:function(a, b) {
			if (!b) {
				throw Error("Value for " + a + " is undefined, null or blank.");
			}
			if ("string" !== typeof b && !(b instanceof String)) {
				throw Error("Value for " + a + " is not a string.");
			}
			if ("" === b.trim()) {
				throw Error("Value for " + a + " is empty string.");
			}
		}, assertNotNullObject:function(a, b) {
			if (null == b) {
				throw Error("Value for " + a + " is undefined or null");
			}
		}, assertNumber:function(a, b) {
			if (null == b) {
				throw Error(a + " must not be null or undefined.");
			}
			if ("number" !== typeof b || isNaN(b)) {
				throw Error("Value for " + a + " is not a number");
			}
		}, assertNumberBetween:function(a, b, c, d) {
			(0,module$exports$omid$common$argsChecker.assertNumber)(a, b);
			if (b < c || b > d) {
				throw Error("Value for " + a + " is outside the range [" + c + "," + d + "]");
			}
		}, assertFunction:function(a, b) {
			if (!b) {
				throw Error(a + " must not be truthy.");
			}
		}, assertPositiveNumber:function(a, b) {
			(0,module$exports$omid$common$argsChecker.assertNumber)(a, b);
			if (0 > b) {
				throw Error(a + " must be a positive number.");
			}
		}};
		var module$exports$omid$common$VersionUtils = {}, module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER = 3;
		module$exports$omid$common$VersionUtils.isValidVersion = function(a) {
			return /\d+\.\d+\.\d+(-.*)?/.test(a);
		};
		module$exports$omid$common$VersionUtils.versionGreaterOrEqual = function(a, b) {
			a = a.split("-")[0].split(".");
			b = b.split("-")[0].split(".");
			for (var c = 0; c < module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER; c++) {
				var d = parseInt(a[c], 10), e = parseInt(b[c], 10);
				if (d > e) {
					break;
				} else {
					if (d < e) {
						return !1;
					}
				}
			}
			return !0;
		};
		var module$exports$omid$common$ArgsSerDe = {}, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION = "1.0.3";
		module$exports$omid$common$ArgsSerDe.serializeMessageArgs = function(a, b) {
			return (0,module$exports$omid$common$VersionUtils.isValidVersion)(a) && (0,module$exports$omid$common$VersionUtils.versionGreaterOrEqual)(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b : JSON.stringify(b);
		};
		module$exports$omid$common$ArgsSerDe.deserializeMessageArgs = function(a, b) {
			return (0,module$exports$omid$common$VersionUtils.isValidVersion)(a) && (0,module$exports$omid$common$VersionUtils.versionGreaterOrEqual)(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b ? b : [] : b && "string" === typeof b ? JSON.parse(b) : [];
		};
		var module$exports$omid$common$constants = {AdEventType:{IMPRESSION:"impression", STATE_CHANGE:"stateChange", GEOMETRY_CHANGE:"geometryChange", SESSION_START:"sessionStart", SESSION_ERROR:"sessionError", SESSION_FINISH:"sessionFinish", VIDEO:"video", LOADED:"loaded", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange",
			PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction"}, VideoEventType:{LOADED:"loaded", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange", PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction"}, ErrorType:{GENERIC:"generic", VIDEO:"video"},
			AdSessionType:{NATIVE:"native", HTML:"html"}, EventOwner:{NATIVE:"native", JAVASCRIPT:"javascript", NONE:"none"}, AccessMode:{FULL:"full", LIMITED:"limited"}, AppState:{BACKGROUNDED:"backgrounded", FOREGROUNDED:"foregrounded"}, Environment:{MOBILE:"app"}, InteractionType:{CLICK:"click", INVITATION_ACCEPT:"invitationAccept"}, MediaType:{DISPLAY:"display", VIDEO:"video"}, Reason:{NOT_FOUND:"notFound", HIDDEN:"hidden", BACKGROUNDED:"backgrounded", VIEWPORT:"viewport", OBSTRUCTED:"obstructed", CLIPPED:"clipped"},
			SupportedFeatures:{CONTAINER:"clid", VIDEO:"vlid"}, VideoPosition:{PREROLL:"preroll", MIDROLL:"midroll", POSTROLL:"postroll", STANDALONE:"standalone"}, VideoPlayerState:{MINIMIZED:"minimized", COLLAPSED:"collapsed", NORMAL:"normal", EXPANDED:"expanded", FULLSCREEN:"fullscreen"}, NativeViewKeys:{X:"x", Y:"y", WIDTH:"width", HEIGHT:"height", AD_SESSION_ID:"adSessionId", IS_FRIENDLY_OBSTRUCTION_FOR:"isFriendlyObstructionFor", CLIPS_TO_BOUNDS:"clipsToBounds", CHILD_VIEWS:"childViews", END_X:"endX", END_Y:"endY",
				OBSTRUCTIONS:"obstructions"}, MeasurementStateChangeSource:{CONTAINER:"container", CREATIVE:"creative"}, ElementMarkup:{OMID_ELEMENT_CLASS_NAME:"omid-element"}, CommunicationType:{NONE:"NONE", DIRECT:"DIRECT", POST_MESSAGE:"POST_MESSAGE"}, OmidImplementer:{OMSDK:"omsdk"}};
		var module$contents$omid$common$InternalMessage_GUID_KEY = "omid_message_guid", module$contents$omid$common$InternalMessage_METHOD_KEY = "omid_message_method", module$contents$omid$common$InternalMessage_VERSION_KEY = "omid_message_version", module$contents$omid$common$InternalMessage_ARGS_KEY = "omid_message_args", module$exports$omid$common$InternalMessage = function(a, b, c, d) {
			this.guid = a;
			this.method = b;
			this.version = c;
			this.args = d;
		};
		module$exports$omid$common$InternalMessage.isValidSerializedMessage = function(a) {
			return !!a && void 0 !== a[module$contents$omid$common$InternalMessage_GUID_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_METHOD_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_VERSION_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_GUID_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_METHOD_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_VERSION_KEY] && (void 0 === a[module$contents$omid$common$InternalMessage_ARGS_KEY] ||
				void 0 !== a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
		};
		module$exports$omid$common$InternalMessage.deserialize = function(a) {
			return new module$exports$omid$common$InternalMessage(a[module$contents$omid$common$InternalMessage_GUID_KEY], a[module$contents$omid$common$InternalMessage_METHOD_KEY], a[module$contents$omid$common$InternalMessage_VERSION_KEY], a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
		};
		module$exports$omid$common$InternalMessage.prototype.serialize = function() {
			var a = {};
			a = (a[module$contents$omid$common$InternalMessage_GUID_KEY] = this.guid, a[module$contents$omid$common$InternalMessage_METHOD_KEY] = this.method, a[module$contents$omid$common$InternalMessage_VERSION_KEY] = this.version, a);
			void 0 !== this.args && (a[module$contents$omid$common$InternalMessage_ARGS_KEY] = this.args);
			return a;
		};
		var module$exports$omid$common$Communication = function(a) {
			this.to = a;
			this.communicationType_ = module$exports$omid$common$constants.CommunicationType.NONE;
		};
		module$exports$omid$common$Communication.prototype.sendMessage = function(a, b) {
		};
		module$exports$omid$common$Communication.prototype.handleMessage = function(a, b) {
			if (this.onMessage) {
				this.onMessage(a, b);
			}
		};
		module$exports$omid$common$Communication.prototype.generateGuid = function() {
			return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
				var b = 16 * Math.random() | 0;
				a = "y" === a ? (b & 3 | 8).toString(16) : b.toString(16);
				return a;
			});
		};
		module$exports$omid$common$Communication.prototype.serialize = function(a) {
			return JSON.stringify(a);
		};
		module$exports$omid$common$Communication.prototype.deserialize = function(a) {
			return JSON.parse(a);
		};
		module$exports$omid$common$Communication.prototype.isDirectCommunication = function() {
			return this.communicationType_ === module$exports$omid$common$constants.CommunicationType.DIRECT;
		};
		var module$exports$omid$common$DetectOmid = {OMID_PRESENT_FRAME_NAME:"omid_v1_present", isOmidPresent:function(a) {
			try {
				return a.frames ? !!a.frames[module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME] : !1;
			} catch (b) {
				return !1;
			}
		}, declareOmidPresence:function(a) {
			a.frames && a.document && (module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME in a.frames || (null == a.document.body && module$exports$omid$common$DetectOmid.isMutationObserverAvailable_(a) ? module$exports$omid$common$DetectOmid.registerMutationObserver_(a) : a.document.body ? module$exports$omid$common$DetectOmid.appendPresenceIframe_(a) : a.document.write('<iframe style="display:none" ' + ('id="' + module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME + '"') + (' name="' +
						module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME + '">') + "</iframe>")));
		}, appendPresenceIframe_:function(a) {
			var b = a.document.createElement("iframe");
			b.id = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME;
			b.name = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME;
			b.style.display = "none";
			a.document.body.appendChild(b);
		}, isMutationObserverAvailable_:function(a) {
			return "MutationObserver" in a;
		}, registerMutationObserver_:function(a) {
			var b = new MutationObserver(function(c) {
				c.forEach(function(c) {
					"BODY" === c.addedNodes[0].nodeName && (module$exports$omid$common$DetectOmid.appendPresenceIframe_(a), b.disconnect());
				});
			});
			b.observe(a.document.documentElement, {childList:!0});
		}};
		var module$exports$omid$common$DirectCommunication = function(a) {
			module$exports$omid$common$Communication.call(this, a);
			this.communicationType_ = module$exports$omid$common$constants.CommunicationType.DIRECT;
			this.handleExportedMessage = module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage.bind(this);
		};
		$jscomp.inherits(module$exports$omid$common$DirectCommunication, module$exports$omid$common$Communication);
		module$exports$omid$common$DirectCommunication.prototype.sendMessage = function(a, b) {
			b = void 0 === b ? this.to : b;
			if (!b) {
				throw Error("Message destination must be defined at construction time or when sending the message.");
			}
			b.handleExportedMessage(a.serialize(), this);
		};
		module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage = function(a, b) {
			module$exports$omid$common$InternalMessage.isValidSerializedMessage(a) && this.handleMessage(module$exports$omid$common$InternalMessage.deserialize(a), b);
		};
		var module$exports$omid$common$eventTypedefs = {};
		var module$exports$omid$common$exporter = {};
		function module$contents$omid$common$exporter_getOmidExports() {
			return "undefined" === typeof omidExports ? null : omidExports;
		}
		function module$contents$omid$common$exporter_getOrCreateName(a, b) {
			return a && (a[b] || (a[b] = {}));
		}
		module$exports$omid$common$exporter.packageExport = function(a, b, c) {
			if (c = void 0 === c ? module$contents$omid$common$exporter_getOmidExports() : c) {
				a = a.split("."), a.slice(0, a.length - 1).reduce(module$contents$omid$common$exporter_getOrCreateName, c)[a[a.length - 1]] = b;
			}
		};
		var module$exports$omid$common$logger = {error:function(a) {
			for (var b = [], c = 0; c < arguments.length; ++c) {
				b[c - 0] = arguments[c];
			}
			module$contents$omid$common$logger_executeLog(function() {
				throw new (Function.prototype.bind.apply(Error, [null].concat(["Could not complete the test successfully - "], $jscomp.arrayFromIterable(b))));
			}, function() {
				return console.error.apply(console, [].concat($jscomp.arrayFromIterable(b)));
			});
		}, debug:function(a) {
			for (var b = [], c = 0; c < arguments.length; ++c) {
				b[c - 0] = arguments[c];
			}
			module$contents$omid$common$logger_executeLog(function() {
			}, function() {
				return console.error.apply(console, [].concat($jscomp.arrayFromIterable(b)));
			});
		}};
		function module$contents$omid$common$logger_executeLog(a, b) {
			"undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b();
		}
		;var module$exports$omid$common$OmidGlobalProvider = {}, module$contents$omid$common$OmidGlobalProvider_globalThis = eval("this");
		function module$contents$omid$common$OmidGlobalProvider_getOmidGlobal() {
			if ("undefined" !== typeof omidGlobal && omidGlobal) {
				return omidGlobal;
			}
			if ("undefined" !== typeof global && global) {
				return global;
			}
			if ("undefined" !== typeof window && window) {
				return window;
			}
			if ("undefined" !== typeof module$contents$omid$common$OmidGlobalProvider_globalThis && module$contents$omid$common$OmidGlobalProvider_globalThis) {
				return module$contents$omid$common$OmidGlobalProvider_globalThis;
			}
			throw Error("Could not determine global object context.");
		}
		module$exports$omid$common$OmidGlobalProvider.omidGlobal = module$contents$omid$common$OmidGlobalProvider_getOmidGlobal();
		var module$exports$omid$common$PostMessageCommunication = function(a, b) {
			b = void 0 === b ? module$exports$omid$common$OmidGlobalProvider.omidGlobal : b;
			module$exports$omid$common$Communication.call(this, b);
			var c = this;
			this.communicationType_ = module$exports$omid$common$constants.CommunicationType.POST_MESSAGE;
			a.addEventListener("message", function(a) {
				if ("object" === typeof a.data) {
					var b = a.data;
					module$exports$omid$common$InternalMessage.isValidSerializedMessage(b) && (b = module$exports$omid$common$InternalMessage.deserialize(b), a.source && c.handleMessage(b, a.source));
				}
			});
		};
		$jscomp.inherits(module$exports$omid$common$PostMessageCommunication, module$exports$omid$common$Communication);
		module$exports$omid$common$PostMessageCommunication.isCompatibleContext = function(a) {
			return !!(a && a.addEventListener && a.postMessage);
		};
		module$exports$omid$common$PostMessageCommunication.prototype.sendMessage = function(a, b) {
			b = void 0 === b ? this.to : b;
			if (!b) {
				throw Error("Message destination must be defined at construction time or when sending the message.");
			}
			b.postMessage(a.serialize(), "*");
		};
		var module$exports$omid$common$Rectangle = function(a, b, c, d) {
			this.x = a;
			this.y = b;
			this.width = c;
			this.height = d;
		};
		var module$exports$omid$common$serviceCommunication = {resolveTopWindowContext:function(a) {
			"undefined" === typeof a && "undefined" !== typeof window && window && (a = window);
			if ("undefined" === typeof a || !a || "undefined" === typeof a.top || !a.top) {
				return module$exports$omid$common$OmidGlobalProvider.omidGlobal;
			}
			if (a === a.top) {
				return a;
			}
			try {
				return "undefined" === typeof a.top.location.hostname ? a : a.top;
			} catch (b) {
				return a;
			}
		}};
		function module$contents$omid$common$serviceCommunication_getUnobfuscatedKey(a, b) {
			return b.reduce(function(a, b) {
				return a && a[b];
			}, a);
		}
		module$exports$omid$common$serviceCommunication.startServiceCommunication = function(a, b, c) {
			c = void 0 === c ? module$exports$omid$common$DetectOmid.isOmidPresent : c;
			return (b = module$contents$omid$common$serviceCommunication_getUnobfuscatedKey(a, b)) ? new module$exports$omid$common$DirectCommunication(b) : a.top && c(a.top) ? new module$exports$omid$common$PostMessageCommunication(a, a.top) : null;
		};
		var module$exports$omid$common$VastProperties = function(a, b, c, d) {
			this.isSkippable = a;
			this.skipOffset = b;
			this.isAutoPlay = c;
			this.position = d;
		};
		var module$exports$omid$common$version = {ApiVersion:"1.0", Version:"1.2.3-iab592"};
		var module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION = module$exports$omid$common$version.Version, module$contents$omid$verificationClient$VerificationClient_EventCallback;
		function module$contents$omid$verificationClient$VerificationClient_getThirdPartyOmid() {
			var a = module$exports$omid$common$OmidGlobalProvider.omidGlobal.omid3p;
			return a && "function" === typeof a.registerSessionObserver && "function" === typeof a.addEventListener ? a : null;
		}
		var module$exports$omid$verificationClient$VerificationClient = function(a) {
			if (this.communication = a = void 0 === a ? (0,module$exports$omid$common$serviceCommunication.startServiceCommunication)((0,module$exports$omid$common$serviceCommunication.resolveTopWindowContext)(), ["omid", "v1_VerificationServiceCommunication"]) : a) {
				this.communication.onMessage = this.handleMessage_.bind(this);
			} else {
				if (a = module$contents$omid$verificationClient$VerificationClient_getThirdPartyOmid()) {
					this.omid3p = a;
				}
			}
//----------this.remoteIntervals_ = this.remoteTimeouts_ = 0;
			this.callbackMap_ = {};
			this.imgCache_ = [];
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.isSupported = function() {
			return !(!this.communication && !this.omid3p);
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.registerSessionObserver = function(a, b) {
			(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
			this.omid3p ? this.omid3p.registerSessionObserver(a, b) : this.sendMessage_("addSessionListener", a, b);
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.addEventListener = function(a, b) {
			(0,module$exports$omid$common$argsChecker.assertTruthyString)("eventType", a);
			(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", b);
			this.omid3p ? this.omid3p.addEventListener(a, b) : this.sendMessage_("addEventListener", b, a);
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.sendUrl = function(a, b, c) {
			(0,module$exports$omid$common$argsChecker.assertTruthyString)("url", a);
			module$exports$omid$common$OmidGlobalProvider.omidGlobal.document && module$exports$omid$common$OmidGlobalProvider.omidGlobal.document.createElement ? this.sendUrlWithImg_(a, b, c) : this.sendMessage_("sendUrl", function(a) {
					a && b ? b() : !a && c && c();
				}, a);
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.sendUrlWithImg_ = function(a, b, c) {
			var d = this, e = module$exports$omid$common$OmidGlobalProvider.omidGlobal.document.createElement("img");
			this.imgCache_.push(e);
			var f = function(a) {
				var b = d.imgCache_.indexOf(e);
				0 <= b && d.imgCache_.splice(b, 1);
				a && a();
			};
			e.addEventListener("load", f.bind(this, b));
			e.addEventListener("error", f.bind(this, c));
			e.src = a;
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.injectJavaScriptResource = function(a, b, c) {
			var d = this;
			(0,module$exports$omid$common$argsChecker.assertTruthyString)("url", a);
			module$exports$omid$common$OmidGlobalProvider.omidGlobal.document ? this.injectJavascriptResourceUrlInDom_(a, b, c) : this.sendMessage_("injectJavaScriptResource", function(e, f) {
					e ? (d.evaluateJavaScript_(f, a), b()) : (module$exports$omid$common$logger.error("Service failed to load JavaScript resource."), c());
				}, a);
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.injectJavascriptResourceUrlInDom_ = function(a, b, c) {
			var d = module$exports$omid$common$OmidGlobalProvider.omidGlobal.document, e = d.body;
			d = d.createElement("script");
			d.onload = b;
			d.onerror = c;
			d.src = a;
			d.type = "application/javascript";
			e.appendChild(d);
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.evaluateJavaScript_ = function(a, b) {
			try {
				eval(a);
			} catch (c) {
				module$exports$omid$common$logger.error('Error evaluating the JavaScript resource from "' + b + '".');
			}
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.setTimeout = function(a, b) {
			(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
			(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeInMillis", b);
			if (this.hasTimeoutMethods_()) {
				return module$exports$omid$common$OmidGlobalProvider.omidGlobal.setTimeout(a, b);
			}
//----------var c = this.remoteTimeouts_++;
			var c = ((new Date()).getTime() * 1000000) + (Math.floor(Math.random() * 1000000));
			this.sendMessage_("setTimeout", a, c, b);
			return c;
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.clearTimeout = function(a) {
			(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeoutId", a);
			this.hasTimeoutMethods_() ? module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearTimeout(a) : this.sendOneWayMessage_("clearTimeout", a);
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.setInterval = function(a, b) {
			(0,module$exports$omid$common$argsChecker.assertFunction)("functionToExecute", a);
			(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("timeInMillis", b);
			if (this.hasIntervalMethods_()) {
				return module$exports$omid$common$OmidGlobalProvider.omidGlobal.setInterval(a, b);
			}
//----------var c = this.remoteIntervals_++;
			var c = ((new Date()).getTime() * 1000000) + (Math.floor(Math.random() * 1000000));
			this.sendMessage_("setInterval", a, c, b);
			return c;
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.clearInterval = function(a) {
			(0,module$exports$omid$common$argsChecker.assertPositiveNumber)("intervalId", a);
			this.hasIntervalMethods_() ? module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearInterval(a) : this.sendOneWayMessage_("clearInterval", a);
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.hasTimeoutMethods_ = function() {
			return "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.setTimeout && "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearTimeout;
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.hasIntervalMethods_ = function() {
			return "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.setInterval && "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearInterval;
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.handleMessage_ = function(a, b) {
			b = a.method;
			var c = a.guid;
			a = a.args;
			if ("response" === b && this.callbackMap_[c]) {
				var d = (0,module$exports$omid$common$ArgsSerDe.deserializeMessageArgs)(module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, a);
				this.callbackMap_[c].apply(this, d);
			}
			"error" === b && window.console && module$exports$omid$common$logger.error(a);
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.sendOneWayMessage_ = function(a, b) {
			for (var c = [], d = 1; d < arguments.length; ++d) {
				c[d - 1] = arguments[d];
			}
			this.sendMessage_.apply(this, [].concat([a, null], $jscomp.arrayFromIterable(c)));
		};
		module$exports$omid$verificationClient$VerificationClient.prototype.sendMessage_ = function(a, b, c) {
			for (var d = [], e = 2; e < arguments.length; ++e) {
				d[e - 2] = arguments[e];
			}
			this.communication && (e = this.communication.generateGuid(), b && (this.callbackMap_[e] = b), d = new module$exports$omid$common$InternalMessage(e, "VerificationService." + a, module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, (0,module$exports$omid$common$ArgsSerDe.serializeMessageArgs)(module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION, d)), this.communication.sendMessage(d));
		};
		(0,module$exports$omid$common$exporter.packageExport)("OmidVerificationClient", module$exports$omid$verificationClient$VerificationClient);

	}, typeof exports === 'undefined' ? undefined : exports));

} catch(e) {
	__IntegralASDiagnosticCall('thirdparty', e);
}

	__IASScope.isDomless = (typeof window === "undefined" ? true : false);
	__IASOmidVerificationClient = { isSupported: function () { return false; } };

	if (typeof __IASScope.OmidVerificationClient !== 'undefined') {
		try {
			__IASOmidVerificationClient = new __IASScope.OmidVerificationClient['1.2.3-iab592'](); //try standard in-browser instantiation
		}
		catch(e) {
			try {
				__IASOmidVerificationClient = new __IASScope.OmidVerificationClient(); //try domless version which has no version
			}
			catch(e) {
			}
		}
	}

	if (__IntegralASConfig.jsFeatures.indexOf('asidJsDiagnostic') !== -1) {
		var fakeErr = { message: __IntegralASConfig.asid };
		__IntegralASDiagnosticCall('asid', fakeErr);
	}

	__IntegralASConfig.useFIF = (__IASScope && !!__IASScope.__IntegralASUseFIF) && __IntegralASConfig.mode === 'jload';
	__IntegralASConfig.adRefreshThreshold = __IASScope && __IASScope.__IntegralASAdRefreshThreshold;
	__IntegralASConfig.contextNode = (function() {
		if (__IASScope.isDomless) {
			return;
		}
		if (__IntegralASConfig.useFIF) {
			return __IASScope.frameElement; // Early exit if using FIF
		}
		var tempScript,
			embedded = window != top,
			scripts = document.getElementsByTagName('script'),
			result = scripts[scripts.length - 1],
			scriptIndex = scripts.length,
			useDocWrite = 'jss,jsi,jspix'.indexOf(__IntegralASConfig.mode) !== -1,
			scriptUrl = __IntegralASConfig.scriptUrl;

		try {
			while (--scriptIndex >= 0) {
				tempScript = scripts[scriptIndex];
				if (tempScript.src && tempScript.src.indexOf(scriptUrl) === 0 && tempScript.getAttribute('data-ias-script-tag') === null) {
					result = tempScript;
					tempScript.setAttribute('data-ias-script-tag', 'found');
					break;
				}
			}
			if (scriptIndex === 0 && useDocWrite && !embedded) {
				document.write('<span id="s' + __IntegralASConfig.asid + '"/>');
				result = document.getElementById('s' + __IntegralASConfig.asid).parentNode;
			}
		} catch(e) { }
	
		return result;
	}());

	__IntegralASConfig.perf = (function() {
		var _marks = {};
		var START_CODE = 'A';
		var END_CODE = 'Z';

		function _addMark(codeName, time) {
			// TODO: consider validation that codeName doesn't already exist and throwing in debug mode
			// also that the code name is a string of the expected format
			// and/or consider consolidating all PERF_MARK_ definitions into a global-to-our-closure constants file
			// (except the ones in this file, since _init() wouldn't have access to that scope)
			_marks[codeName] = time;
		}

		function mark(codeName) {
			_addMark(codeName, Math.round(__IASScope.performance.now()));
		}

		function markStart(baseName) {
			mark(baseName + START_CODE);
		}

		function markEnd(baseName) {
			mark(baseName + END_CODE);
		}

		function markResource(baseName, url) {
			var entry, entries;
			entries = __IASScope.performance.getEntriesByName(url);
			if (entries && entries.length) {
				entry = entries[entries.length - 1];
				if (entry.startTime > 0 && entry.responseEnd > 0) {
					_addMark(baseName + START_CODE, Math.round(entry.startTime));
					// TODO: if we address the CORS issues in FW, we can gather more details about the download process here
					_addMark(baseName + END_CODE, Math.round(entry.responseEnd));
				}
			}
		}

		function getData() {
			return _marks;
		}

		function noop() {}

		function setNoops() {
			_addMark = noop;
			mark = noop;
			markStart = noop;
			markEnd = noop;
			markResource = noop;
		}

		function isFunc(obj) {
			return typeof obj === 'function';
		}

		function _init() {
			var canUsePerformanceAPIs = false;
			var PERF_MARK_BOOTSTRAPPER_EXECUTION = 'be';
			var PERF_MARK_BOOTSTRAPPER_SCRIPT_DOWNLOAD = 'bd';
			var PERF_MARK_MAIN_SCRIPT_DOWNLOAD = 'md'; // note: this code is intentionally the same as the one in globalConstants.js
			var downloadMark;

			try {
				canUsePerformanceAPIs = __IASScope.performance &&
					isFunc(__IASScope.performance.getEntriesByName) &&
					isFunc(__IASScope.performance.now) &&
					__IntegralASConfig.perfBirth !== null;

				if (canUsePerformanceAPIs) {
					downloadMark = __IntegralASConfig.jsDoSplit ? PERF_MARK_BOOTSTRAPPER_SCRIPT_DOWNLOAD : PERF_MARK_MAIN_SCRIPT_DOWNLOAD;

					markResource(downloadMark, __IntegralASConfig.scriptUrl); // in split mode, this captures download time for the bootstrapper script, in bundled mode, the bundled/main script
					_addMark(PERF_MARK_BOOTSTRAPPER_EXECUTION + START_CODE, Math.round(__IntegralASConfig.perfBirth)); // put the birthdate that we already captured into our list of marks
					markEnd(PERF_MARK_BOOTSTRAPPER_EXECUTION); // roughly the end time of execution for the bootstrapper script in split mode, in bundled mode, end of the bootstrapper part of the script and start of the module definition part
				} else {
					setNoops();
				}
			} catch (err) {
				// TODO: remove if we never get here?
				setNoops();
				if (isFunc(__IASScope.__IntegralASDiagnosticCall)) {
					__IASScope.__IntegralASDiagnosticCall('perf', err, __IntegralASConfig);
				}
			}
		}

		_init();

		return {
			mark: mark,
			markStart: markStart,
			markEnd: markEnd,
			markResource: markResource,
			getData: getData
		};
	}());


} catch(err) {
	__IntegralASConfig = {};
	__IntegralASDiagnosticCall('bootstrapper', err);
}

__IntegralASConfig.initialize=function(l,x,K){function Qa(){var d;l.perf.markStart(na);M.startSystem();k=M.getAggregator();k.provide({omidAdSessionContext:{}});d=__IASOmidVerificationClient;k.provide({omidVerificationClient:d});d=[{environment:new ba(d),adSessionReadyStrategy:new Ra(oa,d)},{environment:new Sa,adSessionReadyStrategy:new Ta(oa)}];(new Ua(d)).resolve().adSessionReadyStrategy.start();l.perf.markEnd(na)}function oa(){var d,a;l.perf.markStart(pa);a=X.instantiateModules();d=X.preImpression(a.mDataTransfer,
a.mViewability,a.mAdTalk,a.iOutput,a.mErrors,a.mAncestorOrigins,a.mBrowser,a.mPageUrls,a.mFeatures,t,a.renderDetector,a.asyncMacrosDetector);X.sendImpression(a.mErrors,a.mFeatures,a.mIds,a.mMode,a.iOutput,a.mBrowser,a.mViewability,d,a.mVideo);X.postImpression(a.mBrowser,a.mIds,a.mViewability,a.mFeatures,a.mComm,a.mDataTransfer,a.mErrors,a.iOutput,a.loopDelay,a.mAdTalk,a.viewabilityMeasurement,a.mAncestorOrigins,t);l.perf.markEnd(pa)}var k,X=function(){function m(a){var b=new Va(a,t),c=new Wa,e=new Xa(a,
t),p=Ya(a,t),s=(new Za(l,t,a)).resolve(),m=[b],D=[];p.applies()&&m.push(p);e.applies()&&m.push(e);c.applies(a,t)&&m.push(c);d(s).each(function(a,b){m.push(new $a(b,t));D.push(b.id)});0<D.length&&(k.trigger("addOutputItem",{output:D.join(".")},"scm",{type:h.IMPRESSION_EVENT}),k.trigger("addOutputItem",{output:D},"metricIdList",{type:h.DT_CODES.UNLOAD,asION:!0}));return m}function a(a,b,c,e){var p=m(a);return d(p).map(function(p,d){var m;m=new ab(d,b);var v=(new bb(c,a,d.rts)).getCallbacks(),v=new cb(e.createPingJobs(d.type,
d.timeInViewThresholds,v,d.metricId));m=d.thresholdType===h.GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE?new db(m,d.minUnit,v,t.isVideo()):new eb(m,new ca(d.minUnit),v);m.start();return m})}function b(a,b){var c=(new da).accepts(),c=!t.isAvid()&&!c&&!t.isInMobiMraidVideo();return t.isVideo()&&c?fb(l.videoId,a,b):{}}function c(a,b,c,e,p,s,m,D,v,I){try{l.perf.markStart(qa),l.tpiLookupURL&&gb(m,D).init(l.tpiLookupURL),t.isDomless()||I.isStarted()&&I.sendOriginList(),M.runAll(),r.execAtEndOfThread(function(){var s;
try{l.perf.markStart(ra);s={output:(new Date).getTime()-p};a.addItem(s,"sinceFw",{type:h.DT_CODES.ADTALK});d.isDef(b.loopStarted())&&a.addItem({output:b.loopStarted()},"readyFired",{type:h.DT_CODES.ADTALK});l.perf.markEnd(ra);var m,w;l.isSplitMode&&(w=l.protocol+"://"+l.sp_cdnScripts.main,l.perf.markResource(hb,w));l.impUrl&&l.perf.markResource(ib,l.impUrl);m=l.perf.getData();k.trigger("addThrottledProp",h.DT_SLOT.IM,"prf",d(m).toION());c.isApplicable(t)&&c.sendAdTalkCall()}catch(v){e.add(h.ERROR_CODES.ADTALK_DELAY)}}),
l.perf.markEnd(qa)}catch(Q){e.add(h.ERROR_CODES.EVENT_LOOP_ONE)}}function e(a,b,e,n,p,s,d,m,v){var h;"true"!==l.minimizeCalls&&(h=(new Date).getTime(),r.execAtEndOfThread(function(){c(a,b,e,n,h,p,s,d,m,v)}))}return{instantiateModules:function(){var c,e,q,n,p,s,d,m,v={};l.perf.markStart(sa);k=M.getAggregator();v.mFeatures=k.provide("features",jb());k.provide("mobileApp",function(){return c=c||new kb(v.mFeatures)});k.provide("avidJsClient",function(){return e=e||new lb(r.getWindow())});k.provide("context",
t);v.mBrowser=k.provide("browser",(new mb).createInstance());v.mErrors=nb();v.mIds=k.provide("ids",ob());v.iOutput=new pb(k);q=ta();v.mComm=(new qb).createInstance(v.mErrors,q);v.viewabilityMeasurement=(new rb(new sb(v.mIds),v.mFeatures,v.mBrowser)).create();if((q=k.request("omidAdSessionContext"))&&q.queuedOutputItems)for(s=0;s<q.queuedOutputItems.length;s++)k.trigger("addOutputItem",{output:q.queuedOutputItems[s].value},q.queuedOutputItems[s].code,{type:"impression"});v.mFeatures.on("swapids")&&
(l.oid=l.asid,l.asid=v.mIds.unq);v.mAdTalk=(new tb).createInstance(v.mFeatures);n=ub();q=vb(k);p=k.provide("mPage",(new wb).createInstance());v.mAncestorOrigins=xb();v.mPageUrls=k.provide("pageUrls",(new yb).createInstance(v.mAncestorOrigins,r));s=zb();k.provide("ieXDomainViewability",Ab(v.mBrowser));d=Bb(v.mBrowser);m=b(v.mFeatures,s);v.mVideo=k.provide("video",m);Cb(Db.build());d=(new Eb).createInstance(v.mErrors,d,v.mFeatures);p=(new Fb).createInstance(d,v.mErrors,p,t);m=k.provide("jobFactory",
Gb());v.mDataTransfer=Hb(d,v.mErrors,v.mFeatures,v.mIds,v.iOutput,v.mBrowser,s,n);n=Ib(v.mErrors,v.mFeatures,k,q);v.mMode=Jb(n,v.mFeatures,v.viewabilityMeasurement.isImmediate());v.mViewability=k.provide("viewability",Kb(new C,v.viewabilityMeasurement,v.mBrowser,v.mDataTransfer,v.mFeatures,k,v.iOutput,p,s,v.mVideo));a(v.mFeatures,v.mViewability,q,m);v.loopDelay=ua();v.renderDetector=Lb();v.asyncMacrosDetector=Mb();v.mDataTransfer.setViewabilityMod(v.mViewability);l.perf.markEnd(sa);return v},preImpression:function(a,
b,c,e,p,s,d,m,v,I,Q,B){var r,t,z,u,E;l.perf.markStart(va);try{c.isApplicable(I)&&(c.start(),e.addItem(c.getFrameMap(),"fm"),v.on("fm2")&&e.addItem(c.getFrameMapIncludingPeerCase(),"fm2"),v.on("idMap")&&(r=c.getIdMap())&&e.addItem(r,"idMap"))}catch(L){p.add(h.ERROR_CODES.ADTALK_GENERAL)}try{s.isApplicable(d,v,I)&&s.start(),E=m.detectTopURL(),v.on("exch")&&(t=(new Nb).createInstance(p,e),t.parse(E)),z=Ob(),z.isApplicable(v)&&z.start(v),I.usesGroupMCustomMetric()&&Pb(),u=Qb(),u.isApplicable(v)&&(u.start(),
k.trigger("sendCookie")),Q.start(),B.start()}catch(x){p.add(h.ERROR_CODES.IMPRESSION_LEADUP)}l.perf.markEnd(va);return E},sendImpression:function(a,b,c,e,p,s,m,h,v){try{Rb(a,b,c,e,p,s,m).send(h),d.isFunction(v.triggerInitializationEvents)&&v.triggerInitializationEvents()}catch(I){__IntegralASDiagnosticCall("impsend",I,l)}},postImpression:function(a,b,c,n,p,s,d,m,v,I,k,B,r){try{l.perf.markStart(wa);var t=Sb();t.start();t.addFieldTypes([h.DT_SLOT.IM,h.DT_SLOT.FRAUD,h.DT_SLOT.ENVIRONMENT,h.DT_SLOT.FRAUDEXP]);
var z=Tb(a,b,c);z.isApplicable(n)&&z.start();var u;n.bootstrapOn("getTpl")&&n.on("usetpl")&&(u=Ub(p,s,d,b,m),u.init());e(m,v,I,d,n,p,s,b,B);k&&k.start&&k.start();r.isDomless()||Vb().start(["sca","xsca","rsrch"],n);ea();M.runTier(h.TIERS.VIEWABILITY);var E=Wb();E.isApplicable(n)&&(E.start(),S.recordBlockingTime(),l.perf.mark(Xb),S.setupOnLoadTracking(),S.setupBrowserDelayTracking());l.perf.markEnd(wa)}catch(L){d.add(h.ERROR_CODES.POST_IMPRESSION)}}}}(),d=function(d){return new G(d)},G=function(d){this.iterable=
d};G.prototype.isObj=function(d){var a=null===this.iterable,a="object"===typeof this.iterable&&!a,b=!this.isArray()&&a;return d?a:b};G.prototype.isArray=function(){return this.iterable instanceof Array};G.prototype.isEmpty=function(d){return 0===this.keys(d).length};G.prototype.each=function(d,a){var b=this.iterable;if(b.length===+b.length)for(var c=0,e=b.length;c<e;++c)d(c,b[c]);else for(c in b)(b.hasOwnProperty(c)||a)&&d(c,b[c])};G.prototype.map=function(d,a){var b=[];this.each(function(c,e){var f=
d(c,e);if(void 0!==f||a)b[b.length]=f});return b};G.prototype.stringify=function(m,a){a=a||",";var b=[];this.each(function(a,e){var f=m(a,e);d.isDef(f)&&b.push(f)});return b.join(a)};G.prototype.toION=function(m,a){var b,c="[",e="]";a=a||0;m=m||{};if(4<++a)return"object";if(!this.isObj(!0)||this.iterable.hasOwnProperty("toString"))return""+this.iterable;this.isArray()?b=this.map(function(b,c){return d(c).toION(m,a)}):(c="{",e="}",b=this.map(function(b,c){var e="string"===typeof b&&-1!==b.indexOf("NULL"),
n=d(c).toION(m,a);return e?n:(m[b]||b)+":"+n}));return c+b.join(",")+e};G.prototype.compareTo=function(d){var a=!1;this.each(function(b,c){d[b]!==c&&(a||(a={}),a[b]=c)});return a};G.prototype.toParams=function(d){return this.stringify(function(a,b){return"string"===typeof a&&-1!==a.indexOf("NULL")?b:a+":"+b},d)};G.prototype._privateMixin=function(m,a,b){for(var c in a)d.isDef(a[c])&&(b||a.hasOwnProperty(c))&&(m[c]=a[c]);return m};G.prototype.mapToObj=function(m){var a={},b=this;this.each(function(c,
e){var f=m(c,e);d(f).isObj()&&b._privateMixin(a,f)});return a};G.prototype.invert=function(){return this.mapToObj(function(d,a){var b={};b[a]=d;return b})};G.prototype.mixin=function(d,a){return this._privateMixin(this.iterable,d,a)};G.prototype.find=function(d){var a;this.each(function(b,c){d(b,c)&&(a=c)});return a};G.prototype.findFirst=function(d){var a,b;this.each(function(c,e){!b&&d(c,e)&&(a=e,b=!0)});return a};G.prototype.keys=function(d){var a=[];this.each(function(b){a.push(b)},d);return a};
G.prototype.asStrings=function(){var d={};this.each(function(a,b){d[a]=""+b});return d};G.prototype.selectProperties=function(m){var a={},b=this;d(m).each(function(c,e){d.isDef(b.iterable[e])&&(a[e]=b.iterable[e])});return a};G.prototype.filter=function(m,a){return this.map(function(a,c){var e;if(d.isUndef(m)||d.resolve(m,a,c))e=c;return e},a)};G.prototype.toArray=function(){return this.map(function(d,a){return a})};G.prototype.JSONStringify=function(){var d,a,b=!1;x.Prototype&&x.Prototype.Version&&
-1===x.Prototype.Version.indexOf("1.7")&&(b=!0);b&&(a=Array.prototype.toJSON,delete Array.prototype.toJSON);d=JSON.stringify(this.iterable);b&&(Array.prototype.toJSON=a);return d};G.prototype.contains=function(m){var a=d(this.iterable).findFirst(function(a,c){return m===c});return d.isDef(a)};d.toBase=function(d,a){var b,c=0>d,e="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),f=[];d=c?-d:d;do b=d%a,f.push(e[b]),d=(d-b)/a;while(0<d);f=f.reverse().join("");return c?"-"+f:
f};d.isDef=function(d){return"undefined"!==typeof d};d.isUndef=function(m){return!d.isDef(m)};d.isBool=function(d){return"boolean"===typeof d};d.noop=function(){};d.identity=function(d){return d};d.isFunction=function(d){return"function"===typeof d};d.isStr=function(d){return"string"===typeof d};d.useIfDef=function(m){return d.isDef(m)?m:!1};d.stringifyTriState=function(d){return!0===d?1:!1===d?0:"na"};d.getNum=function(d){d=parseInt(d);isFinite(d)||(d=-1);return d};d.resolve=function(m){var a=d(arguments).toArray();
a.shift();return d.isFunction(m)?m.apply({},a):m};d.flatJSONParse=function(d){var a,b,c,e=/"(\w+)":(\d+|(?:"([^"]*)"))/g,f={};for(c=e.exec(d);c;)a=c[1],b=c[3],c=c[2],f[a]=b||+c,c=e.exec(d);return f};d.debounce=function(d,a,b){var c,e=b||x;return function(){var b=this,g=arguments;e.clearTimeout(c);c=e.setTimeout(function(){c=null;d.apply(b,g)},a)}};d.last=function(d){return d[d.length-1]};d.collapseArgsIntoHash=function(d,a){var b={};a?b[d]=a:b=d;return b};d.fromBoolToNum=function(d){return d?1:0};
d.isNumeric=function(m){return d.isDef(m)&&null!==m&&!isNaN(m)};d.fromNodeListToArray=function(d){return Array.prototype.slice.call(d)};var M=function(){var m,a={},b=[],c=[],e=function(){var a={},b=d(arguments).toArray();b.unshift(a);c.push(b);return a},f=function(c,e,f,p,s){s=s||{};var w,h,v=function(a){0===b.length&&(b=d(a).map(function(a,b){return m.request(b)}))},k=function(){if(!w){var a=[];w=!0;v(["features","browser","context"]);s.emits&&(c.events=new C);if(!s.applies||s.applies.apply(s,b))h=
!0,a=d(f).map(function(a,b){return m.request(b)},!0),a.push(c),d(c).mixin(p.apply({},a))}};(function(){var b=s.tier;d.isDef(b)&&(a[b]=a[b]||new fa,a[b].push(k))})();m.provide(e,function(){var a;k();h&&(a=c);return a});return c};e.runAll=function(){var b=d(a).keys().sort(function(a,b){return a-b});d(b).each(function(a,b){e.runTier(b)})};e.runTier=function(b){a[b].run();delete a[b]};e.startSystem=function(){m=m||new ga;d(c).each(function(a,b){f.apply({},b)})};e.getAggregator=function(){return m};return e}(),
h={MRC_LARGE_AD_SIZE:242500,FLASH_MIME:"application/x-shockwave-flash",IN_VIEW:"inView",OUT_OF_VIEW:"outOfView",PARTIAL_VIEW_PLUS:"partialViewPlus",PARTIAL_VIEW_MINUS:"partialViewMinus",NA:"na",PIV_NA:-1,DT_CODES:{ADTALK:"a",DIAGNOSTIC:"b",PERFORMANCE:"e",THIRD_PARTY:"i",LARGE_BILLABLE:"l",VIDEO_EVENTS:"m",MACRO:"ma",PING:"p",FULLY_INVIEW:"pf",QUARTILE_FULLY_INVIEW:"qf",SCA:"s",POS_INVIEW:"t",UNLOAD:"u",VIEWABILITY_READY:"v",EXTERNAL:"x",CUSTOM:"c",XSCA:"xs"},DT_SLOT:{IM:"im",FRAUD:"sca",FRAUDEXP:"xsca",
ENVIRONMENT:"env"},DETECTION_METHODS:{AD_PLACEHOLDER:"s",AD_HUNT:"a",IFRAME:"i",VIDEO:"v",MRAID:"m",AVID:"av",OMID:"o1",MUTATION:"c",SPECIFIED_AD:"sp",SPECIFIED_AD_NATIVO:"spn",BUSTED_IFRAME_FLASHTALKING:"bf",BUSTED_IFRAME_YIELDMO:"by",BUSTED_IFRAME_SIZMEK:"bs",VENDOR_CELTRA:"vc"},OUT_OF_VIEW_REASONS:{GEOM:"l",OBSTRUCTION:"o",FOCUS:"f",COLLAPSED:"c",HIDDEN:"h",VIDEO:"v"},VIDEO_CHANNELS:{VANS:{AS3_ADAPTOR:"av3",JS_ADAPTOR:"jv3"},WRAPPERS:{JS:"jvw"}},PERF_TIMELINE_TRACKER_CONFIG:{VANS:{TYPE:"vans",
COUNT:4},WRAPPERS:{JS:{TYPE:"jswrapper",COUNT:15},AS:{TYPE:"flwrapper",COUNT:9}}},ERROR_CODES:{GET_AD_DIMENSIONS:"a",AD_SLOT_ID:"A",BAPI_CALLBACK:"b",BROWSER_NOT_HTML5_COMPATIBLE:"B",ADTALK_GENERAL:"c",COCOA_GONE:"C",GET_SCREEN_LOC_GET_DIMENSIONS:"d",ADTALK_DUBIOUS:"D",POST_IMPRESSION:"E",ADTALK_DELAY:"f",VIDEO_IN_IFRAME_DIMS_CALC:"F",GDPR:"g",INIT_ADS_MANAGER:"G",PHONE_HOME:"h",FEATURE_SCRIPT:"H",HIDDEN:"H1",HIDDEN2:"H2",UID_GENERATION:"i",IMPRESSION_URLS:"I",NOT_VPAID_EVENT_OBJECT:"j",JSINFO:"J",
KILL_IT:"k",NO_RESPONSE_XML:"K",LOCATION_DETAILS:"l",IMPRESSION_LEADUP:"L",MESSAGE_LISTENER:"m",MOBILE_APP:"M",AT_INIT:"N",AUTOPLAY_DETECTION:"n",ANCESTOR_ORIGINS:"o",EVENT_LOOP_ONE:"O",GET_SCREEN_LOC_PIV_CALC:"p",PLUGIN_PARSING:"P",NO_ORIGINAL_VAST:"q",AD_REFRESH:"r",AD_ERROR:"R",GET_ELEM_STYLE:"s",AT_SEND:"S",ADS_MANAGER_START_AD:"t",NO_COMPANION_AD_XML:"T",NO_VIDEO_AD_INTERFACE:"u",UNRECOGNIZED_EVENT_TYPE:"U",ENVIRONMENT:"v",CHECK_SCREEN_LOC:"V",GET_WIN_DIMENSIONS:"w",AC_WATCHER:"W",EXCHANGE_PARSING:"x",
SCA:"X",BUSTED_IFRAME_IN_IO:"y",FLASH_API_ACCESS:"z",XSCA:"Z"},BROWSERS:{WEBKIT:"w",OPERA:"o",GECKO:"g",CHROME:"c",IE:"i",MSEDGE:"e"},MEDIA_TYPE_CODE:"mtp",MEDIA_TYPE:{DISPLAY:"display",DISPLAY_CODE:"d",VIDEO:"video",VIDEO_CODE:"v"},MEASUREMENT_STRATEGY:{DISPLAY:"display",VIDEO:"video"},TIERS:{PRE_IMPRESSION_FRAUD:4,VIEWABILITY:7,ENVIRONMENT:8},IMPRESSION_EVENT:"impression",AD_IDENTIFIER:"data-integralas-id",IAS_DETECTOR:"iasdetector",AVID:{AD_SESSION_TYPE:{DISPLAY:"display",VIDEO:"video",MANAGED_DISPLAY:"managedDisplay",
MANAGED_VIDEO:"managedVideo"}},VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER:[0,0.01,0.2,0.25,0.3,0.5,0.7,0.75,0.8,0.99,1],VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID:[0,0.1,0.2,0.25,0.3,0.4,0.5,0.6,0.7,0.75,0.8,0.9,1],GROUPM_MOBILE_PASS_THRU_TIME_IN_VIEW_THRESHOLD_TYPE:"grpmMobPassThru",RENDER:{CREATIVE_NODE_TYPES:"CANVAS EMBED IMG OBJECT PICTURE SVG VIDEO".split(" "),CONTAINER_NODE_TYPES:["A","DIV","IFRAME","INS"],WIDTH_THRESHOLD:20,HEIGHT_THRESHOLD:20,STATUS:{OTHER:"0",DETECTED:"1"},DETAILS:{ENVIRONMENT:"env",
OTHER:"na"}}},na="mf",pa="cm",sa="in",va="pr",wa="po",Xb="bl",qa="lo",ra="lt",hb="md",ib="id",Yb=function(){var d,a=h.RENDER.CREATIVE_NODE_TYPES.concat(h.RENDER.CONTAINER_NODE_TYPES),b=function(c){var e;d=d||l.contextNode.parentNode;if(c)if(u.isNodeXDomainIframe(c))e=c;else{var f=u.getNodeName(c);if(f&&(-1!==h.RENDER.CREATIVE_NODE_TYPES.indexOf(f.toUpperCase())||c&&c.style&&c.style.backgroundImage||c.children&&0===c.children.length&&c.innerText&&0<c.innerText.length))e=c;else{d=c;var f=b,g=u.getNodeName(c),
q=[],n=c&&c.children,p=n&&n.length,s;if(n)for(var w=0;w<p;w++)s=n[w],s.children&&0===s.children.length&&-1===a.indexOf(s.nodeName.toUpperCase())&&q.push(s.nodeName);var D;try{D=a.concat(q),u.isWindow(c)?e="HEAD"===u.getNodeName(l.contextNode.parentNode)?Y(l.contextNode.parentNode.ownerDocument.body,D):Y(null,D):("IFRAME"===g&&(c=c.contentWindow.document),e=Y(c,D))}catch(v){}e=f(e)}}else e=null;return e};return{find:b,getClosestContainerName:function(){return u.getNodeName(d)}}},Lb=function(){var d,
a=!1,b={status:h.RENDER.STATUS.OTHER,details:h.RENDER.DETAILS.OTHER},c={status:h.RENDER.STATUS.DETECTED,details:h.RENDER.DETAILS.ENVIRONMENT},e={status:h.RENDER.STATUS.OTHER,details:h.RENDER.DETAILS.ENVIRONMENT},f=function(){a=!0},g=function(a){var b={},c=r.getDoc(),e=function(f){var g=f&&f.type;if("readystatechange"===g&&"complete"===f.target.readyState||"load"===g)b.status=h.RENDER.STATUS.DETECTED,b.details=d.build(a,{eventType:g}),q(b),y.removeEvent(a,"load",e),y.removeEvent(c,"readystatechange",
e)};"complete"===c.readyState?(b.status=h.RENDER.STATUS.DETECTED,b.details=d.build(a,{eventType:"readystatechange"})):(y.addEvent(a,"load",e),y.addEvent(c,"readystatechange",e));return b},q=function(c){var e=new Zb(c),f=c.status||b.status;c=c.details||b.details;a&&f===h.RENDER.STATUS.DETECTED?(e=e.status(),k.trigger("addThrottledOutputItem","rend",f),k.trigger("addThrottledOutputItem","renddet",c),k.trigger("addThrottledOutputItem","rmeas",e)):(e=e.status(),k.trigger("addOutputItem",{output:f},"rend"),
k.trigger("addOutputItem",{output:c},"renddet"),k.trigger("addOutputItem",{output:e},"rmeas"))},n=function(){k.on("primaryadfound",function(a){var c,e=b,f=new Yb,n=!0,k=function(){var b=a&&a.getAdNode(),k=f.find(b);if(u.isNodeXDomainIframe(k))c?r.clearInterval(c):n=!1,e=g(k);else if(k){var b=!1,I=u.getRect(k);k&&"IMG"===u.getNodeName(k)&&(b=0===k.naturalWidth||0===k.naturalHeight);!b&&I.width>=h.RENDER.WIDTH_THRESHOLD&&I.height>=h.RENDER.HEIGHT_THRESHOLD&&(e.status=h.RENDER.STATUS.DETECTED,c?r.clearInterval(c):
n=!1);e.details=d.build(k)}else e.details=f.getClosestContainerName()||d.getAdNodeName(b)||e.details;q(e)};k();n&&(c=r.setInterval(k,500))})};return{start:function(){d=new $b;k.on("impressionsent",f);t.isAvid()||t.isOmid()||t.isVideo()?q(c):t.isMraid()?q(e):(q(b),n())}}},$b=function(){var d=function(a){var b;if(u.isWindow(a))b="WINDOW";else if(u.isNodeXDomainIframe(a))b="XIFRAME";else try{b=u.getNodeName(a)}catch(c){}return b};return{build:function(a,b){var c=a&&u.getRect(a),e=d(a),f=a&&a.style&&
a.style.backgroundImage,g=a.innerText&&0<a.innerText.length,g=a.children&&0===a.children.length&&g,c=[e,c&&c.width>=h.RENDER.WIDTH_THRESHOLD&&c.height>=h.RENDER.HEIGHT_THRESHOLD?"qs":"us"];!a||"IMG"!==e||0!==a.naturalWidth&&0!==a.naturalHeight||c.push("bi");f&&c.push("sn");g&&c.push("tn");b&&b.eventType&&("readystatechange"===b.eventType?c.push("dr"):"load"===b.eventType&&c.push("lf"));return c.join(".")},getAdNodeName:d}},Zb=function(d){return{status:function(){var a=d.details||h.RENDER.DETAILS.OTHER,
b=d.status||h.RENDER.STATUS.OTHER,c=a.split(".")[0],e="env"===a,f=c&&-1!==h.RENDER.CREATIVE_NODE_TYPES.indexOf(c.toUpperCase()),c="XIFRAME"===c,g=-1!==a.indexOf("tn"),a=-1!==a.indexOf("sn");return e?b:f||c||g||a?"1":"0"}}},Z=function(){return{applies:function(d,a){var b=k.request("mobileApp");return(d.browserIs(h.BROWSERS.CHROME)||d.isAndroidWebViewBrowser()||d.browserIs(h.BROWSERS.MSEDGE))&&!b.isMobileAppEnvironment()&&d.hasIntersectionObserver()&&a.on("chromeNativeIO")}}},Pb=function(){var d,a,
b=!1,c=k.request("mPage"),e=function(){!b&&a&&d&&!c.isHidden()&&(b=!0,k.trigger("sendDt",h.DT_CODES.LARGE_BILLABLE))};k.on("primaryadfound",function(a){d=a.getDims().area()>=h.MRC_LARGE_AD_SIZE;e()});k.on("impressionsent",function(){a=!0;e()});c.onHiddenChange(e)},ub=function(){var m=[],a={},b={percentInView:"piv",sl:"vs",reason:"r",width:"w",height:"h"};k.on("newScreenEvent",function(c){c=d(c).selectProperties(d(b).keys());c=d(c).asStrings();var e=d(c).compareTo(a);e&&(e.t=t.getTagTime(),m.push(e));
d(a).mixin(c)});return{toString:function(){return d(m).toION(b)}}},ga=function(){var m=new ac,a=new C;return d(m).mixin(a)},C=function(){var m={},a={},b=function(b,c,g){if((b=a[b])&&0!==b)return g&&(b=b.slice(0,1)),d(b).each(function(a,b){c.apply({},b)}),!0},c=function(a,b,c){m[a]=m[a]||new fa;m[a].push(b,c)};return{on:function(a,f){var g={};f?g[a]=f:g=a;d(g).each(c);d(g).each(b)},once:function(a,f){b(a,f,!0)||c(a,f,1)},trigger:function(a){var b=d(arguments).toArray();b.shift();var c;(c=m[a])&&c.run.apply({},
b)},persistentTrigger:function(b){var c=d(arguments).toArray();c.shift();var g=b;a[g]=a[g]||[];a[g].push(c);(g=m[b])&&g.run.apply({},c)}}},ha=function(){var m=function(a,c,e){var f,g=c.length,q=u.isWindow(a)?a.frames:u.getChildWindowsOf(a);e&&e(a,c);if(q&&q.length){for(a=0;a<q.length;a++)(f=q[a])&&u.isWindow(f)&&(c[g]=a,m(f,c,e));c.pop()}},a=function(a,c){try{m(c||top,[0],a)}catch(e){}};return{traverse:a,getFrames:function(b,c){var e=[];a(function(a){var b;if(b=u.isWindow(a)){var c=!0;for(b=0;b<e.length;b++)if(e[b]===
a){c=!1;break}b=c}b&&e.push(a)},c);return d(e).filter(b)}}},fa=function(){var m=[];return{push:function(a,b){var c=0;b=b||Number.MAX_VALUE;m[m.length]=function(){c<b&&(c++,a.apply({},arguments))}},run:function(){var a=arguments;d(m).each(function(b,c){c.apply({},a)})}}},cb=function(m){var a={};return{doEligibleJobs:function(b){d(m).each(function(c,e){var f=e&&e.getTime();d.isDef(f)&&b>=f&&!a[f]&&(e.getTask().call(),a[f]=!0)})}}},bc=function(){var m,a=new xa,b=function(b,e,f,g){var q,n,p,s;if(JSON&&
JSON.parse)try{q=JSON.parse(b.data),n=b.source,s=d.noop,e(q)&&(g&&(p=g(n,q))&&(s=function(){a.send(function(){return p},n)}),f(b,q,s))}catch(w){q&&k.trigger("error",h.ERROR_CODES.MESSAGE_LISTENER)}};return{listen:function(a,e,f){m=function(g){b(g,a,e,f)};y.addEvent(x,"message",m)},stop:function(){m&&y.removeEvent(x,"message",m);m=null}}},xa=function(){var m=function(a){return d(a).isObj()?[a]:(new ha).getFrames(a)},a=function(a){return d(a).mapToObj(function(a,b){var f;d.isFunction(b)||(f={},f[a]=
b);return f})};return{send:function(b,c){if(JSON&&JSON.stringify){var e=m(c);d(e).each(function(c,e){var q;q=d.resolve(b,e)||{};q.sentTime=r.now();q=a(q);e.postMessage(d(q).JSONStringify(),"*")})}}}},cc=function(m,a){return{onAll:function(b){var c={};d(a).each(function(e,f){m.on(f,function(){c[f]=1;d(c).keys().length===a.length&&(c={},b())})})}}},pb=function(m){var a=0,b={},c=function(b,c,e){if(d.isUndef(b.output))throw Error("item with id "+c+' must have "output" method');this.item=b;this.id=c||
++a;this.props=e||{};this.output=function(){var a=d.resolve(b.output);this.props.asION&&(a=d(a).toION());return a}},e=function(a){var c,e,f=[];for(c in b)b.hasOwnProperty(c)&&(e=a(c,b[c]))&&f.push(e);return f},f=function(a,e,f){f=f||e;f="string"!==typeof f?f:{};var p=function(a,e,f){a=new c(a,e,f);b[a.id]=a};d(a.output).isObj()&&!f.asION?d(a.output).each(function(a,b){p({output:b},a,f)}):p(a,e,f)};m.on("addOutputItem",function(a,b,c){f(a,b,c)});return{addItem:f,filterOutput:function(a,b){return e(function(c,
e){var f=e.props,w;a(f)&&(w=e.output(),f.encode&&(c=encodeURIComponent(c),w=encodeURIComponent(w)),d.isFunction(b)?b(c,w):b[c]=w)})},iterate:e,cleanup:function(){e(function(a,c){c.props.flagForRemoval&&delete b[a]})},getItem:function(a){return b[a]}}},ac=function(){var m={},a=function(a,c){m[a]=c};return{request:function(a){var c,e=m[a],f=d(arguments).toArray();f.shift();d.isUndef(e)||(c=d.isFunction(e)?e.apply({},f):e);return c},provide:function(b,c){c?m[b]=c:d(b).each(a);return c}}},Fb=function(){return{createInstance:function(d,
a,b,c){return t.isDomless()?new dc:new ec(d,a,b,c)}}},ec=function(m,a,b,c){var e;return{collect:function(){var a=m.find(),g=a.getOutOfViewReasons(),q=b.isHidden(),n=c.isDeviceTypeGroupMobile()&&e?e:J(u.calcWinDims()),p=a.getDims();e=n;if(!a.hasAd()||!n.hasValidDims()||!p.hasValidDims())return{viewState:h.NA,posViewState:h.NA,embedded:t.embedded,winDimensions:n,adDimensions:p};!0===q&&g.push(h.OUT_OF_VIEW_REASONS.FOCUS);return{winDimensions:n,adDimensions:p,containerDimensions:a.getContainerDims(),
method:a.getDetectionMethod(),viewState:g.length?h.OUT_OF_VIEW:a.getViewState(),percentInView:a.getPercentInView(),reason:g.join("."),obstructed:d.stringifyTriState(a.isObstructed()),isHidden:d.stringifyTriState(a.isHidden()),tabHidden:d.stringifyTriState(q),posViewState:a.getViewState(),adCompCount:a.getComponentCount(),sliceStatus:a.getSliceStatus()}}}},dc=function(){return{collect:function(){return{}}}},fc=function(m){m=m||d.identity;var a=[],b=r.now(),c=function(){var c=r.now();a.length&&(a[a.length-
1].duration+=c-b,b=c)};return{clear:function(){c();a=[]},fastForward:c,get:function(){return a},hasAlwaysBeen:function(b){return 1===a.length&&a[0].state===b},addState:function(b){var f=a[a.length-1];b=m(b);c();0!==a.length&&b===f.state||a.push({state:b,duration:0})}}},ya=function(d,a){var b=d||1,c=0,e=0,f,g=0;return{start:function(){0===c%b&&(f=r.now())},stop:function(){var d=f||a;0===c%b&&(g+=r.now()-d,e++);c++},getTime:function(){return g},getCount:function(){return e}}},za=function(){var m,a=
0,b=0,c=new C(!0),e=function(){m&&(a++,c.trigger(a),b>a?r.execAtEndOfThread(e):f())},f=function(){m=!1;a=0};return{onTick:function(a,e){var f=d.collapseArgsIntoHash(a,e);d(f).each(function(a,c){a=parseInt(a);b=a>b?a:b});c.on(f)},start:function(){m||(m=!0,r.execAtEndOfThread(e))},kill:f,isActive:function(){return m}}},gc=function(d,a){var b,c=a,e=function(a){b||(a&&d(),b=r.setInterval(d,c))},f=function(a){a&&d();r.clearInterval(b);b=null};return{start:e,stop:f,updateFrequency:function(a,b){c=a;f();
e(b)}}},ca=function(d){var a,b,c=0,e=t.getTagTime(),f=0,g=!1;return{getTotalTime:function(){return f},stop:function(){c=0;e=t.getTagTime();g=!1},mark:function(){a=g?t.getTagTime()-e:0;c+=a;c>=d&&(b=c-a<d,f+=b?c:a);e=t.getTagTime();g=!0}}},T=function(m,a){var b=m||l.adsafeSrc||l.requrl;b&&0===b.indexOf("http")||(b=l.protocol+"://"+b);var b=/((http|https):\/\/(([^\/\.]*)\.([^\/]*)))(?:\/(.[^?]*)\??(.+)?)*/.exec(b),c=b[1],e=b[2],f=b[3],g=b[4],q=b[5],n=m?b[6]:"",p=a?b[7]:"",s={},w=function(a){d.isDef(a)&&
(g=a);return g},h=function(a){d.isDef(a)&&(q=a);return q},v=function(a,b){return a+"="+d(b).toION()},p=p?p.replace(/&$/,""):"";return{appendToParamValue:function(b,c){var e,f;(e=s[b])?s[b]=e+c:a&&p.length&&(e=p.split(b),f=1<e.length)&&(f=e[1].split("&")[0],e=[e[0],f].join(b),p=p.replace(e,e+c))},fullDom:c,hostname:f,sub:w,master:h,setParam:function(a,b){s[a]=s[a]||{};d(b).isObj()?d(s[a]).mixin(b):s[a]=b},path:function(a){n=a},toString:function(){var a=w()?w()+".":"",b=n?"/"+n:"",c;p||!d(s).isEmpty()?
(c=d(s).isEmpty()?"":d(s).stringify(v,"&"),c="?"+p+(p&&c?"&"+c:c)):c="";return e+"://"+a+h()+b+c}}},ea=function(){var m=function(a){var c=[];d(a).each(function(a,b){400>=c.concat(b).join("").length&&c.push(b)});return c},a=function(a,c){var e;c&&c.id&&(e=c.id.replace(/[^\w-_.>\/]/g,""));return e};return function(){var b,c;try{if(t.friendly&&!t.isMobileApp())if(b=k.request("adSlotIds"))c=b;else{var e,f;if(e=u.getOurNodeInTop()){var g=u.getAncestorNodes(e);f=d(g).map(a)}if(b=f=f&&m(f))k.trigger("addOutputItem",
{output:b},"slid",{type:h.DT_CODES.ADTALK,asION:!0}),k.provide("adSlotIds",b),c=b}return c}catch(q){k.trigger("error",h.ERROR_CODES.AD_SLOT_ID)}}()};M("GPTRefreshDetection",[],function(){var m=[30,45,60,90],a=function(){var a,b,f=r.getTop(),g=ea(),q,n,p,s,w;f.googletag&&(b=(b=f.googletag.pubads&&d.isFunction(f.googletag.pubads)&&f.googletag.pubads())&&d.isFunction(b.getSlots)&&b.getSlots(),n=g&&d(g).isArray()&&0<g.length,p=b&&0<b.length,n&&p&&(a=d(b).findFirst(function(a,b){q=b.getSlotElementId();
s=f.document.getElementById(q);return(w=f.document.getElementById(g[0]))&&s&&s.contains(w)})));return a},b=function(a){var b=l.adRefreshThreshold&&parseInt(l.adRefreshThreshold)||null,f=r.getTop(),g=f.googletag&&f.googletag.cmd,q=f.googletag&&f.googletag.pubads&&d.isFunction(f.googletag.pubads)&&f.googletag.pubads(),n=b&&-1!==m.indexOf(b);if(g&&q&&d.isFunction(q.refresh)&&n)k.on("sendDt",function(d,s){d===h.DT_CODES.PING&&s===b&&f.__IntegralASExec.adSlotData[a].GPTSlot&&(r.execAtEndOfThread(function(){g.push(function(){q.refresh([f.__IntegralASExec.adSlotData[a].GPTSlot])})}),
k.trigger("addThrottledProp",h.DT_SLOT.ENVIRONMENT,"ir",b),k.trigger("adSessionComplete"))})};(function(){var c=ea();if(c&&d(c).isArray()&&0<c.length){c=c.join("::");try{var e=l.asid,f=r.getTop();f.__IntegralASExec=f.__IntegralASExec||{};f.__IntegralASExec.adSlotData=f.__IntegralASExec.adSlotData||{};f.__IntegralASExec.adSlotData.hasOwnProperty(c)?f.__IntegralASExec.adSlotData[c].refreshCount+=1:f.__IntegralASExec.adSlotData[c]={refreshCount:0,refreshSessionId:e,GPTSlot:a()};var g=f.__IntegralASExec.adSlotData[c];
k.trigger("addThrottledProp",h.DT_SLOT.ENVIRONMENT,"ar",(0===g.refreshCount?"self":g.refreshSessionId)+"."+g.refreshCount)}catch(q){k.trigger("error",h.ERROR_CODES.AD_REFRESH)}b(c)}else k.trigger("error",h.ERROR_CODES.AD_REFRESH)})()},{tier:h.TIERS.ENVIRONMENT,applies:function(d,a,b){return b.isGPTRefreshable()}});var xb=function(){var m,a,b=function(a,b){-1!==b.indexOf("https")&&(b+="*");return b.replace(/^https?:\/\//,"")};return{isApplicable:function(a,b,f){return a.hasAncestorOrigins&&a.hasAncestorOrigins()&&
b.on("ancestor")&&f.xDomainIframe},isStarted:function(){return!!a},start:function(){try{m=r.getWindow().location.ancestorOrigins,a=!0}catch(b){k.trigger("error",h.ERROR_CODES.ANCESTOR_ORIGINS)}},getMyFrameDepth:function(){return m&&m.length||0},getTopDomain:function(){return d.last(m)},sendOriginList:function(){var a;a="ao:"+(m?d(m).map(b).reverse():[]).join(",");k.trigger("addOutputItem",{output:a},"tpiLookup",{type:h.DT_CODES.THIRD_PARTY,standalone:!0,encode:!0});k.trigger("sendDt",h.DT_CODES.THIRD_PARTY)}}},
Ub=function(m,a,b,c,e){var f=function(a,b,c){e.addItem({output:a+"."+b+"."+c},"ctpl")},g=function(e){try{a.diagnostic("c");var g=e.length,p=0,s=0;f(g,0,0);d(e).each(function(a,b){m.send(b.replace("%%CBS%%",c.getCacheBustId()),function(){f(g,p,++s)},!0);f(g,++p,s)})}catch(w){b.add(h.ERROR_CODES.AT_SEND)}};return{init:function(){try{var a=(new T).fullDom;"/"!==a.slice(-1)&&(a+="/");a+="tpl?asId="+l.asid;m.jsonp(a,g)}catch(c){b.add(h.ERROR_CODES.AT_INIT)}}}},Ib=function(d,a,b,c){return{enabled:"true"===
l.useBapiCallback,callback:function(a){b.trigger("sendDiag");try{"true"===l.accountForSadImps&&c.measure(a),l._onAPIResult&&l._onAPIResult(a)}catch(f){d.add(h.ERROR_CODES.BAPI_CALLBACK),b.trigger("sendDiag","bapiClient")}}}},mb=function(){return{createInstance:function(d,a,b,c){return t.isDomless()?new hc:new ic}}},ic=function(){var m=h.BROWSERS,a=function(a){return b()===a},b=function(){var a="u",b=r.getWindow();try{d.isDef(b.opera)&&d.isDef(b.opera.buildNumber)?a=m.OPERA:d.isDef(b.mozInnerScreenY)?
a=m.GECKO:d.isDef(b.chrome)&&d.isDef(b.chrome.csi)?a=m.CHROME:d.isDef(b.msWriteProfilerMark)&&d.isDef(b.crypto)?a=m.MSEDGE:d.isDef(b.attachEvent)||d.isDef(b.msCrypto)?a=m.IE:d.isDef(b.WebKitPoint)&&(a=m.WEBKIT)}catch(c){}return a},c=function(){var a=!1,b=r.getWindow();d.isDef(b.navigator)&&d.isDef(b.navigator.userAgent)&&(a=b.navigator.userAgent);return a};return{browserIs:a,hasIntersectionObserver:function(){return"function"===typeof IntersectionObserver},hasAncestorOrigins:function(){var a=r.getWindow().location;
return!(!a||!a.ancestorOrigins)},hasPostMessage:function(){var a=r.getWindow();return!(!a||!d.isFunction(a.postMessage))},getDocumentMode:function(){var a=r.getDoc();return a&&a.documentMode?a.documentMode:h.NA},getBrowserType:b,getUserAgent:c,params:function(){var c=b(),f;f=["{45EA75A0-A269-11D1-B5BF-0000F8051515}","{3AF36230-A269-11D1-B5BF-0000F8051515}","{89820200-ECBD-11CF-8B85-00AA005B4383}"];var g=h.NA,q=r.getDoc(),n=q.createElement("div");if(a(m.IE))try{if("-ms-ime-align"in q.documentElement.style)g=
"11";else for(n.style.behavior="url(#default#clientcaps)",q=0;q<f.length&&!(g=n.getComponentVersion(f[q],"componentid").replace(/,/g,"."));q++);}catch(p){}f=g;g=h.NA;n=r.getWindow();d.isDef(n.navigator)&&d.isDef(n.navigator.appName)&&(g=n.navigator.appName.toLowerCase()[0]);return{br:c,abv:f,an:g}},isAndroidWebViewBrowser:function(){var a=c(),b=["SamsungBrowser","FB_IAB","Silk"],g=function(){return d(b).findFirst(function(b,c){return N.contains(a,c)})};return N.contains(a,"Android")&&g()},getIOSVersion:function(){var a,
b;(a=c())&&(a=a.match(/OS\s\d+/))&&0<a.length&&(b=(b=a.toString().match(/\d+/))&&0<b.length&&parseInt(b.toString()));return b}}},hc=function(){var d=function(){return!1},a=function(){return h.NA};return{getDocumentMode:a,getBrowserType:function(){return"u"},getIOSVersion:function(){},params:function(){return{br:"u",abv:a(),an:a()}},browserIs:d,getUserAgent:d,hasPostMessage:d,hasAncestorOrigins:d,hasIntersectionObserver:d,isAndroidWebViewBrowser:d}},qb=function(){return{createInstance:function(d,a){return t.isDomless()?
new jc(a):new kc(d,a)}}},kc=function(m,a){var b=function(a,b){var c,e,f=l.contextNode.parentNode;b=b||a;a=1<arguments.length?a:"script";c={script:['<script type="text/javascript" src="','">\x3c/script>'],iframe:['<iframe width="100%" height="100%" frameborder="0" vspace="0" hspace="0" scrolling="no" marginheight="0" marginwidth="0" src="','"></iframe>'],img:['<img src="','"/>']}[a];e=c[0]+b+c[1];"true"===l.forceAppend?"script"!==a?(c=K.createElement("DIV"),c.innerHTML=e,f.appendChild(c.childNodes[0])):
(c=K.createElement("SCRIPT"),c.src=b,f.appendChild(c)):K.write(e)},c=function(a,b,c){var e=!c&&y.getXHR2();e?(e.open("POST",a),e.onreadystatechange=function(){4===e.readyState&&200===e.status&&b&&b()},e.send()):(c=u.createImage(),b&&(c.onload=b),c.src=a)},e=function(a,b,c,e){var f=K.createElement("script");c=c||l.contextNode.parentNode;f.type="text/javascript";f.src=a;b&&(f.onload=b);e&&(f.setAttribute("defer",""),f.setAttribute("async",""));d.isDef(c)&&c.appendChild(f)},f=function(a){d.isFunction(a)?
a({iasImpId:l.asid}):a&&"string"===typeof a&&c(a,void 0,!0)},g=function(b,c,f,d){e(a.wrap(b,c,f,d))};k.on({addNode:b,send:c,exec:e,notify:f,jsonp:g});return{addNode:b,send:c,exec:e,notify:f,jsonp:g}},jc=function(m){var a=function(a,b){b=b||a;a=1<arguments.length?a:"script";k.request("omidVerificationClient")["script"===a?"injectJavaScriptResource":"sendUrl"](b,function(){})},b=function(a,b){a=encodeURI(a);k.request("omidVerificationClient").sendUrl(a.toString(),b||function(){})},c=function(a,b){k.request("omidVerificationClient").injectJavaScriptResource(a,
b||function(){})},e=function(a){d.isFunction(a)?a({iasImpId:l.asid}):a&&"string"===typeof a&&b(a)},f=function(a,b,e,f){c(m.wrap(a,b,e,f))};k.on({addNode:a,send:b,exec:c,notify:e,jsonp:f});return{addNode:a,send:b,exec:c,notify:e,jsonp:f}},t=function(){var m="undefined"===typeof window,a="undefined"!==typeof x&&"undefined"!==typeof top&&x!==top,b=function(){var a=!1;if(m)a=!0;else try{a=!!top.document}catch(b){}return a}(),c=function(){return m||d.isDef(r.getWindow().mraid)},e=function(){return!m&&
d.isDef(r.getWindow().mraid)},f=function(){var a=!1;if(!m)var b=(a=r.getWindow().inmobi)&&a.IASDocumentVideoBuffer,a=a&&b&&d.isFunction(b.addVideoEventListener),a=e()&&!!a;return a},g=function(){var a;if(!(a=-1!==l.mode.indexOf("jsvid"))){var b;a=!1;if(!m){var c=k.request("avidJsClient");if(c.isAvidAvailable())try{b=c.getAvidAdSessionContext(),a=b.mediaType===h.MEDIA_TYPE.VIDEO}catch(e){}}(b=a)||(b=k.request("omidVerificationClient"),a=!1,c=k.request("omidAdSessionContext"),b&&c&&(a=c.mediaType===
h.MEDIA_TYPE.VIDEO),b=a||f());a=b}return a},q=function(){return l.mobOrTab},n=function(a){return!1===d(l.customViewability).isArray()?!1:0<d(l.customViewability).filter(function(b,c){return N.contains(c.id,a)}).length},p=function(){return n("grpm")||l.use100v};return{embedded:a,friendly:b,isFriendlyToParent:function(a){var b,c;if(m)a=!0;else{try{c=T(a.document.referrer),b=c.hostname===a.location.hostname}catch(e){}a=b}return a},friendlyIframe:a&&b,xDomainIframe:a&&!b,getTagTime:function(){return r.now()-
l.birthdate},getPageTime:function(){var a=h.NA;!m&&d.isDef(x.chrome)&&d.isDef(x.chrome.csi)&&d.isFunction(x.chrome.csi)&&(a=r.round(chrome.csi().pageT));return a},isVideo:g,isMobileApp:c,isSpecifiedAd:function(){var a=!1;m||(a=(a=l._cl_adpath)&&d.isStr(a));return a},isAvid:function(){return!m&&d.isDef(r.getWindow().avid)},isOmid:function(){var a=k.request("omidVerificationClient");return a&&a.isSupported()},isOmidNative:function(){return(new da).accepts()},isOmidForWeb:function(){return(new Aa).accepts()},
isDomless:function(){return m},isAvidNative:function(){var a=!1;if(!m){var b=k.request("avidJsClient");b.isAvidAvailable()&&(a=b.getAvidAdSessionContext().avidAdSessionType,a=a===h.AVID.AD_SESSION_TYPE.MANAGED_DISPLAY||a===h.AVID.AD_SESSION_TYPE.MANAGED_VIDEO)}return a},isBustedIframe:function(){var a=!1;m||(a=void 0!==ia());return a},isMraid:e,isSafeFrame:function(){var a=!1;m||(a=d(r.getWindow().$sf).isObj(!1)&&d(r.getWindow().$sf.ext).isObj(!1));return a},isInMobiMraidVideo:f,isDeviceTypeGroupMobile:q,
usesIASFullyInViewCustomMetric:function(){return n("fiv")||l.use100v},isNativo:function(){var a=!1;m||(a=(a=l._cl_adpath)&&N.contains(a,".ntv"));return a},usesGroupMCustomMetric:p,isCeltra:function(){var a=!1;m||(a=Ba().isApplicable());return a},usesGroupMCustomMetricMobilePassThru:function(){return p()&&q()},usesZeroPivCustomMetric:function(){return!1===d(l.customViewability).isArray()?!1:0<d(l.customViewability).filter(function(a,b){return d(b.thresholds).findFirst(function(a,b){return 0===b.piv})}).length},
isGPTRefreshable:function(){var e;if(e=!m)if(e=!c())if(e=!g())if(e=a)if(e=b)if(e="jload"===l.mode)try{var f=r.getTop();e=!!f.googletag.apiReady&&d.isFunction(f.googletag.pubads)&&d.isFunction(f.googletag.pubads().refresh)}catch(q){e=!1}return e}}}(),y={addEvent:function(m,a,b,c){d.isDef(m.addEventListener)?"mouseenter"===a?m.addEventListener("mouseover",y.mouseEnter(b),c):"mouseleave"===a?m.addEventListener("mouseout",y.mouseEnter(b),c):m.addEventListener(a,b,c):d.isDef(m.attachEvent)&&("DOMContentLoaded"===
a&&(a="load"),m.attachEvent("on"+a,b))},removeEvent:function(m,a,b){d.isDef(m.removeEventListener)?("mouseenter"===a?(a="mouseover",b=y.mouseEnter):"mouseleave"===a&&(a="mouseout",b=y.mouseEnter),m.removeEventListener(a,b)):d.isDef(m.detachEvent)&&m.detachEvent("on"+a,b)},mouseEnter:function(d){var a=this;return function(b){var c=b.relatedTarget;this===c||a.isAChildOf(this,c)||d.call(this,b)}},isAChildOf:function(d,a){if(d===a)return!1;for(;a&&a!==d;)a=a.parentNode;return a===d},getStyle:function(d,
a,b){var c="",e=K.defaultView&&K.defaultView.getComputedStyle;b=b||"";e?c=(d=K.defaultView.getComputedStyle(d,b))?d.getPropertyValue(a):c:d.currentStyle&&(a=a.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),c=d.currentStyle[a]);return c},getXHR2:function(m,a){var b,c;d.isDef(x.XMLHttpRequest)?(c=new XMLHttpRequest,"withCredentials"in c&&(b=c)):d.isDef(XDomainRequest)&&(b=new XDomainRequest);return b},whenReady:function(m,a){if(t.isDomless())r.setTimeout(function(){m()},50);else{var b=a||
(t.xDomainIframe?K:r.getTop().document),c=function(a){var c=r.setInterval(function(){b.body&&(r.clearInterval(c),a())},50)},e=this;(function(a){var g=function(){a(!0)};d.isFunction(K.addEventListener)?"complete"==b.readyState||"loaded"==b.readyState||"interactive"==b.readyState?r.execAtEndOfThread(g):e.addEvent(b,"DOMContentLoaded",g,!1):c(a)})(m)}},isSandboxed:function(d){var a,b=r.getWindow(),c=!1;if("sandbox"in r.getDoc().createElement("iframe")){try{a=b.frameElement}catch(e){}if(a)d=a.hasAttribute("sandbox");
else{a=!1;b=r.getDoc();if(d.browserIs(h.BROWSERS.CHROME))try{b.domain="hol@#3+~"}catch(f){/Assignment is forbidden for sandboxed iframes/.test(f.message)&&(a=!0)}d=a}c=d}return c},styleElement:function(m,a){if(m&&d(m.style).isObj()&&d(a).isObj()){var b="";d(a).each(function(a,e){b+=a+": "+e+" !important;"});m.style.cssText=b}},nodeIsAbsolutelyPositioned:function(d){return"absolute"===y.getStyle(d,"position")||d.style&&"absolute"===d.style.position}},$=function(m){var a,b=$.callTypeCounter,c=[h.DT_CODES.ADTALK],
e={UNLOAD:-1,ADTALK:-2,VIEWABILITY_READY:-3,VIDEO_EVENTS:-4,DIAGNOSTIC:-5,THIRD_PARTY:-6,QUARTILE_FULLY_INVIEW:-7,LARGE_BILLABLE:-8,SCA:-10},f=function(){var a={},b=h.DT_CODES;d("UNLOAD ADTALK VIEWABILITY_READY VIDEO_EVENTS DIAGNOSTIC THIRD_PARTY QUARTILE_FULLY_INVIEW LARGE_BILLABLE SCA".split(" ")).each(function(c,f){a[b[f]]=e[f]});return a};a=function(){var a=f()[m],e=b&&b[m];d.isDef(e)&&0!==e&&d(c).contains(m)&&(a=a+"."+e);e=b[m];b[m]=d.isDef(e)?e+1:1;return a}();return{callType:m,enumerator:a}};
$.callTypeCounter={};var Hb=function(m,a,b,c,e,f,g,q){var n=0,p=0,s=!1,w=function(a,f,q,w,m,D){q=q||!b.on("postDts");var t=a===h.DT_CODES.DIAGNOSTIC||a===h.DT_CODES.ADTALK||a===h.DT_CODES.MACRO||a===h.DT_CODES.SCA||a===h.DT_CODES.XSCA||a===h.DT_CODES.EXTERNAL||a===h.DT_CODES.LARGE_BILLABLE;if(c.impressionIsIdentifiable()&&(t||"n"!==g.getCurrentLoc()))try{var u=l.dtBaseURL,x=new T(u,!0),y=r.now();k.trigger("preSendDt",a);u||(x.path("dt"),b.on("usedtdomain")&&x.sub("dt"));v(x,a,f);m&&m.field&&x.setParam(m.field,
m.value);w||I(x,a);k.trigger("send",x,function(){p+=1;n=r.now()-y;d.isFunction(D)&&D()},q);a===h.DT_CODES.UNLOAD&&(s=!0);e.cleanup()}catch(H){__IntegralASDiagnosticCall("dt-"+a,H),k.trigger("error",h.ERROR_CODES.PHONE_HOME)}};m=function(){s||w(h.DT_CODES.UNLOAD,-1,!0)};var D=function(a,c){var e={bapi:"a",bapiClient:"b",jload:"c",jss:"d",jsi:"e"},f=l.mode,e=e[a]||e[f];b.on(c||f+"Diag")&&e&&w(h.DT_CODES.DIAGNOSTIC,-5,!0,!0,{field:"bkp",value:e})},v=function(a,b,f){var g=new $(b);f=d.isDef(f)?f:g.enumerator;
a.setParam("asId",l.asid);f={c:c.getCacheBustId(),pingTime:f,time:t.getTagTime(),type:b};e.filterOutput(function(a){var c=a.minDt&&(!a.type||a.type===b);c&&a.oneTime&&(a.flagForRemoval=!0);return c},f);a.setParam("tv",f)},I=function(c,d){var s,w={};e.filterOutput(function(a){return a.standalone&&!a.minDt&&a.type===d},function(a,b){c.setParam(a,b.replace("%3A",":"))});g.fastForward();if(d===h.DT_CODES.CUSTOM||d===h.DT_CODES.UNLOAD||d===h.DT_CODES.VIDEO_EVENTS||d===h.DT_CODES.FULLY_INVIEW||d===h.DT_CODES.PING||
d===h.DT_CODES.VIEWABILITY_READY||d===h.DT_CODES.ADTALK)w.clog=q,t.isVideo()&&(s=t.isOmid()&&!t.isOmidForWeb()?"omidVideoEventsString":"videoEventsString",(s=k.request(s))&&!s.isEmpty()&&(w.ve=s));d===h.DT_CODES.UNLOAD&&(w.ndt=p);-1!==l.mode.indexOf("jsvid")&&(w.vv=k.request("videoVersion"));w.NULL1=b.output();w.NULL2=g.stringify(10);w.em=t.embedded;w.fr=t.friendly;w.e=a.toString();w.tt=l.mode;w.dtt=n;e.filterOutput(function(a){var b=!a.standalone&&!a.minDt&&(!a.type||a.type===d);b&&a.oneTime&&(a.flagForRemoval=
!0);return b},w);c.setParam("tv",w);c.setParam("br",f.getBrowserType())};k.on({sendDt:function(a,b,c){w(a,d.resolve(b),void 0,void 0,void 0,c)},sendMinDt:function(a,b){w(a,b,void 0,!0)},sendDiag:D,updateDtCount:function(){p++},unload:m});return{send:w,unload:m,diagnostic:D,setViewabilityMod:function(a){}}},J=function(m){var a={},b=!1,c=function(){var a=1===m.nodeType?u.nodeIsHidden(m):0===m.width||0===m.height;return b?!1:a},e=function(){var b={};d(a).each(function(a,c){b[a]=r.round(c)});return b},
f=function(a){return d.isNumeric(a)||d.isUndef(a)},g=function(){return r.round(a.width)*r.round(a.height)};(function(){var b;m!==x.parent&&(1!==m.nodeType?a=m:d.isDef(m.getBoundingClientRect)&&(b=u.getRect(m),d(a).mixin({x:d.useIfDef(b.x)||b.scrX,y:d.useIfDef(b.y)||b.scrY,scrX:b.scrX,scrY:b.scrY,width:b.width,height:b.height})))})();return{hasValidDims:function(){return f(a.scrX)&&f(a.scrY)&&d.isNumeric(a.width)&&d.isNumeric(a.height)},toString:function(){var a=e();return[a.scrX,a.scrY,a.width,a.height].join(".")},
getRounded:e,set:function(b,c){a[b]=c},isHidden:c,treatAsPlaceholder:function(){b=!0},area:g,isMrcLarge:function(){return g()>=h.MRC_LARGE_AD_SIZE},isOneByOne:function(){return c()&&1>=g()}}},u={findElementsWithSize:function(m){var a=[],b=function(c){1>u.getNodeArea(c)?d(c.children).each(function(a,c){b(c)}):a.push(c)};b(m);return a},nodeIsHidden:function(d){var a=this.getRect(d),b=0!==parseInt(y.getStyle(d,"width"))&&0===a.width,a=0===a.width||0===a.height;d="hidden"===y.getStyle(d,"visibility");
return b||a||d},calcWinDims:function(){var d,a,b;try{a=u.browserWindowPosition(),b=u.windowSize(),d={scrX:r.round(a.scrX),scrY:r.round(a.scrY),width:r.round(b.width),height:r.round(b.height)}}catch(c){k.trigger("error",h.ERROR_CODES.GET_WIN_DIMENSIONS),d={}}return d},windowSize:function(){var m={},a,b;if(t.isDomless())return{width:0,height:0};if(t.friendly)if(a=top.document,b=a.documentElement,a=a.body,d.isDef(top.innerWidth))m.width=top.innerWidth,m.height=top.innerHeight;else if(d.isDef(b.clientWidth))m.width=
b.clientWidth,m.height=b.clientHeight;else if(d.isDef(a.clientWidth))m.width=a.clientWidth,m.height=a.clientHeight;else throw m.width=m.height=0,"";else d.isDef(x.outerWidth)&&(m.width=x.outerWidth,m.height=x.outerHeight);return m},browserWindowPosition:function(){var m=0,a=0;d.isDef(x.screenX)?(m=x.screenX,a=x.screenY):d.isDef(x.screenLeft)&&(m=x.screenLeft,a=x.screenTop);return{scrX:m,scrY:a}},getNodeArea:function(d){var a=-1;d&&(d=u.getRect(d),a=d.width*d.height);return a},getRect:function(m){var a=
{},b=u.browserWindowPosition();m=m.getBoundingClientRect();d.isUndef(m.x)&&(a.x=m.left,a.y=m.top);d.isUndef(m.width)&&(a.width=m.right-m.left,a.height=m.bottom-m.top);d(a).mixin(m,!0);a.scrX=b.scrX+a.x;a.scrY=b.scrY+a.y;return a},getIeDimObj:function(m){m=m.document;return m.documentElement&&d.isDef(m.documentElement.clientWidth)&&m.documentElement||m.body},getPlaceholderSpan:function(){var m=K.createElement("span");d(m.style).mixin({width:"0px",height:"0px",display:"block",overflow:"hidden",visibiility:"hidden"});
m.innerHTML=".";return m},createImage:function(){var m=t.friendly&&r.getTop().Image;return d.isFunction(m)?new m:new Image},createHiddenIframe:function(d){var a=r.getDoc().createElement("iframe"),b={width:"0px",height:"0px",border:"0",position:"absolute",top:"-10000px",left:"-10000px"};y.styleElement(a,d?{display:"none"}:b);return a},tagNameIs:function(d,a){return d.tagName.toUpperCase()===a.toUpperCase()},getClippedDimensions:function(d,a){var b,c,e,f=1E4,g=1E4;b=y.nodeIsAbsolutelyPositioned(d);
e=!u.tagNameIs(d,"OBJECT");if(null!==d.parentNode&&!b&&e&&!u.tagNameIs(a,"BODY")){e=d;do e=e.parentNode,b=!u.tagNameIs(e,"OBJECT"),c="inline"!==y.getStyle(e,"display"),b&&c&&(b=u.getRect(e),f=b.width<f?b.width:f,g=b.height<g?b.height:g);while(e.parentNode!==K&&e!==a)}return{width:r.round(f),height:r.round(g)}},findChildWithLargestContent:function(d,a){var b=k.request("mobileApp").isMobileAppEnvironment(),c=function(a){for(var c=a;a.parentNode!==d&&"inline"!==y.getStyle(a.parentNode,"display");){var e;
if(!(e=!b)){e=a.parentNode;var f=!0;if("visible"===y.getStyle(e,"overflow")||"visible"===y.getStyle(e,"overflowX")&&"visible"===y.getStyle(e,"overflowY"))f=!1;e=f}e&&(c=a.parentNode);a=a.parentNode}return c},e=null,f=function(a){var b,c,e=null,f=-1;if(a.length)for(b=0,c=a.length;b<c;b++){var w=a[b],h=u.getNodeArea(w),v;if(v=h>f){v=void 0;if(v=w.parentNode===d)if(v=void 0,v="DIV"===w.nodeName)if(v=void 0,v=""===w.style.backgroundImage){var k=v=void 0,r=w.childNodes;for(v=0;v<r.length;v++)1===r[v].nodeType&&
(k=!0);v=!k}v=!v}v&&(e=w,f=h)}e&&(e.hasValidSizeForMobileApp=1<f);return e}(function(b){var c,e,f,d,w=[],m=a||"iframe img a object embed div".split(" ");c=0;for(e=m.length;c<e;c++){f=m[c].toLowerCase();var v=b.getElementsByTagName&&b.getElementsByTagName(f);if(v&&v.length)for(f=0,d=v.length;f<d;f++)w.push(v[f])}return w}(d));f&&(e=c(f),e.hasValidSizeForMobileApp=f.hasValidSizeForMobileApp);return e},screenSize:function(){if(t.isDomless())return{width:0,height:0};var m={width:-1,height:-1};try{d.isDef(x.screen)&&
(m={width:x.screen.width,height:x.screen.height})}catch(a){}return m},calcMonDims:function(){var m=d(u.screenSize()).mixin({scrX:0,scrY:0});d.isDef(screen.availLeft)&&(m={scrX:x.screen.availLeft,scrY:x.screen.availTop,width:x.screen.availWidth,height:x.screen.availHeight});return m},getOurIFrameInTop:function(){for(var d,a=r.getTop(),b=r.getWindow();b!=a;)d=b,b=d.parent;return d},getOurNodeInTop:function(){var d;t.friendly&&(d=t.embedded?(d=u.getOurIFrameInTop())&&d.frameElement:l.contextNode);return d},
getAncestorNodes:function(d){var a=[],b=d.ownerDocument&&d.ownerDocument.documentElement;if(b)for(;d.parentNode!==b;)a.push(d),d=d.parentNode;return a},getTagsNamed:function(d,a){var b,c=a||r.getDoc();try{b=c.getElementsByTagName(d)}catch(e){b=null}return b},containsScriptTagWithSrc:function(m){return!!d(u.getTagsNamed("script")).findFirst(function(a,b){var c=b.src;return d.isFunction(m)?m(c):c===m})},contains:function(m,a){var b=!1;try{b=d.isDef(m)&&d.isFunction(m.contains)&&m.contains(a)}catch(c){}return b},
querySelector:function(d,a){var b;try{b=d.querySelector(a)}catch(c){b=null}return b},nodeIsInWindow:function(d,a){return d.ownerDocument&&(d.ownerDocument.defaultView||d.ownerDocument.parentWindow)===a},setAttributeOf:function(m,a,b){m&&d.isFunction(m.setAttribute)&&m.setAttribute(a,b)},removeAttributeOf:function(m,a){m&&d.isFunction(m.removeAttribute)&&m.removeAttribute(a)},crossQuerySelector:function(m,a){var b,c,e=[l.contextNode.parentNode,r.getDoc()];t.friendly&&e.push(r.getTop().document);if(a&&
t.embedded)try{e.push(r.getWindow().frameElement.ownerDocument)}catch(f){}d(e).each(function(a,e){try{c=u.querySelector(e,m)}catch(f){}!b&&c&&(b=c)});return b},getNodeName:function(d){return d&&d.nodeName},isWindow:function(d){var a=!1;try{a=d&&"object"===typeof d&&"setInterval"in d}catch(b){a=!0}return!!a},getChildWindowsOf:function(h){var a=[];(h=u.getTagsNamed("iframe",h))&&(a=d(h).map(function(a,c){return c.contentWindow}));return a},getFrameId:function(){var d=r.getWindow().frameElement;return d&&
d.id},isViewportVisible:function(d,a){var b=d.innerWidth,c=d.innerHeight,e=b>a.width&&c>a.height;return b*c>a.width*a.height&&e},getTagName:function(d){return d.tagName.toLowerCase()},getAttribute:function(d,a){return d.getAttribute(a)},attributeMatches:function(d,a,b){d=d&&u.getAttribute(d,a);return b.test(d)},isImageTag:function(d){return d&&d.src&&u.tagNameIs(d,"img")},getDimensionFromStyle:function(h){var a,b=y.getStyle(h,"width");h=y.getStyle(h,"height");b&&h&&(a={width:d.getNum(b),height:d.getNum(h)});
return a},getDimensionFromAttributes:function(h){var a,b=u.getAttribute(h,"width");h=u.getAttribute(h,"height");b&&h&&(a={width:d.getNum(b),height:d.getNum(h)});return a},traverseAndFindFirstMatchingNode:function a(b,c){var e,f,d;if(c(b))f=b;else if(d=b.children)for(e=0;e<d.length&&!(f=a(d[e],c));e++);return f},getFirstChildElement:function(a){return a&&a.children&&a.children[0]},isClippable:function(a,b){var c=!0,e="fixed"===y.getStyle(a,"position"),f="hidden"!==y.getStyle(b,"overflow")&&!e;t.isSpecifiedAd()&&
(e||f)&&(c=!1);return c},getElementsDocument:function(a){return a.ownerDocument||a},getElementsWindow:function(a){var b=u.getElementsDocument(a);return b.defaultView||b.parentWindow||a},elementIsEmbedded:function(a){return u.getElementsWindow(a)!==r.getTop()},getParent:function(a){return a.parentNode||a.parent},isNodeXDomainIframe:function(a){var b=!1;if(a&&"IFRAME"===u.getNodeName(a))try{b=!a.contentWindow.document}catch(c){b=!0}return b},isElement:function(a){return 1===a.nodeType}},nb=function(){var a=
{},b=function(b){d.isDef(a[b])?a[b]++:a[b]=1};k.on("error",function(a){a=d(a).isObj()?a.errorCode:a;b(a)});return{list:a,add:b,toString:function(){var b="",e;for(e in a)a.hasOwnProperty(e)&&(b+=e);return b},hasErrors:function(){for(var b in a)return!0;return!1}}},Nb=function(){return{createInstance:function(a,b){return t.isDomless()?new lc:new mc(a,b)}}},mc=function(a,b){var c=function(a){var b=[];if(a&&a instanceof Array)b=d(a).map(function(a,b){return b.val}),b.push(l.adsafeSrc,l.requrl,l.reqquery);
else throw Error("Unexpected data type in ExchangeParser.getUrlList");return b};return{parse:function(e){try{var f,g=c(e),q=g&&g.length&&g.join("|"),n=l.exchList;q&&(f=d(n).map(function(a,b){return 0<=q.indexOf(N.rot(b))?a:void 0}),f.length&&b.addItem({output:f.join(".")},"ex",{type:h.IMPRESSION_EVENT}))}catch(p){a.add(h.ERROR_CODES.EXCHANGE_PARSING)}}}},lc=function(){return{parse:function(a){}}},jb=function(){var a={},b=function(b){var c;d.isUndef(a[b])&&(c=l.jsFeatures,a[b]=!1,-1!==c.indexOf(b)&&
(c=RegExp(b+"(?=$|,)|"+b+":(?!,|$)(.?\\d*(?=,|$))").exec(c)))&&(c=c[1],a[b]=!c||c>100*r.random());return a[b]},c={es:"everySecond",sc:"usesca",ha:"usehaps"},e={},f=function(){var b,f;b=d(c).mapToObj(function(b,c){var e={};e[b]=d.fromBoolToNum(a[c]);return e});f=d(e).mapToObj(function(a,b){var c={};c[a]=d.fromBoolToNum(g(b));return c});f.gm=d.fromBoolToNum(t.usesGroupMCustomMetric());return d(b).mixin(f)},g=function(a){a=l[a];return!0===a||"true"===a||d.isFunction(a)};d(c).each(function(a,c){b(c)});
return{on:b,bootstrapOn:g,bootstrapperHas:function(a){a=d.isStr(a)?[a]:a;return d(a).map(function(a,b){if(d.isDef(l[b]))return 1}).length===a.length},getEnabledScriptUrl:function(a){var c=b("use"+a);a=l.sp_cdnScripts&&l.sp_cdnScripts[a];return c&&a},output:function(){return d(f()).toParams()}}},Bb=function(a){return{calcInitialViewState:function(a,c){var e;e={IN_VIEW:65,OUT_OF_VIEW:25,PARTIAL_VIEW:30};var f={IN_VIEW:75,OUT_OF_VIEW:25,PARTIAL_VIEW:50},g=h.NA;e=c?e:f;d.isDef(a)&&a!==h.NA&&-1<a&&(g=
a>=e.IN_VIEW?h.IN_VIEW:a<=e.OUT_OF_VIEW?h.OUT_OF_VIEW:a>=e.PARTIAL_VIEW?h.PARTIAL_VIEW_PLUS:h.PARTIAL_VIEW_MINUS);return g},calcPercentInView:function(a,c,e,f){var g=0,q=a;a.hasValidDims()&&!a.isHidden()&&(d([c,e,f]).each(function(a,b){if(b.hasValidDims()){var c=q.getRounded(),e=b.getRounded(),f=Math.max(c.scrX,e.scrX),d=Math.max(c.scrY,e.scrY),g=Math.min(c.scrX+c.width,e.scrX+e.width),c=Math.min(c.scrY+c.height,e.scrY+e.height),g=g-f,c=c-d;q=J({scrX:f,scrY:d,width:0<g?g:0,height:0<c?c:0})}}),g=r.round(q.area()/
a.area()*100));return g}}},ob=function(){var a,b=!1,c;a=function(a){var b=[];b.push(a.slice(0,8));b.push(a.slice(8,12));b.push(a.slice(12,16));b.push(a.slice(16,20));b.push(a.slice(20));return b.join("-")}(function(){var a="";try{for(var b,c=x.Uint32Array&&x.crypto&&x.crypto.getRandomValues;32>a.length;)c?(b=new Uint32Array(1),x.crypto.getRandomValues(b),a+=b[0].toString(16)):a+=(16*r.random()|0).toString(16);a=a.slice(0,32)}catch(e){k.trigger("error",h.ERROR_CODES.UID_GENERATION)}return a}());var e=
function(){return l.anId};return{getAsid:function(){return l.asid},getAnId:e,getCacheBustId:function(){var a=new Date,b=Date.parse("Jan 1 "+a.getFullYear()),a=a.getTime()-b;return d.toBase(a,62)},getFwId:function(){return e()||l.advEntityId+"-"+l.pubEntityId},impressionIsIdentifiable:function(a){a&&(b=!0);return b},unq:a,getAvidIds:function(){return c},setAvidAdSessionContext:function(a){c=a}}},gb=function(a,b){return{init:function(c){a.jsonp(c,function(a){b.send(h.DT_CODES.THIRD_PARTY,void 0,!1,
!0,{field:"tpiLookup",value:a})},!1,"callback")}}},nc=function(a,b,c,e){return{getTime:function(){return 1E3*a.getTimeInViewInSeconds()},getTask:function(){return function(){var f=a.getTimeInViewInSeconds(),g=a.getTimeInViewForRts();d.isDef(e)&&k.trigger("addOutputItem",{output:e},"metricId",{type:b});k.trigger("sendDt",b,f);if(c[g])c[g]()}}}},Gb=function(){return{createPingJobs:function(a,b,c,e){return d(b.getTimeThresholds()).map(function(b,d){return new nc(d,a,c,e)})}}},ta=function(){var a=function(a,
b){-1!==a.indexOf(b+"&")&&(b+="&");return a.replace(b,"")},b=function(a,b,c){var d=a.indexOf("?");b=b+"="+c;if(-1===d)return a+"?"+b;d++;return a.slice(0,d)+b+"&"+a.slice(d)},c=function(){return"__IntegralAS_"+l.asid.replace(/\-/g,"")+"_"+r.round(1E4*Math.random())};return{wrap:function(e,d,g,q){var n=c(),p,s,w;q=q||"ias_callback";e=""+e;RegExp(q).test(e)&&(p=RegExp("("+q+"=)(.[^&]*)").exec(e)[0],s=p.split("=")[1],w=N.stringToFn(s),e=a(e,p));x[n]=function(a){d(a);g&&w&&w(a);x[n]=void 0};return e=
b(e,q,n)},wrapToGlobal:function(a){var b=c();x[b]=function(c){a(c);x[b]=void 0};return b}}},Jb=function(a,b,c){var e=function(a,b){var c=a,e;b&&(e=","+d(b).stringify(function(a,b){return a+":"+b},","),c=T(a,!0),c.appendToParamValue("adsafe_jsinfo",e),c=c.toString());return c},f={jss:{isFW:!0,nodeType:"script"},rjss:{isFW:!0,nodeType:"script"},jsi:{isFW:!0,nodeType:"iframe"},rjsi:{isFW:!0,nodeType:"iframe"},jload:{impressionMethod:function(c){a.enabled?k.trigger("jsonp",c,a.callback,!0):k.trigger("send",
c,function(){k.trigger("sendDiag")},!b.on("postMon"))}},bapi:{impressionMethod:function(b){k.trigger("jsonp",b,a.enabled?a.callback:d.noop,a.enabled?!0:!1)}},jsapi:{isFW:!0,impressionMethod:function(b){k.trigger("jsonp",b,a.enabled?a.callback:d.noop,a.enabled?!0:!1)}},jsvid:{manualDefer:!0,impressionMethod:function(c){k.on("adImpression",function(f,n){var p;try{p=e(c,n),a.enabled?k.trigger("jsonp",p,a.callback,!0):k.trigger("send",p,d.noop,!b.on("postMon"))}catch(s){__IntegralASDiagnosticCall("jsvidimp",
s,l)}})}},fwjsvid:{isFW:!0,manualDefer:!0,impressionMethod:function(a){var b="false"===l.fwMonitoring,c=function(a){a=a.split("/");a[3]="db2";a[4]="video";return a.join("/")};b&&k.trigger("jsonp",c(a),function(a){k.trigger("videoBlockResult",a)});k.on("adImpression",function(c,f){var n;try{var h;if(h=b)h=c&&d.isBool(c.integral_didBlock)&&0<=c.integral_timeToDecision;h&&(a=a.replace(/(adsafe_jsinfo=)([^&]*)/,"$1$2,abc:"+(c.integral_didBlock?1:0)+",abct:"+c.integral_timeToDecision));n=e(a,f);k.trigger("send",
n,d.noop,!0)}catch(v){__IntegralASDiagnosticCall("fwjsvidimp",v,l)}})}},jspix:{nodeType:"img"}};return new function(){var a=function(a){var b=-1===a.indexOf("?")?"?":"&";return a+b},b=f[l.mode],e=!!b.isFW,d=function(a){var b;b=k.request("mobileApp").isMobileAppEnvironment()&&l.mobFwUrl?l.mobFwUrl:a?l.adsafeSrc:l.requrl;a||(b+="?"+l.reqquery);return b}(e),s=d.indexOf("BEGIN__ADSAFE"),w=-1!==s,h=w?d.slice(s):"",a=w?d.slice(0,s):a(d);return{isFW:e,baseUrl:a,macroUrl:h,sendImpression:function(a){var e=
function(){b.nodeType?k.trigger("addNode",b.nodeType,a):b.impressionMethod(a)};if(c||b.manualDefer)e(a);else if(!b.manualDefer)k.on("adImpression",function(){e(a)})}}}},r={execAtEndOfThread:function(a){r.setTimeout(a,0)},now:function(){return(new Date).getTime()},random:function(){return Math.random()},round:function(a){return Math.round(a)},ceil:function(a){return Math.ceil(a)},floor:function(a){return Math.floor(a)},min:function(){return Math.min.apply(null,arguments)},max:function(){return Math.max.apply(null,
arguments)},getWindow:function(){return x},getTimeoutScope:function(){return t.isDomless()&&t.isOmid()?k.request("omidVerificationClient"):x},setInterval:function(a,b){return r.getTimeoutScope().setInterval(a,b)},setTimeout:function(a,b){return r.getTimeoutScope().setTimeout(a,b)},clearInterval:function(a){r.getTimeoutScope().clearInterval(a)},clearTimeout:function(a){r.getTimeoutScope().clearTimeout(a)},getMaxNumber:function(){return Number.MAX_VALUE},getTop:function(){t.isDomless();return top},
getDoc:function(){t.isDomless();return K},getIntersectionObserver:function(a,b){t.isDomless();return new IntersectionObserver(a,b)},pow:function(a,b){return Math.pow(a,b)}},wb=function(){return{createInstance:function(){return t.isDomless()?new oc:new pc}}},pc=function(){var a,b=!1,c=!1,e=k.request("features"),f=new fa,g=function(){var b;b=923747==l.anId||925955==l.anId;e.on("blur")||e.on("abcAudit")&&b?(b=r.getWindow(),b=t.friendly&&b.top.document&&(d.isFunction(b.top.document.hasFocus)||d(b.top.document.hasFocus).isObj())&&
!b.top.document.hasFocus()||(d.isDef(a.prop)?r.getDoc()[a.prop]:null)):b=d.isDef(a.prop)?r.getDoc()[a.prop]:null;return b},q=function(){var b=r.getWindow(),c=function(){f.run(g())};y.addEvent(b,"focus",c,!0);y.addEvent(b,"blur",c,!0);a.event&&y.addEvent(r.getDoc(),a.event,c,!0)};a=function(){var a="hidden",c="visibilitychange",e=r.getDoc();d.isUndef(e.hidden)?d(["moz","ms","webkit"]).each(function(f,g){var q=g+"Hidden";d.isDef(e[q])&&(a=q,c=g+c,b=!0)}):b=!0;return b?{prop:a,event:c}:{}}();return{isHidden:g,
onHiddenChange:function(a){f.push(a);c||(c=!0,q())},supportsVisAPI:function(){return b}}},oc=function(){return{isHidden:function(){return!1},onHiddenChange:function(a){},supportsVisAPI:function(){return!0}}},yb=function(){return{createInstance:function(a,b){return t.isDomless()?new qc:new rc(a,b)}}},rc=function(a,b){var c,e=function(a){for(var b in a)if(a.hasOwnProperty(b)){var c=a[b];(""===c||"null"===c||"undefined"===c||null===c||d.isUndef(c))&&delete a[b]}return a},f=function(a){var b={},c,e;for(e in a)a.hasOwnProperty(e)&&
(c=a[e],d.isUndef(b[c])?b[c]=e:b[c]+=e);a={};for(e in b)b.hasOwnProperty(e)&&(c=b[e],a[c]=e);return a},g=function(){var g,n=function(){var a={};try{a.q=b.getWindow().parent.parent.parent.parent.parent.parent.parent.parent.parent.parent.location.href}catch(c){var e=c.message,e=e.substring(e.lastIndexOf("<")+1,e.lastIndexOf(">")),f;if(f=d.isDef(e)){var g=b.getWindow();f=!1;d.isDef(g.navigator)&&d.isDef(g.navigator.userAgent)&&(g=g.navigator.userAgent.match(/Firefox\/([\.0-9]+)/),null!==g&&2==g.length&&
(g=g[1].split("."),3==parseInt(g[0],10)&&6>=parseInt(g[1],10)&&(3==g.length?13>=parseInt(g[2],10)&&(f=!0):f=!0)))}f&&(a.g=e)}return a},p={};try{p.a=encodeURIComponent(top.location.href)}catch(s){}try{p.b=encodeURIComponent(parent.location.href)}catch(w){}if(t.embedded){try{p.c=encodeURIComponent(parent.document.referrer)}catch(h){}try{p.e=encodeURIComponent(x.document.referrer)}catch(v){}}try{"jsi"!==l.mode&&(p.d=encodeURIComponent(x.location.href))}catch(k){}try{p.f=encodeURIComponent(l.jsref)}catch(r){}try{g=
n(),p.g=encodeURIComponent(g.g||""),p.q=encodeURIComponent(g.q||""),a.isStarted()&&!g.g&&1<a.getMyFrameDepth()&&(p.g=encodeURIComponent(a.getTopDomain()))}catch(B){}p=e(p);p=f(p);g=[];for(var A in p)p.hasOwnProperty(A)&&g.push({key:A,val:p[A]});g.sort(function(a,b){return a.val.length>b.val.length?1:a.val.length<b.val.length?-1:0});return c=g};return{detectTopURL:g,getDetectedURLs:function(){return c?c:g()}}},qc=function(){return{detectTopURL:function(){return[]},getDetectedURLs:function(){return[]}}},
vb=function(a){var b=!1;return{measure:function(c){(b=0===c.rsa)&&a.trigger("notify",l._onSuspicious)},skipAsFraudulent:function(){return b}}},zb=function(){var a=[],b={},c={sl:"n"},e=0,f,g,q={i:0,o:0,n:0,pp:0,pm:0},n=function(a){var b={},c=a.winDimensions,e=a.adDimensions;d.isDef(c)&&c.hasValidDims()&&(b.wc=c);d.isDef(e)&&e.hasValidDims()&&(b.ac=e,b.am=a.method,b.cc=a.containerDimensions);d({piv:"percentInView",obst:"obstructed",th:"tabHidden",reas:"reason"}).each(function(c,e){var f=a[e];d.isDef(f)&&
(b[c]=f)});c=d(b).toParams();return""===c?"":","+c},p=function(a,c){var e=new fc(c);return b[a]=e},s=function(a,b){return(b||"")+{inView:"i",outOfView:"o",na:"n",partialViewMinus:"pm",partialViewPlus:"pp"}[a]},w=function(){d(c).each(function(b,c){q[c]+=a.length?g-e:g});e=g},D=function(b){a.length&&w();d(b).each(function(a,b){var e=c[a];e!==b&&"n"===e&&(q[b]+=q.n);c[a]=b});a.length||w()},v=function(a){var c,e=a.adDimensions?a.adDimensions.getRounded():{width:0,height:0};c=n(a);var f={sl:s(a.viewState)};
g=t.getTagTime();D(f);f.t=g;c=d({toString:function(){d(b).each(function(a,b){b.fastForward()});return"{"+d(f).toParams()+this.details+this.breakdowns+"}"},details:c,breakdowns:{piv:[],as:[],toString:function(){var a,b=function(a,b){return b.duration+"~"+b.state};a=""+("piv:["+d(this.piv).stringify(b)+"]");a+=",as:["+d(this.as).stringify(b)+"]";return",bkn:{"+a+"}"}}}).mixin(f);d(c).mixin(a);c.width=e.width;c.height=e.height;d.isUndef(c.percentInView)&&(c.percentInView=h.PIV_NA);d.isUndef(c.reason)&&
(c.reason="");return c};(function(){p("piv",function(a){var b,c=a.percentInView,e=[1,25,30,50,75];100===c||0===c?b=c:(d(e).each(function(a,f){d.isUndef(b)&&c<f&&(b=e[a-1])}),d.isUndef(b)&&(b=e[e.length-1]));return b});p("as",function(a){var b=h.NA;a=a.adDimensions?a.adDimensions.getRounded():{width:b,height:b};return a.width+"."+a.height})})();return{fastForward:function(){g=t.getTagTime();w()},registerLocation:function(e){var g,p=!1;c.sl==s(e.viewState)&&a.length?(g=new v(e),a[a.length-1].details=
g.details):(g=new v(e),a.push(g),f=e.viewState,p=!0);k.trigger("newScreenEvent",g);d(b).each(function(b,c){-1!=="piv|as".indexOf(b)?(p&&c.clear(),c.addState(g),a[a.length-1].breakdowns[b]=c.get()):c.addState(g)});return g},stringify:function(b){var c="";a.length&&(c=d({slTimes:"{"+d(q).toParams()+"}",slEvents:"["+a.slice(-b).join(",")+"]",slEventCount:a.length}).toParams());return c},createViewabilityTracker:p,getCurrentLoc:function(){return s(f)}}},N={hashCode:function(a){var b=0,c,e,d;if(0===a.length)return b;
c=0;for(d=a.length;c<d;c++)e=a.charCodeAt(c),b=(b<<5)-b+e,b|=0;return b},rot:function(a){return a.replace(/[a-zA-Z]/g,function(a){return String.fromCharCode(("Z">=a?90:122)>=(a=a.charCodeAt(0)+13)?a:a-26)})},stringToFn:function(a){var b,c=x,e=a.split(".");for(a=0;a<e.length;a++)if(b=c,c=c[e[a]],d.isUndef(c)||a===e.length-1&&!d.isFunction(c))return!1;return function(){c.apply(b,arguments)}},stringToProp:function(a){var b=r.getWindow(),c=a.split(".");for(a=0;a<c.length&&(b=b[c[a]],!d.isUndef(b));a++);
return b},contains:function(a,b){return d.isStr(a)?-1!==a.indexOf(b):!1},trim:function(a){return d.isFunction(a.trim)?a.trim():a.replace(" ","")}},sc=function(){var a=function(){var a=function(a){return a&&a.width&&30<a.width&&a.height&&30<a.height},b=function(b){b=u.getDimensionFromAttributes(b);return a(b)};return{hasValidDimensions:function(c){var e;(e=b(c))||(c=u.getDimensionFromStyle(c),e=a(c));return e},hasValidDimentionAttributes:b}}(),b=/GoogleActiveViewClass/,c=/DfaVisibilityIdentifier_/,
e=/doubleclick.net\/pcs\/click?/,d=/_blank/,g=function(a){var e=u.tagNameIs(a,"div"),d=u.attributeMatches(a,"class",b);a=u.attributeMatches(a,"id",c);return e&&d&&a};return{getDFPGoogleDiv:function(a){return u.traverseAndFindFirstMatchingNode(a,g)},getClickableImage:function(b){var c,g=(b=u.getFirstChildElement(b))&&u.tagNameIs(b,"a"),s=u.attributeMatches(b,"href",e),w=u.attributeMatches(b,"target",d);g&&s&&w&&(b=u.getFirstChildElement(b),u.isImageTag(b)&&a.hasValidDimentionAttributes(b)&&(c=b));
return c},getNodeMatchingMinimumSize:function(b){return u.traverseAndFindFirstMatchingNode(b,a.hasValidDimensions)}}},tc=function(){var a=sc(),b=function(a,b){b.tag=u.getTagName(a);b.size=u.getDimensionFromAttributes(a)||u.getDimensionFromStyle(a)};return{getDFPValue:function(c){var e;if(e=a.getDFPGoogleDiv(c)){var d;c={type:0};if(e)if(c.type=1,d=a.getClickableImage(e))c.type=2,b(d,c);else if(e=a.getNodeMatchingMinimumSize(e))c.type=3,b(e,c);e=c}else if(e={type:0},c=a.getNodeMatchingMinimumSize(c))e.type=
4,b(c,e);return e}}};M("viewport",[],function(){var a={width:4,height:4},b=function(c,e){if(c!==e&&!u.isViewportVisible(c,a))return c;if(c!==e&&t.isFriendlyToParent(c))return b(c.parent,e)},c=function(){var a=r.getWindow();return b(a,r.getWindow().top)},e=function(){return"undefined"!==typeof c()};return{MIN_VISIBLE_DIM:a,isHidden:e,isCurrentIframeTheHiddenFrame:function(){var b,c=r.getWindow();u.isViewportVisible(c,a)?e()&&(b=!1):b=!0;return b},getWindowWithHiddenViewport:c}});var uc=function(a){var b,
c,e=function(e){b=a.setInterval(e,100);c=a.setTimeout(function(){d()},42E4)},d=function(){b&&(a.clearInterval(b),b=null);c&&(a.clearTimeout(c),c=null)};return{onResize:function(b){var c=a.innerWidth,n=a.innerHeight,p=!1;e(function(){var e;e=a.innerHeight;(e=a.innerWidth!==c||e!==n)&&(p=!0);p&&!e&&(b(),d(),p=!1);c=a.innerWidth;n=a.innerHeight})}}};M("adStuffingDetector",["viewport"],function(a,b){var c,e=function(){try{var e=a.isHidden(),g,q={};e!==c&&(g=d.stringifyTriState(e),q.res1=g,q.ps=g,q.ts=
r.now(),q.psfr=d.stringifyTriState(a.isCurrentIframeTheHiddenFrame()),b.events.trigger("newState",q));c=e}catch(n){k.trigger("error",h.ERROR_CODES.HIDDEN2)}};return{start:function(){if(a.isHidden()){e();var b=a.getWindowWithHiddenViewport();if(b)uc(b).onResize(e)}}}},{emits:!0,applies:function(a,b,c){return c.embedded&&!c.isBustedIframe()&&!c.isSpecifiedAd()}});M("hiddenAds",["adStuffingDetector"],function(a){var b=0,c=function(a,b){k.trigger("addThrottledProp",h.DT_SLOT.FRAUD,a,d(b).toION())},e=
function(a){2>b&&c("ha1",a);b++};(function(){var b,d;if(t.embedded)try{d=l.contextNode.parentNode,b=tc().getDFPValue(d),d={},d.df=b.type,b.size&&(d.sz=b.size.width+"."+b.size.height),b.tag&&(d.dom=b.tag),c("dfp",d),b.size&&a&&(a.events.on("newState",e),a.start())}catch(q){k.trigger("error",h.ERROR_CODES.HIDDEN)}})()},{tier:h.TIERS.PRE_IMPRESSION_FRAUD,applies:function(a,b,c){return a.on("usehaps")}});M("BannerStuffing",[],function(){var a,b=0,c=0,e=r.getWindow().document,f=!1,g=function(){a=u.windowSize().height*
u.windowSize().width;if(25<a){for(var g,p=a+20*a/100,q=e.querySelectorAll("iframe"),q=d.fromNodeListToArray(q);q.length&&(c<p||3>b);)g=q.shift(),g=u.getNodeArea(g),25<g&&(b++,c+=g);c>=p&&3<=b&&(k.trigger("addThrottledProp",h.DT_SLOT.FRAUD,"bs1",d({va:a,bia:c,bin:b}).toION()),f=!0)}},q=function(){var a;a=new MutationObserver(function(b){f?a.disconnect():r.execAtEndOfThread(function(){d(b).each(function(a,b){if(b.addedNodes.length){var c=b.addedNodes[0];c&&u.isElement(c)&&u.tagNameIs(c,"IFRAME")&&d.debounce(g,
10)}})})});a.observe(e.body,{attributes:!1,childList:!0,characterData:!1})};e&&e.body&&(r.execAtEndOfThread(g),!f&&d.isDef(x.MutationObserver)&&q())},{tier:h.TIERS.VIEWABILITY,applies:function(a,b,c){b=c.isAvid()||c.isOmid()||c.isMraid();c=!c.isDomless()&&c.friendly&&!c.embedded;return a.on("BannerStuffingInApp")&&b&&c}});var tb=function(){return{createInstance:function(a){return t.isDomless()?new vc:new wc(a)}}},wc=function(a){var b,c,e,f=new ga,g=new ha,q=new xc(f),n=new yc,p=new zc,s=new Ac(f,
a),w=function(){d.isUndef(e)&&(e=new Bc(f));return e},h=function(){f.provide({frameCollection:function(){return q},adProxy:function(){return p},adTalkMessage:function(a){return new Cc(a,f)},adTalkMessageCollection:function(){return n},idMapModule:w,interFrameQuerySelector:function(a){return new Ca(a)}})};return{isApplicable:function(a){return d.isDef(x.JSON)&&d.isDef(x.postMessage)&&!a.isAvid()&&!a.isOmidNative()},start:function(){h();g.traverse(q.addFrame);s.startListening();s.sendToKnownFrames();
k.once("stopAdTalk",function(){s.stopListening()});k.provide("adTalkEventAggregator",f)},sendAdTalkCall:s.sendAdTalkCall,getFrameMap:function(){d.isUndef(b)&&(b=new Da(f));return b},getFrameMapIncludingPeerCase:function(){d.isUndef(c)&&(c=new Da(f,!0));return c},getIdMap:w}},vc=function(){return{isApplicable:function(){return!1},start:function(){}}},Cc=function(a,b){var c,e=b.request("adProxy").myIdCard,d=b.request("frameCollection").getMe().getStringifiedPosition();c=k.request("features").on("swapids")?
l.oid:l.asid;var g=a||{},q=l.asid,e=e.tagId,n=t.embedded,p=t.friendly,s=l.birthdate;c=c.split("-")[2];var w;t.friendly?w="["+h.AD_IDENTIFIER+"-"+l.asid+"]":(w=r.getWindow(),w=w.location&&w.location.href,w='iframe[src*="'+(w&&w.replace(/^https?\:\/\//i,""))+'"]');return{messageContent:g,srcAsid:q,srcTagId:e,srcIsEmbedded:n,srcIsFriendly:p,srcBirthdate:s,iasCommonId:c,nodeSelector:w,positionStr:d,version:"0.1"}},yc=function(){var a={};return{add:function(b){var c=b&&b.srcAsid;c&&(a[c]=b)},map:function(b){return d(a).map(b)},
has:function(b){return a[b&&b.srcAsid]}}},Dc=function(a,b,c,e){var f,g=a==x;f={position:b.slice(0),id:b.join("-"),isMe:g,isLeaf:!a.frames.length,adProxies:g?c:[],selfDescription:void 0,unifiedId:l.birthdate,srcIsEmbedded:e?e.srcIsEmbedded:void 0,inbox:e?[e]:[],getDomObj:function(){return a},getStringifiedPosition:function(){return d(f.position).map(function(a,b){return d.toBase(Number(b)+1,36)}).join("")},isValidForMapping:function(){return f.isLeaf||f.isMe||d.isDef(f.selfDescription)}};var q=function(a){var b=
f.adProxies;a=a.adProxies;var c=[];b.length&&a.length?d(a).each(function(a,e){n(b,e)&&c.push(e)}):c=a;f.adProxies=b.concat(c)},n=function(a,b){return!d(a).find(function(a,c){return c.adSafeId&&c.adSafeId===b.adSafeId})},p=function(a){d(f.inbox).find(function(b,c){return c.srcAsid&&c.srcAsid===a.srcAsid})||f.inbox.push(a)};f.addInformationFromSrc=function(a,b){q(b);p(a);f.srcIsEmbedded=a.srcIsEmbedded;f.selfDescription=b};return f},xc=function(a){var b=[],c={},e={noMe:!0};return{addFrame:function(d,
g,q){var n=a.request("adProxy").getAll();d=new Dc(d,g,n,q);b.push(d);c[d.id]=d;d.isMe&&(e=d);return d},getFrame:function(a){return c[a]},list:b,dictionary:c,getMe:function(){return e}}},Da=function(a,b){var c=function(a,c){var d=c.adProxies,n="";if(c.isValidForMapping()){if(b)n+=e(d,c.getStringifiedPosition());else{var p;p=""+c.getStringifiedPosition();p+=c.isMe?"*":"";p+=d.length?"."+d[0].tagId:"";n+=p}return n}},e=function(a,b){var c="";return c=a.length?c+d(a).stringify(function(a,c){return b+
(l.asid===c.adSafeId?"*":"")+"."+c.tagId},"|"):c+b};return{output:function(){var b=a.request("frameCollection"),e=d(b.list).stringify(c,"|");return d.toBase(b.getMe().unifiedId,62)+"+"+e}}},Bc=function(a){var b=a.request("frameCollection").getMe().getStringifiedPosition(),c=l.contextNode.parentNode,e=a.request("interFrameQuerySelector",c),d=function(a){return a&&a.substr(0,120)+".of"+a.length},g=function(a){var d=!1,d=!t.embedded,f="BODY"!==u.getNodeName(c)&&"HEAD"!==u.getNodeName(c),g;if(g=a.srcIsEmbedded){g=
"0.1"!==a.version;var w=a.nodeSelector&&-1===a.nodeSelector.indexOf(h.AD_IDENTIFIER);g=!(g?w:!a.srcIsFriendly)}d&&f&&!g?d=!!e.queryFor(a.nodeSelector):(d=a.positionStr,a=a.srcIsEmbedded&&t.embedded,d=0===b.indexOf(d)||0===d.indexOf(b),d=!(!a||!d));return d};return{output:function(){var c,e=b+"*";c=a.request("adTalkMessageCollection").map(function(a,b){var c;a!==l.asid&&g(b)&&(c=b.positionStr+"."+b.srcAsid+"."+b.transferDuration+"_"+b.srcTagId);return c});c.push(e);c=c.join("|");120<c.length&&(c=d(c),
k.trigger("stopAdTalk"));return c},isCandidateForMyIdMap:g}},Ca=function(a){var b=new ha,c=function(a){var b=a,c="IFRAME"===u.getNodeName(a),e=u.isWindow(a);c?b=a.contentWindow.document:e&&(b=a.document);return b},e=function(a,b){return u.querySelector(c(a),b)},f=function(c,f){var n,p,s;try{p=e(c,f),p||(n=b.getFrames(!0,a),d(n).findFirst(function(a,b){return s=e(b,f)}))}catch(w){}return p||s||null};return{queryFor:function(b){var c=null;b&&(c=f(a,b));return c}}},Ac=function(a){var b=!1,c,e;e=k.request("features").on("swapids")?
l.oid:l.asid;var f=function(b){var c=e.split("-")[2],d=!a.request("adTalkMessageCollection").has(b)&&b.srcAsid!==l.asid;return b.hasOwnProperty("messageContent")&&c===b.iasCommonId&&d},g=function(){var b=a.request("frameCollection").getMe();return a.request("adTalkMessage",{self:b,unifiedId:b.unifiedId})},q=function(){var c=h.DT_CODES.ADTALK;a.request("frameCollection");b||(b=!0);k.trigger("sendDt",c)},n=function(c,e,f){var g,n,l,t,B;try{g=a.request("frameCollection");n=a.request("adTalkMessageCollection");
l=e.messageContent.self;n.add(e);var u=g.getMe();u.unifiedId>l.unifiedId&&(u.unifiedId=l.unifiedId);var x;x=r.now()-e.sentTime;e.transferDuration=x;n=t=g.getFrame(l.id);d.isUndef(n)||d.isUndef(n.selfDescription)?(t=t||g.addFrame(c.source,l.id.split("-"),e),t.addInformationFromSrc(e,l),f()):t.addInformationFromSrc(e,l);(B=b&&a.request("idMapModule").isCandidateForMyIdMap(e))&&q()}catch(z){k.trigger("error",h.ERROR_CODES.ADTALK_DUBIOUS)}};return{sendAdTalkCall:q,sendToKnownFrames:function(){(new xa).send(g)},
startListening:function(){c=new bc;c.listen(f,n,g)},stopListening:function(){c&&c.stop()},validateMessage:f,processMessage:n,createMessage:g}},Ec=function(){var a=k.request("ids"),b=a.getAsid();return{tagId:a.getFwId(),adSafeId:b}},zc=function(){var a,b=[],c=function(a){a=new Ec(a);b.push(a);return a};a=c();return{createNew:c,getAll:function(){return b},myIdCard:a}},Mb=function(){var a=!1,b=function(a){var b,c={},e=a.indexOf("?");a=-1===e||e===a.length-1?[]:a.substring(e+1).split("&");d(a).each(function(a,
e){b=e.split("=");c[decodeURIComponent(b[0])]=decodeURIComponent(b[1]||"")});return c},c=function(a){var c={};a&&a.scriptUrl&&(c=b(a.scriptUrl));return c},e=function(b){a||(d(b).each(function(a,b){k.trigger("addOutputItem",{output:b},a,{type:h.DT_CODES.MACRO,standalone:!0,encode:!0})}),k.trigger("sendDt",h.DT_CODES.MACRO),a=!0)},f=function(){var a={},b=new ga;b.on("add",function(b){b.uid&&(a[b.uid]=b)});b.on("remove",function(b){b.uid&&a[b.uid]&&delete a[b.uid]});b.provide("messages",function(){return a});
return b},g=function(){var a=new Ca(l.contextNode&&l.contextNode.parentNode);d.isUndef(x.__IASInbox)&&(x.__IASInbox=new f);x.__IASInbox.on("add",function(b){var f="[data-integralads-messenger-"+b.uid+"]";try{if(d.isDef(b.isIASMacroSender)&&a.queryFor(f)){var g=c(b);e(g)}}catch(q){__IntegralASDiagnosticCall("macro_fwjs_iasinbox",q)}})},q=function(){var a=function(b){var f;try{var g;try{g=JSON.parse(unescape(b.data))}catch(q){g={}}f=g;var h;if(h=d.isDef(f.isIASMacroSender)){var l=k.request("adTalkEventAggregator").request("frameCollection").getMe().getStringifiedPosition(),
t=f.srcIsEmbedded,B=0===f.positionStr.indexOf(l);h=t&&B}if(h){var u=c(f);e(u);y.removeEvent(r.getWindow(),"message",a)}}catch(x){__IntegralASDiagnosticCall("macro_fwjs_postmessage",x)}};y.addEvent(r.getWindow(),"message",a)};return{start:function(){g();q()}}},Ab=function(a){var b,c,e=!1,d=function(a){var d=!0;e&&(e=!1,a.stopPropagation?(a.stopPropagation(),a.preventDefault()):a.cancelBubble=!0,b=a.screenX-a.clientX,c=a.screenY-a.clientY,d=!1);return d};a.browserIs(h.BROWSERS.IE)&&y.addEvent(r.getDoc().documentElement,
"click",d,!0);return{determineFramePosition:function(){a.browserIs(h.BROWSERS.IE)&&(e=!0,r.getDoc().documentElement.click());return{scrX:b,scrY:c}}}},Fc=function(a,b){var c,e=h.NA,f=e,g=!1,q=!1,n=!1,p=!b,s=function(){var b=r.getIntersectionObserver(function(a){a=a.pop();var b=a.intersectionRect.width*a.intersectionRect.height/(a.boundingClientRect.width*a.boundingClientRect.height)*100;isNaN(b)&&(b=0);e=Math.min(b,100);c=a.boundingClientRect;e!==f&&r.execAtEndOfThread(function(){k.trigger("IOPivChange",
e)});f=e},{threshold:h.VIEWABILITY_IN_VIEW_THRESHOLDS_INTERSECTION_OBSERVER});p&&r.execAtEndOfThread(function(){e===h.NA&&(e=0)});b.observe(w(a));p&&r.execAtEndOfThread(function(){t.isBustedIframe()||k.trigger("delayedViewabilityReady")});g=!0},w=function(b){if(!d.isUndef(b)){if(n){b=a.document;var c=b.createElement("div");d(c.style).mixin({position:"absolute",width:"100%",opacity:"0",height:"100%",zIndex:-999,top:"0px",left:"0px"});c[h.IAS_DETECTOR]=!0;b.body.appendChild(c);b=c}return b}};return{getPiv:function(){return e},
start:function(){var b;try{a.document&&(n=!0,b={bodyElement:a.document.body,document:a.document})}catch(c){q=!0}b&&null!==b.bodyElement?s():b&&b.document?y.whenReady(s,b.document):q?k.request("errors").add(h.ERROR_CODES.BUSTED_IFRAME_IN_IO):s()},isStarted:function(){return g},getAdNodeDimensions:function(){var a;c&&(a=J({scrX:void 0,scrY:void 0,width:c.width,height:c.height}));return a},isReady:function(){return e!==h.NA}}},ua=function(){var a=!1;(function(){y.whenReady(function(){k.trigger("startViewabilityLoop");
a=!0})})();return{loopStarted:function(){return a}}};M("loopDelay",[],ua,{applies:function(a,b,c){return a.bootstrapOn("allowViewability")},tier:h.TIERS.VIEWABILITY});var Gc=function(){return{start:function(a){k.on("measurable",function(){a()})},isApplicable:function(a,b){return!b.browserIs(h.BROWSERS.WEBKIT)}}},Hc=function(){return{start:function(a){a()},isApplicable:function(a){return a.isImmediatelyMeasurable()}}},Tb=function(a,b,c){var e=!1,f=function(){b.impressionIsIdentifiable()&&!e&&(e=!0,
k.trigger("notify",l._onMeasurable))};return{start:function(){var b;b=[Ic(),Jc(),Hc(),Gc()];(b=d(b).findFirst(function(b,e){return e.isApplicable(c,a)}))&&b.start(f)},isApplicable:function(a){return a.bootstrapOn("useViewabilityNotification")&&d.isDef(l._onMeasurable)}}},Jc=function(){return{start:function(a){cc(k,["adImpression","measurable"]).onAll(function(){a()})},isApplicable:function(a,b){var c=9<=b.getIOSVersion();return(!b.browserIs(h.BROWSERS.WEBKIT)||c)&&t.isVideo()}}},Ic=function(){return{start:function(a){k.once("adImpression",
function(){a()})},isApplicable:function(a){return a.isImmediatelyMeasurable()&&t.isVideo()}}},Kc=function(a,b,c){var e=["rjss","jss","jload"],f=function(){var b=!1,c=a.getAvidAdSessionContext();d.isDef(c)&&(b=c.isDeferred);return!b};return{accepts:function(){var a=d.isDef(d(e).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.DISPLAY)&&a},isImmediate:f,isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){f()||
a.addEventListener("ready",function(){k.trigger("adImpression")})}}},Lc=function(a){return{accepts:function(){return a.isAvidAvailable()},getAvidAdSessionContext:function(){return a.getAvidAdSessionContext()},isMediaType:function(b){var c,e=a.getAvidAdSessionContext();a.isAvidAvailable()&&d.isDef(e)&&(c=e.mediaType||h.MEDIA_TYPE.DISPLAY);return b===c},supportsAdContainerGeometry:function(){var b=!1,c=a.getAvidAdSessionContext();d.isDef(c)&&(b=c.avidJsVersion,(c=d.isUndef(b))||(c=d.getNum(b.split(".")[0]),
b=d.getNum(b.split(".")[1]),c=2===c?7<=b:3<=c),b=c);return b}}},Mc=function(a,b,c){var e=["rjss","jss","jload"];return{accepts:function(){var a=d.isDef(d(e).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!1},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){try{a.addEventListener("video",function(a){"AdImpression"===a.eventSubType&&k.trigger("adImpression")})}catch(b){}}}},
Nc=function(a,b,c){var e=["rjss","jss","jload"];return{accepts:function(){var a=d.isDef(d(e).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.DISPLAY)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){}}},ba=function(a){var b=r.getWindow(),b=b&&b.omid3p,c=k.request("omidAdSessionContext"),e=!!(a&&a.isSupported&&a.isSupported()),f=!!(b&&d.isFunction(b.registerSessionObserver)&&
d.isFunction(b.addEventListener));return{accepts:function(){return e||f},isMediaType:function(a){return a===c.mediaType},supportsAdContainerGeometry:function(){return!0}}},Oc=function(a,b,c){var e=["rjss","jss","jload"];return{accepts:function(){var a=d.isDef(d(e).find(function(a,b){return b===c}));return b.accepts()&&b.isMediaType(h.MEDIA_TYPE.VIDEO)&&a},isImmediate:function(){return!0},isMediaType:b.isMediaType,supportsAdContainerGeometry:function(){return b.supportsAdContainerGeometry()},start:function(){}}},
Ua=function(a){return{resolve:function(){return d(a).findFirst(function(a,c){return c.environment.accepts()})}}},Ra=function(a,b){var c=!1,e=!1,f=k.request("omidAdSessionContext"),g=r.getWindow(),q=(g=g&&g.omid3p)&&d.isFunction(g.registerSessionObserver)&&d.isFunction(g.addEventListener)?g:b,n=function(){c&&e&&(x.omidSupported=!0,a())},p=function(b){if("sessionStart"===b.type){f.adSessionType=b.data.context.adSessionType;f.environment=b.data.context.environment;f.omidNativeInfo=b.data.context.omidNativeInfo;
f.omidJsInfo=b.data.context.omidJsInfo;f.deviceInfo=b.data.context.deviceInfo;f.app=b.data.context.app;f.isNative="native"===f.adSessionType;f.isGoogleImaGma=!t.friendly&&(f.omidNativeInfo&&f.omidNativeInfo.partnerName&&0===f.omidNativeInfo.partnerName.toLowerCase().indexOf("google")||f.omidJsInfo&&f.omidJsInfo.partnerName&&0===f.omidJsInfo.partnerName.toLowerCase().indexOf("google"));f.isHtml="html"===b.data.context.adSessionType;f.isWeb="web"===b.data.context.environment;b=f.isHtml&&f.isWeb;f.queuedOutputItems=
[];for(var e=[{root:"omidNativeInfo",code:"onpn",field:"partnerName"},{root:"omidNativeInfo",code:"onpv",field:"partnerVersion"},{root:"omidJsInfo",code:"ojpn",field:"partnerName"},{root:"omidJsInfo",code:"ojpv",field:"partnerVersion"},{root:"omidJsInfo",code:"osev",field:"serviceVersion"},{root:"omidJsInfo",code:"oscv",field:"sessionClientVersion"},{root:"app",code:"applv",field:"libraryVersion"},{root:"app",code:"appid",field:"appId"},{root:"deviceInfo",code:"dty",field:"deviceType"},{root:"deviceInfo",
code:"osn",field:"os"},{root:"deviceInfo",code:"osv",field:"osVersion"}],d,g,p,q=0;q<e.length;q++)d=e[q].root,g=e[q].field,p=e[q].code,"object"===typeof f[d]&&"undefined"!==typeof f[d][g]&&f.queuedOutputItems.push({code:p,value:f[d][g]});b?a():(c=!0,n())}},s=function(a){f.mediaType=a.data.mediaType;a.data.viewport&&a.data.adView&&(f.impressionViewabilityMeasurement={data:{viewport:a.data.viewport,adView:a.data.adView}});f.isNativeVideo=f.isNative&&"video"===a.data.mediaType;e=!0;n()};return{start:function(){q.registerSessionObserver(p,
"IAS");q.addEventListener("impression",s)}}},Sa=function(){return{accepts:function(){return!0}}},Aa=function(){var a=k.request("omidAdSessionContext"),b=k.request("omidVerificationClient"),c=new ba(b),e=a.isHtml&&a.isWeb;return{accepts:function(){return c.accepts()&&e}}},Ta=function(a){return{start:function(){a()}}},Pc=function(a,b){var c=function(a){try{b.trigger("videoPlaybackEvent",{eventType:a.eventSubType,eventData:a.eventData})}catch(c){}};return{start:function(){a.addEventListener("video",
c)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Qc=function(a,b){var c,e=function(a){var e,d,n;try{e=a.eventData.percentageInView,d=c&&75<=e,n={windowDimensions:{x:0,y:0,width:0,height:0},adDimensions:{x:0,y:0,width:0,height:0},containerDimensions:{x:0,y:0,width:0,height:0},shouldDelegateToDomBasedViewability:d,isMeasurable:0===e||75<=e,isObstructed:!1,isHidden:!1,numberOfAdverts:1,percentageInView:e,detectionMethod:"av"},b.trigger("screenLocationChanged",n)}catch(p){}};
return{start:function(){try{var b=a.getAvidAdSessionContext().avidAdSessionType;c="display"===b||"video"===b;a.addEventListener("viewability",e)}catch(d){}},addScreenLocationChangedListener:function(a){b.on("screenLocationChanged",a)}}},Rc=function(a,b){var c=[],e=(new Date).getTime(),f=0,g=0,q=!1,n={isEmpty:function(){return 0===c.length},toString:function(){for(var a="{vEventCount:"+c.length+",vEvents:[",b=0;b<c.length;b++)var e=c[b],a=a+((0<b?",{":"{")+("t:"+e.t+",")+("sl:"+e.sl+",")+("tp:"+e.tp+
",")+("ad_duration:"+e.ad_duration+",")+("volume:"+e.volume)+"}");return a+"]}"}},p=function(){q=!0},s=function(a){try{var p="",n=a.hasOwnProperty("timestamp")?a.timestamp:(new Date).getTime();switch(a.type){case "start":p="adVideoStart";e=n;g=a.data.duration;1E3<g&&(g/=1E3);f=a.data.videoPlayerVolume;break;case "volumeChange":p="volumeChanged";f=a.data.videoPlayerVolume;break;case "firstQuartile":case "midpoint":case "thirdQuartile":case "complete":p="adVideo"+a.type.substring(0,1).toUpperCase()+
a.type.substring(1);break;case "pause":case "bufferStart":p="pauseAd";break;case "resume":case "bufferFinish":p="resumeAd";break;case "skipped":p="adSkipped"}""!==p&&c.push({t:n-e,sl:"undefined",tp:p,ad_duration:g,volume:f});if("loaded"===a.type&&d.isDef(a.data)){var s=["preroll","midroll","postroll","standalone"].indexOf(a.data.position),p=-1!==s?s+1:void 0,r=!0===a.data.autoPlay?"autoplayed":"clicktoplay";!0===q?(d.isDef(p)&&k.trigger("addThrottledProp",h.DT_SLOT.ENVIRONMENT,"vbp",p),k.trigger("addThrottledProp",
h.DT_SLOT.ENVIRONMENT,"vps",r)):(d.isDef(p)&&k.trigger("addOutputItem",{output:p},"vbp",{type:h.IMPRESSION_EVENT}),k.trigger("addOutputItem",{output:r},"vps",{type:h.IMPRESSION_EVENT}))}"start"===a.type&&k.trigger("omidAdDuration",{ad_duration:g});var l;"playerStateChange"===a.type?l="fullscreen"===a.data.state?"AdEnteredFullscreen":"AdExitedFullscreen":-1!=="start|firstQuartile|midpoint|thirdQuartile|resume|bufferFinish".indexOf(a.type)?l="AdPlaying":-1!=="complete|pause|bufferStart|skipped".indexOf(a.type)&&
(l="AdPaused");d.isDef(l)&&b.trigger("videoPlaybackEvent",{eventType:l,eventData:null})}catch(t){__IntegralASDiagnosticCall("omidvideo",t,x.bootstrapper)}};return{start:function(){k.on("impressionsent",p);k.provide({omidVideoEventsString:n});a.addEventListener("video",s)},addVideoPlaybackEventListener:function(a){b.on("videoPlaybackEvent",a)}}},Ea=function(a,b){var c=!1,e=function(a){var e=a.percentageInView;c=!0;a.viewState=50<=e?h.IN_VIEW:h.OUT_OF_VIEW;a.outOfViewReason=50<=e?"":h.OUT_OF_VIEW_REASONS.GEOM;
b.trigger("measurementChanged",a)};return{start:function(){k.trigger("addOutputItem",{output:h.MEDIA_TYPE.DISPLAY_CODE},h.MEDIA_TYPE_CODE,{type:h.IMPRESSION_EVENT});a.addScreenLocationChangedListener(e);a.start()},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.DISPLAY},addMeasurementChangedListener:function(a){b.on("measurementChanged",a)},isMeasurable:function(){return c}}},Sc=function(a,b,c){var e=d.isDef(a)?a.environment:void 0,f=d.isDef(a)?a.measurementStrategy:void 0,g=function(){return d.isDef(f)};
d.isDef(b)&&b.start();return{hasMeasurementStrategy:g,getScreenLocationInfo:function(a){return b.create(a)},isImmediate:function(){return g()?e.isImmediate():!0},isMeasurable:function(){return g()?f.isMeasurable():!1},isMediaType:function(a){return g()?e.isMediaType(a):!1},supportsAdContainerGeometry:function(){return a.environment.supportsAdContainerGeometry()},start:function(){g()&&e.start()},requiresDelayedViewabilityEvent:function(){g()&&b.requiresDelayedViewabilityEvent()}}},rb=function(a,b,
c){var e=k.request("mobileApp");return{create:function(){var d=[],d=d.concat(a.getOmidMeasurementStrategies()),d=d.concat(a.getAvidMeasurementStrategies()),d=d.concat(a.getMraidMeasurementStrategies()),d=(new ja(d)).resolve(),g=new Tc(d),q=new Fa(b,c,t,e);return!d&&q.accepts()?new Uc(t.isVideo(),new C):new Sc(d,g,e.isMobileAppEnvironment())}}},sb=function(a){var b=k.request("mobileApp");return{getOmidMeasurementStrategies:function(){var a=k.request("omidVerificationClient"),b=new ba(a),d=new Aa,g=
[];if(b.accepts()&&!d.accepts()){var q=new da,n=new Vc,d=new Wc(a,new C),q=[{environment:q,measurementStrategy:new Xc(a,new C)},{environment:n,measurementStrategy:new Ga(new ka,r.getWindow(),new C)}],q=(q=(new ja(q)).resolve())?q.measurementStrategy:{},p=new Ha(new Ia(new U),new U,n.accepts()),n=new Nc(a,b,l.mode),s=new Ja(d,q,new C,p),b=new Oc(a,b,l.mode),a=new Ka(d,q,new Rc(a,new C),new C,p);g.push({environment:n,measurementStrategy:s});g.push({environment:b,measurementStrategy:a})}return g},getAvidMeasurementStrategies:function(){var b=
k.request("avidJsClient"),e=new Lc(b),d=[];if(e.accepts()){var g=new Kc(b,e,l.mode),q=new Mc(b,e,l.mode),n;n=new Pc(b,new C);if(e.supportsAdContainerGeometry()){var p=new Yc,s=new Zc,h=new Ga(new ka,r.getWindow(),new C),D=new $c(b,new C),p=(p=(new ja([{environment:p,measurementStrategy:D},{environment:s,measurementStrategy:h}])).resolve())?p.measurementStrategy:{},s=new Ha(new Ia(new U),new U,s.accepts()),h=new ad(b,new C),b=new Ja(h,p,new C,s);n=new Ka(h,p,n,new C,s)}else s=new Qc(b,new C),b=new Ea(s,
new C),n=new La(s,n,new C);d.push({environment:g,measurementStrategy:b});d.push({environment:q,measurementStrategy:n});a.setAvidAdSessionContext(e.getAvidAdSessionContext())}return d},getMraidMeasurementStrategies:function(){var a=[],e=b.isSafeToInjectMraid(),e=new bd(r.getWindow(),e,b.isMobileAppEnvironment());if(e.accepts()){var d=k.request("context"),d=new cd(r.getWindow(),d),g=new dd(r.getWindow(),new C);d.accepts()?(e=new ed(r.getWindow(),new C),e=new La(g,e,new C),e={environment:d,measurementStrategy:e}):
(d=new Ea(g,new C),e={environment:e,measurementStrategy:d});a.push(e)}return a}}},ja=function(a){return{resolve:function(){var b=d(a).findFirst(function(a,b){return b.environment.accepts()});if(d.isDef(b))return b}}},Tc=function(a){var b=!1,c,e={winDimensions:J({scrX:0,scrY:0,width:0,height:0}),adDimensions:J({scrX:0,scrY:0,width:0,height:0}),containerDimensions:J({scrX:0,scrY:0,width:0,height:0}),method:h.NA,viewState:h.NA,percentInView:h.PIV_NA,reason:"",obstructed:h.NA,isHidden:h.NA,tabHidden:h.NA,
posViewState:h.NA,adCompCount:1},f=function(a){return a?new J({scrX:a.x,scrY:a.y,width:a.width,height:a.height}):J({scrX:0,scrY:0,width:0,height:0})},g=function(a){c={winDimensions:f(a.windowDimensions),adDimensions:f(a.adDimensions),containerDimensions:f(a.containerDimensions),method:a.detectionMethod||h.NA,viewState:a.viewState||h.NA,percentInView:d.isDef(a.percentageInView)?a.percentageInView:h.PIV_NA,reason:a.outOfViewReason||"",obstructed:d.stringifyTriState(a.isObstructed),isHidden:h.NA,tabHidden:h.NA,
posViewState:a.viewState||h.NA,adCompCount:1,shouldDelegateToDomBasedViewability:a.shouldDelegateToDomBasedViewability,sliceStatus:a.sliceStatus,isVideoPlaying:a.isVideoPlaying,isVideoPlayingInFullscreen:a.isVideoPlayingInFullscreen,isSoundOn:a.isSoundOn};a.isMeasurable&&b&&(b=!1,k.trigger("delayedViewabilityReady"))};return{create:function(b){var f=e;if(d.isDef(c))if(a.environment.supportsAdContainerGeometry())f=c;else if(c.shouldDelegateToDomBasedViewability)f=b,f.method=c.method;else if(0===c.percentInView||
75<=c.percentInView)f=c;return f},start:function(){var b;d.isDef(a)&&d.isDef(a.measurementStrategy)&&(b=a.measurementStrategy,b.addMeasurementChangedListener(g),b.start())},requiresDelayedViewabilityEvent:function(){b=!0}}},La=function(a,b,c){var e=!1,f=!1,g=!1,q,n,p,s,w=function(){if(!d.isUndef(n)){var a=[],b,w;e?(f?(w=!1,b=100):(w=s,b=p),50>b&&a.push(h.OUT_OF_VIEW_REASONS.GEOM)):(w=!1,b=0,a.push(h.OUT_OF_VIEW_REASONS.VIDEO));g=!0;n.shouldDelegateToDomBasedViewability=w;n.percentageInView=b;n.viewState=
50>b?h.OUT_OF_VIEW:h.IN_VIEW;n.outOfViewReason=a.join(".");q=n;c.trigger("measurementChanged",q)}},r=function(a){n=a;p=a.percentageInView;s=a.shouldDelegateToDomBasedViewability;w()},v=function(a){a=a.eventType;"AdEnteredFullscreen"===a?f=!0:"AdExitedFullscreen"===a?f=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?e=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped".indexOf(a)&&(e=!1);w()};return{start:function(){k.trigger("addOutputItem",{output:h.MEDIA_TYPE.VIDEO_CODE},h.MEDIA_TYPE_CODE,
{type:h.IMPRESSION_EVENT});a.addScreenLocationChangedListener(r);a.start();b.addVideoPlaybackEventListener(v);b.start()},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){c.on("measurementChanged",a)},isMeasurable:function(){return g}}},cd=function(a,b){return{accepts:function(){return b.isInMobiMraidVideo()},isImmediate:function(){return!1},supportsAdContainerGeometry:function(){return!1},start:function(){try{var b;a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(function(a){"AdVideoStart"!==
a.type||b||(b=!0,k.trigger("adImpression"))})}catch(e){}}}},ed=function(a,b){var c=function(a){try{b.trigger("inMobiMraidVideoPlaybackEvent",{eventType:a.type})}catch(c){}};return{start:function(){try{a.inmobi.IASDocumentVideoBuffer.addVideoEventListener(c)}catch(b){}},addVideoPlaybackEventListener:function(a){b.on("inMobiMraidVideoPlaybackEvent",a)}}},ad=function(a,b){var c=function(a){a={viewport:a.eventData.viewport||{width:0,height:0},originalAdContainer:a.eventData.originalAdContainer||{x:0,
y:0,width:0,height:0},computedAdContainer:a.eventData.computedAdContainer||{x:0,y:0,width:0,height:0},percentageInView:a.eventData.percentageInView,detectionMethod:h.DETECTION_METHODS.AVID,outOfViewReason:e(a.eventData.reasons)};b.trigger("containerGeometryMeasurementChanged",a)},e=function(a){var b={inactive:h.OUT_OF_VIEW_REASONS.FOCUS,viewport:h.OUT_OF_VIEW_REASONS.GEOM,clipped:h.OUT_OF_VIEW_REASONS.GEOM,obstructed:h.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:h.OUT_OF_VIEW_REASONS.FOCUS,notFound:h.OUT_OF_VIEW_REASONS.HIDDEN},
c=[];if(!a)return"";d(a).each(function(a,e){var d=b[e];d&&0>c.indexOf(c)&&c.push(d)});return c.join(".")};return{start:function(){a.addEventListener("viewability",c)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on("containerGeometryMeasurementChanged",a)},translateAvidOutOfViewReasons:e}},Ha=function(a,b,c){function e(a,b,c){c=n(b,c);a=g(a,b,c);return a.width*a.height}var f=function(a,b){var c=Math.max(a.x,b.x),e=Math.max(a.y,b.y),d=Math.min(a.x+a.width,b.x+b.width),f=Math.min(a.y+
a.height,b.y+b.height),d=d-c,f=f-e;return{x:c,y:e,width:0<d?d:0,height:0<f?f:0}},g=function(a,b,c){a=f(b,a);return f(c,{x:0,y:0,width:a.width,height:a.height})},q=function(a,b){return{x:a.x+b.x,y:a.y+b.y,width:b.width,height:b.height}},n=function(a,b){return{x:b.x-a.x,y:b.y-a.y,width:b.width,height:b.height}};return{calculateGeometricMeasurement:function(f,s){if(d.isDef(f)&&d.isDef(s)){var w=f.viewport,k=f.computedAdContainer,v=k.obstructions,l=v&&0<v.length,t=f.originalAdContainer,u=s.adGeometry,
A=s.adFound,x=f.detectionMethod,z=0,w={x:0,y:0,width:w.width,height:w.height},F=q(t,u),E=f.outOfViewReason,L=0,P=0,y=l||!1,L=1>=u.width*u.height;c&&L&&(A=!1,E=E||"",A||-1!==E.indexOf(h.OUT_OF_VIEW_REASONS.GEOM)||(E=h.OUT_OF_VIEW_REASONS.GEOM+(""!==E?"."+E:"")));if(A&&0<f.percentageInView){L=e(w,k,F);l?(z=n(k,F),z=g(w,k,z),z=q(k,z),z=a.calculateObstructedArea(z,v)):z=0;P=z;z=Math.round((L-P)/(F.width*F.height)*100);l&&0===P&&(y=!1);for(var u=y,H,l=0,A=b.getConfig(F).numberOfSlices,P=r.floor(F.height/
A)||1,v=[],L=u?a.getObstructionStatusBySlice(A):[],V,l=0;l<A;l++)H=F.y+P*l,l==A-1&&(P=F.y+F.height-H),H={x:F.x,y:H,width:F.width,height:P},V=e(w,k,H),H=1==V/(H.width*H.height),v.push(H);if(u)for(k=r.min(L.length,A),l=0;l<k;l++)v[l]=v[l]&&!L[l];k=v}else k=b.getConfig(u).defaultSliceArray;return{windowDimensions:w,containerDimensions:t,adDimensions:F,percentageInView:z,viewState:50<=z?h.IN_VIEW:h.OUT_OF_VIEW,outOfViewReason:50<=z?"":E||h.OUT_OF_VIEW_REASONS.GEOM,detectionMethod:x,isObstructed:y,sliceStatus:k}}}}},
Yc=function(){return{accepts:function(){return t.isAvidNative()}}},$c=function(a,b){var c=function(a){a=a.eventData.originalAdContainer;var c=!!a;b.trigger("avidNativeGeometryChanged",{adGeometry:{x:0,y:0,width:c?a.width:0,height:c?a.height:0},adFound:c})};return{start:function(){a.addEventListener("viewability",c)},addAdGeometryMeasurementChangedListener:function(a){b.on("avidNativeGeometryChanged",a)}}},Zc=function(){return{accepts:function(){return t.isAvid()&&!t.isAvidNative()}}},Ja=function(a,
b,c,e){var f,g,q,n=function(){if(d.isDef(f)&&d.isDef(g)){var a=e.calculateGeometricMeasurement(f,g);q=a.isMeasurable=!0;c.trigger("geometryMeasurementChanged",a)}},p=function(a){f=a;n()},s=function(a){g=a;n()};return{start:function(){k.trigger("addOutputItem",{output:h.MEDIA_TYPE.DISPLAY_CODE},h.MEDIA_TYPE_CODE,{type:h.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(p);a.start();b.addAdGeometryMeasurementChangedListener(s);b.start()},addMeasurementChangedListener:function(a){c.on("geometryMeasurementChanged",
a)},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.DISPLAY},isMeasurable:function(){return q}}},Ia=function(a){var b=[],c;return{calculateObstructedArea:function(e,f){var g,q,n,p;q=f&&0<f.length;var h;if(q){h=Math.round(e.width);var k=Math.round(e.height);g=Array(h);for(n=0;n<h;n++)g[n]=Array(k);h={matrix:g,obscuredPixelCount:0,x:Math.round(e.x),y:Math.round(e.y),width:h,height:k}}else h={};g=h;k=h=0;if(q){for(;h<f.length;h++){q=f[h];n=k=g;var l=q;g=Math.max(n.x,l.x);q=Math.max(n.y,l.y);
p=Math.min(n.x+n.width,l.x+l.width);l=Math.min(n.y+n.height,l.y+l.height);n=p-g;p=l-q;n=0<n?n:0;p=0<p?p:0;g-=k.x;q-=k.y;n=g+n;p=q+p;for(g=Math.round(g);g<Math.round(n);g++)for(l=Math.round(q);l<Math.round(p);l++)void 0!==k.matrix[g]&&void 0===k.matrix[g][l]&&(k.matrix[g][l]=1,k.obscuredPixelCount+=1);g=k}k=g.obscuredPixelCount;h=g;if(d.isUndef(h.matrix)||0===h.matrix.length)c=[];else{q=0;p=!1;g=h.matrix[0].length;n=h.matrix.length;p=a.getConfig({height:g}).numberOfSlices;for(var l=r.floor(g/p)||1,
v=[],t=0;t<g;t++){p=!1;for(var u=0;u<n;u++)if(1===h.matrix[u][t]){p=!0;break}q++;p&&(t+=l-q,q=l);if(q==l||t===g-1)v.push(p),q=0}c=v}}else c=b;return k},getObstructionStatusBySlice:function(){return c}}},Wc=function(a,b){var c=k.request("omidAdSessionContext"),e=function(a){var c=a.data.adView,e=!!(c.measuringElement&&c.containerGeometry&&c.onScreenContainerGeometry);e&&c.onScreenGeometry.obstructions&&0<c.onScreenGeometry.obstructions.length&&(c.onScreenContainerGeometry.obstructions=c.onScreenGeometry.obstructions);
a={viewport:a.data.viewport||{width:0,height:0},originalAdContainer:c[e?"containerGeometry":"geometry"]||{x:0,y:0,width:0,height:0},computedAdContainer:c["onScreen"+(e?"Container":"")+"Geometry"]||{x:0,y:0,width:0,height:0},percentageInView:c.percentageInView,detectionMethod:h.DETECTION_METHODS.OMID,outOfViewReason:f(c.reasons)};b.trigger("containerGeometryMeasurementChanged",a)},f=function(a){var b={inactive:h.OUT_OF_VIEW_REASONS.FOCUS,viewport:h.OUT_OF_VIEW_REASONS.GEOM,clipped:h.OUT_OF_VIEW_REASONS.GEOM,
obstructed:h.OUT_OF_VIEW_REASONS.OBSTRUCTION,backgrounded:h.OUT_OF_VIEW_REASONS.FOCUS,notFound:h.OUT_OF_VIEW_REASONS.HIDDEN},c=[];if(!a)return"";d(a).each(function(a,e){var d=b[e];d&&0>c.indexOf(c)&&c.push(d)});return c.join(".")};return{start:function(){void 0!==c.impressionViewabilityMeasurement&&e(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",e)},addAdContainerGeometryMeasurementChangedListener:function(a){b.on("containerGeometryMeasurementChanged",a)},translateOmidOutOfViewReasons:f}},
da=function(){var a=k.request("omidAdSessionContext");return{accepts:function(){return a&&(a.isNative||a.isGoogleImaGma)}}},Xc=function(a,b){var c=k.request("omidAdSessionContext"),e=function(a){if(a&&a.data&&a.data.adView){var c=a.data.adView.geometry,e=a.data.adView.containerGeometry,d=!!c;a=a.data.adView.measuringElement&&!!e;b.trigger("mobileAppGeometryChanged",{adGeometry:{x:d&&a?c.x-e.x:0,y:d&&a?c.y-e.y:0,width:d?c.width:0,height:d?c.height:0},adFound:d})}};return{start:function(){void 0!==
c.impressionViewabilityMeasurement&&e(c.impressionViewabilityMeasurement);a.addEventListener("geometryChange",e)},addAdGeometryMeasurementChangedListener:function(a){b.on("mobileAppGeometryChanged",a)}}},Vc=function(){var a=k.request("omidAdSessionContext");return{accepts:function(){return a&&!a.isNative}}},Ka=function(a,b,c,e,f){var g=!1,q=!1,n,p,s,w,l,v=function(){if(!(d.isUndef(p)||d.isUndef(s)||d.isUndef(w))){l=!0;var a=f.calculateGeometricMeasurement(p,s),b=g&&q,c=g&&50<=a.percentageInView,k=
{windowDimensions:a.windowDimensions,containerDimensions:a.containerDimensions,adDimensions:a.adDimensions,percentageInView:a.percentageInView,detectionMethod:a.detectionMethod,isMeasurable:!0,isObstructed:a.isObstructed,sliceStatus:a.sliceStatus,isVideoPlaying:g,isVideoPlayingInFullscreen:b,isSoundOn:!0};b&&(k.percentageInView=100);b||c?k.viewState=h.IN_VIEW:(k.viewState=h.OUT_OF_VIEW,k.outOfViewReason=a.outOfViewReason||h.OUT_OF_VIEW_REASONS.VIDEO);n=k;e.trigger("videoGeometryMeasurementChanged",
n)}},r=function(a){p=a;v()},t=function(a){s=a;v()},u=function(a){w=a;a=a.eventType;"AdEnteredFullscreen"===a?q=!0:"AdExitedFullscreen"===a?q=!1:-1!=="AdStarted|AdVideoStart|AdPlaying".indexOf(a)?g=!0:-1!=="AdSkipped|AdUserClose|AdPaused|AdVideoComplete|AdStopped|AdError".indexOf(a)&&(g=!1);v()};return{start:function(){k.trigger("addOutputItem",{output:h.MEDIA_TYPE.VIDEO_CODE},h.MEDIA_TYPE_CODE,{type:h.IMPRESSION_EVENT});a.addAdContainerGeometryMeasurementChangedListener(r);a.start();b.addAdGeometryMeasurementChangedListener(t);
b.start();c.addVideoPlaybackEventListener(u);c.start()},getStrategyName:function(){return h.MEASUREMENT_STRATEGY.VIDEO},addMeasurementChangedListener:function(a){e.on("videoGeometryMeasurementChanged",a)},isMeasurable:function(){return l}}},Ga=function(a,b,c){var e,f=function(){var b=a.find(),f,h=!0;d.isDef(b)?(f=b.getBoundingClientRect(),f={x:f.left,y:f.top,width:f.width,height:f.height},b.hasOwnProperty("adWasClipped")&&(f.adWasClipped=!0)):h=!1;if(b=h)b=f,b=!d.isDef(e)||!1!==d(b).compareTo(e);
b&&(e=f,c.trigger("mobileAppGeometryChanged",{adGeometry:f,adFound:h}))};return{start:function(){f();b.setInterval(f,50)},addAdGeometryMeasurementChangedListener:function(a){c.on("mobileAppGeometryChanged",a)}}},bd=function(a,b,c){return{accepts:function(){var e=d(a.mraid).isObj();return c&&(e||b)},isImmediate:function(){return!0},supportsAdContainerGeometry:function(){return!1},start:function(){}}},dd=function(a,b){var c=!1,e=function(){var c,e,d;try{c=a.mraid.isViewable()?100:0;var f={x:0,y:0,width:0,
height:0};d=100===c?[!0]:[!1];e={windowDimensions:f,adDimensions:f,containerDimensions:f,shouldDelegateToDomBasedViewability:!1,isMeasurable:!0,isObstructed:!1,isHidden:!1,percentageInView:c,detectionMethod:h.DETECTION_METHODS.MRAID,sliceStatus:d};b.trigger("mraidScreenLocationChanged",e)}catch(g){}},f=function(){var b=a.mraid;return d(b).isObj()&&d.isFunction(b.isViewable)},g=function(){var b=a.mraid;e();b.addEventListener("viewableChange",e)},q=function(){var b=a.mraid;f()&&(c=!0,"loading"===b.getState()?
b.addEventListener("ready",function(){g()}):g())},n=function(){c||q()};return{start:function(){var b=!0;if(d.isDef(a.mraid)||u.containsScriptTagWithSrc("mraid.js"))b=!1;k.trigger("addOutputItem",{output:d.stringifyTriState(b)},"mi",{type:"impression"});b?k.trigger("exec","mraid.js",n):q()},addScreenLocationChangedListener:function(a){b.on("mraidScreenLocationChanged",a)}}},bb=function(a,b,c){var e={},f=function(c){var e=d.noop;b.bootstrapOn("useViewabilityNotification")&&(e=function(){a.skipAsFraudulent()||
k.trigger("notify",c)});return e};(function(){c&&d(c).map(function(a,b){e[a]=f(b)})})();return{getCallbacks:function(){return e}}},Wa=function(){var a=new R({tiv:[1E4]}),b=d([h.IN_VIEW,h.PARTIAL_VIEW_PLUS]);return{timeInViewThresholds:a,type:h.DT_CODES.FULLY_INVIEW,rts:{},isInView:function(a){var e=r.max(a.fullPercentInView||0,a.percentInView);return b.contains(a.viewState)&&100===e},applies:function(a,b){return a.on("abcAudit")&&925955==l.anId&&b.usesIASFullyInViewCustomMetric()},minUnit:1E3}},Va=
function(a,b){var c,e,d;c=a.on("everySecond");var g=a.on("disableLateCalls");d=b.isVideo();e=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3];var g=g?[1E3,5E3,15E3]:[1E3,5E3,15E3,3E4,45E3,6E4,9E4],q=[2E3,5E3,15E3];c?(c=new R({tiv:e}),e=e[0]):d?(c=new R({tiv:q}),e=q[0]):(c=new R({tiv:g}),e=g[0]);d={5E3:l._onInViewMRC5,15E3:l._onInViewMRC15};d[e]=l._onInViewMRC;return{timeInViewThresholds:c,type:h.DT_CODES.PING,rts:d,isInView:function(a){return-1!==(h.IN_VIEW+"|"+h.PARTIAL_VIEW_PLUS).indexOf(a.viewState)},
applies:!0,minUnit:1E3}},Ya=function(a,b){var c;c=a.on("everySecond");var e=b.isVideo(),d=b.usesIASFullyInViewCustomMetric(),g=[1E3,2E3,3E3,4E3,5E3,6E3,7E3,8E3,9E3,1E4,11E3,12E3,13E3,14E3,15E3],q=[1E3,5E3,15E3],n=[2E3,5E3,15E3],p=function(a){var b=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(h.IN_VIEW+"|"+h.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b};c=c?new R({tiv:g}):e?new R({tiv:n}):new R({tiv:q});k.provide("isFullyInViewProvider",{isFullyInView:p});return{timeInViewThresholds:c,
type:h.DT_CODES.FULLY_INVIEW,isInView:p,applies:function(){return d},minUnit:1E3}},Xa=function(a,b){return{timeInViewThresholds:new R({tiv:[0]}),type:h.DT_CODES.FULLY_INVIEW,rts:{0:l._onInViewFull},isInView:function(a){var b=r.max(a.fullPercentInView||0,a.percentInView);return-1!==(h.IN_VIEW+"|"+h.PARTIAL_VIEW_PLUS).indexOf(a.viewState)&&100===b},applies:function(){return b.usesGroupMCustomMetric()},minUnit:1E3}},$a=function(a,b){var c,e,f=r.getMaxNumber(),g=b.isVideo(),q=a.id;c=new R(a);(function(){e=
{};var a;d.isDef(l.rts)&&d.isDef(l.rts[q])&&(a=c&&d.isFunction(c.getTimeThresholds)&&c.getTimeThresholds()[0],a=d.isFunction(a.getTimeInViewForRts)&&a.getTimeInViewForRts(),e[a]=l.rts[q])})();return{timeInViewThresholds:c,type:h.DT_CODES.CUSTOM,rts:e,isInView:function(b){if(!b.adDimensions)return!1;var c,e,q,k=b.adDimensions.area(),v=1===b.tabHidden,l=r.max(b.fullPercentInView||0,b.percentInView);c=d(a.thresholds).findFirst(function(a,b){e=b.lb||0;q=b.ub||f;if(k>=e&&k<=q)return!0});c=!v&&l>=c.piv;
b.method==h.DETECTION_METHODS.AD_PLACEHOLDER&&0===a.tiv&&(c=!1);g&&(c=c&&b.isVideoPlaying);return c},metricId:q,minUnit:a.minunit?1E3*a.minunit:1E3,thresholdType:a.thresholdType}},Za=function(a,b,c){var e=b.isVideo()?"video":"display",f=b.isMobileApp()?"app":"web",g=b.isDeviceTypeGroupMobile()?"mobile":"desktop",h=d(a.customViewability).isArray()&&0<a.customViewability.length,n=c.on("customMetric"),p=c.on("groupmCM"),s=function(a,b){var c,h,n,q,s;c=d(b.mediaTypes).contains(e);h=d(b.distributionChannels).contains(f);
n=d.isDef(b.deviceGroups)?d(b.deviceGroups).contains(g):!0;q=N.contains(b.id,"fiv");s=N.contains(b.id,"groupmCM");q=!q;s&&(q=p);return q&&c&&h&&n};return{resolve:function(){var b=[],c;n&&h&&(c=d(a.customViewability).filter(s),d(c).each(function(a,c){b.push(c)}));return b}}},R=function(a){var b=[];if(d(a.tiv).isArray())d(a.tiv).each(function(a,c){b.push(new la(c))});else if("string"===typeof a.tiv){a=a.tiv.split("|");var c=new fd;b.push(new gd(c,parseInt(a[1].replace("%"))));b.push(new la(1E3*parseInt(a[0])))}else b.push(new la(1E3*
a.tiv));return{getTimeThresholds:function(){return b}}},fd=function(){var a=-1,b=function(b){0<a||(b=d.isDef(b.ad_duration)?b.ad_duration:b.adRemainingTime,void 0!==b&&0<b&&(a=Math.ceil(b)))};k.on({omidAdDuration:b,adVideoStart:b,adDurationChange:b});return{getAdDuration:function(){return a},isVideoDurationResolved:function(){return 0<a}}},la=function(a){var b=0,c;0<a&&(b=a/1E3);c=1E3*b;return{getTimeInViewInSeconds:function(){return b},getTimeInViewForRts:function(){return c}}},gd=function(a,b){var c=
0,e=!1,d=function(a){c=0;0<b&&0<a&&(c=r.ceil(b/100*a))};d(15);return{getTimeInViewInSeconds:function(){!e&&a.isVideoDurationResolved()&&(e=!0,d(a.getAdDuration()));return c},getTimeInViewForRts:function(){return 0}}},eb=function(a,b,c){var e=function(e){a.isInView(e)?(b.mark(),c.doEligibleJobs(b.getTotalTime())):b.stop()};return{start:function(){a.addMeasurementChangedListener(e)}}},db=function(a,b,c,e){var f,g,h,n,p,s=function(a,b){return!b&&a},w=function(a,b,c,e){return e?!0:!b&&(a||e)&&c},l=function(a){var b=
0,s=1===a.tabHidden,k=a.isVideoPlaying,l=a.isSoundOn,r=a.isVideoPlayingInFullscreen;d(a.sliceStatus).each(function(a,b){h(b,s,k,r)?f[a].mark():f[a].stop();n[a]=f[a].getTotalTime()});v("slcVt",n);e&&(d(a.sliceStatus).each(function(a,b){w(b,s,k,r)&&l?g[a].mark():g[a].stop();p[a]=g[a].getTotalTime()}),v("slcVtVol",p));a=d(n).findFirst(function(a,c){b=Math.max(b,c);return 0>=c});d.isUndef(a)&&c.doEligibleJobs(b)},v=function(a,b){var c={};c[a]=b;k.trigger("addOutputItem",{output:c},{minDt:!1})},r=function(a){!f&&
a.sliceStatus&&(f=[],g=[],n=[],p=[],d(a.sliceStatus).each(function(a){f.push(new ca(1));n.push(0);e&&(g.push(new ca(1)),p.push(0))}))},t=function(a){d.isUndef(a.sliceStatus)||(f||r(a),l(a))};return{start:function(){h=e?w:s;a.addMeasurementChangedListener(t)}}},ab=function(a,b){return{isInView:a.isInView,addMeasurementChangedListener:function(a){b.addMeasurementChangedListener(a)}}},Kb=function(a,b,c,e,d,g,q,n,p,s){var k=!1,l=t.isVideo(),v=g.request("mobileApp"),u=Z().applies(c,d),x=c.browserIs(h.BROWSERS.GECKO)||
c.browserIs(h.BROWSERS.IE)&&d.on("rattie")||u,B=t.xDomainIframe&&!x,A=new ya(10),y=function(){d.on("viewabilityready")&&!k&&(e.send(h.DT_CODES.VIEWABILITY_READY),g.trigger("measurable"),k=!0)};g.on("delayedViewabilityReady",function(){z();y()});g.on("delayedViewabilityReadyCallOnly",y);var z=function(c){c=c||!1;try{A.start();var e,d;b.hasMeasurementStrategy()?d=v.isMobileAppEnvironment()&&b.supportsAdContainerGeometry()?b.getScreenLocationInfo({},c):b.getScreenLocationInfo(n.collect(),c):(d=n.collect(),
v.isMobileAppEnvironment()?(d.viewState=h.NA,d.method=h.NA,d.percentInView=h.NA):B&&(d.viewState=h.NA,d.percentInView=h.PIV_NA),l&&!t.isAvid()&&s.setVideoSpecificScreenEventFields(d));e=p.registerLocation(d);c||a.trigger("measurementChanged",d);A.stop();var f=r.round(A.getTime()/A.getCount());q.addItem({output:f},"lt",{type:h.DT_CODES.UNLOAD});return e}catch(k){g.trigger("error",h.ERROR_CODES.CHECK_SCREEN_LOC)}};return{checkScreenLoc:z,stringifyPingTimes:function(){return d.on("everySecond")?"1-2-3-4-5-6-7-8-9-10-11-12-13-14-15":
l?"2-5-15":"1-5-15"},isImmediatelyMeasurable:function(){var a=t.xDomainIframe,e=a&&c.browserIs(h.BROWSERS.WEBKIT),d=a&&c.browserIs(h.BROWSERS.MSEDGE),a=a&&u,e=!e&&!d&&!a;return v.isMobileAppEnvironment()?b.isMeasurable():e},requiresDelayedViewabilityEvent:function(){v.isMobileAppEnvironment()&&b.hasMeasurementStrategy()&&b.requiresDelayedViewabilityEvent()},addMeasurementChangedListener:function(b){a.on("measurementChanged",b)}}};M("viewabilityLoopLifecycle",["viewability","features","context","browser"],
function(a,b,c,e){var f,g=hd(c),q=[new id,new jd(g)],n=function(){return d(q).findFirst(function(a,d){return d.applies(e,b,c)?d:void 0})},p=function(a){"sessionFinish"===a.type&&k.trigger("adSessionComplete")},s=function(a){y.addEvent(x,a,function(){k.trigger("adSessionComplete")},!1)},w=function(){var a=new $(h.DT_CODES.VIDEO_EVENTS);k.trigger("sendDt",a.callType,a.enumerator,function(){var a={id:l.videoId,msg:"unloadComplete",messageType:"misc"};r.getWindow().postMessage(JSON.stringify(a),"*")})};
k.once("startViewabilityLoop",function(){var b,c=k.request("mobileApp").isMobileAppEnvironment();k.request("ids").impressionIsIdentifiable()&&(f=gc(a.checkScreenLoc,g.getPollingFrequency()),(b=n())?b.start(f):f.start(!0),c?t.isOmid()?k.request("omidVerificationClient").registerSessionObserver(p,"IAS"):s("MOBILE_APP_TEST_EVENT_AD_SESSION_COMPLETE"):s("beforeunload"))});k.once("adSessionComplete",function(){!c.isVideo()||c.isAvid()||c.isOmidNative()||w();k.trigger("unload");f&&f.stop();k.trigger("endAdSession");
k.trigger("stopAdTalk")})},{tier:h.TIERS.VIEWABILITY});var hd=function(a){return{getPollingFrequency:function(){return a.isVideo()?200:100},getOptimizedPollingFrequency:function(){return 1E3}}},jd=function(a){var b,c,e,d,g,h=function(p){e&&!g&&1>p?(g=!0,r.setTimeout(function(){h(p)},1E3)):(d=1>p,!c&&d?(c=!0,b.updateFrequency(a.getOptimizedPollingFrequency())):c&&!d&&(c=!1,b.updateFrequency(a.getPollingFrequency(),!0)))},n=function(a){h(a.percentInView)};return{applies:function(a,b,c){var d=k.request("mobileApp");
a=(new Fa(b,a,c,d)).accepts();b=b.on("viewabilityOptimization")&&!a;e=c.usesZeroPivCustomMetric();return b},start:function(a){b=a;b.start(!0);k.on("IOPivChange",h);k.on("newScreenEvent",n)}}},id=function(){var a,b,c,e=!1,d=function(g){if(c&&!e&&1>g)e=!0,r.setTimeout(function(){d(g)},1E3);else return 1>g?(a||b.stop(!0),a=!0):a&&(a=!1,b.start(!0)),a};return{applies:function(a,b,d){c=d.usesZeroPivCustomMetric();var e=Z();return b.on("viewabilityOptimization")&&e.applies(a,b,d)&&d.isDeviceTypeGroupMobile()},
start:function(a){b=a;b.start(!0);k.on("IOPivChange",d)}}},rd=function(a,b,c,e,f,g){var q,n,p,s,w,D,v,I,Q,B=u.getElementsWindow(b);u.getElementsDocument(b);k.provide("iframeCalculatorHelper",kd(B));var A=ld(b,e),O=h.AD_IDENTIFIER+"-"+l.asid,z=!1,F=J({}),E=t.isDeviceTypeGroupMobile(),L=t.usesGroupMCustomMetricMobilePassThru(),P,aa=function(){if(!q)if(q=A.calcDims(b,e,p),c===h.DETECTION_METHODS.VIDEO&&t.embedded){var a=q,d=(new J(b)).getRounded();try{a.set("width",d.width),a.set("height",d.height)}catch(f){k.trigger("error",
h.ERROR_CODES.VIDEO_IN_IFRAME_DIMS_CALC)}}else c===h.DETECTION_METHODS.AD_PLACEHOLDER&&q.treatAsPlaceholder();return q},H=function(){var b,e=t.xDomainIframe&&z;b=E&&z&&p.isReady();b=e||b;e=A.getClippedDims&&(c===h.DETECTION_METHODS.VIDEO&&t.embedded||t.isCeltra());b?n=p.getPiv():d.isUndef(n)&&(b=!E&&(t.friendly||d.isDef(x.mozInnerScreenX))&&f.on("offscreen"),I=aa(),v=new J(u.calcWinDims()),D=new J(b?u.calcMonDims():{}),Q=e?A.getClippedDims():F,n=a.calcPercentInView(I,v,D,Q));return n},V=function(){return a.calcInitialViewState(H())},
Ma=function(){return b===x?!1:aa().isHidden()},C=function(a,b){return t.isVideo()?r.getDoc().body:a.document&&a.document.body?a.document.body:b.contentDocument&&b.contentDocument.body?b.contentDocument.body:b};(function(){var c=r.getWindow(),d=r.getDoc(),f=b===c,g=d.body,h=new Z,n=k.request("browser"),q=k.request("features"),v=k.request("context"),l=!t.xDomainIframe,u=C(b,e),d=f&&g?d.body:b;P=t.friendlyIframe?c.frameElement:d;y.addEvent(d,"click",function(){k.trigger("adComponentClicked")});y.addEvent(d,
"mouseover",function(){k.trigger("adComponentMousedOver")});h.applies(n,q,v)?(p=Fc(b,l),p.start(),z=!0,L&&(c=new md(aa().getRounded()),h=new nd,u=new od(u,h),s=new pd(c.getSlices(),u))):L&&(w=new qd(a))})();return{mark:function(){u.setAttributeOf(P,O,"")},cleanup:function(){u.removeAttributeOf(P,O)},isNode:function(a){return b===a},isHidden:Ma,isObstructed:function(){return!1},getDims:aa,getPercentInView:H,getLocationState:V,getOnPageViewability:function(){return Ma()?h.OUT_OF_VIEW:V()},getDetectionMethod:function(){return c},
getContainerDims:function(){return A.allowsOptimization?q:J(e)},refresh:function(){Q=I=v=D=n=q=void 0;if(g){var a,c;if(!t.isDomless()&&(c=b.parentNode)){for(;b!==x&&c&&c!==K&&!a;)a=c===e,c=c.parentNode;a||(e=b.parentNode)}}},getAdNode:function(){return b},getSliceStatus:function(){var a;s&&s.isReadyToMeasure()?a=s.getSliceStatus():t.friendly&&w&&d.isDef(I)&&(a=w.getSliceStatus(I,v,D,Q));return a}}},sd=function(a,b){var c=[],e,f=d([]),g=function(){return c[0]&&c[0].getDetectionMethod()===h.DETECTION_METHODS.AD_PLACEHOLDER},
q=function(p,n,q,s){var w=g()||0===c.length;p=rd(a,p,n,q,b,s);g()&&(q=c.shift(),f=d(c),q.cleanup(),e=void 0);c.push(p);f=d(c);w&&p.mark();w&&n!==h.DETECTION_METHODS.AD_PLACEHOLDER&&k.trigger("primaryadfound",p)},n=function(){if(e)return e;var a,b=!1,c=0,d=0;f.each(function(e,f){var g;g=f.getDims();g.hasValidDims()&&(a=f.getPercentInView(),b=a!==h.NA,g=g.area(),c+=g,d+=a/100*g)});return e={totalArea:c,totalInView:d,hasMeasurement:b}},p=function(){var a;a=n();a=a.hasMeasurement?r.round(a.totalInView/
a.totalArea*100):h.PIV_NA;isNaN(a)&&(a=0);return a},s=function(){var c=b.bootstrapOn("mobOrTab"),c=n().totalArea>=h.MRC_LARGE_AD_SIZE&&b.on("largeAd")&&!c&&!t.isVideo();return a.calcInitialViewState(p(),c)},w=function(a){var b=-1;f.each(function(c,d){d.isNode(a)&&(b=c)});return b},l=function(a){return function(){return c[0]&&c[0][a]()}};k.on("adComponentAdded",function(a){d(a).each(function(a,b){-1===w(b)&&q(b,h.DETECTION_METHODS.MUTATION)})});k.on("adComponentRemoved",function(a){d(a).each(function(a,
b){var d=w(b);-1<d&&c.splice(d,1)})});return{getDims:l("getDims"),isObstructed:l("isObstructed"),getDetectionMethod:l("getDetectionMethod"),getContainerDims:l("getContainerDims"),getViewState:s,getPercentInView:p,isHidden:l("isHidden"),isUsingPlaceholder:g,hasAd:function(){return!!c.length},refresh:function(){e=void 0;f.each(function(a,b){b.refresh()})},addAdComponent:q,getOutOfViewReasons:function(){var a,b=[],d=c[0],f=h.OUT_OF_VIEW_REASONS;d&&(a=e||s(),a!==h.OUT_OF_VIEW&&a!==h.PARTIAL_VIEW_MINUS||
b.push(f.GEOM),d.isHidden()&&b.push(f.HIDDEN),d.isObstructed()&&b.push(f.OBSTRUCTION));return b},getComponentCount:function(){return c.length},getComponents:function(){return c},getSliceStatus:l("getSliceStatus")}},td=function(a){var b=!1;if(!d.isUndef(x.MutationObserver)){var c=new MutationObserver(function(a){r.execAtEndOfThread(function(){b&&d(a).each(function(a,b){b.addedNodes.length&&k.trigger("adComponentAdded",b.addedNodes);b.removedNodes.length&&k.trigger("adComponentRemoved",b.removedNodes)})})}),
e=function(){b=!0;r.setTimeout(function(){b=!1},40)};k.on("adComponentClicked",e);k.on("adComponentMousedOver",e);y.whenReady(function(){try{c.observe(K.body,{attributes:!0,childList:!0,characterData:!0})}catch(b){a.add(h.ERROR_CODES.AC_WATCHER)}},r.getDoc())}},Ad=function(a,b){var c=[ud()],e=[ka(),vd(),wd(),xd(),yd(),zd()],c=c.concat(e);return d(c).findFirst(function(c,d){return d.isApplicable(a,b)})},wd=function(){var a,b,c,d=function(a){a?a&&c&&(r.execAtEndOfThread(function(){k.trigger("delayedViewabilityReadyCallOnly")}),
c=!1):c=!0};return{detectionMethod:function(){return b&&b.detectionMethod},isApplicable:function(a){return a.isBustedIframe()},find:function(){b=b||ia();var c=u.crossQuerySelector(ia().getCssSelector(),!0);a=c?c.parentNode:a;d(c);return c},getAdContainer:function(){return a},allowForAdContainerChange:!0}},Y=function(a,b){var c,d=u.findChildWithLargestContent(a||l.contextNode.parentNode,b);1<u.getNodeArea(d)&&!d[h.IAS_DETECTOR]&&(c=d);return c},yd=function(){return{detectionMethod:h.DETECTION_METHODS.IFRAME,
find:function(){return x},isApplicable:function(){return t.embedded},getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},Bd=function(){var a,b=r.getDoc().scripts,c=function(){a||(a=d(b).findFirst(function(a,b){return N.contains(b.src,"servedby.flashtalking")}));return a};return{detectionMethod:h.DETECTION_METHODS.BUSTED_IFRAME_FLASHTALKING,isApplicable:function(a,b){return b.on("bustediframe")&&a.embedded&&void 0!==c()},getCssSelector:function(){var b,d=a||c(),
g=/;(\d+);/;d&&d.src&&(b=d.src.match(g)[1]);return"#ftdiv"+b}}},Cd=function(){return{isApplicable:function(a,b){var c;try{c=u.getFrameId()}catch(d){}return b.on("yieldmo")&&c&&N.contains(c,"_tpi")&&u.crossQuerySelector("[data-href*='ads.yieldmo.com']",!0)},getCssSelector:function(){return"[id='"+u.getFrameId().replace("_tpi","")+"']"},detectionMethod:h.DETECTION_METHODS.BUSTED_IFRAME_YIELDMO}},Dd=function(){var a,b,c=r.getDoc(),e=function(){var b;a||(a=(b=(b=u.querySelector(c,"div[id*='ebDiv']"))&&
b.id)&&b.split("ebDiv")[1]);return a},f=function(){var a;b||(b=(a=(a=u.crossQuerySelector("iframe[id*='ebBannerIFrame_'][id$='"+e()+"']",!0))&&a.id)&&"#"+a);return b};return{detectionMethod:h.DETECTION_METHODS.BUSTED_IFRAME_SIZMEK,isApplicable:function(a,b){var c=r.getWindow(),h=a.friendlyIframe&&r.getWindow().frameElement,h=h&&J(h).isOneByOne(),s=function(){var a=r.getDoc().scripts;return d(a).findFirst(function(a,b){return N.contains(b.src,"bs.serving-sys.com/BurstingPipe/adServer")})}(),c=c.EBG&&
c.EBG.ads&&!d(c.EBG.ads).isEmpty();return b.on("sizmek")&&s&&c&&h&&e()&&f()},getCssSelector:f}},ia=function(){var a,b=k.request("features");a||(a=[Dd(),Cd(),Bd()]);return d(a).findFirst(function(a,d){return d.isApplicable(t,b)})},xd=function(){var a,b=function(){r.execAtEndOfThread(function(){k.trigger("delayedViewabilityReadyCallOnly")})};return{usePlaceholder:!1,detectionMethod:h.DETECTION_METHODS.VENDOR_CELTRA,isApplicable:function(a,b){return b.on("celtra")&&a.isCeltra()},find:function(){var c,
d=Ba().find();d&&d.celtra&&d.celtra.loaded&&(c=d.celtra.viewabilityObservee,a=u.getElementsWindow(c).frameElement||c.parentNode,b());return c},getAdContainer:function(){return a},allowForAdContainerChange:!1}},Ba=function(){var a,b=function(){var b;(b=l.contextNode.parentNode)&&N.contains(b.className,"celtra-ad-v3")?a=b:(b=b&&u.querySelector(b,".celtra-ad-v3"))&&(a=b);return a};return{find:b,isApplicable:function(){return void 0!==b()}}},ka=function(){var a=k.request("mobileApp");return{usePlaceholder:!0,
detectionMethod:h.DETECTION_METHODS.AD_HUNT,isApplicable:a.isMobileAppEnvironment,find:function(){var a=u.findChildWithLargestContent(r.getDoc().body);return a&&a.hasValidSizeForMobileApp&&!a[h.IAS_DETECTOR]?a:void 0},getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},ud=function(){var a;return{detectionMethod:h.DETECTION_METHODS.SPECIFIED_AD,isApplicable:function(){return t.isSpecifiedAd()},find:function(){var b=u.crossQuerySelector(l._cl_adpath);b&&(a=u.getParent(b),
1>u.getNodeArea(b)&&(a=b,b=u.findElementsWithSize(b)));return b},getAdContainer:function(){return a},allowForAdContainerChange:!0}},zd=function(){return{usePlaceholder:!0,detectionMethod:h.DETECTION_METHODS.AD_HUNT,isApplicable:function(){return!0},find:Y,getAdContainer:function(){return l.contextNode.parentNode},allowForAdContainerChange:!0}},vd=function(){return{detectionMethod:h.DETECTION_METHODS.VIDEO,find:k.request("video").findAdNode,isApplicable:t.isVideo,getAdContainer:function(){return l.contextNode.parentNode},
allowForAdContainerChange:!0}},ld=function(a,b){var c,e;c=[Ed(),Fd(),Gd()];e=d(c).findFirst(function(c,d){return d.isApplicable(a,b)});c=Hd();c.isApplicable(b)&&(c.setBaseStrategy(e),e=c);return e},Gd=function(){return{calcDims:function(a,b){var c,d,f=new J(a);u.isClippable(a,b)&&(c=u.getClippedDimensions(a,b),d=f.getRounded(),f.set("height",c.height<d.height?c.height:d.height||1),f.set("width",c.width<d.width?c.width:d.width||1));return f},allowsOptimization:!1,isApplicable:function(a){var b=(t.isSpecifiedAd()||
t.isBustedIframe())&&u.nodeIsInWindow(a,r.getTop());a=!u.elementIsEmbedded(a);return b||a}}},Fd=function(){var a=k.request("iframeCalculatorHelper");return{calcDims:a.calcDims,getClippedDims:a.getClippedDims,allowsOptimization:!0,isApplicable:function(a){return!(t.isSpecifiedAd()||t.isBustedIframe())&&u.elementIsEmbedded(a)}}},Ed=function(){var a=k.request("iframeCalculatorHelper");return{calcDims:function(b){var c=a.calcDims();b=(new J(b)).getRounded();c.set("height",b.height);c.set("width",b.width);
return c},getClippedDims:a.getClippedDims,allowsOptimization:!1,isApplicable:function(a,c){var d=(t.isSpecifiedAd()||t.isBustedIframe())&&t.embedded&&!u.nodeIsInWindow(c,r.getTop()),f=t.isCeltra()&&u.elementIsEmbedded(a);return d||f}}},Hd=function(){var a;return{calcDims:function(b,c,e){e=d.isDef(e)?e.getAdNodeDimensions():void 0;a&&d.isUndef(e)&&(e=a.calcDims(b,c));return e},isApplicable:function(a){a=Z();var c=k.request("browser"),d=k.request("features"),f=k.request("context");return f.isDeviceTypeGroupMobile()&&
a.applies(c,d,f)},allowsOptimization:!1,setBaseStrategy:function(b){a=b}}},kd=function(a){var b,c,e,f=k.request("features"),g=k.request("browser");a=a||r.getWindow();var q=function(b,c){b=b||a;c=c||{top:0,left:0,width:r.getMaxNumber(),height:r.getMaxNumber()};for(var d,e=b.parent.frames,f=!1,g=0,n=e.length;g<n;g++)if(e[g]==b){d=e[g];f=!0;break}if(f){d=u.getRect(d.frameElement);c.left+=d.left;c.top+=d.top;try{c.width=r.min(c.width,d.width),c.height=r.min(c.height,d.height)}catch(l){k.trigger("error",
h.ERROR_CODES.GET_AD_DIMENSIONS)}b!==r.getTop()&&q(b.parent,c)}return c},n=function(){var p,n={};try{var l,D,v,x,y,B,A=r.getMaxNumber(),O=r.getMaxNumber();t.friendly?(l=q(),v=l.left,x=l.top,A=l.width,O=l.height,D=u.browserWindowPosition(),y=D.scrX+v,B=D.scrY+x):f.on("rattie")&&g.browserIs(h.BROWSERS.IE)?(e=e||k.request("ieXDomainViewability"),c=e.determineFramePosition(),y=c.scrX,B=c.scrY):d.isDef(a.mozInnerScreenX)&&(y=r.round(a.mozInnerScreenX),B=r.round(a.mozInnerScreenY));var n={scrX:y,scrY:B,
iFrameClippingWidth:A,iFrameClippingHeight:O},z,F,E=b||u.getIeDimObj(a);b=E;d.isDef(a.innerWidth)?(z=a.innerWidth,F=a.innerHeight):E&&d.isDef(E.clientWidth)?(z=E.clientWidth,F=E.clientHeight,0===z&&0<E.offsetWidth&&(z=E.offsetWidth),0===F&&0<E.offsetHeight&&(F=E.offsetHeight)):a.frameElement&&d.isDef(a.frameElement.clientWidth)&&(z=a.frameElement.clientWidth,F=a.frameElement.clientHeight);p=z;n.height=F;n.width=p}catch(L){k.trigger("error",h.ERROR_CODES.GET_AD_DIMENSIONS)}return n};return{calcDims:function(){return new J(n())},
getClippedDims:function(){var a=n();return new J({scrX:a.scrX,scrY:a.scrY,width:a.iFrameClippingWidth,height:a.iFrameClippingHeight})}}},Eb=function(){return{createInstance:function(a,b,c){return t.isDomless()?new Id:new Jd(a,b,c)}}},Jd=function(a,b,c){var e,f=l&&l.contextNode&&l.contextNode.parentNode?l.contextNode.parentNode:null,g=sd(b,c),q=function(){var a,b,f;e=e||Ad(t,c);a=e.find();!a&&e.usePlaceholder?n():a&&(a=d(a).isArray()?a:[a],b=e.getAdContainer(),f=e.allowForAdContainerChange,d(a).each(function(a,
c){g.addAdComponent(c,d.resolve(e.detectionMethod),b,f)}))},n=function(){var a;g.hasAd()||(a=u.getPlaceholderSpan(),f.insertBefore(a,l.contextNode.nextSibling),g.addAdComponent(a,h.DETECTION_METHODS.AD_PLACEHOLDER,u.getParent(a)))};td(a);return{find:function(){g.isUsingPlaceholder()||!g.hasAd()?q():g.refresh();return g},getDetectionMethod:function(){}}},Id=function(){var a=function(){return null};return{find:a,getDetectionMethod:a}},lb=function(a){var b,c=[],d=a||x,f=function(){return"stub"===h().mode};
a=function(){f()&&(b=d.setInterval(function(){if("stub"!==h().mode){d.clearInterval(b);for(var a=0;a<c.length;a++)d.avid.addEventListener(c[a].type,c[a].functionToExecute)}},10))};var g=function(){return void 0!==d.avid},h=function(){var a,b={};if(g())if(a=d.avid.getAvidAdSessionContext(),"string"===typeof a)try{b=JSON.parse(a)}catch(c){__IntegralASDiagnosticCall("avidadsessioncontext",c,x.bootstrapper)}else"object"===typeof a&&(b=a);return b};t.isDomless()||a();return{isAvidAvailable:g,getAvidAdSessionContext:h,
addEventListener:function(a,b){f()?c.push({type:a,functionToExecute:b}):d.avid.addEventListener(a,b)},getHtmlVideoAvidAdSessionListener:function(){if(f())throw"`HtmlVideoAvidAdSessionListener` is not available while in stub mode.";return d.avid.getHtmlVideoAvidAdSessionListener()}}},kb=function(a){var b=new Kd,c=new Ld;try{if(a.bootstrapOn("mobOrTab")||t.isDomless())b.detect(),b.hasDetectedMobileApp()&&c.detect()}catch(d){k.trigger("error",h.ERROR_CODES.MOBILE_APP)}return{isMobileAppEnvironment:function(){return b.hasDetectedMobileApp()},
isSafeToInjectMraid:function(){return c.isSafeToInjectMraid()}}},Md={url:{STRINGIFIED_METHOD:"u",detect:function(a){return t.isDomless()?!1:!!d(a).findFirst(function(a,c){return-1!==r.getWindow().location.href.indexOf(c)})}},userAgent:{STRINGIFIED_METHOD:"a",detect:function(a){return t.isDomless()?!1:!!d(a).findFirst(function(a,c){var e;e=!1;var f=r.getWindow();d.isDef(f.navigator)&&d.isDef(f.navigator.userAgent)&&(e=(e=f.navigator.userAgent)&&-1!==e.indexOf(c));return e})}},javascript:{STRINGIFIED_METHOD:"j",
detect:function(a){return!!d(a).findFirst(function(a,c){return d.isDef(N.stringToProp(c))})}},scriptSrc:{STRINGIFIED_METHOD:"s",detect:function(a){return t.isDomless()?!1:!!d(a).findFirst(function(a,c){return u.containsScriptTagWithSrc(function(a){return d.isDef(a)&&-1!==a.indexOf(c)})})}}},Na=function(){var a=function(a,c){var d,f=Md[a];f.detect(c)&&(d=f.STRINGIFIED_METHOD);return d};return{process:function(b){return d(b).map(a).join("")}}},Nd={url:"file: content: applewebdata: afma-sdk adsx.greystripe.com/openx/www/delivery/ia.php ads.mopub.com ogury.io".split(" "),
userAgent:["QuantcastSDK","afma-sdk"],scriptSrc:["file:"],javascript:"ADMARVEL mopubFinishLoad InmobiObj PandoraApp mraid.sasSendMessage omidSupported avid.getAvidAdSessionContext".split(" ")},Kd=function(){var a,b=function(){return void 0!==a&&""!==a};return{detect:function(){a=l.hasOwnProperty("serverSideAppDetection")&&0!==l.serverSideAppDetection.length?!0:Na().process(Nd);b()&&k.trigger("addOutputItem",{output:"1"},"mapp",{type:"impression"})},hasDetectedMobileApp:b}},Ld=function(){var a=[],
b=[],c=function(b,c){var d,h=Na().process(c.detectionRules);h&&(a.push(c.STRINGIFIED_SDK+"*"+h),d=c);return d};return{detect:function(){b=d(Od).map(c);0<b.length&&k.trigger("addOutputItem",{output:function(){return a.join(".")}},"sdk",{type:"impression"})},isSafeToInjectMraid:function(){return 1==b.length&&d.isDef(b[0].safeToInjectMraid)&&b[0].safeToInjectMraid}}},Od=[{STRINGIFIED_SDK:"adma",safeToInjectMraid:!0,detectionRules:{javascript:["ADMARVEL"],url:["AdMarvel"]}},{STRINGIFIED_SDK:"admb",safeToInjectMraid:!0,
detectionRules:{userAgent:["afma-sdk"],url:["afma-sdk"]}},{STRINGIFIED_SDK:"imbi",safeToInjectMraid:!0,detectionRules:{javascript:["InmobiObj"]}},{STRINGIFIED_SDK:"mmed",detectionRules:{url:["mmsdk"],scriptSrc:["mmsyscache"]}},{STRINGIFIED_SDK:"mopb",safeToInjectMraid:!0,detectionRules:{javascript:["mopubFinishLoad"],url:["ads.mopub.com"]}},{STRINGIFIED_SDK:"pand",detectionRules:{javascript:["PandoraApp"]}},{STRINGIFIED_SDK:"ambe",safeToInjectMraid:!0,detectionRules:{url:["amobee"]}},{STRINGIFIED_SDK:"smat",
safeToInjectMraid:!0,detectionRules:{javascript:["smaato_bridge"]}},{STRINGIFIED_SDK:"afrm",safeToInjectMraid:!0,detectionRules:{javascript:["Adform"]}},{STRINGIFIED_SDK:"vrve",safeToInjectMraid:!0,detectionRules:{javascript:["vrvsdk"]}},{STRINGIFIED_SDK:"sads",detectionRules:{javascript:["mraid.sasSendMessage"]}},{STRINGIFIED_SDK:"ogry",safeToInjectMraid:!0,detectionRules:{url:["ogury.io"]}},{STRINGIFIED_SDK:"cnvt",detectionRules:{url:["adsx.greystripe.com/openx/www/delivery/ia.php"]}}],md=function(a){var b=
[],c=function(a,b,c){a*=c;return new W(0,b,a,a+c)};(function(){if(10>a.height)b.push({geometry:new W(0,a.width,0,a.height),percentageInViewContribution:100,isInView:!1});else for(var d=a.height/10,f=0;10>f;f++)b.push({geometry:c(f,a.width,d),percentageInViewContribution:10,isInView:!1})})();return{getSlices:function(){return b}}},U=function(){var a=h.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID.length,b=h.VIEWABILITY_IN_VIEW_THRESHOLDS_MOBILE_GRID,c=[],d;return{getConfig:function(f){if(d)return d;f.height<
a&&(a=1,b=[100]);for(f=0;f<a;f++)c.push(!1);return d={numberOfSlices:a,defaultSliceArray:c,percentInViewSliceArray:b}}}},Pd=function(){var a,b,c=0,e=-1,f=0,g=k.request("browser"),h=function(){var a,b;a=k.request("pageUrls").getDetectedURLs();a=d(a).findFirst(function(a,c){b=void 0;return(b=c&&decodeURIComponent(c).match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im)[0])&&null!==b.match(/(insider)|(bustle)|(wikia)/i)});return d.isDef(a)};b=r.setInterval(function(){var a=r.now();e=a-f;f=a;
c++;10<=c&&b&&r.clearInterval(b)},50);return{isLikelyToProduceFalsePositive:function(c){var d;c=c.getRounded().height;var f=u.calcMonDims().height,k=g.getUserAgent(),k=k&&null!==k.match(/(FBAN)/)?1:0,l=g.getUserAgent(),l=l&&null!==l.match(/(iPad)/)?1:0,v=h()?1:0,t=g.getUserAgent(),t=t&&null!==t.match(/(Version\/9\.0)|(CriOS\/55)/)?1:0;d=r.pow(Math.E,0.0033*c-9.26E-4*f-0.340351*k-0.874412*l+0.646972*v+0.28118*t+2.987259*(1E3<e?1:0)-2.463292);d/=1+d;a={mbah:c,mbsh:f,mbfb:k,mbip:l,mbhs:v,mbbr:t,mblr:e,
mbp:d};b&&r.clearInterval(b);return 0.15<d},getDebugState:function(){return a}}},Uc=function(a,b,c){var e,f,g,q,n,p=[],s=l.contextNode.parentNode,w=0,u=0,v=!1,x=!1,Q=new Pd,B=function(){var a=p.length-1,b=-1;-1<a&&(b=p[a].piv);return b},A=function(){k.trigger("delayedViewabilityReadyCallOnly")},O=function(a){y.whenReady(function(){f=new Qd(a,r.getDoc().body)})},z=function(){f.removePixels()},F=function(){var a=Q.getDebugState(),b=B();d.isUndef(a)&&(a={});a.mbm=d.fromBoolToNum(x);a.mbrd=d.fromBoolToNum(v);
a.mbtg=d.isDef(s.tagName)?s.tagName:"na";a.mbaf=d.isDef(g)?g:"na";a.mbad=d.isDef(e)?e.getRounded().width+"_"+e.getRounded().height:"na";a.piv=d.isDef(b)?b:-1;b={minDt:!1,type:"dm"};try{k.trigger("addOutputItem",{output:a},b),k.trigger("addOutputItem",{output:-101},"pingTime",b),k.trigger("sendDt",b.type)}catch(c){}};return{getScreenLocationInfo:function(b,c){var s;s=d.isDef(e);if(c||!b.adDimensions)return b;s||(g=b.method,e=b.adDimensions,O(e));if(d.isUndef(f)||!f.isReadyToMeasure())s=!1;d.isUndef(q)&&
s&&(q=Q.isLikelyToProduceFalsePositive(e));if(x=!q&&s){var l;s=f.getPercentInView();var H=B(),z=1===b.tabHidden;u=r.now()-w;l=0<w?900>u:!0;w=r.now();0===b.adDimensions.area()&&(s=0);l||(s=0);var y=s;p.push({tm:t.getTagTime(),piv:y});3<p.length&&p.shift();0===s&&0<H&&(l&&(l=p.length-1,y=!0,2<=p.length&&-1<l&&(y=0===p[l].piv&&0===p[l-1].piv),l=!y),l&&(s=H));a?(d.isUndef(n)&&(n=k.request("video")),n.setVideoSpecificScreenEventFields(b),s=b.isVideoPlayingInFullscreen?!0:!z&&50<=s&&b.isVideoPlaying):s=
!z&&50<=s;b.viewState=s?h.IN_VIEW:h.OUT_OF_VIEW;b.percentInView=B();H=[];z=d(b.reason);l=h.OUT_OF_VIEW_REASONS;s||H.push(l.GEOM);z.contains(l.HIDDEN)&&H.push(l.HIDDEN);z.contains(l.OBSTRUCTION)&&H.push(l.OBSTRUCTION);b.reason=H;b.sliceStatus=f.getSliceStatus();v||(v=!0,r.execAtEndOfThread(A))}else b.viewState=h.NA,b.percentInView=-1;return b},start:function(){k.on("endAdSession",z);c&&r.setTimeout(F,2E3)},getStrategyName:function(){return"mobileWebXdomainSafari"},isMeasurable:function(){return x},
isImmediate:function(){return!0},hasMeasurementStrategy:function(){return!0}}},Fa=function(a,b,c,d){return{accepts:function(){var f=c.xDomainIframe,g=a.bootstrapOn("mobOrTab"),k=a.on("ios"),n=b.browserIs(h.BROWSERS.WEBKIT),p=9<=b.getIOSVersion(),s=d.isMobileAppEnvironment();return f&&g&&k&&n&&p&&!s},isImmediate:function(){return!1},start:function(){}}},Rd=function(a,b,c,e,f,g,k){var n,p=l.birthdate+""+r.round(1E6*r.random()),s=101,w,t,v,u=!1,x=function(){return'<html><body><script type="text/javascript">'+
("("+function(a){var b=a.document;try{b.body.setAttribute("data-st","iasInit");var c,d=0,e=0,f=!1,g=(new Date).getTime(),h=function(){e=(new Date).getTime()-d;(f=b.body.isReady())&&(c=0<d?900>=e:void 0);d=(new Date).getTime();a.requestAnimationFrame(h)};a.requestAnimationFrame(h);b.body.isInView=function(a){return{isInView:c,rate:e,lastUpdateTimestamp:d}};b.body.getRate=function(){return e};b.body.isReady=function(){return 200<=(new Date).getTime()-g}}catch(k){b.body.setAttribute("data-err",k.toString())}b.body.removeChild(a.document.scripts[0])}.toString()+
")(window);")+"\x3c/script></body></html>"},B=function(a,b){v||(s=a,v=b)},y=function(){var a,b,c;if(v)return!1;if(t)return!0;try{if(w.contentWindow&&w.contentWindow.document&&w.contentWindow.document.body){c=w.contentWindow.document.body;if(a=c.getAttribute("data-err"))throw Error(a);"iasInit"===c.getAttribute("data-st")&&B(104);(b=c.isReady?c.isReady():!1)&&(t=c.isInView?c.isInView:void 0)&&B(105)}}catch(e){B(106,e)}return d.isDef(t)},O=function(a,b,c){var g=K.createElement("iframe");g.id=p;d(g.style).mixin({position:"absolute",
width:e+"px",height:f+"px",backgroundColor:"transparent",border:"none",padding:"0px",margin:"0px",zIndex:"-999"});var k=g.style;g[h.IAS_DETECTOR]="true";k.left=b;k.top=c;a.appendChild(g);w=g;B(102);a=w;try{var n=a.contentWindow,s=x();n.document.open();a.contentWindow.document.write(s);n.document.close()}catch(q){B(103,q)}return g}(a,b,c);return{isInView:function(){var a,b,c=!1;r.now();y()&&(a=t(!0),c=a.isInView,u=!1,n&&(b=20*n.rate+n.lastUpdateTimestamp,0<b&&b<a.lastUpdateTimestamp&&(c=!1,u=!0)),
B(107),n=a);return c},isNotReadyToReport:function(){return!y()},createdElement:w,remove:function(){O.parentNode&&O.parentNode.removeChild(O)},getStatus:function(){return s},getError:function(){return v},isReadingInvalid:function(){return u},getRate:function(){return w.contentWindow&&w.contentWindow.document&&w.contentWindow.document.body&&w.contentWindow.document.body.getRate?w.contentWindow.document.body.getRate():-1},percentInView:g}},Qd=function(a,b,c){var e,f=a.getRounded(),g=[],h=!1;a=U().getConfig(f);
var k=a.percentInViewSliceArray,p=1==a.numberOfSlices,s={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},l=function(){var a;if(!h)for(h=!0,a=0;a<g.length;a++)if(g[a].isNotReadyToReport()){h=!1;break}return h},u=function(a){var b=[],c=0;r.floor(a.height/k.length);var e=r.floor(a.width/2-1);d(k).each(function(d,f){c=r.floor(a.height*f);c===a.height&&(c-=2);b.push({y:r.floor(c)+"px",x:r.floor(e)+"px",width:2,height:2,percentInView:100*f})});return{get:function(){return b}}},v=function(a){var b=
[{y:"0px",x:"0px",width:a.width,height:a.height,percentInView:100}];return{get:function(){return b}}},x=function(a,b){var c=0;b&&(a.reverse(),d(a).map(function(a,b){b.percentInView=100-b.percentInView}));d(a).findFirst(function(a,b){b.isInView&&(c=r.max(c,b.percentInView));return!b.isInView});return c},y=function(){var a,b,c,e=[];s.mbs=[];d(g).each(function(b,c){a=c.isInView();s.mbs.push(a);e.push({isInView:a,percentInView:c.percentInView})});b=x(e,!1);c=x(e,!0);return r.max(b,c)};(function(){e=p?
v(f):u(f);var a=e.get();d(a).each(function(a,d){var e=new Rd(b,d.x,d.y,d.width,d.height,d.percentInView,c);g.push(e)})})();return{getPercentInView:function(){var a=l(),b=y();s.mbrd=a?1:0;b!=s.mbp&&s.mbivs.push([t.getTagTime(),b]);s.mbp=b;return a?b:-1},removePixels:function(){void 0!==c&&c.stop();d(g).each(function(a,b){try{b.remove()}catch(c){}})},getPixelStateForDebug:function(){s.mbm=1;g&&0<g.length&&(s.mbpr=[],s.mbir=[],d(g).each(function(a,b){s.mbpr.push(b.getRate());s.mbir.push(b.isReadingInvalid()?
1:0)}));return s},isReadyToMeasure:l,getSliceStatus:function(){var a;g&&0<g.length&&(a=[],d(g).each(function(b,c){a.push(c.isInView())}));return a}}},pd=function(a,b){var c={mbrd:!1,mbvs:[],mbe:"n",mbv:9,mbs:[],mbm:1,mbivs:[]},e=function(a,b){var c=[],e=a.geometry.value();d(b).each(function(b,d){if(a.geometry.doesIntersect(d)){var f=d.value(),g=Math.max(e.leftX,f.leftX),h=Math.min(e.rightX,f.rightX),k=Math.max(e.topY,f.topY),f=Math.min(e.bottomY,f.bottomY);c.push(new W(g,h,k,f))}});return c},f=function(a,
b){var c=0,f=e(a,b),g;d(f).each(function(a,b){g=b.value();c+=g.area});return c},g=function(){var b=0;c.mbs=[];d(a).each(function(a,d){c.mbs.push(d.isInView);d.isInView&&(b+=d.percentageInViewContribution)});return b};b.addListener(function(b){d(a).each(function(a,c){c.isInView=f(c,b)>=c.geometry.value().area})});return{getPercentInView:function(){var a=g();c.mbrd=1;a!==c.mbp&&c.mbivs.push([t.getTagTime(),a]);return c.mbp=a},removePixels:function(){void 0!==b&&b.stop()},getPixelStateForDebug:function(){c.mbm=
1;c.mbpr=[];c.mbir=[];d(a).each(function(a,b){c.mbpr.push(h.NA);c.mbir.push(!1)});return c},isReadyToMeasure:function(){return!0},getSliceStatus:function(){var b=[];d(a).each(function(a,c){b.push(c.isInView)});return b}}},qd=function(a){var b=U();return{getSliceStatus:function(c,d,f,g){var h,k=[];h=c.getRounded();c=h.height;var p=h.scrY,s=new J({scrX:h.scrX,width:h.width}),l=b.getConfig(h).numberOfSlices;s.set("height",r.floor(c/l));for(var t=0;t<l;t++)s.set("scrY",r.ceil(p+c/l*t)),h=100===a.calcPercentInView(s,
d,f,g),k.push(h);return k}}},W=function(a,b,c,d){var f=Math.ceil(a),g=Math.ceil(b),h=Math.ceil(c),k=Math.ceil(d),p=g-f,s=k-h,l=p*s,r=function(){return{leftX:f,rightX:g,topY:h,bottomY:k,width:p,height:s,area:l}};return{value:r,doesIntersect:function(a){var b=r();a=a.value();return a.leftX<b.rightX&&a.rightX>b.leftX&&a.topY<b.bottomY&&a.bottomY>b.topY}}},nd=function(){return{createInstance:function(a,b){return new IntersectionObserver(a,b)}}},od=function(a,b){var c,e=[],f=[],g=function(){d(e).each(function(a,
b){b(f)})},h=function(){var a=[];d(f).each(function(b,c){var d=c.value(),e=a,f=d.topY;-1===e.indexOf(f)&&e.push(f);e=a;d=d.bottomY;-1===e.indexOf(d)&&e.push(d)});return a=a.sort(function(a,b){return a-b})};(function(){c=b.createInstance(function(b){var d=b.pop(),e=d.boundingClientRect;b=e.width;var k=d.intersectionRatio,d=d.intersectionRect,l=d.left-e.left,e=d.top-e.top,e=new W(l,l+d.width,e,e+d.height);f.push(e);e=h();f=[];for(d=0;e.length>d&&e.length!==d+1;d++)f.push(new W(0,b,e[d],e[d+1]));g();
1===k&&(c.unobserve(a),c.disconnect())},{threshold:[0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]})})();c.observe(a);return{addListener:function(a){e.push(a)}}},Sd=function(){return{decorateContextParams:function(a,b){try{var c=k.request("adNode"),d;if(d="adImpression"===a)d=k.request("adNode").hasAttribute("data-ias-autoplay");d&&(b.ap="false"===c.getAttribute("data-ias-autoplay")?0:1);return b}catch(f){k.trigger("error",h.ERROR_CODES.AUTOPLAY_DETECTION)}}}},Td=function(){return{listenForResult:function(){k.on("videoBlockResult",
function(a){var b=k.request("adNode"),c=!1,e="blockAd"+l.videoId;"failed"===a.action&&(c=!0);if(b&&d.isDef(b.blockAd))b.blockAd(c);else if(b&&d.isDef(b[e]))b[e](c)})}}},Ud=function(a,b){var c,e,f,g,h,n=k.request("videoTranslator"),p=k.request("videoAutoplay");f=n.translate(a.messageType);g=function(a){a=a.eventData||{};a=d({}).mixin(a);a.ext_passthrough&&delete a.ext_passthrough;return a}(a);h=function(a){var b;a=a.eventData&&a.eventData.ext_passthrough;var c=function(a,b){var c={};c["x_"+a]=b;return c};
a&&(b=d(a).mapToObj(c));return b}(a);p.decorateContextParams(f,g);e={t:a.time-l.birthdate,tp:f,sl:b};d(e).mixin(g);d(e).mixin(h);return c=d({indicatesPlaying:function(){return-1!=="showAd|adImpression|adVideoStart|resumeAd".indexOf(f)},indicatesNotPlaying:function(){return-1!=="adVideoComplete|adStopped|stopAd|pauseAd".indexOf(f)},indicatesFullscreen:function(){var a=r.getWindow();return("resizeAd"===f||"initAd"===f)&&("fullscreen"===g.viewMode||g.width===a.screen.width)},indicatesNormalSize:function(){return"resizeAd"===
f&&"normal"===g.viewMode},indicatesCompletion:function(){return-1!=="adStopped|adVideoComplete|adSkipped|adError".indexOf(f)},updateScreenLoc:function(a){e.sl=a;c.sl=a},trigger:function(){"adImpression"===f?k.persistentTrigger(f,g,h):k.trigger(f,g,h)},toString:function(){return"{"+d(e).toParams()+"}"}}).mixin(e)},Vd=function(){var a=[];return{registerEvent:function(b,c){var d=new Ud(b,c);a.push(d);return d},toString:function(){return"{"+d({vEventCount:a.length,vEvents:"["+a.join(",")+"]"}).toParams()+
"}"},isEmpty:function(){return 0===a.length}}},Wd=function(){var a,b,c,e=function(e){c=d.isDef(e)?0===e:c;b&&c&&a.addState({isFullyInView:function(){return!1}})},f=function(){a&&a.hasAlwaysBeen(!0)&&k.trigger("sendDt",h.DT_CODES.QUARTILE_FULLY_INVIEW)},g=function(){b=!0;e()},l=function(a){a=(new Oa).getVolumeFromContext(a);e(a)};return{isApplicable:function(a){return a.usesGroupMCustomMetric()},start:function(c){k.on({adVideoStart:g,adImpression:g,volumeChanged:l,adVideoMidpoint:f});a=c.createViewabilityTracker("mpt",
function(a){var c=k.request("isFullyInViewProvider");return!b||c&&c.isFullyInView(a)})}}},Xd=function(){var a={AdPaused:"pauseAd",AdVolumeChange:"volumeChanged",AdPlaying:"resumeAd"};return{translate:function(b){var c=b.charAt(0).toLowerCase()+b.slice(1);b in a&&(c=a[b]);return c}}},Oa=function(){return{getVolumeFromContext:function(a){var b,c=-1;d.isDef(a)&&(d.isDef(a.volume)?c=a.volume:d.isDef(a.adVolume)&&(c=a.adVolume));-1!==c&&(b=c);return b}}},fb=function(a,b,c){var e="IASid"+a,f="getIasVidBridgeVersion"+
a,g,q,n,p,s=[],w=h.OUT_OF_VIEW,u=!1,v=!1,x=!1,C=!0,B=new Vd,A=Wd(),G=new Td,z=function(b){u=!0;var d,e={};try{e=JSON.parse(unescape(b&&b.data?b.data:b))}catch(f){e={}}e.id==a&&(d=B.registerEvent(e,c.getCurrentLoc()),d.indicatesPlaying()?(v=!0,w=x?h.IN_VIEW:!1):d.indicatesNotPlaying()?(v=!1,w=h.OUT_OF_VIEW):d.indicatesFullscreen()?(x=!0,w=v?h.IN_VIEW:h.OUT_OF_VIEW):d.indicatesNormalSize()&&(x=!1,w=v?!1:h.OUT_OF_VIEW));b=d;s.push(b);p&&K();return b},F=function(b){var c,g,h=ta().wrapToGlobal(z),p=function(a){d.isStr(a)&&
(k.provide("vc",function(){return a}),k.trigger("addOutputItem",{output:a},"vc",{type:"impression"}))};try{g=b[f]||b.getIasVidBridgeVersion,c=d.isFunction(g)&&"2"===g.call(b)?unescape(b[e].call(b,a,h)):unescape(b[e].call(b,a)),u=!0,p(c||"n")}catch(n){__IntegralASDiagnosticCall("handshakefailure",n,l)}},E=function(){var c=function(a){return d(d(a).toArray()).findFirst(function(a,b){return d.isFunction(b[e])})};g||(d([".integral-vid-"+a,"ias-ad","object","embed"]).findFirst(function(a,b){var d=r.getDoc().querySelectorAll(b);
return g=c(d)}),!g&&b.on("novidnodeerr")&&__IntegralASDiagnosticCall("novidnode",{},l));return g},L=function(){var a=E();a&&!u&&F(a);return a},J=function(a){a=(new Oa).getVolumeFromContext(a);C=d.isDef(a)?0<a:!1},K=function(){d(s).each(function(a,b){b&&(d.isUndef(b.sl)&&b.updateScreenLoc(c.getCurrentLoc()),b.trigger(),b.indicatesCompletion()&&k.trigger("adSessionComplete"))});s=[];p=!0};(function(){y.addEvent(r.getWindow(),"message",function(a){z(a)});k.on({volumeChanged:J});k.provide({videoEventsString:B,
videoVersion:function(){var a,b=L();try{a=b.getVersion()}catch(c){a=-1,k.trigger("error",h.ERROR_CODES.NO_VIDEO_AD_INTERFACE)}return a},videoTranslator:function(){return q=q||new Xd},videoAutoplay:function(){return n=n||new Sd},adNode:L});L();G.listenForResult();A.isApplicable(t)&&A.start(c)})();return{findAdNode:L,getViewStateOverride:function(){return w},isHandshakeComplete:function(){return u},triggerInitializationEvents:K,setVideoSpecificScreenEventFields:function(a){var b=a.viewState===h.NA;
a.isVideoPlaying=!0;a.isSoundOn=C;a.isVideoPlayingInFullscreen=!1;if(w){if(w===h.OUT_OF_VIEW){var c=a.reason?a.reason.split("."):[];c[c.length]=h.OUT_OF_VIEW_REASONS.VIDEO;a.reason=c.join(".")}a.viewState=b?a.viewState:w;a.isVideoPlaying=w===h.IN_VIEW}x&&v&&(a.percentInView=100,a.isVideoPlayingInFullscreen=!0)}}},Yd=function(){return new ma(h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.TYPE,function(a,b){return a.timestamp-b.timestamp},h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.AS.COUNT)},Sb=function(){var a,
b,c={},e=0,f=function(c){if(c||a)e+=5,b.onTick(e,function(){a?f():k.trigger("sendDt",h.DT_CODES.PERFORMANCE)}),a=!1},g=function(){b=new za;e=0;f(!0);b.start()},l=function(e,f,h,k){e=c[e];k?(d.isDef(e[f])||(e[f]=[]),e[f].push(h)):e[f]=h;b&&b.isActive()||g();a=!0},n=function(c,d,e){k.trigger("addOutputItem",{output:d},c,e);b&&b.isActive()||g();a=!0},p=function(b){d(c).each(function(e,f){var g=c[e],h={type:b,oneTime:!0,minDt:!0,asION:!0};d(g).isEmpty()||(k.trigger("addOutputItem",{output:g},e,h),c[e]=
{});a=!1})};return{start:function(){k.on("preSendDt",function(a){p(a);b&&b.kill()});k.on("addThrottledProp",l);k.on("addThrottledOutputItem",n)},addFieldTypes:function(a){d(a).each(function(a,b){c[b]={}})}}},Wb=function(){var a={},b=function(b){a[b]||(a[b]=new ya(1,l.birthdate));return a[b]},c=function(a){b(a).start()},d=function(a){var c=b(a);c.stop();k.trigger("addThrottledProp","im",a,c.getTime())};return{start:function(){k.on({markTime:c,measureTime:d})},isApplicable:function(a){return a.on("pIntervals")}}},
Zd=function(){return new ma(h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.TYPE,function(a,b){return a.timestamp-b.timestamp},h.PERF_TIMELINE_TRACKER_CONFIG.WRAPPERS.JS.COUNT)},Cb=function(a){var b={},c=a instanceof Array&&a.length;c&&(d(a).each(function(a,c){b[c.getType()]=c}),k.on("perfCheckpoint",function(a){var c=b[a.type];if(c)try{c.addPoint(a),c.isFinished()&&(k.trigger("addOutputItem",{output:c.toString()},"pci",{minDt:!0,type:h.DT_CODES.PERFORMANCE}),k.trigger("sendMinDt",h.DT_CODES.PERFORMANCE))}catch(d){}}));
k.provide("perfActive",function(){return c});return{isActive:c}},ma=function(a,b,c){var e=0,f=[],g=function(){var a,c={};f.sort(b);d(f).each(function(b,d){a&&(c[d.code]=d.timestamp-a);b===e&&(a=d.timestamp)});return c};return{addPoint:function(a){f.push(a)},toString:function(){return d(g()).toION()},getType:function(){return a},setBaseOrdinal:function(a){e=a},isFinished:function(){return f.length===c}}},Db=function(){function a(){}a.build=function(){var a=[],c=k.request("vc"),d={jv3:Pa,av3:Pa,jvw:Zd,
avw:Yd};c&&d[c]&&a.push(d[c]());return a};return a}(),Pa=function(){return new ma(h.PERF_TIMELINE_TRACKER_CONFIG.VANS.TYPE,function(a,b){return a.code-b.code},h.PERF_TIMELINE_TRACKER_CONFIG.VANS.COUNT)},S={IDS:{BLOCK_TIME:"pBlk",ON_LOAD:"pLoad",IN_BROWSER_DELAY:"pWait"},recordBlockingTime:function(){k.trigger("measureTime",S.IDS.BLOCK_TIME)},setupOnLoadTracking:function(){y.addEvent(x,"load",function(){k.trigger("measureTime",S.IDS.ON_LOAD)})},setupBrowserDelayTracking:function(){var a=new za;a.onTick({4:function(){k.trigger("markTime",
S.IDS.IN_BROWSER_DELAY)},5:function(){k.trigger("measureTime",S.IDS.IN_BROWSER_DELAY)}});a.start()}};M("GDPRConsentDetector",[],function(){var a="ias_"+l.asid,b,c,e=function(b){try{if(b&&b.data&&b.data.__cmpReturn&&b.data.__cmpReturn.callId===a&&b.data.__cmpReturn.returnValue){var g=b.data.__cmpReturn.returnValue,l=d.isDef(g)&&d.isDef(g.vendorConsents)&&d.isDef(g.vendorConsents[278])?g.vendorConsents[278]:void 0,n={appl:d.stringifyTriState(g.gdprApplies),cnst:d.stringifyTriState(l),glbl:d.stringifyTriState(g.hasGlobalConsent),
mtdt:encodeURIComponent(g.metadata)};k.trigger("addThrottledProp",h.DT_SLOT.ENVIRONMENT,"gcd",d(n).toION());y.removeEvent(c,"message",e)}}catch(p){k.trigger("error",h.ERROR_CODES.GDPR)}};(function(){var f;f=r.getWindow();for(var g=r.getTop();!b;){try{f.frames.__cmpLocator&&(b=f)}catch(l){}if(f===g)break;f=f.parent}f=!!b;k.trigger("addThrottledProp",h.DT_SLOT.ENVIRONMENT,"gca",d.stringifyTriState(f));f&&(c=r.getWindow(),f={__cmpCall:{command:"getVendorConsents",parameter:[278],callId:a}},y.addEvent(c,
"message",e),b.postMessage(f,"*"))})()},{tier:h.TIERS.ENVIRONMENT,applies:function(a,b,c){return b.hasPostMessage()&&!c.isDomless()}});M("postMessageDetector",[],function(){var a=!1,b="pmdetector"+l.asid,c=function(c){(c&&c.data)===b&&(a=!0)};(function(){var e=r.getWindow();y.addEvent(e,"message",c);e.postMessage(b,"*");r.execAtEndOfThread(function(){k.trigger("addThrottledProp",h.DT_SLOT.IM,"pom",d.stringifyTriState(a));y.removeEvent(e,"message",c)})})()},{tier:h.TIERS.ENVIRONMENT,applies:function(a,
b,c){return a.on("pmdetect")&&b.hasPostMessage()}});M("safeFrameDetector",[],function(){k.trigger("addThrottledProp",h.DT_SLOT.IM,"sf",d.stringifyTriState(t.isSafeFrame()))},{tier:h.TIERS.ENVIRONMENT,applies:function(a,b,c){return a.on("sfdetect")}});var Qb=function(){var a=l.asid,b=l.cookieBaseURL,c=l.protocol,e=function(a){d(a).each(function(a,b){k.trigger("notify",b)})},f=function(){var d;d=new T(c+"://"+b,!0);d.setParam("asid",a);d=d.toString();k.trigger("jsonp",d,e,!0);k.trigger("updateDtCount")};
return{start:function(){k.on("sendCookie",f)},isApplicable:function(a){return a.on("cookie")&&a.bootstrapOn("sendCookie")&&a.bootstrapperHas(["protocol","cookieBaseURL","asid"])}}},Rb=function(a,b,c,d,f,g,q){var n=function(a,b){return isNaN(a)||0>a||""===a?b:a};return{send:function(p){try{var s,r=d.baseUrl,t,v,u=g.getDocumentMode();"number"===typeof u?(v=2E3,8===u?v=4E3:8<u&&(v=8E3)):v=n(l.sp_imp_maxLength,2E3);t=v;v=r=r.replace("[IAS_ASID]",l.asid);var x=r.length,y,A,C=n(l.sp_imp_jsInfo_minLength,
0),u="";try{y=t-x-C,0<y&&(A=$d(p,y,14,b.on("partialUrls")),u+=A.join("&"))}catch(z){a.add(h.ERROR_CODES.IMPRESSION_URLS)}r=v+u;p=r+="&"===r.slice(-1)?"":"&";var F,x="";try{F=t-r.length,x+=ae(F,"adsafe_jsinfo=",a,b,c,f,g,q)}catch(E){a.add(h.ERROR_CODES.JSINFO),x+="adsafe_jsinfo=e:"+a.toString()}r=p+x;d.macroUrl&&(r+="&"===r.slice(-1)?"":"&",r+=d.macroUrl);s=r;d.sendImpression(s);l.impUrl=s;k.trigger("impressionsent")}catch(G){__IntegralASDiagnosticCall("impsend",G,l)}}}},ae=function(a,b,c,e,f,g,k,
n){return function(c){var e=c.primary.join(","),g=b,h=0,k=function(a){if(a)return","+a};g.length+e.length+5<=a&&(g+=k(e),f.impressionIsIdentifiable(!0),d(c.secondary).each(function(b,c){g.length+c.length+5<=a?g+=k(c):h+=1}));return g+=",ov:"+h}(function(){var a,b;b=a={viewState:h.NA};t.isDomless()?b=n.checkScreenLoc(!0)||a:e.on("impFailSafe")?r.getDoc().body&&(b=(b=n.checkScreenLoc(!0))?b:a):d.isDef(r.getDoc().body)&&(b=n.checkScreenLoc(!0));n.isImmediatelyMeasurable()||n.requiresDelayedViewabilityEvent();
a=b;var u=a.viewState;b=f.getAvidIds();u=["id:"+l.asid,"c:"+f.getCacheBustId(),"sl:"+u,"em:"+t.embedded,"fr:"+t.friendly];e.on("avidPropertiesInImpression")&&d.isDef(b)&&(u.push("abi:"+b.bundleIdentifier),u.push("apn:"+b.partner),u.push("apv:"+b.partnerVersion));a=be(a,c,e,f,g,k,n);return{primary:u,secondary:a}}())},be=function(a,b,c,e,f,g,q){var n=[],p=k.request("mPage");n.push("mn:"+l.mn);n.push("pt:"+function(){var b=q.stringifyPingTimes();a.viewState!==h.NA&&(b+=a.details);return b}());n.push(d(g.params()).toParams());
c.on("mrcAudit")&&!t.isDomless()&&n.push("dvs:"+r.getDoc().visibilityState);f.iterate(function(a,b){var c=!b.props||d.isUndef(b.props.type),e=!b.props||b.props.type===h.IMPRESSION_EVENT;(c||e)&&n.push(a+":"+b.output())});b.toString()&&n.push("e:"+b.toString());n.push(c.output());n.push("tt:"+l.mode);n.push("thd:"+d.stringifyTriState(p.supportsVisAPI()));n.push("et:"+(r.now()-l.birthdate));l.perf.mark("si");c.on("swapids")?n.push("oid:"+l.oid):n.push("uid:"+e.unq);n.push("v:17.4.175");n.push("sp:"+
(l.isSplitMode?1:0));c.on("resolution")&&(n.push("wr:"+d(u.windowSize()).toArray().join(".")),n.push("sr:"+d(u.screenSize()).toArray().join(".")));return n},$d=function(a,b,c,e){var f,g=[],h=function(a){return-1!==a.key.indexOf("q")||-1!==a.key.indexOf("g")};a&&a.length&&(f=d(a).map(function(a,b){if(h(b))return b}),a=d(a).map(function(a,b){if(!h(b))return b}),d(f.concat(a)).each(function(a,d){var f;f=d.val;var h=d.key,k;k=24+g.join("&").length+h.length+c;k=b-k;e&&k<f.length&&0<k&&(f=f.substr(0,k));
if(f.length||""===d.val||""===d.type)f="adsafe_url="+f+"&adsafe_type="+h,h=g.join("&").length,f.length+h<=b&&g.push(f)}));return g},Ob=function(){return{isApplicable:function(a){a=r.getWindow();return!(!a.navigator||!a.navigator.plugins)},start:function(a){a=r.getWindow();a=ce(a.navigator.plugins);var b=a.hash(),c=b.join(".");k.trigger("addOutputItem",{output:c},"pl",{type:h.IMPRESSION_EVENT});b.length&&(a=a.decode(b),a=a.join("."),k.trigger("addOutputItem",{output:a},"pd",{type:h.DT_CODES.ADTALK}))}}},
fe=function(a,b){return{start:function(){try{var c=de(),d=c.getMethodName(a),f=new T(b.getEnabledScriptUrl(a)),g=ee,l=r.getDoc();(new g(l.body||l.head||l.documentElement,f)).getWindow()[d]=c.getMethod(b)}catch(n){k.trigger("error",h.ERROR_CODES.FEATURE_SCRIPT)}}}},de=function(){var a=function(a,c,d){a===l.asid&&(d.unshift(c),k.trigger.apply(null,d))};return{getMethod:function(b){return function(c){var d={asid:l.asid,constant:h,features:b,context:t,dtBaseURL:l.dtBaseURL};"function"===typeof c&&c(a,
d)}},getMethodName:function(a){return"register_"+a}}},Vb=function(){return{start:function(a,b){d(a).each(function(a,d){b.getEnabledScriptUrl(d)&&fe(d,b).start()})}}},ce=function(a){return{hash:function(){for(var b=0,c=a.length,e=[],f;b<c;b++)f=a[b].filename.replace(/\.plugin$/,""),f=N.hashCode(f),f=d.toBase(f,62).slice(-4),e.push(f);return e},decode:function(b){var c,d;c=r.floor(r.random()*b.length);d=encodeURIComponent(a[c].filename.replace(/\.plugin$/,""));return[b[c],d]}}},ee=function(a,b){var c,
d=/MSIE [1-9][^0-9]/g;(function(b){var g;c=u.createHiddenIframe();c.setAttribute("src","about:blank");(a||l.contextNode.parentNode).appendChild(c);g=c.contentWindow.document;if(navigator&&"string"==typeof navigator.userAgent&&-1!==navigator.userAgent.search(d)){var h,k;h=(new Date).getTime();k=Math.floor(1E5*Math.random());b=b+"?t="+h+"&r="+k}b=["<head></head><body onload=\"var d = document;var s = d.createElement('script');d.getElementsByTagName('head')[0].appendChild(s).src","='"+b+"'\">"].join("");
g.open().write(b);g.close()})(b);return{getWindow:function(){return c.contentWindow}}};try{Qa()}catch(ge){__IntegralASDiagnosticCall("main",ge,l)}};try{(function(){var l=__IntegralASConfig.useFIF?__IASScope.parent:__IASScope;__IntegralASConfig.initialize(__IntegralASConfig,l,l.document)})()}catch(err$$10){__IntegralASDiagnosticCall("initialize",err$$10,__IntegralASConfig)};
