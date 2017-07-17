webpackJsonp([0],{

/***/ 64:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 64;

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 67;

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/providers/base.service.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);


var extractError = function (error) {
    // In a real world app, we might use a remote logging infrastructure
    var errMsg;
    if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Response */]) {
        var body = error.json() || '';
        var err = body.error || JSON.stringify(body);
        errMsg = error.status + " - " + (error.statusText || '') + " " + err;
    }
    else {
        errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return errMsg;
};
var BaseService = (function () {
    function BaseService() {
    }
    BaseService.prototype.handlePromiseError = function (error) {
        return Promise.reject(extractError(error));
    };
    BaseService.prototype.handleObservableError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(extractError(error));
    };
    return BaseService;
}());

//# sourceMappingURL=base.service.js.map
// CONCATENATED MODULE: ./src/providers/auth.service.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(25);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function (_super) {
    __extends(AuthService, _super);
    function AuthService(auth, http) {
        var _this = _super.call(this) || this;
        _this.auth = auth;
        _this.http = http;
        console.log('Hello Auth Provider');
        return _this;
    }
    AuthService.prototype.createAuthUser = function (user) {
        return this.auth.createUser(user)
            .catch(this.handlePromiseError);
    };
    AuthService.prototype.signinWithEmail = function (user) {
        return this.auth.login(user)
            .then(function (authState) {
            return authState != null;
        }).catch(this.handlePromiseError);
    };
    AuthService.prototype.logout = function () {
        return this.auth.logout();
    };
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.auth
                    .first()
                    .subscribe(function (authState) {
                    (authState) ? resolve(true) : reject(false);
                });
            });
        },
        enumerable: true,
        configurable: true
    });
    return AuthService;
}(BaseService));
AuthService = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */](),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2__["b" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], AuthService);

//# sourceMappingURL=auth.service.js.map
// CONCATENATED MODULE: ./src/pipes/capitalize.pipe.ts
/* harmony import */ var capitalize_pipe___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var capitalize_pipe___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value, onlyFirst) {
        if (onlyFirst)
            return value.charAt(0).toUpperCase() + value.substr(1);
        var words = value.split(' ');
        var output = '';
        words.forEach(function (value, index, words) {
            output += value.charAt(0).toUpperCase() + value.substr(1).toLowerCase() + ' ';
        });
        return output;
    };
    return CapitalizePipe;
}());
CapitalizePipe = capitalize_pipe___decorate([
    capitalize_pipe___WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */]({
        name: 'capitalize'
    }),
    capitalize_pipe___WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */]()
], CapitalizePipe);

//# sourceMappingURL=capitalize.pipe.js.map
// CONCATENATED MODULE: ./src/providers/chat.service.ts
/* harmony import */ var chat_service___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var chat_service___WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(25);
var chat_service___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var chat_service___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var chat_service___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatService = (function (_super) {
    chat_service___extends(ChatService, _super);
    function ChatService(af, http) {
        var _this = _super.call(this) || this;
        _this.af = af;
        _this.http = http;
        _this.setChats();
        return _this;
    }
    ChatService.prototype.setChats = function () {
        var _this = this;
        this.af.auth
            .subscribe(function (authState) {
            if (authState) {
                _this.chats = _this.af.database.list("/chats/" + authState.auth.uid, {
                    query: {
                        orderByChild: 'timestamp'
                    }
                }).map(function (chats) {
                    return chats.reverse();
                }).catch(_this.handleObservableError);
            }
        });
    };
    ChatService.prototype.create = function (chat, userId1, userId2) {
        return this.af.database.object("/chats/" + userId1 + "/" + userId2)
            .set(chat)
            .catch(this.handlePromiseError);
    };
    ChatService.prototype.getDeepChat = function (userId1, userId2) {
        return this.af.database.object("/chats/" + userId1 + "/" + userId2)
            .catch(this.handleObservableError);
    };
    ChatService.prototype.chatUpdatePhoto = function (chat, chatPhoto, recipientUserPhoto) {
        if (chatPhoto != recipientUserPhoto) {
            return chat.update({
                photo: recipientUserPhoto
            }).then(function () {
                return true;
            }).catch(this.handlePromiseError);
        }
        return Promise.resolve(false);
    };
    return ChatService;
}(BaseService));
ChatService = chat_service___decorate([
    chat_service___WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */](),
    chat_service___metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFire */],
        chat_service___WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ChatService);

//# sourceMappingURL=chat.service.js.map
// CONCATENATED MODULE: ./src/models/message.model.ts
var Message = (function () {
    function Message(userId, text, timestamp) {
        this.userId = userId;
        this.text = text;
        this.timestamp = timestamp;
    }
    return Message;
}());

//# sourceMappingURL=message.model.js.map
// CONCATENATED MODULE: ./src/providers/message.service.ts
/* harmony import */ var message_service___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var message_service___WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var message_service___WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var message_service___WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(message_service___WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var message_service___WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(25);
var message_service___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var message_service___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var message_service___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MessageService = (function (_super) {
    message_service___extends(MessageService, _super);
    function MessageService(af, http) {
        var _this = _super.call(this) || this;
        _this.af = af;
        _this.http = http;
        return _this;
    }
    MessageService.prototype.create = function (message, listMessages) {
        return listMessages.push(message)
            .catch(this.handlePromiseError);
    };
    MessageService.prototype.getMessages = function (userId1, userId2) {
        return this.af.database.list("/messages/" + userId1 + "-" + userId2, {
            query: {
                orderByChild: 'timestamp',
                limitToLast: 30
            }
        }).catch(this.handleObservableError);
    };
    return MessageService;
}(BaseService));
MessageService = message_service___decorate([
    message_service___WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */](),
    message_service___metadata("design:paramtypes", [message_service___WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFire */],
        message_service___WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], MessageService);

//# sourceMappingURL=message.service.js.map
// CONCATENATED MODULE: ./src/providers/user.service.ts
/* harmony import */ var user_service___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var user_service___WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(21);
/* harmony import */ var user_service___WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(31);
/* harmony import */ var user_service___WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(user_service___WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var user_service___WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(25);
var user_service___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user_service___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var user_service___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var UserService = (function (_super) {
    user_service___extends(UserService, _super);
    function UserService(af, firebaseApp, http) {
        var _this = _super.call(this) || this;
        _this.af = af;
        _this.firebaseApp = firebaseApp;
        _this.http = http;
        _this.listenAuthState();
        return _this;
    }
    UserService.prototype.setUsers = function (uidToExclude) {
        this.users = this.af.database.list("/users", {
            query: {
                orderByChild: 'name'
            }
        }).map(function (users) {
            return users.filter(function (user) { return user.$key !== uidToExclude; });
        });
    };
    UserService.prototype.listenAuthState = function () {
        var _this = this;
        this.af.auth
            .subscribe(function (authState) {
            if (authState) {
                console.log('Auth state alterado!');
                _this.currentUser = _this.af.database.object("/users/" + authState.auth.uid);
                _this.setUsers(authState.auth.uid);
            }
        });
    };
    UserService.prototype.create = function (user, uuid) {
        return this.af.database.object("/users/" + uuid)
            .set(user)
            .catch(this.handlePromiseError);
    };
    UserService.prototype.edit = function (user) {
        return this.currentUser
            .update(user)
            .catch(this.handlePromiseError);
    };
    UserService.prototype.userExist = function (username) {
        return this.af.database.list("/users", {
            query: {
                orderByChild: 'username',
                equalTo: username
            }
        }).map(function (users) {
            return users.length > 0;
        }).catch(this.handleObservableError);
    };
    UserService.prototype.getUserById = function (userId) {
        return this.af.database.object("/users/" + userId)
            .catch(this.handleObservableError);
    };
    UserService.prototype.uploadPhoto = function (file, userId) {
        return this.firebaseApp
            .storage()
            .ref()
            .child("/users/" + userId)
            .put(file);
    };
    return UserService;
}(BaseService));
UserService = user_service___decorate([
    user_service___WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */](),
    __param(1, user_service___WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */](user_service___WEBPACK_IMPORTED_MODULE_3_angularfire2__["f" /* FirebaseApp */])),
    user_service___metadata("design:paramtypes", [user_service___WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFire */], Object, user_service___WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], UserService);

//# sourceMappingURL=user.service.js.map
// CONCATENATED MODULE: ./src/pages/chat/chat.ts
/* harmony import */ var chat___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var chat___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var chat___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var chat_ChatPage = (function () {
    function ChatPage(authService, chatService, messageService, navCtrl, navParams, userService) {
        this.authService = authService;
        this.chatService = chatService;
        this.messageService = messageService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
    }
    ChatPage.prototype.ionViewCanEnter = function () {
        return this.authService.authenticated;
    };
    ChatPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.recipient = this.navParams.get('recipientUser');
        this.pageTitle = this.recipient.name;
        this.userService.currentUser
            .first()
            .subscribe(function (currentUser) {
            _this.sender = currentUser;
            _this.chat1 = _this.chatService.getDeepChat(_this.sender.$key, _this.recipient.$key);
            _this.chat2 = _this.chatService.getDeepChat(_this.recipient.$key, _this.sender.$key);
            if (_this.recipient.photo) {
                _this.chat1
                    .first()
                    .subscribe(function (chat) {
                    _this.chatService
                        .chatUpdatePhoto(_this.chat1, chat.photo, _this.recipient.photo);
                });
            }
            var doSubscription = function () {
                _this.messages
                    .subscribe(function (messages) {
                    _this.scrollToButtom();
                });
            };
            _this.messages = _this.messageService
                .getMessages(_this.sender.$key, _this.recipient.$key);
            _this.messages
                .first()
                .subscribe(function (messages) {
                if (messages.length === 0) {
                    _this.messages = _this.messageService
                        .getMessages(_this.recipient.$key, _this.sender.$key);
                    doSubscription();
                }
                else {
                    doSubscription();
                }
            });
        });
    };
    ChatPage.prototype.sendMessage = function (newMessage) {
        var _this = this;
        if (newMessage) {
            var currentTimestamp_1 = __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.database.ServerValue.TIMESTAMP;
            this.messageService.create(new Message(this.sender.$key, newMessage, currentTimestamp_1), this.messages).then(function () {
                _this.chat1
                    .update({
                    lastMessage: newMessage,
                    timestamp: currentTimestamp_1
                });
                _this.chat2
                    .update({
                    lastMessage: newMessage,
                    timestamp: currentTimestamp_1
                });
            });
        }
    };
    ChatPage.prototype.scrollToButtom = function (duration) {
        var _this = this;
        setTimeout(function () {
            if (_this.content) {
                _this.content.scrollToBottom(duration || 300);
            }
        }, 50);
    };
    return ChatPage;
}());
chat___decorate([
    chat___WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */](__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    chat___metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], chat_ChatPage.prototype, "content", void 0);
chat_ChatPage = chat___decorate([
    chat___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-chat',template:/*ion-inline-start:"c:\nodejs\apps\ionic2\chatIonic\src\pages\chat\chat.html"*/'<ion-header>\n\n  <custom-logged-header [title]="pageTitle" [user]="recipient"></custom-logged-header>\n  \n</ion-header>\n\n\n<ion-content padding>\n\n  <message-box *ngFor="let m of messages | async" [message]="m" [isFromSender]="(m.userId === sender.$key)"></message-box>\n  \n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n    <ion-item no-lines>\n      <ion-input type="text" (keyup.enter)="sendMessage(newMessage); newMessage=\'\'" placeholder="Mensagem..." [(ngModel)] = "newMessage"></ion-input>\n      <button ion-button item-right (click)="sendMessage(newMessage); newMessage=\'\'">\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-item>\n\n  </ion-toolbar>\n\n</ion-footer>\n'/*ion-inline-end:"c:\nodejs\apps\ionic2\chatIonic\src\pages\chat\chat.html"*/,
    }),
    chat___metadata("design:paramtypes", [AuthService,
        ChatService,
        MessageService,
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        UserService])
], chat_ChatPage);

//# sourceMappingURL=chat.js.map
// CONCATENATED MODULE: ./src/models/chat.model.ts
var Chat = (function () {
    function Chat(lastMessage, timeStamp, title, photo) {
        this.lastMessage = lastMessage;
        this.timeStamp = timeStamp;
        this.title = title;
        this.photo = photo;
    }
    return Chat;
}());

//# sourceMappingURL=chat.model.js.map
// CONCATENATED MODULE: ./src/pages/signup/signup.ts
/* harmony import */ var signup___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_first__);
var signup___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var signup___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var signup_Signup = (function () {
    function Signup(alertCtrl, authService, formBuilder, loadingCtrl, navCtrl, navParams, userService) {
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        var emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.signupForm = this.formBuilder.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(3)]],
            username: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(3)]],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(emailRegex)])],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)]],
        });
    }
    Signup.prototype.onSubmit = function () {
        var _this = this;
        var loading = this.showLoading();
        var formUser = this.signupForm.value;
        var username = formUser.username;
        this.userService.userExist(username)
            .first()
            .subscribe(function (userExist) {
            if (!userExist) {
                _this.authService.createAuthUser({
                    email: formUser.email,
                    password: formUser.password
                }).then(function (authState) {
                    //Se Usuário passou pela validação de login  
                    delete formUser.password; //apenas retira a senha do cadastro do form
                    var uuid = authState.auth.uid; // criando uma variável local
                    //Salva seus dados no BD
                    _this.userService.create(formUser, uuid)
                        .then(function () {
                        console.log('Usuário cadastrado!');
                        _this.navCtrl.setRoot(home_HomePage);
                        loading.dismiss();
                    }).catch(function (error) {
                        console.log(error);
                        loading.dismiss();
                        _this.showAlert(error);
                    });
                }).catch(function (error) {
                    console.log(error);
                    loading.dismiss();
                    _this.showAlert(error);
                });
            }
            else {
                _this.showAlert("O username " + username + " j\u00E1 est\u00E1 sendo usado em outra conta");
                loading.dismiss();
            }
        });
    };
    Signup.prototype.showLoading = function () {
        var loading = this.loadingCtrl.create({
            content: 'Por favor espere...'
        });
        loading.present();
        return loading;
    };
    Signup.prototype.showAlert = function (message) {
        this.alertCtrl.create({
            message: message,
            buttons: ['Ok']
        }).present();
    };
    return Signup;
}());
signup_Signup = signup___decorate([
    signup___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-signup',template:/*ion-inline-start:"c:\nodejs\apps\ionic2\chatIonic\src\pages\signup\signup.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Inscrever-se</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1 text-center>\n    <ion-icon class="auth-icon" name="person-add" color="primary"></ion-icon>\n  </h1>\n\n  <form [formGroup]="signupForm" (ngSubmit)="onSubmit(); $event.preventDefault()">\n\n    <ion-item>\n      <ion-icon name="person" item-left></ion-icon>\n      <ion-input type="text" placeholder="Nome" formControlName="name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="at" item-left></ion-icon>\n      <ion-input type="text" placeholder="Sobrenome" formControlName="username"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="mail" item-left></ion-icon>\n      <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="lock" item-left></ion-icon>\n      <ion-input type="password" placeholder="Senha" formControlName="password"></ion-input>\n    </ion-item>\n\n    <br>\n    <button ion-button full type="submit" [disabled]="signupForm.invalid">Criar conta</button>\n  \n  </form>\n\n\n</ion-content>'/*ion-inline-end:"c:\nodejs\apps\ionic2\chatIonic\src\pages\signup\signup.html"*/,
    }),
    signup___metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        AuthService,
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
        UserService])
], signup_Signup);

//# sourceMappingURL=signup.js.map
// CONCATENATED MODULE: ./src/pages/home/home.ts
/* harmony import */ var home___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var home___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
var home___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var home___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var home_HomePage = (function () {
    function HomePage(authService, chatService, menuCtrl, navCtrl, userService) {
        this.authService = authService;
        this.chatService = chatService;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.view = 'chats';
    }
    HomePage.prototype.ionViewCanEnter = function () {
        return this.authService.authenticated;
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.chats = this.chatService.chats;
        this.users = this.userService.users;
        this.menuCtrl.enable(true, 'user-menu');
    };
    HomePage.prototype.filterItems = function (event) {
        var searchTerm = event.target.value;
        this.chats = this.chatService.chats;
        this.users = this.userService.users;
        if (searchTerm) {
            switch (this.view) {
                case 'chats':
                    this.chats = this.chats
                        .map(function (chats) {
                        return chats.filter(function (chat) {
                            return (chat.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
                        });
                    });
                    break;
                case 'users':
                    this.users = this.users
                        .map(function (users) {
                        return users.filter(function (user) {
                            return (user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
                        });
                    });
                    break;
            }
        }
    };
    HomePage.prototype.onChatCreate = function (recipientUser) {
        var _this = this;
        this.userService.currentUser
            .first()
            .subscribe(function (currentUser) {
            _this.chatService.getDeepChat(currentUser.$key, recipientUser.$key) // /users/id1/id2 o chat contido entre esses dois
                .first()
                .subscribe(function (chat) {
                if (chat.hasOwnProperty('$value')) {
                    //variavel de data/hora exata da mensagem
                    var timeStamp = __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.database.ServerValue.TIMESTAMP;
                    var chat1 = new Chat('', timeStamp, recipientUser.name, '');
                    _this.chatService.create(chat1, currentUser.$key, recipientUser.$key);
                    var chat2 = new Chat('', timeStamp, currentUser.name, '');
                    _this.chatService.create(chat2, recipientUser.$key, currentUser.$key);
                }
            });
        });
        this.navCtrl.push(chat_ChatPage, {
            recipientUser: recipientUser
        });
    };
    HomePage.prototype.onChatOpen = function (chat) {
        var _this = this;
        var recipientUserId = chat.$key;
        this.userService.getUserById(recipientUserId)
            .first()
            .subscribe(function (user) {
            _this.navCtrl.push(chat_ChatPage, {
                recipientUser: user
            });
        });
    };
    HomePage.prototype.onSignup = function () {
        this.navCtrl.push(signup_Signup);
    };
    return HomePage;
}());
home_HomePage = home___decorate([
    home___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-home',template:/*ion-inline-start:"c:\nodejs\apps\ionic2\chatIonic\src\pages\home\home.html"*/'<ion-header>\n\n  <custom-logged-header [title]="view | capitalize:true"></custom-logged-header>\n\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="view">\n\n      <ion-segment-button value="chats">\n        Chats\n      </ion-segment-button>\n\n      <ion-segment-button value="users">\n        Usuários\n      </ion-segment-button>\n\n    </ion-segment>\n  </ion-toolbar>\n\n  <ion-toolbar>\n    <ion-searchbar (ionInput)="filterItems($event)"></ion-searchbar>\n\n  </ion-toolbar>\n\n\n</ion-header>\n\n<ion-content padding>\n\n  <div [ngSwitch]="view">\n\n    <ion-list *ngSwitchCase="\'chats\'" no-lines>\n     <button ion-item *ngFor="let chat of chats | async" (click)="onChatOpen(chat)">\n       \n       <ion-avatar item-left>\n        <img [src]="chat.photo || \'assets/images/no-photo.jpg\'">   \n       </ion-avatar>\n       \n       <h2>{{ chat.title }}</h2>\n       <p *ngIf="chat.lastMessage; else customMessage">{{ chat.timeStamp | date:\'dd/MM/y H:mm\'}} - {{ chat.lastMessage }}</p>\n       \n        <!-- Funcionando -->\n       <ng-template #customMessage>\n        <p>Sem mensagens</p>  \n       </ng-template> \n       <!-- fim -->\n     </button>\n    </ion-list>\n\n    \n    <!-- Funcionando -->\n    <ion-list *ngSwitchCase="\'users\'" no-lines>\n      <button ion-item *ngFor="let user of users | async" (click)="onChatCreate(user)">\n      \n      <ion-avatar item-left>\n        <img [src]="user.photo || \'assets/images/no-photo.jpg\'">   \n      </ion-avatar>\n      \n      {{ user.name }}\n\n      </button>\n    </ion-list>\n    <!-- fim -->\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"c:\nodejs\apps\ionic2\chatIonic\src\pages\home\home.html"*/
    }),
    home___metadata("design:paramtypes", [AuthService,
        ChatService,
        home___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        home___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        UserService])
], home_HomePage);

//# sourceMappingURL=home.js.map
// CONCATENATED MODULE: ./src/pages/signin/signin.ts
/* harmony import */ var signin___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var signin___WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(11);
/* harmony import */ var signin___WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
var signin___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var signin___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var signin_SigninPage = (function () {
    function SigninPage(alertCtrl, loadingCtrl, authService, formBuilder, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.signinForm = this.formBuilder.group({
            email: ['', signin___WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([signin___WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, signin___WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(emailRegex)])],
            password: ['', [signin___WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, signin___WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(6)]],
        });
    }
    SigninPage.prototype.onSubmit = function () {
        var _this = this;
        var loading = this.showLoading();
        this.authService.signinWithEmail(this.signinForm.value)
            .then(function (isLogged) {
            if (isLogged) {
                _this.navCtrl.setRoot(home_HomePage);
                loading.dismiss();
            }
        }).catch(function (error) {
            console.log(error);
            loading.dismiss();
            _this.showAlert(error);
        });
    };
    SigninPage.prototype.onSignup = function () {
        this.navCtrl.push(signup_Signup);
    };
    SigninPage.prototype.showLoading = function () {
        var loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();
        return loading;
    };
    SigninPage.prototype.showAlert = function (message) {
        this.alertCtrl.create({
            message: message,
            buttons: ['Ok']
        }).present();
    };
    return SigninPage;
}());
signin_SigninPage = signin___decorate([
    signin___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-signin',template:/*ion-inline-start:"c:\nodejs\apps\ionic2\chatIonic\src\pages\signin\signin.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Entrar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <h1 text-center>\n    <ion-icon class="auth-icon" name="md-chatbubbles" color="primary"></ion-icon>\n    \n  </h1>\n  <p class="by">Developed by @matheusalx</p>\n\n  <form [formGroup]="signinForm" (ngSubmit)="onSubmit(); $event.preventDefault()">\n\n    <ion-item>\n      <ion-icon name="mail" item-left></ion-icon>\n      <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="lock" item-left></ion-icon>\n      <ion-input type="password" placeholder="Senha" formControlName="password"></ion-input>\n    </ion-item>\n\n    <br>\n    <button ion-button full type="submit" [disabled]="signinForm.invalid">Entrar</button>\n\n  </form>\n\n  <button ion-button full clear text-center (click)="onSignup()">Cadastre-se</button>\n\n\n\n</ion-content>'/*ion-inline-end:"c:\nodejs\apps\ionic2\chatIonic\src\pages\signin\signin.html"*/,
    }),
    signin___metadata("design:paramtypes", [signin___WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        signin___WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
        AuthService,
        signin___WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        signin___WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        signin___WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]])
], signin_SigninPage);

//# sourceMappingURL=signin.js.map
// CONCATENATED MODULE: ./src/components/base.component.ts

var base_component_BaseComponent = (function () {
    function BaseComponent(alertCtrl, authService, app, menuCtrl) {
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.app = app;
        this.menuCtrl = menuCtrl;
    }
    BaseComponent.prototype.ngOnInit = function () {
        this.navCtrl = this.app.getActiveNav();
    };
    BaseComponent.prototype.onLogout = function () {
        var _this = this;
        this.alertCtrl.create({
            message: 'Você deseja sair?',
            buttons: [
                {
                    text: 'Sim',
                    handler: function () {
                        _this.authService.logout()
                            .then(function () {
                            _this.navCtrl.setRoot(signin_SigninPage);
                            _this.menuCtrl.enable(false, 'user-menu');
                        });
                    }
                },
                {
                    text: 'Não'
                }
            ]
        }).present();
    };
    return BaseComponent;
}());

//# sourceMappingURL=base.component.js.map
// CONCATENATED MODULE: ./src/models/user.model.ts
var User = (function () {
    function User(name, username, email, photo) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.photo = photo;
    }
    return User;
}());

//# sourceMappingURL=user.model.js.map
// CONCATENATED MODULE: ./src/components/custom-logged-header/custom-logged-header.component.ts
/* harmony import */ var custom_logged_header_component___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var custom_logged_header_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var custom_logged_header_component___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var custom_logged_header_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var custom_logged_header_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomLoggedHeaderComponent = (function (_super) {
    custom_logged_header_component___extends(CustomLoggedHeaderComponent, _super);
    function CustomLoggedHeaderComponent(alertCtrl, authService, app, menuCtrl) {
        var _this = _super.call(this, alertCtrl, authService, app, menuCtrl) || this;
        _this.alertCtrl = alertCtrl;
        _this.authService = authService;
        _this.app = app;
        _this.menuCtrl = menuCtrl;
        return _this;
    }
    return CustomLoggedHeaderComponent;
}(base_component_BaseComponent));
custom_logged_header_component___decorate([
    custom_logged_header_component___WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */](),
    custom_logged_header_component___metadata("design:type", String)
], CustomLoggedHeaderComponent.prototype, "title", void 0);
custom_logged_header_component___decorate([
    custom_logged_header_component___WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */](),
    custom_logged_header_component___metadata("design:type", User)
], CustomLoggedHeaderComponent.prototype, "user", void 0);
CustomLoggedHeaderComponent = custom_logged_header_component___decorate([
    custom_logged_header_component___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'custom-logged-header',template:/*ion-inline-start:"c:\nodejs\apps\ionic2\chatIonic\src\components\custom-logged-header\custom-logged-header.component.html"*/'<ion-navbar>\n\n  <button ion-button menuToggle="user-menu">\n    <ion-icon name="menu"></ion-icon>\n  </button>\n\n  <ion-title>\n\n    <ion-item detail-none no-lines color="transparent" *ngIf="user; else titleTemplate">\n      <ion-avatar item-left>\n        <img [src]="user.photo || \'assets/images/no-photo.jpg\'">\n      </ion-avatar>\n      {{ title }}\n    </ion-item>\n\n    <ng-template #titleTemplate>\n      {{ title }}\n    </ng-template>\n\n  </ion-title>\n\n  <ion-buttons end>\n    <button ion-button icon-only (click)="onLogout()">\n      <ion-icon name="exit"></ion-icon>\n    </button>\n  </ion-buttons>    \n\n</ion-navbar>'/*ion-inline-end:"c:\nodejs\apps\ionic2\chatIonic\src\components\custom-logged-header\custom-logged-header.component.html"*/
    }),
    custom_logged_header_component___metadata("design:paramtypes", [custom_logged_header_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        AuthService,
        custom_logged_header_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        custom_logged_header_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
], CustomLoggedHeaderComponent);

//# sourceMappingURL=custom-logged-header.component.js.map
// CONCATENATED MODULE: ./src/components/message-box/message-box.component.ts
/* harmony import */ var message_box_component___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var message_box_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var message_box_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageBoxComponent = (function () {
    function MessageBoxComponent() {
    }
    return MessageBoxComponent;
}());
message_box_component___decorate([
    message_box_component___WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */](),
    message_box_component___metadata("design:type", Message)
], MessageBoxComponent.prototype, "message", void 0);
message_box_component___decorate([
    message_box_component___WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */](),
    message_box_component___metadata("design:type", Boolean)
], MessageBoxComponent.prototype, "isFromSender", void 0);
MessageBoxComponent = message_box_component___decorate([
    message_box_component___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'message-box',template:/*ion-inline-start:"c:\nodejs\apps\ionic2\chatIonic\src\components\message-box\message-box.component.html"*/'\n<div class="text" [ngClass]="{\'sender-background\': isFromSender}">\n  <p>{{ message.text }}</p>\n  <p class="timestamp">{{ message.timestamp | date:\'dd/MM/y H:mm\' }}</p>\n</div>\n'/*ion-inline-end:"c:\nodejs\apps\ionic2\chatIonic\src\components\message-box\message-box.component.html"*/,
        host: {
            '[style.justify-content]': '((!isFromSender) ? "flex-start" : "flex-end")',
            '[style.text-align]': '((!isFromSender) ? "left" : "right")'
        }
    }),
    message_box_component___metadata("design:paramtypes", [])
], MessageBoxComponent);

//# sourceMappingURL=message-box.component.js.map
// CONCATENATED MODULE: ./src/app/app.component.ts
/* harmony import */ var app_component___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var app_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(72);
var app_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var app_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var app_component_MyApp = (function () {
    function MyApp(authService, platform, statusBar, splashScreen, userService) {
        var _this = this;
        this.rootPage = signin_SigninPage;
        authService
            .auth
            .subscribe(function (authState) {
            if (authState) {
                userService
                    .currentUser
                    .subscribe(function (user) {
                    _this.currentUser = user;
                });
            }
        });
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
app_component_MyApp = app_component___decorate([
    app_component___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({template:/*ion-inline-start:"c:\nodejs\apps\ionic2\chatIonic\src\app\app.html"*/'<ion-menu [content]="content" enabled="false" id="user-menu" > <!--persistent="true"-->\n    <user-menu [user]="currentUser"></user-menu>\n\n</ion-menu>\n\n<ion-nav #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"c:\nodejs\apps\ionic2\chatIonic\src\app\app.html"*/
    }),
    app_component___metadata("design:paramtypes", [AuthService,
        app_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        UserService])
], app_component_MyApp);

//# sourceMappingURL=app.component.js.map
// CONCATENATED MODULE: ./src/components/progress-bar/progress-bar.component.ts
/* harmony import */ var progress_bar_component___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var progress_bar_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var progress_bar_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
    }
    return ProgressBarComponent;
}());
progress_bar_component___decorate([
    progress_bar_component___WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */](),
    progress_bar_component___metadata("design:type", Number)
], ProgressBarComponent.prototype, "progress", void 0);
ProgressBarComponent = progress_bar_component___decorate([
    progress_bar_component___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'progress-bar',template:/*ion-inline-start:"c:\nodejs\apps\ionic2\chatIonic\src\components\progress-bar\progress-bar.component.html"*/'<div class="progress-outer">\n  <div class="progress-inner" [style.width]="progress + \'%\'">\n    {{ progress }}%\n  </div>\n</div>'/*ion-inline-end:"c:\nodejs\apps\ionic2\chatIonic\src\components\progress-bar\progress-bar.component.html"*/
    }),
    progress_bar_component___metadata("design:paramtypes", [])
], ProgressBarComponent);

//# sourceMappingURL=progress-bar.component.js.map
// CONCATENATED MODULE: ./src/components/user-info/user-info.component.ts
/* harmony import */ var user_info_component___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var user_info_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var user_info_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserInfoComponent = (function () {
    function UserInfoComponent() {
        this.isMenu = false;
    }
    return UserInfoComponent;
}());
user_info_component___decorate([
    user_info_component___WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */](),
    user_info_component___metadata("design:type", User)
], UserInfoComponent.prototype, "user", void 0);
user_info_component___decorate([
    user_info_component___WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */](),
    user_info_component___metadata("design:type", Boolean)
], UserInfoComponent.prototype, "isMenu", void 0);
UserInfoComponent = user_info_component___decorate([
    user_info_component___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'user-info',template:/*ion-inline-start:"c:\nodejs\apps\ionic2\chatIonic\src\components\user-info\user-info.component.html"*/'<div *ngIf="user">\n  <ion-avatar [ngClass]= "{\'custom-background\': isMenu}">\n    <img class="round" [src]="user.photo || \'assets/images/no-photo.jpg\'">\n  </ion-avatar>\n  <h2 text-center>{{ user.name }}</h2>\n  <p text-center>@{{ user.username }} </p>\n</div>'/*ion-inline-end:"c:\nodejs\apps\ionic2\chatIonic\src\components\user-info\user-info.component.html"*/
    }),
    user_info_component___metadata("design:paramtypes", [])
], UserInfoComponent);

//# sourceMappingURL=user-info.component.js.map
// CONCATENATED MODULE: ./src/pages/user-profile/user-profile.ts
/* harmony import */ var user_profile___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var user_profile___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var user_profile___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var user_profile___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserProfilePage = (function () {
    function UserProfilePage(authService, navCtrl, navParams, userService) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.canEdit = false;
    }
    UserProfilePage.prototype.ionViewCanEnter = function () {
        return this.authService.authenticated;
    };
    UserProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userService.currentUser
            .subscribe(function (user) {
            _this.currentUser = user;
        });
    };
    UserProfilePage.prototype.onSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        if (this.filePhoto) {
            var uploadTask_1 = this.userService.uploadPhoto(this.filePhoto, this.currentUser.$key);
            uploadTask_1.on('state_changed', function (snapshot) {
                _this.uploadProgress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            }, function (error) {
                //catch error (personalizar mensagem de error pro usuario)
            }, function () {
                _this.editUser(uploadTask_1.snapshot.downloadURL);
            });
        }
        else {
            this.editUser();
        }
    };
    UserProfilePage.prototype.onPhoto = function (event) {
        this.filePhoto = event.target.files[0];
    };
    UserProfilePage.prototype.editUser = function (photoUrl) {
        var _this = this;
        this.userService
            .edit({
            name: this.currentUser.name,
            username: this.currentUser.username,
            photo: photoUrl || this.currentUser.photo || ''
        }).then(function () {
            _this.canEdit = false;
            _this.filePhoto = undefined;
            _this.uploadProgress = 0;
        });
    };
    return UserProfilePage;
}());
UserProfilePage = user_profile___decorate([
    user_profile___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-user-profile',template:/*ion-inline-start:"c:\nodejs\apps\ionic2\chatIonic\src\pages\user-profile\user-profile.html"*/'<ion-header>\n\n <custom-logged-header [title]="\'Perfil de usuário\' | capitalize:true"></custom-logged-header>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <user-info [user]="currentUser"></user-info>\n\n  <button ion-button block (click)="canEdit = !canEdit">Editar</button>\n  \n  <form (ngSubmit)="onSubmit($event)" *ngIf="canEdit" #profileForm="ngForm">\n\n    <ion-item>\n      <ion-icon name="person" item-left></ion-icon>\n      <ion-input \n        type="text" \n        placeholder="Nome" \n        name="name" \n        [(ngModel)]="currentUser.name"\n        required\n        minlenght="3">\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="at" item-left></ion-icon>\n      <ion-input \n        type="text" \n        placeholder="Nome de usuário" \n        name="username" \n        [(ngModel)]="currentUser.username"\n        required\n        minlenght="3">\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n      \n      <ion-icon name="image" item-left></ion-icon>\n      <input type="file" accept="image/*" (change)="onPhoto($event)">\n      \n    </ion-item>\n\n    <progress-bar *ngIf= "uploadProgress" [progress]="uploadProgress"></progress-bar>\n    \n    <br>\n    <button ion-button block type="submit" [disabled]="profileForm.form.invalid">Salvar</button>\n  \n  </form>\n\n</ion-content>\n'/*ion-inline-end:"c:\nodejs\apps\ionic2\chatIonic\src\pages\user-profile\user-profile.html"*/,
    }),
    user_profile___metadata("design:paramtypes", [AuthService,
        user_profile___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        user_profile___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        UserService])
], UserProfilePage);

//# sourceMappingURL=user-profile.js.map
// CONCATENATED MODULE: ./src/components/user-menu/user-menu.component.ts
/* harmony import */ var user_menu_component___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var user_menu_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var user_menu_component___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user_menu_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var user_menu_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var user_menu_component_UserMenuComponent = (function (_super) {
    user_menu_component___extends(UserMenuComponent, _super);
    function UserMenuComponent(alertCtrl, authService, app, menuCtrl) {
        var _this = _super.call(this, alertCtrl, authService, app, menuCtrl) || this;
        _this.alertCtrl = alertCtrl;
        _this.authService = authService;
        _this.app = app;
        _this.menuCtrl = menuCtrl;
        return _this;
    }
    UserMenuComponent.prototype.onProfile = function () {
        this.navCtrl.push(UserProfilePage);
    };
    return UserMenuComponent;
}(base_component_BaseComponent));
user_menu_component___decorate([
    user_menu_component___WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */]('user'),
    user_menu_component___metadata("design:type", User)
], user_menu_component_UserMenuComponent.prototype, "currentUser", void 0);
user_menu_component_UserMenuComponent = user_menu_component___decorate([
    user_menu_component___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'user-menu',template:/*ion-inline-start:"c:\nodejs\apps\ionic2\chatIonic\src\components\user-menu\user-menu.component.html"*/'<ion-content>\n\n  <user-info [user]="currentUser" [isMenu]="true"></user-info>\n\n  <ion-list no-lines>\n    <button ion-item icon-right detail-none menuClose="user-menu" (click)="onProfile()">\n      Perfil\n      <ion-icon name="person" item-right></ion-icon>\n    </button>\n    <button ion-item icon-right detail-none menuClose="user-menu" (click)="onLogout()">\n      Sair\n      <ion-icon name="log-out" item-right></ion-icon>\n    </button>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"c:\nodejs\apps\ionic2\chatIonic\src\components\user-menu\user-menu.component.html"*/
    }),
    user_menu_component___metadata("design:paramtypes", [user_menu_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        AuthService,
        user_menu_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        user_menu_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
], user_menu_component_UserMenuComponent);

//# sourceMappingURL=user-menu.component.js.map
// CONCATENATED MODULE: ./src/app/app.module.ts
/* harmony import */ var app_module___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(25);
var app_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var firebaseAppConfig = {
    apiKey: "AIzaSyCwmNrCTDBXO0m1dxj930mB62nVTBLI1PA",
    authDomain: "chationic-8a0ab.firebaseapp.com",
    databaseURL: "https://chationic-8a0ab.firebaseio.com",
    storageBucket: "chationic-8a0ab.appspot.com",
    messagingSenderId: "203675352213"
};
var firebaseAuthConfig = {
    provider: __WEBPACK_IMPORTED_MODULE_6_angularfire2__["e" /* AuthProviders */].Custom,
    method: __WEBPACK_IMPORTED_MODULE_6_angularfire2__["d" /* AuthMethods */].Password
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = app_module___decorate([
    app_module___WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */]({
        declarations: [
            CapitalizePipe,
            chat_ChatPage,
            CustomLoggedHeaderComponent,
            home_HomePage,
            MessageBoxComponent,
            app_component_MyApp,
            ProgressBarComponent,
            signin_SigninPage,
            signup_Signup,
            UserInfoComponent,
            user_menu_component_UserMenuComponent,
            UserProfilePage
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["c" /* AngularFireModule */].initializeApp(firebaseAppConfig, firebaseAuthConfig),
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(app_component_MyApp),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            chat_ChatPage,
            home_HomePage,
            app_component_MyApp,
            signin_SigninPage,
            signup_Signup,
            UserProfilePage
        ],
        providers: [
            AuthService,
            ChatService,
            MessageService,
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            UserService,
            { provide: app_module___WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map
// CONCATENATED MODULE: ./src/app/main.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(95);


__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */]().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map

/***/ })

},[94]);
//# sourceMappingURL=main.js.map